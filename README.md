# Readwise Highlights — Cloudflare Pages

## Deploy (5 minutes)

### Step 1 — Push to GitHub
Create a GitHub repo and push all these files. Structure must be:
```
functions/
  api/
    readwise.js    ← the serverless proxy function
index.html
app.js
README.md
```

### Step 2 — Deploy on Cloudflare Pages
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) — sign up free if needed
2. Click **Create a project → Connect to Git**
3. Connect your GitHub account and select your repo
4. On the build settings screen:
   - **Framework preset**: None
   - **Build command**: (leave blank)
   - **Build output directory**: (leave blank)
5. Click **Save and Deploy**

That's it. Cloudflare auto-detects the `functions/` folder and deploys everything else as static files.

### Step 3 — Use it
Visit your Cloudflare URL (e.g. `your-project.pages.dev`), paste your Readwise token from readwise.io/access_token, and your highlights load live. Token is saved in your browser — paste once per device.

### Optional: custom subdomain highlights.bradkreit.com
In Cloudflare Pages: **Custom domains → Add a custom domain** → enter `highlights.bradkreit.com`
Then add a CNAME DNS record where bradkreit.com's domain is managed:
- Name: `highlights`  
- Target: `your-project.pages.dev`

## Why Cloudflare Pages
- Unlimited requests on free tier
- Functions (the proxy) included at no cost
- No build step needed — just static files + one function
