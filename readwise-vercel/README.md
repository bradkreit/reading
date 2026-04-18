# Readwise Highlights Dashboard — Vercel

## Deploy (5 minutes)

### Step 1 — Push to GitHub
Create a new GitHub repo and push this folder's contents to it. The structure should be:
```
api/
  readwise.js      ← serverless proxy function
index.html         ← main app
app.js             ← dashboard logic
vercel.json        ← routing config
package.json
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your GitHub repo
4. Leave all settings as default — Vercel auto-detects everything
5. Click **Deploy**

### Step 3 — Use it
Visit your Vercel URL (e.g. `your-project.vercel.app`), paste your Readwise token from [readwise.io/access_token](https://readwise.io/access_token), and your highlights load live. The token is saved in localStorage — paste it once per device.

### Optional: Custom subdomain from bradkreit.com
In Vercel: **Settings → Domains → Add** → enter `highlights.bradkreit.com`
Then add a CNAME DNS record wherever bradkreit.com's domain is managed:
- Name: `highlights`
- Value: `cname.vercel-dns.com`

## File structure
```
api/readwise.js    ← Vercel serverless function (proxies Readwise API)
index.html         ← App shell + styles
app.js             ← All dashboard JS (highlights, network graph, idea map, Claude connections)
vercel.json        ← Vercel routing
package.json       ← Node version
```

## Vercel free tier limits
- 100GB bandwidth/month
- Unlimited serverless function invocations on hobby projects
- No cold-start issues for simple functions like this
