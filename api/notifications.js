const db = require('./db');

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-User-Id');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed.'
    });
  }

  try {
    const userId = (req.query && req.query.userId) || req.headers['x-user-id'] || 'usr_001';
    const notifications = db.getNotificationsForUser(userId);

    return res.status(200).json({
      success: true,
      userId,
      count: notifications.length,
      notifications
    });
  } catch (err) {
    console.error('Notifications handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve notifications.'
    });
  }
};
