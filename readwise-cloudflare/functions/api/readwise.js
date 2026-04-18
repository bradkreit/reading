// Cloudflare Pages Function
// File location: functions/api/readwise.js
// This handles requests to /api/readwise on your Cloudflare Pages site

export async function onRequest(context) {
  const { request } = context;

  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'x-readwise-token, Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: CORS });
  }

  const token = request.headers.get('x-readwise-token');
  if (!token) {
    return new Response(JSON.stringify({ error: 'Missing token' }), { status: 401, headers: CORS });
  }

  const url = new URL(request.url);
  const endpoint = url.searchParams.get('endpoint');
  if (!endpoint || (endpoint !== 'highlights' && endpoint !== 'books')) {
    return new Response(JSON.stringify({ error: 'Invalid endpoint: ' + endpoint }), { status: 400, headers: CORS });
  }

  const page = url.searchParams.get('page') || '1';
  const readwiseUrl = `https://readwise.io/api/v2/${endpoint}/?page_size=1000&page=${page}`;

  try {
    const response = await fetch(readwiseUrl, {
      headers: {
        'Authorization': `Token ${token}`,
        'Accept': 'application/json'
      }
    });

    const data = await response.text();
    return new Response(data, {
      status: response.status,
      headers: CORS
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Proxy error: ' + e.message }), { status: 502, headers: CORS });
  }
}
