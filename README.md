# Personal Website

### [Visit website](https://pisethx.github.io)

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Prerequisites

- **Node.js 16.x** (required for Nuxt.js 2.x compatibility)
- If you're using a different Node.js version, use `nvm` to switch:
  ```bash
  nvm use 16
  # or install if not available
  nvm install 16
  ```

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - This will allow GitHub Actions to deploy directly to Pages

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

### Troubleshooting

If you encounter build errors:
1. Make sure you're using Node.js 16.x
2. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Clear Nuxt cache: `rm -rf .nuxt`

### Custom Domain

If you want to use a custom domain (like pisethx.com):
1. Add a `CNAME` file in the `static/` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `router.base` in `nuxt.config.js` to match your domain structure 