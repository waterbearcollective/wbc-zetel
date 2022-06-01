const CleanCSS = require("clean-css");
//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
//const pluginTOC = require('eleventy-plugin-toc')

module.exports = function(eleventyConfig) {

	eleventyConfig.addCollection("formalCollection", function(collection) {
		var postCollection = collection.getFilteredByGlob(["formal/*.md"]);
		//var postCollection = collection.getFilteredByTag("posts");
        //console.log('here!');
        //console.log(postCollection);
    return postCollection;
  });

	/*
// filter by folder 'posts', then sort by filename
eleventyConfig.addCollection("sortedPosts", function(collection) {
                var postCollection = collection.getFilteredByGlob(["posts/*.md"]).sort(function(a,b) {
  //return a.fileSlug - b.fileSlug;
  return a.fileSlug.localeCompare(b.fileSlug, 'en', { numeric:true });

    });
    console.log(postCollection);
	return postCollection;
  });

// filter by folder 'formal', then sort by filename
eleventyConfig.addCollection("sortedFormal", function(collection) {
                var postCollection = collection.getFilteredByGlob(["formal/*.md"]).sort(function(a,b) {
  //return a.fileSlug - b.fileSlug;
  return a.fileSlug.localeCompare(b.fileSlug, 'en', { numeric:true });

    });
    console.log(postCollection);
        return postCollection;
  });
*/

// filter by 'form' tag, then sort by filename
eleventyConfig.addCollection("sortedFormalTag", function(collection) {
var postCollection = collection.getFilteredByTag("form").sort(function(a,b) {
  //return a.fileSlug - b.fileSlug;
  return a.fileSlug.localeCompare(b.fileSlug, 'en', { numeric:true });

    });
    //console.log(postCollection);
        return postCollection;
  });

	// filter by 'posts' tag, then sort by filename
eleventyConfig.addCollection("sortedPostsTag", function(collection) {
var postCollection = collection.getFilteredByTag("posts").sort(function(a,b) {
  //return a.fileSlug - b.fileSlug;
  return a.fileSlug.localeCompare(b.fileSlug, 'en', { numeric:true });

    });
    //console.log(postCollection);
        return postCollection;
  });


// filter by 'form' tag, then sort by filename
eleventyConfig.addCollection("sortedRealTag", function(collection) {
var postCollection = collection.getFilteredByTag("real").sort(function(a,b) {
  //return a.fileSlug - b.fileSlug;
  return a.fileSlug.localeCompare(b.fileSlug, 'en', { numeric:true });

    });
    //console.log(postCollection);
        return postCollection;
  });


// filter by 'q' tag (for 'question'), then sort by filename
eleventyConfig.addCollection("sortedQuestionsTag", function(collection) {
var postCollection = collection.getFilteredByTag("q").sort(function(a,b) {
  //return a.fileSlug - b.fileSlug;
  return a.fileSlug.localeCompare(b.fileSlug, 'en', { numeric:true });

    });
    //console.log(postCollection);
        return postCollection;
  });


	//handle css
	eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("audio");

  return {
    passthroughFileCopy: true
  };
};


