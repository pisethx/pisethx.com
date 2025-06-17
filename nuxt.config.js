import theme from "@nuxt/content-theme-docs";

export default theme({
  // Enable static site generation for GitHub Pages
  target: 'static',

  // Set the base URL for GitHub Pages
  router: {
    base: process.env.NODE_ENV === 'production' ? '/pisethx/' : '/'
  },

  // Generate static files
  generate: {
    fallback: true
  }
});
