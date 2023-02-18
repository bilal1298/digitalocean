"use strict";
(() => {
var exports = {};
exports.id = 2492;
exports.ids = [2492];
exports.modules = {

/***/ 6512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7310);
/* harmony import */ var _styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_wordpress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2867);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






const getStaticPaths = async ()=>{
    const paths = await (0,_data_wordpress__WEBPACK_IMPORTED_MODULE_4__/* .getSlugs */ .cH)();
    return {
        paths,
        fallback: "blocking"
    };
};
async function getStaticProps({ params  }) {
    const post = await (0,_data_wordpress__WEBPACK_IMPORTED_MODULE_4__/* .getPost */ .xl)(params.slug);
    const posts = await (0,_data_wordpress__WEBPACK_IMPORTED_MODULE_4__/* .getPosts */ .Jq)();
    return {
        props: {
            post,
            posts
        },
        revalidate: 10
    };
}
const BlogSingle = ({ post , setHeaderBg , posts  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    setHeaderBg(true);
    const [toc, setToc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const content = post.content.rendered;
        let parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");
        let h2 = doc.getElementsByTagName("h2");
        let h2a = [
            ...h2
        ];
        let h2i = [];
        h2a.map((item)=>{
            h2i.push(item.innerHTML);
        });
        setToc(h2i);
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().blogSection),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().singleBlogContainer),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().singleBlog),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "title",
                                    children: post.title.rendered
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: post._embedded["wp:featuredmedia"]["0"].source_url,
                                    alt: "",
                                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().feauturedImage)
                                }),
                                toc.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().toc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Table of contents"
                                        }),
                                        toc.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `#${i}`,
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            item
                                                        ]
                                                    })
                                                })
                                            }))
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: post.content.rendered
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Latest Blogs"
                                }),
                                posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: index < 3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().thumbnail),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: post._embedded["wp:featuredmedia"]["0"].source_url
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: `${post.slug}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        children: post.title.rendered.replace(/(.{100})..+/, "$1…")
                                                    })
                                                })
                                            ]
                                        })
                                    }))
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().authorBox),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().authorImage),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/dev-oza.png",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().authorBio),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/author/dev",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Dev Oza"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_5___default().designation),
                                    children: "CEO"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Meet Dev, a digital marketer with a passion for crafting impactful online experiences. With 12 years of expertise, Dev has a proven track record of boosting engagement, conversions and online visibility. Combining creative vision, tech know-how, and a data-driven approach, Dev creates marketing magic that delivers results and makes a real impact."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSingle); // import React from "react";
 // import classes from "../../styles/Blogs.module.css";
 // import { blogs } from "../../data/blogs";
 // import { deserialize } from "react-serialize";
 // import Link from "next/link";
 // export const getStaticPaths = () => {
 //   const paths = blogs.map((item) => {
 //     return {
 //       params: { slug: item.slug },
 //     };
 //   });
 //   return {
 //     paths,
 //     fallback: false,
 //   };
 // };
 // export const getStaticProps = (context) => {
 //   const slug = context.params.slug;
 //   const data = blogs.find((item) => item.slug === slug);
 //   return {
 //     props: { blog: data },
 //   };
 // };
 // const BlogSingle = ({ blog, setHeaderBg }) => {
 //   setHeaderBg(true);
 //   return (
 //     <section className={classes.blogSection}>
 //       <div className="container-lg">
 //         <div className={classes.singleBlogContainer}>
 //           <div className={classes.singleBlog}>
 //             <h1 className={"title"}>{blog.title}</h1>
 //             <img src={blog.image} alt="" className={classes.feauturedImage} />
 //             {blog.toc && (
 //               <div className={classes.toc}>
 //                 <h3>Table of contents</h3>
 //                 {blog.toc.map((item, i) => (
 //                   <ul>
 //                     <li>
 //                       <Link href={`#${item.href}`}>
 //                         {i + 1}. {item.name}
 //                       </Link>
 //                     </li>
 //                   </ul>
 //                 ))}
 //               </div>
 //             )}
 //             <div>{deserialize(blog.desc)}</div>
 //           </div>
 //           <div className={classes.sidebar}>
 //             <h3>Latest Blogs</h3>
 //             {blogs.map((blog, index) => (
 //               <>
 //                 {index < 3 && (
 //                   <div className={classes.thumbnail}>
 //                     <img src={blog.image} />
 //                     <Link href={`${blog.slug}`}>
 //                       <h4>{blog.title.replace(/(.{100})..+/, "$1…")}</h4>
 //                     </Link>
 //                   </div>
 //                 )}
 //               </>
 //             ))}
 //           </div>
 //         </div>
 //         <div className={classes.authorBox}>
 //           <div className={classes.authorImage}>
 //             <img src="/dev-oza.png" alt="" />
 //           </div>
 //           <div className={classes.authorBio}>
 //             <Link href="/author/dev">
 //               <h3>Dev Oza</h3>
 //             </Link>
 //             <p className={classes.designation}>CEO</p>
 //             <p>
 //               Meet Dev, a digital marketer with a passion for crafting impactful online experiences. With 12 years of expertise, Dev has a proven track record of boosting engagement, conversions and
 //               online visibility. Combining creative vision, tech know-how, and a data-driven approach, Dev creates marketing magic that delivers results and makes a real impact.
 //             </p>
 //           </div>
 //         </div>
 //       </div>
 //     </section>
 //   );
 // };
 // export default BlogSingle;


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5438], () => (__webpack_exec__(6512)));
module.exports = __webpack_exports__;

})();