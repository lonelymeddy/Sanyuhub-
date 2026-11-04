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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Role');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Authorization check: Must have admin authorization header or role
  const authHeader = req.headers['authorization'] || req.headers['x-admin-role'];
  // Allow 'admin' or 'Bearer admin-token' or role 'admin'
  const isAdmin = authHeader === 'admin' ||
                  authHeader === 'Bearer admin-token' ||
                  authHeader === 'Bearer sanyuhub-admin-key' ||
                  req.headers['x-admin-role'] === 'admin';

  // For administrative operations, enforce authorization
  if (!isAdmin) {
    return res.status(403).json({
      success: false,
      error: 'Access denied. Administrator privileges required to access this endpoint.'
    });
  }

  // Parse body if needed
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

  try {
    if (req.method === 'GET') {
      const users = db.getUsers();
      return res.status(200).json({
        success: true,
        users
      });
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const { action, userId, role, validationStatus, verificationStatus } = body;

      if (!userId) {
        return res.status(400).json({
          success: false,
          error: 'User ID is required.'
        });
      }

      const existingUser = db.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          error: 'User not found in system records.'
        });
      }

      // Handle specific action or direct updates
      if (action === 'validate') {
        const status = validationStatus || 'validated';
        if (!['pending', 'validated', 'rejected'].includes(status)) {
          return res.status(400).json({
            success: false,
            error: 'Invalid validation status. Must be pending, validated, or rejected.'
          });
        }
        const updated = db.updateUser(userId, { validationStatus: status });
        return res.status(200).json({
          success: true,
          message: status === 'validated' ? 'Account validation approved successfully.' : 'Account validation rejected.',
          user: updated
        });
      }

      if (action === 'verify') {
        const vStatus = verificationStatus || 'verified';
        if (!['verified', 'unverified'].includes(vStatus)) {
          return res.status(400).json({
            success: false,
            error: 'Invalid verification status. Must be verified or unverified.'
          });
        }
        const updated = db.updateUser(userId, { verificationStatus: vStatus });
        return res.status(200).json({
          success: true,
          message: vStatus === 'verified' ? 'Account verified successfully.' : 'Verification revoked successfully.',
          user: updated
        });
      }

      if (action === 'promote') {
        const SUPPORTED_ROLES = ['user', 'editor', 'admin'];
        if (!role || !SUPPORTED_ROLES.includes(role)) {
          return res.status(400).json({
            success: false,
            error: `Invalid role specified. Supported roles are: ${SUPPORTED_ROLES.join(', ')}.`
          });
        }
        const updated = db.updateUser(userId, { role });
        return res.status(200).json({
          success: true,
          message: `User promoted to ${role} role successfully.`,
          user: updated
        });
      }

      // Generic update if fields provided
      const updates = {};
      if (role && ['user', 'editor', 'admin'].includes(role)) updates.role = role;
      if (validationStatus && ['pending', 'validated', 'rejected'].includes(validationStatus)) updates.validationStatus = validationStatus;
      if (verificationStatus && ['verified', 'unverified'].includes(verificationStatus)) updates.verificationStatus = verificationStatus;

      if (Object.keys(updates).length === 0) {
        return res.status(400).json({
          success: false,
          error: 'No valid action or update fields provided.'
        });
      }

      const updated = db.updateUser(userId, updates);
      return res.status(200).json({
        success: true,
        message: 'User account updated successfully.',
        user: updated
      });
    }

    if (req.method === 'DELETE') {
      const userId = body.userId || (req.query && req.query.userId);

      if (!userId) {
        return res.status(400).json({
          success: false,
          error: 'User ID is required for deletion.'
        });
      }

      const existingUser = db.getUserById(userId);
      if (!existingUser) {
        return res.status(404).json({
          success: false,
          error: 'User account does not exist or has already been removed.'
        });
      }

      const success = db.deleteUser(userId);
      if (success) {
        return res.status(200).json({
          success: true,
          message: `Account for ${existingUser.name} (${existingUser.email}) permanently deleted.`
        });
      } else {
        return res.status(500).json({
          success: false,
          error: 'Failed to delete user account.'
        });
      }
    }

    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed.'
    });
  } catch (err) {
    console.error('Admin users endpoint error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing admin request.'
    });
  }
};
