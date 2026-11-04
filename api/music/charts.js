const db = require('../db');

// Supported categories:
// 1. 'global' (Top 10 Global Tracks)
// 2. 'pop' (Top 10 Pop Hits)
// 3. 'hiphop' (Top 10 Hip-Hop & Rap)

const CATEGORY_CONFIG = {
  global: {
    id: 'global',
    name: 'Top 10 Global Hits',
    description: 'Current worldwide top charting songs',
    deezerChartId: 0,
    itunesUrl: 'https://itunes.apple.com/us/rss/topsongs/limit=10/json'
  },
  pop: {
    id: 'pop',
    name: 'Top 10 Pop Hits',
    description: 'Leading international pop singles and releases',
    deezerChartId: 132,
    itunesUrl: 'https://itunes.apple.com/us/rss/topsongs/genre=14/limit=10/json'
  },
  hiphop: {
    id: 'hiphop',
    name: 'Top 10 Hip-Hop & Rap',
    description: 'Trending hip-hop, rap, and urban chart toppers',
    deezerChartId: 116,
    itunesUrl: 'https://itunes.apple.com/us/rss/topsongs/genre=18/limit=10/json'
  }
};

async function fetchFromDeezer(genreId) {
  const url = `https://api.deezer.com/chart/${genreId}/tracks`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Deezer API responded with HTTP ${res.status}`);
    }

    const json = await res.json();
    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
      throw new Error('Deezer returned empty track data');
    }

    const items = json.data.slice(0, 10).map((t, idx) => ({
      rank: idx + 1,
      id: String(t.id),
      title: t.title_short || t.title,
      artist: t.artist?.name || 'Unknown Artist',
      artwork: t.album?.cover_big || t.album?.cover_medium || t.album?.cover || null,
      previewUrl: t.preview || null,
      duration: t.duration || 0,
      link: t.link || null
    }));

    return items;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

async function fetchFromITunes(itunesUrl) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(itunesUrl, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`iTunes API responded with HTTP ${res.status}`);
    }

    const json = await res.json();
    const entries = json?.feed?.entry;
    if (!entries || !Array.isArray(entries) || entries.length === 0) {
      throw new Error('iTunes returned empty entries');
    }

    const items = entries.slice(0, 10).map((entry, idx) => {
      let previewUrl = null;
      if (Array.isArray(entry.link)) {
        const enc = entry.link.find(l => l.attributes?.rel === 'enclosure');
        if (enc && enc.attributes) {
          previewUrl = enc.attributes.href;
        }
      }

      const images = entry['im:image'] || [];
      const artwork = (images[2]?.label) || (images[1]?.label) || (images[0]?.label) || null;

      return {
        rank: idx + 1,
        id: entry.id?.attributes?.['im:id'] || String(idx + 1),
        title: entry['im:name']?.label || entry.title?.label || 'Untitled Track',
        artist: entry['im:artist']?.label || 'Unknown Artist',
        artwork: artwork,
        previewUrl: previewUrl,
        duration: 30,
        link: entry.id?.label || null
      };
    });

    return items;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

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
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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
    const rawCategory = (req.query && req.query.category) || 'global';
    const categoryKey = String(rawCategory).toLowerCase();

    const config = CATEGORY_CONFIG[categoryKey];
    if (!config) {
      return res.status(400).json({
        success: false,
        error: `Invalid music category "${categoryKey}". Supported categories: global, pop, hiphop.`
      });
    }

    const cacheKey = `chart_${categoryKey}`;
    const cached = db.getChartCache(cacheKey);
    if (cached) {
      return res.status(200).json({
        success: true,
        category: config.id,
        categoryName: config.name,
        cached: true,
        tracks: cached
      });
    }

    // Attempt fetching from primary provider (Deezer) with fallback to secondary (iTunes)
    let tracks = null;
    let providerUsed = 'deezer';

    try {
      tracks = await fetchFromDeezer(config.deezerChartId);
    } catch (deezerErr) {
      console.warn(`Deezer fetch failed for ${categoryKey}: ${deezerErr.message}. Attempting iTunes fallback.`);
      try {
        tracks = await fetchFromITunes(config.itunesUrl);
        providerUsed = 'itunes';
      } catch (itunesErr) {
        console.error(`Both Deezer and iTunes chart fetches failed for ${categoryKey}:`, itunesErr.message);
        // Do NOT invent fake data. Return legitimate error state.
        return res.status(502).json({
          success: false,
          category: config.id,
          categoryName: config.name,
          error: 'Music chart service is temporarily unreachable. Please retry shortly.',
          tracks: []
        });
      }
    }

    if (!tracks || tracks.length === 0) {
      return res.status(502).json({
        success: false,
        category: config.id,
        categoryName: config.name,
        error: 'No chart items returned from chart service.',
        tracks: []
      });
    }

    // Cache the real chart data
    db.setChartCache(cacheKey, tracks);

    return res.status(200).json({
      success: true,
      category: config.id,
      categoryName: config.name,
      provider: providerUsed,
      cached: false,
      tracks
    });
  } catch (err) {
    console.error('Music charts handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while fetching chart rankings.'
    });
  }
};
