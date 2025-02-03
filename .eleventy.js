module.exports = function(eleventyConfig) {
    // Pass through assets directory
    eleventyConfig.addPassthroughCopy("assets");

    // Add date filter
    eleventyConfig.addFilter("dateFormat", function(date) {
        return new Date(date).toISOString().split('T')[0];
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};