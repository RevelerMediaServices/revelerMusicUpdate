const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = optimizedImages(
  withCSS({
    optimizeImagesInDev: false,
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/contactInfo": { page: "/contactInfo" },
        "/revelerProcess": { page: "/revelerProcess" },
        "/services": { page: "/services" }
      };
    }
  })
);
