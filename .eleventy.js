const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addWatchTarget("./src/blog/");
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
