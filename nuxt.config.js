import theme from "@nuxt/content-theme-docs";

export default theme({
  // Enable static site generation for GitHub Pages
  target: 'static',

  // Set the base URL for GitHub Pages (root for GitHub Actions deployment)
  router: {
    base: '/'
  },

  // Generate static files
  generate: {
    fallback: true
  }
});
