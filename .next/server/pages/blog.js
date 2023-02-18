"use strict";
(() => {
var exports = {};
exports.id = 9195;
exports.ids = [9195];
exports.modules = {

/***/ 6066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7310);
/* harmony import */ var _styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8549);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_wordpress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2867);







const getStaticProps = async ()=>{
    const data = await (0,_data_wordpress__WEBPACK_IMPORTED_MODULE_5__/* .getPosts */ .Jq)();
    return {
        props: {
            posts: data
        }
    };
};
const blog = ({ setHeaderBg , posts  })=>{
    setHeaderBg(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://skywarddigital.com.au/blog"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Digital Marketing Blog | Skyward Digital"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: "Digital Marketing Blog | Skyward Digital"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Skyward Digital's blog provides the latest updates and information on topics of digital marketing, SEO, PPC, Google ads, Microsoft Ads, LinkedIn Ads, Facebook ads, Instagram Ads, Snapchat Ads and Tik Tok Ads."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().blogSection),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "titleBackground",
                                children: "Blog"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().blogs),
                            children: posts.map((post, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().blogContainer),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().blog),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: post._embedded["wp:featuredmedia"]["0"].source_url,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: post.title.rendered
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: post.excerpt.rendered
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `blog/${post.slug}`,
                                                        className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_6___default().readMore),
                                                        children: "Read More >"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
};
// const blog = ({ setHeaderBg, test }) => {
//   console.log(test)
//   setHeaderBg(true);
//   return (
//     <React.Fragment>
//       <Head>
//         <link rel="canonical" href="https://skywarddigital.com.au/blog" />
//         <title>Digital Marketing Blog | Skyward Digital</title>
//         <meta name="title" content="Digital Marketing Blog | Skyward Digital" />
//         <meta
//           name="description"
//           content="Skyward Digital's blog provides the latest updates and information on topics of digital marketing, SEO, PPC, Google ads, Microsoft Ads, LinkedIn Ads, Facebook ads, Instagram Ads, Snapchat Ads and Tik Tok Ads."
//         />
//       </Head>
//       <section className={classes.blogSection}>
//         <div className="container-lg">
//           <h1 className="title">
//             <span className="titleBackground">Blog</span>
//           </h1>
//           <div className={classes.blogs}>
//             {blogs.map((blog) => (
//               <div className={classes.blogContainer} key={blog.title}>
//                 <div className={classes.blog}>
//                   <div className={classes.image}>
//                     <img src={blog.image} alt="" />
//                   </div>
//                   <div className={classes.content}>
//                     <h3>{blog.title}</h3>
//                     <p>{blog.excerpt.replace(/(.{300})..+/, "$1…")}</p>
//                     <Link href={`blog/${blog.slug}`} className={classes.readMore}>
//                       Read More &gt;
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <img src={test[0]._embedded["wp:featuredmedia"]["0"].source_url} alt="" />
//         <div dangerouslySetInnerHTML={{ __html: test[0].content.rendered }}></div> */}
//       </section>
//     </React.Fragment>
//   );
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blog);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1073:
/***/ ((module) => {

module.exports = require("react-serialize");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,8549,5438], () => (__webpack_exec__(6066)));
module.exports = __webpack_exports__;

})();