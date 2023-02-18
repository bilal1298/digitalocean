"use strict";
(() => {
var exports = {};
exports.id = 2237;
exports.ids = [2237];
exports.modules = {

/***/ 8840:
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
/* harmony import */ var _styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2779);
/* harmony import */ var _styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_UI_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5597);
/* harmony import */ var _data_caseStudiesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(421);





const getStaticPaths = ()=>{
    const paths = _data_caseStudiesData__WEBPACK_IMPORTED_MODULE_3__/* .caseStudies.map */ .Rn.map((item)=>{
        return {
            params: {
                slug: item.slug
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = (context)=>{
    const slug = context.params.slug;
    const data = _data_caseStudiesData__WEBPACK_IMPORTED_MODULE_3__/* .caseStudies.find */ .Rn.find((item)=>item.slug === slug);
    return {
        props: {
            myCase: data
        }
    };
};
const SingleCase = ({ myCase , setHeaderBg  })=>{
    setHeaderBg(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "",
                padding: "150px 0 70px",
                background: "#8EA2FF",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().caseStudySingleContainer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().caseStudySingleImage),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: myCase.image,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().caseStudySingleContent),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: myCase.business
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().problem),
                                    children: "Problem:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: myCase.problem
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                padding: "70px 0",
                background: "#D6E8EB",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().caseStudySingleSub),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().sub1)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().sub),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Solution"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: myCase.solution
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().sub2)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_CaseStudies_module_css__WEBPACK_IMPORTED_MODULE_4___default().sub),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Results"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: myCase.results
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCase);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [5890], () => (__webpack_exec__(8840)));
module.exports = __webpack_exports__;

})();