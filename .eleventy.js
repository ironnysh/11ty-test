const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginNavigation = require("@11ty/eleventy-navigation")
const parseTransform = require("./src/assets/js/figcaption.js");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginRss)
    eleventyConfig.addPlugin(pluginNavigation)

    eleventyConfig.setDataDeepMerge(true);

    // Collection
    // Filter source file names using a glob
  eleventyConfig.addCollection("thoughts", function(collection) {
    return collection.getFilteredByGlob("./src/thoughts/*.md");
  });
    
    // Filters
    eleventyConfig.addFilter("squash", require("./src/_filters/squash.js"));
    eleventyConfig.addFilter("hebrewDate", (dateObj) => {
        const options = { year: "numeric", month: "long", day: "2-digit" };
        return new Date(dateObj).toLocaleDateString("he-IL", options);
    });

    // Layouts
    eleventyConfig.addLayoutAlias("layouts/base", "base.njk")
    eleventyConfig.addLayoutAlias("layouts/page", "page.njk")
    eleventyConfig.addLayoutAlias("layouts/links", "links.njk")
    eleventyConfig.addLayoutAlias("layouts/thoughts", "thoughts.njk")

    // Figcaption
    eleventyConfig.addTransform("parse", parseTransform);

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
