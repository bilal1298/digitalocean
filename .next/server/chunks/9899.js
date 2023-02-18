exports.id = 9899;
exports.ids = [9899];
exports.modules = {

/***/ 8604:
/***/ ((module) => {

// Exports
module.exports = {
	"blogs": "Blog_blogs__fUMvc",
	"blog": "Blog_blog__uKGR4",
	"blogImage": "Blog_blogImage__9qyqw",
	"blogTitle": "Blog_blogTitle__fBs4B",
	"button": "Blog_button__AbjNs",
	"excerpt": "Blog_excerpt__tr3B2"
};


/***/ }),

/***/ 9899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8604);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5597);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3235);





const Blog = ({ blogs  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        padding: "70px 0",
        background: "#D6E8EB",
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "titleBackground",
            children: "Blog"
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().blogs)}`,
            children: blogs.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().blog),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().blogImage),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.image,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().blogTitle),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: item.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().excerpt),
                                    children: item.excerpt.replace(/(.{300})..+/, "$1…")
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: `/blog/${item.slug}`,
                                children: "Read More"
                            })
                        })
                    ]
                }, item.title))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);


/***/ })

};
;