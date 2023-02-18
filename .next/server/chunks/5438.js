exports.id = 5438;
exports.ids = [5438];
exports.modules = {

/***/ 7310:
/***/ ((module) => {

// Exports
module.exports = {
	"blogs": "Blogs_blogs__9tTEb",
	"blogContainer": "Blogs_blogContainer__KhqOv",
	"blog": "Blogs_blog__oEgkV",
	"image": "Blogs_image__dk7wW",
	"content": "Blogs_content__xOTES",
	"readMore": "Blogs_readMore__TDyGJ",
	"blogSection": "Blogs_blogSection__nGAK6",
	"blogTitle": "Blogs_blogTitle__m2_oO",
	"singleBlog": "Blogs_singleBlog__ajZxE",
	"feauturedImage": "Blogs_feauturedImage__XhV3R",
	"singleBlogContainer": "Blogs_singleBlogContainer__VGmde",
	"sidebar": "Blogs_sidebar__KVzR3",
	"thumbnail": "Blogs_thumbnail__Pb48G",
	"authorBox": "Blogs_authorBox__mIS5K",
	"authorImage": "Blogs_authorImage__oq05Q",
	"authorBio": "Blogs_authorBio__YINmw",
	"author": "Blogs_author___Sgre",
	"designation": "Blogs_designation__am03d",
	"toc": "Blogs_toc__vrfRk"
};


/***/ }),

/***/ 2867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "cH": () => (/* binding */ getSlugs),
/* harmony export */   "xl": () => (/* binding */ getPost)
/* harmony export */ });
const getPosts = async ()=>{
    const posts = await fetch("https://e.skywarddigital.com.au/blog/wp-json/wp/v2/posts?_embed");
    const data = await posts.json();
    return data;
};
async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post)=>post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}
async function getSlugs() {
    let elements = [];
    elements = await getPosts();
    const elementsIds = elements.map((element)=>{
        return {
            params: {
                slug: element.slug
            }
        };
    });
    return elementsIds;
}


/***/ })

};
;