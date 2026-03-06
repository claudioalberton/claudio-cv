# Deployment Guide

This guide will help you deploy your resume website to GitHub Pages or other static hosting platforms.

## Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a new repository on GitHub (e.g., `username/resume`)

2. Initialize git in your project:
```bash
cd "/Users/claudioalbertonbatista/Project Claudio/resume-website"
git init
git add .
git commit -m "Initial commit: Modern resume website"
```

3. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/yourusername/resume.git
git branch -M main
git push -u origin main
```

4. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

5. In your GitHub repository settings:
   - Go to Settings > Pages
   - Under "Source", select "GitHub Actions"

6. Push the workflow file:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push
```

Your site will be available at: `https://yourusername.github.io/resume/`

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out` directory

3. Deploy the `out` directory to GitHub Pages using `gh-pages` branch:
```bash
# Install gh-pages package
npm install -D gh-pages

# Add deploy script to package.json
# "deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

## Deploying to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

Note: For Vercel, you may want to remove `output: 'export'` from `next.config.js` to use Vercel's full features.

## Deploying to Netlify

### Option 1: Drag and Drop

1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `out` folder

### Option 2: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
npm run build
netlify deploy --prod --dir=out
```

## Deploying to AWS S3

1. Build the project:
```bash
npm run build
```

2. Upload the `out` directory to an S3 bucket configured for static website hosting

3. Use AWS CLI:
```bash
aws s3 sync out/ s3://your-bucket-name --delete
```

4. Configure CloudFront for HTTPS and better performance

## Custom Domain

### GitHub Pages
1. Add a `CNAME` file in the `public` directory with your domain name
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Vercel/Netlify
1. Go to domain settings in your dashboard
2. Follow instructions to add your custom domain
3. Update DNS records

## Environment-Specific Configuration

If you need different configurations for different environments:

1. Create `.env.local` for local development
2. Use environment variables in `next.config.js`
3. Configure environment variables in your hosting platform

## Build Optimization

To further optimize your build:

1. Optimize images (convert to WebP)
2. Enable compression on your hosting platform
3. Set up CDN for faster global delivery
4. Configure caching headers

## Troubleshooting

### Issue: Styles not loading
- Make sure `basePath` is correctly set in `next.config.js`
- Check that all asset paths are relative

### Issue: 404 on refresh
- For SPA routing, configure your host to redirect all requests to index.html
- GitHub Pages handles this automatically with the `.nojekyll` file

### Issue: Dark mode not working
- Ensure the theme provider is properly configured
- Check browser console for errors

## Monitoring

After deployment, monitor:
- Page load speed (Google PageSpeed Insights)
- Mobile responsiveness
- Cross-browser compatibility
- PDF export functionality

## Updates

To update your live site:

1. Make changes locally
2. Test with `npm run dev`
3. Build and verify with `npm run build`
4. Commit and push changes
5. Your CI/CD pipeline will automatically deploy

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS docs: https://tailwindcss.com/docs
- Open an issue in your repository
