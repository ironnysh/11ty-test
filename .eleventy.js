const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginNavigation = require("@11ty/eleventy-navigation")
const contentParser = require("./src/assets/js/contentParser.js");
const hebrewDate = require("./src/_filters/hebrewDate.js")


module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginNavigation)

  eleventyConfig.setDataDeepMerge(true);

  // Collection
  eleventyConfig.addCollection("thoughts", function (collection) {
    return collection.getFilteredByGlob("./src/thoughts/*.md");
  });

  // Filters
  eleventyConfig.addFilter("squash", require("./src/_filters/squash.js"));
  eleventyConfig.addFilter('hebrewDate', hebrewDate);

  eleventyConfig.addFilter('displayDate', function (date) {
    return new Date(date).toLocaleDateString('he-IL', {
      month: 'long',
      year: 'numeric'
    })
  })

  eleventyConfig.addFilter("oldHebrewDate", (dateObj) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateObj).toLocaleDateString("he-IL", options);
  });

  // Layouts
  eleventyConfig.addLayoutAlias("layouts/base", "base.njk")
  eleventyConfig.addLayoutAlias("layouts/page", "page.njk")
  eleventyConfig.addLayoutAlias("layouts/links", "links.njk")
  eleventyConfig.addLayoutAlias("layouts/thoughts", "thoughts.njk")

  // contentParser
  eleventyConfig.addTransform("contentParser", contentParser);

  // Pass-through Files
  eleventyConfig.addPassthroughCopy("src/assets")

  // Base eleventyConfig
  return {
    dir: {
      input: "src",
      layouts: "_includes/layouts"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: "true"
  }
}