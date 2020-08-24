const pluginNavigation = require("@11ty/eleventy-navigation")
const contentParser = require("./src/utils/contentParser.js");
const fs = require("fs")

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginNavigation)

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addWatchTarget("./src/utils/");

    // Content for json search
  eleventyConfig.addFilter('jsonContent', content => {
    if (content) {
      content = content.replace(/(\r\n|\n|\r)/gm, "");
      content = content.replace(/\t/g, "\\t");
      content = content.replace(/"/g, '\\"');
    }
    return content;
  });

  // Content for json feed
  eleventyConfig.addFilter('jsonStringify', content => {
    if (!content) {
      content = "";
    }
    return JSON.stringify(content);
  });

  // Collection
  eleventyConfig.addCollection("thoughts", function (collection) {
    return collection.getFilteredByGlob("./src/thoughts/*.md");
  });

  // Filters
  eleventyConfig.addFilter("squash", require("./src/utils/squash.js"));

  eleventyConfig.addFilter("randomPost", (arr) => {
    if (Array.isArray(arr)) {
      const random = arr[Math.floor(Math.random() * arr.length)];
      return [random];
    }
    return [];
  });
	
    // limit filter
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

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
  

  eleventyConfig.addFilter("tagList", list => {
    // "thoughts" is a magic tag used to determine which pages are blog posts.
    const properTags = list.filter((x) => x != "posts");
    if (!properTags) return;
    return `<aside>"עוד מחשבות"` + properTags.map(tag => `<a href="/tags/${(tag)}">${tag}</a>`).join(" • ") + `</aside>`;
  });


  // contentParser
  eleventyConfig.addTransform("contentParser", contentParser);

  // 404
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // Layouts
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("links", "layouts/links.njk");
  eleventyConfig.addLayoutAlias("thoughts", "layouts/thoughts.njk");

  // Pass-through Files
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("public");

  // Base eleventyConfig
  return {
    dir: {
      input: "src",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: "true"
  }
}
