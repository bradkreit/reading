// Vercel serverless function — proxies Readwise API to avoid CORS
// Uses Node's built-in https module, no dependencies needed
const https = require('https');

function httpsGet(url, headers) {
  return new Promise(function (resolve, reject) {
    const req = https.get(url, { headers: headers }, function (res) {
      let body = '';
      res.on('data', function (chunk) { body += chunk; });
      res.on('end', function () { resolve({ status: res.statusCode, body: body }); });
    });
    req.on('error', reject);
    req.setTimeout(15000, function () { req.destroy(new Error('Request timed out')); });
  });
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'x-readwise-token, Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json'
};

module.exports = async function (req, res) {
  // Set CORS headers on every response
  Object.entries(CORS).forEach(function (e) { res.setHeader(e[0], e[1]); });

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const token = req.headers['x-readwise-token'];
  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  const endpoint = req.query.endpoint;
  if (!endpoint || (endpoint !== 'highlights' && endpoint !== 'books')) {
    return res.status(400).json({ error: 'Invalid endpoint: ' + endpoint });
  }

  const page = req.query.page || '1';
  const url = 'https://readwise.io/api/v2/' + endpoint + '/?page_size=1000&page=' + page;

  try {
    const result = await httpsGet(url, {
      'Authorization': 'Token ' + token,
      'Accept': 'application/json'
    });
    res.status(result.status).send(result.body);
  } catch (e) {
    res.status(502).json({ error: 'Proxy error: ' + e.message });
  }
};
