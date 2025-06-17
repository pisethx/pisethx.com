# Personal Website

### [Visit website](https://pisethx.com)

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose the `gh-pages` branch and `/ (root)` folder
   - Click "Save"

2. **Enable GitHub Actions**:
   - Go to your repository settings
   - Navigate to "Actions" → "General"
   - Ensure "Allow all actions and reusable workflows" is selected
   - Save the settings

3. **Automatic Deployment**:
   - Every push to `main` or `master` branch will trigger a build
   - The site will be automatically deployed to GitHub Pages
   - You can monitor the deployment in the "Actions" tab

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run generate

# Deploy (builds and prepares for deployment)
npm run deploy
```

### Custom Domain

If you want to use a custom domain (like pisethx.com):
1. Add a `CNAME` file in the `static/` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `router.base` in `nuxt.config.js` to match your domain structure 