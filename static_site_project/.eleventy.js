const handlebars = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(handlebars);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
    },
  };
};
