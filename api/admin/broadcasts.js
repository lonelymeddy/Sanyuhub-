const db = require('../db');

module.exports = async function handler(req, res) {
  // Ensure helper methods status() and json() exist on res
  if (typeof res.status !== 'function') {
    res.status = function(code) {
      res.statusCode = code;
      return res;
    };
  }
  if (typeof res.json !== 'function') {
    res.json = function(data) {
      if (!res.headersSent) {
        res.setHeader('Content-Type', 'application/json');
      }
      res.end(JSON.stringify(data));
      return res;
    };
  }

  // CORS & Preflight support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Role');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Authorization check: Must have admin authorization header or role
  const authHeader = req.headers['authorization'] || req.headers['x-admin-role'];
  const isAdmin = authHeader === 'admin' ||
                  authHeader === 'Bearer admin-token' ||
                  authHeader === 'Bearer sanyuhub-admin-key' ||
                  req.headers['x-admin-role'] === 'admin';

  if (!isAdmin) {
    return res.status(403).json({
      success: false,
      error: 'Access denied. Administrator privileges required to manage broadcasts.'
    });
  }

  try {
    if (req.method === 'GET') {
      const broadcasts = db.getBroadcasts();
      return res.status(200).json({
        success: true,
        broadcasts
      });
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          return res.status(400).json({
            success: false,
            error: 'Invalid JSON payload in request body.'
          });
        }
      }
      body = body || {};

      const { title, message, recipientGroup } = body;

      const trimmedTitle = typeof title === 'string' ? title.trim() : '';
      const trimmedMessage = typeof message === 'string' ? message.trim() : '';

      if (!trimmedTitle || trimmedTitle.length < 3) {
        return res.status(400).json({
          success: false,
          error: 'Broadcast title is required and must be at least 3 characters long.'
        });
      }

      if (!trimmedMessage || trimmedMessage.length < 5) {
        return res.status(400).json({
          success: false,
          error: 'Broadcast message is required and must be at least 5 characters long.'
        });
      }

      const VALID_GROUPS = ['all', 'editors', 'verified', 'unverified', 'pending'];
      const targetGroup = (recipientGroup && VALID_GROUPS.includes(recipientGroup)) ? recipientGroup : 'all';

      // Duplicate prevention: check if identical broadcast was sent in the last 10 seconds
      const recentBroadcasts = db.getBroadcasts();
      const tenSecondsAgo = Date.now() - 10000;
      const isDuplicate = recentBroadcasts.some(b =>
        b.title === trimmedTitle &&
        b.message === trimmedMessage &&
        new Date(b.sentAt).getTime() > tenSecondsAgo
      );

      if (isDuplicate) {
        return res.status(429).json({
          success: false,
          error: 'Duplicate broadcast detected. Please wait a moment before sending the same announcement.'
        });
      }

      const created = db.createBroadcast({
        title: trimmedTitle,
        message: trimmedMessage,
        recipientGroup: targetGroup
      });

      return res.status(201).json({
        success: true,
        message: `Broadcast announcement dispatched to ${created.recipientsCount} recipient(s).`,
        broadcast: created
      });
    }

    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed.'
    });
  } catch (err) {
    console.error('Admin broadcasts handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while processing broadcast announcement.'
    });
  }
};
