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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please submit using POST.'
    });
  }

  try {
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

    const { country, email, topic, message } = body;

    const ALLOWED_TOPICS = [
      'Movies & Entertainment',
      'Live TV',
      'Music & Culture',
      'Concerts & Events',
      'Mobile Experience',
      'Website & Casting',
      'Country & Language Settings',
      'Account & Profile',
      'Technical Problems',
      'Suggestions & Feedback',
      'Other Enquiries'
    ];

    const errors = {};

    if (!country || typeof country !== 'string' || !country.trim()) {
      errors.country = 'Country is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'A valid email address is required.';
    }

    if (!topic || typeof topic !== 'string' || !ALLOWED_TOPICS.includes(topic.trim())) {
      errors.topic = 'Please select a valid topic from the list.';
    }

    const trimmedMsg = typeof message === 'string' ? message.trim() : '';
    if (!trimmedMsg) {
      errors.message = 'Message cannot be empty.';
    } else if (trimmedMsg.length < 5) {
      errors.message = 'Message must be at least 5 characters long.';
    } else if (trimmedMsg.length > 5000) {
      errors.message = 'Message cannot exceed 5000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed. Please correct the highlighted fields.',
        errors
      });
    }

    const submissionId = 'SH-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    const timestamp = new Date().toISOString();

    // Environment delivery configuration documentation:
    // To forward submissions to external email providers (e.g. SendGrid, Resend, Postmark)
    // or internal webhooks, configure the following environment variables in Vercel settings:
    // - CONTACT_WEBHOOK_URL (e.g. https://hooks.zapier.com/... or custom endpoint)
    // - EMAIL_PROVIDER_API_KEY (e.g. re_123456789)
    // - SUPPORT_RECIPIENT_EMAIL (e.g. support@sanyuhub.com)

    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: submissionId,
            timestamp,
            country: country.trim(),
            email: email.trim(),
            topic: topic.trim(),
            message: trimmedMsg
          })
        });
      } catch (webhookErr) {
        console.error('Webhook notification dispatch warning:', webhookErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      id: submissionId,
      timestamp,
      data: {
        country: country.trim(),
        email: email.trim(),
        topic: topic.trim()
      },
      message: 'Your message has been received by SanyuHub Support. Thank you for reaching out.'
    });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request.'
    });
  }
};
