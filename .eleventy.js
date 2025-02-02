module.exports = function(eleventyConfig) {
    // Pass through assets directory
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};