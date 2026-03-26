#!/bin/bash
# Quick setup script for GitHub + Vercel deployment
# Run this after creating a GitHub repository

echo "📤 Git Setup for Vercel Deployment"
echo ""
echo "Step 1: Enter your GitHub username"
read -p "GitHub username: " USERNAME

echo ""
echo "Step 2: Git configuration"
git branch -M main
git remote add origin https://github.com/$USERNAME/portfolio.git

echo ""
echo "Step 3: Ready to push!"
echo "Run this command:"
echo ""
echo "  git push -u origin main"
echo ""
echo "Then visit: https://vercel.com/new"
echo "Select your portfolio repository and deploy!"
