module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addWatchTarget('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addWatchTarget('src/js');

  // Filter using `Array.filter`
  eleventyConfig.addCollection("portraits", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "portrait";
    });
  });

    // Filter using `Array.filter`
    eleventyConfig.addCollection("couples", function (collectionApi) {
      return collectionApi.getAll().filter(function (item) {
        return item.data.category === "couple";
      });
    });

    // Filter using `Array.filter`
    eleventyConfig.addCollection("marriages", function (collectionApi) {
      return collectionApi.getAll().filter(function (item) {
        return item.data.category === "marriage";
      });
    });

    // Filter using `Array.filter`
    eleventyConfig.addCollection("pregnancies", function (collectionApi) {
      return collectionApi.getAll().filter(function (item) {
        return item.data.category === "pregnancy";
      });
    });

  // Filter using `Array.filter`
  eleventyConfig.addCollection("babies", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "baby";
    });
  });

  // Filter using `Array.filter`
  eleventyConfig.addCollection("baptismes", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "baptism";
    });
  });

  // Filter using `Array.filter`
  eleventyConfig.addCollection("families", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.data.category === "family";
    });
  });

  eleventyConfig.addFilter("removeExt", function(name) { 
     console.log(name.slice(0, name.length-4));
     return name.slice(0, name.length-4);
   });

  return {
      dir: {
          input: 'src',
      },
  };
};