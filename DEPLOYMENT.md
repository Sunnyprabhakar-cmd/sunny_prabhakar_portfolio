# 🚀 Deployment Guide

Your portfolio is production-ready! Here are the easiest ways to deploy.

## Option 1: Deploy with Vercel (Recommended - 2 minutes)

### Step 1: Create Vercel Account
Go to https://vercel.com and sign up with GitHub

### Step 2: Deploy from This Folder
```bash
cd /home/sunny/portfolioo
npx vercel
```

**Follow the prompts:**
- Link to GitHub account (recommended)
- Select project name
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

✅ Your site will be live in seconds!

---

## Option 2: Deploy with GitHub + Vercel (Easiest - Auto-Deploy)

### Step 1: Push to GitHub
```bash
cd /home/sunny/portfolioo
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/prettier-portfolio
git push -u origin main
```

### Step 2: Deploy on Vercel Dashboard
1. Go to https://vercel.com/new
2. Import GitHub repository
3. Click "Deploy" (Vercel auto-detects Vite settings)
4. Your site is live!

**Bonus:** Every push to main auto-deploys automatically!

---

## Option 3: Deploy with Netlify (Alternative)

### Step 1: Build Folder
```bash
cd /home/sunny/portfolioo
npm run build
```

### Step 2: Upload Dist Folder
1. Go to https://app.netlify.com
2. Drag & drop the `dist/` folder
3. Your site is live!

---

## Your Portfolio URL

Once deployed:
- **Vercel**: `https://your-project-name.vercel.app`
- **Netlify**: `https://your-site-name.netlify.app`

## Custom Domain (Optional)

After deployment:
1. Buy domain on Namecheap/GoDaddy
2. In Vercel/Netlify settings, add custom domain
3. Update DNS records (auto-provided)
4. ✅ Live on yourdomain.com

---

## Quick Start Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
npx vercel

# Deploy to Netlify (after build)
npm run build
# Then drag dist/ to netlify.com
```

---

## Environment Variables (if needed)

Create `.env.local` file:
```
VITE_API_URL=https://api.example.com
```

Then access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Performance Check Post-Deploy

After deployment, check these tools:
- **Google Lighthouse**: https://pagespeed.web.dev
- **Vercel Analytics**: Dashboard auto-shows performance
- **SEO Check**: https://www.seobility.net

Your portfolio should score 90+ on all metrics!

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Contact: anmsunnyprabhakar@gmail.com
