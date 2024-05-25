

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/uploads');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addWatchTarget('src/js');
  eleventyConfig.addPassthroughCopy('src/sass');
  eleventyConfig.addWatchTarget('src/sass');

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: '_site/sass/*.css'
  });

  eleventyConfig.addFilter("removeExt", function(name) {
    return name.slice(name.lastIndexOf("/")+1, name.length-4);
   });

  return {
      dir: {
          input: 'src',
      },
  };
};