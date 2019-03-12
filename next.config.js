const debug = process.env.NODE_ENV !== "production";
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = optimizedImages(
  withCSS({
    optimizeImagesInDev: true,
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/contactInfo": { page: "/contactInfo" },
        "/revelerProcess": { page: "/revelerProcess" },
        "/services": { page: "/services" }
      };
    },
    assetPrefix: !debug ? "/revelerMusicUpdate/" : ""
  })
);
