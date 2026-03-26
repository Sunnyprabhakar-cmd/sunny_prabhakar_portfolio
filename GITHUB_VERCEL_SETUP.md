# 📤 Push to GitHub & Deploy on Vercel

Your local git repository is initialized. Follow these steps to push to GitHub and enable auto-deployment on Vercel.

## Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `portfolio` (or any name you prefer)
3. Description: `Modern portfolio website with React + Vite`
4. Choose **Public** (so recruiters can see it)
5. **Do NOT** initialize with README (we already have one)
6. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repo, GitHub will show you commands. Copy and paste this:

```bash
cd /home/sunny/portfolioo
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Example:
```bash
git remote add origin https://github.com/sunnyprabhakar/portfolio.git
git push -u origin main
```

## Step 3: Connect to Vercel Dashboard

Once pushed to GitHub:

1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Connect your GitHub account (if not already)
4. Select your `portfolio` repository
5. Vercel auto-detects settings:
   - Framework: Vite ✓
   - Build command: `npm run build` ✓
   - Output: `dist` ✓
6. Click **"Deploy"**

**✅ Your site is now live!**

## Step 4: Get Your Live URL

After deployment completes:
- Vercel shows you: `https://portfolio-xxxxx.vercel.app`
- This is your live portfolio URL!

## Step 5: Custom Domain (Optional)

To use your own domain (like `sunny.dev`):

1. Buy domain on **Namecheap** or **GoDaddy**
2. In Vercel Settings → Domains
3. Add your custom domain
4. Update DNS records (Vercel provides exact settings)
5. Wait 24-48 hours for propagation
6. ✅ Live on your custom domain!

## Auto-Deploy Magic 🚀

Now when you push changes to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

**Vercel automatically:**
1. Rebuilds your site
2. Runs tests (if configured)
3. Deploys in seconds
4. Shows preview URLs for review

No more manual deployments!

## Troubleshooting

**"fatal: remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

**"Permission denied"**
- Make sure you have GitHub SSH keys set up OR
- Use HTTPS URLs with GitHub Personal Access Token

**Stuck on Vercel deployment?**
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally first
- Check that `dist/` folder exists

## Next Steps

1. ✅ Push to GitHub
2. ✅ Connect to Vercel
3. ✅ Share your live portfolio link with recruiters!
4. (Optional) Set up custom domain

---

**Questions?** Check Vercel docs: https://vercel.com/docs
