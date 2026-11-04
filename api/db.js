const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', '.data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const INITIAL_DATA = {
  users: [
    {
      id: 'usr_001',
      name: 'Amara Okonkwo',
      email: 'amara.okonkwo@sanyuhub.com',
      role: 'admin',
      validationStatus: 'validated', // pending, validated, rejected
      verificationStatus: 'verified', // verified, unverified
      suspended: false,
      createdAt: '2026-01-15T09:20:00Z',
      avatar: 'AO'
    },
    {
      id: 'usr_002',
      name: 'Brian Katusiime',
      email: 'brian.k@sanyuhub.com',
      role: 'editor',
      validationStatus: 'validated',
      verificationStatus: 'verified',
      suspended: false,
      createdAt: '2026-02-01T14:45:00Z',
      avatar: 'BK'
    },
    {
      id: 'usr_003',
      name: 'Chloe Namubiru',
      email: 'chloe.n@outlook.com',
      role: 'user',
      validationStatus: 'pending',
      verificationStatus: 'unverified',
      suspended: false,
      createdAt: '2026-03-10T11:15:00Z',
      avatar: 'CN'
    },
    {
      id: 'usr_004',
      name: 'David Kasule',
      email: 'david.kasule@gmail.com',
      role: 'user',
      validationStatus: 'validated',
      verificationStatus: 'unverified',
      suspended: false,
      createdAt: '2026-03-18T16:30:00Z',
      avatar: 'DK'
    },
    {
      id: 'usr_005',
      name: 'Elena Rostova',
      email: 'elena.rostova@techmail.org',
      role: 'user',
      validationStatus: 'rejected',
      verificationStatus: 'unverified',
      suspended: true,
      createdAt: '2026-03-22T08:00:00Z',
      avatar: 'ER'
    },
    {
      id: 'usr_006',
      name: 'Farouk Mubiru',
      email: 'farouk.m@sanyuhub.com',
      role: 'editor',
      validationStatus: 'validated',
      verificationStatus: 'unverified',
      suspended: false,
      createdAt: '2026-04-02T19:10:00Z',
      avatar: 'FM'
    }
  ],
  broadcasts: [
    {
      id: 'bc_001',
      title: 'Welcome to sanyuhub 2026',
      message: 'Experience our high-performance web client across all mobile, TV, and desktop devices without downloading native apps.',
      recipientGroup: 'all',
      sentAt: '2026-04-01T10:00:00Z',
      deliveryStatus: 'delivered',
      recipientsCount: 6
    }
  ],
  notifications: [
    {
      id: 'notif_001',
      userId: 'usr_001',
      broadcastId: 'bc_001',
      title: 'Welcome to sanyuhub 2026',
      message: 'Experience our high-performance web client across all mobile, TV, and desktop devices without downloading native apps.',
      read: true,
      timestamp: '2026-04-01T10:00:00Z'
    },
    {
      id: 'notif_002',
      userId: 'usr_002',
      broadcastId: 'bc_001',
      title: 'Welcome to sanyuhub 2026',
      message: 'Experience our high-performance web client across all mobile, TV, and desktop devices without downloading native apps.',
      read: false,
      timestamp: '2026-04-01T10:00:00Z'
    }
  ],
  chartCache: {}
};

let memoryStore = null;

function ensureDataDir() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (e) {
    // Read-only filesystem fallback
  }
}

function loadData() {
  if (memoryStore) {
    return memoryStore;
  }
  ensureDataDir();
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf8');
      memoryStore = JSON.parse(raw);
      return memoryStore;
    }
  } catch (e) {
    console.warn('Could not read DB file, initializing in-memory store:', e.message);
  }

  // Deep clone initial data
  memoryStore = JSON.parse(JSON.stringify(INITIAL_DATA));
  saveData(memoryStore);
  return memoryStore;
}

function saveData(data) {
  memoryStore = data;
  try {
    ensureDataDir();
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.warn('Could not persist to file, staying in memory:', e.message);
  }
}

// User operations
function getUsers() {
  const db = loadData();
  return db.users;
}

function getUserById(id) {
  const db = loadData();
  return db.users.find(u => u.id === id) || null;
}

function updateUser(id, updates) {
  const db = loadData();
  const index = db.users.findIndex(u => u.id === id);
  if (index === -1) return null;

  const allowedFields = ['name', 'role', 'validationStatus', 'verificationStatus', 'suspended'];
  for (const key of Object.keys(updates)) {
    if (allowedFields.includes(key)) {
      db.users[index][key] = updates[key];
    }
  }
  saveData(db);
  return db.users[index];
}

function deleteUser(id) {
  const db = loadData();
  const index = db.users.findIndex(u => u.id === id);
  if (index === -1) return false;

  const deletedUser = db.users.splice(index, 1)[0];
  // Remove related notifications for this user
  db.notifications = db.notifications.filter(n => n.userId !== id);
  saveData(db);
  return true;
}

// Broadcasts operations
function getBroadcasts() {
  const db = loadData();
  return db.broadcasts;
}

function createBroadcast({ title, message, recipientGroup }) {
  const db = loadData();
  const broadcastId = 'bc_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6);
  const now = new Date().toISOString();

  // Find recipients based on group
  let targetUsers = [];
  if (recipientGroup === 'all') {
    targetUsers = db.users.filter(u => !u.suspended);
  } else if (recipientGroup === 'verified') {
    targetUsers = db.users.filter(u => u.verificationStatus === 'verified' && !u.suspended);
  } else if (recipientGroup === 'unverified') {
    targetUsers = db.users.filter(u => u.verificationStatus === 'unverified' && !u.suspended);
  } else if (recipientGroup === 'pending') {
    targetUsers = db.users.filter(u => u.validationStatus === 'pending' && !u.suspended);
  } else if (recipientGroup === 'editors' || recipientGroup === 'editor') {
    targetUsers = db.users.filter(u => (u.role === 'editor' || u.role === 'admin') && !u.suspended);
  } else if (recipientGroup === 'admins' || recipientGroup === 'admin') {
    targetUsers = db.users.filter(u => u.role === 'admin' && !u.suspended);
  } else {
    // Default to all active users
    targetUsers = db.users.filter(u => !u.suspended);
  }

  const newBroadcast = {
    id: broadcastId,
    title,
    message,
    recipientGroup,
    sentAt: now,
    deliveryStatus: 'delivered',
    recipientsCount: targetUsers.length
  };

  db.broadcasts.unshift(newBroadcast);

  // Deliver to notification inboxes
  targetUsers.forEach(u => {
    db.notifications.unshift({
      id: 'notif_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6),
      userId: u.id,
      broadcastId: broadcastId,
      title,
      message,
      read: false,
      timestamp: now
    });
  });

  saveData(db);
  return newBroadcast;
}

function getNotificationsForUser(userId) {
  const db = loadData();
  return db.notifications.filter(n => n.userId === userId);
}

// Chart cache operations
function getChartCache(key) {
  const db = loadData();
  const entry = db.chartCache[key];
  if (!entry) return null;
  // Expire after 10 minutes
  if (Date.now() - entry.timestamp > 10 * 60 * 1000) {
    delete db.chartCache[key];
    saveData(db);
    return null;
  }
  return entry.data;
}

function setChartCache(key, data) {
  const db = loadData();
  db.chartCache[key] = {
    timestamp: Date.now(),
    data
  };
  saveData(db);
}

module.exports = {
  loadData,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getBroadcasts,
  createBroadcast,
  getNotificationsForUser,
  getChartCache,
  setChartCache
};
