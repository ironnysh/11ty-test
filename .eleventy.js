const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginNavigation = require("@11ty/eleventy-navigation")
const contentParser = require("./src/utils/contentParser.js");

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
  eleventyConfig.addFilter("squash", require("./src/utils/squash.js"));

  // Dates
  eleventyConfig.addFilter("shortDate", function (date) {
    return new Date(date).toLocaleDateString("he-IL", {
      month: "long",
      year: "numeric"
    })
  })
  eleventyConfig.addFilter("fullDate", function (date) {
    return new Date(date).toLocaleDateString("he-IL")
  })

  // contentParser
  eleventyConfig.addTransform("contentParser", contentParser);

  // Layouts
  eleventyConfig.addLayoutAlias("layouts/base", "base.njk")
  eleventyConfig.addLayoutAlias("layouts/page", "page.njk")
  eleventyConfig.addLayoutAlias("layouts/links", "links.njk")
  eleventyConfig.addLayoutAlias("layouts/thoughts", "thoughts.njk")

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