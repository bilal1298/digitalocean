exports.id = 8159;
exports.ids = [8159];
exports.modules = {

/***/ 5256:
/***/ ((module) => {

// Exports
module.exports = {
	"faqRow": "Faqs_faqRow__HHrVf",
	"faqCol": "Faqs_faqCol__pPz67",
	"title": "Faqs_title__os8V3",
	"active": "Faqs_active__oT6z8",
	"desc": "Faqs_desc__9hELN"
};


/***/ }),

/***/ 8159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5256);
/* harmony import */ var _styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Faqs = ({ faqs , background , color  })=>{
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [accordion, setAccordion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const divide = Math.ceil(faqs.length / 2) - 1;
    //   const col1 = [];
    //   const col2 = [];
    //   for (let i = 0; i < divide; i++) {
    //     col1.push(faqs[i]);
    //   }
    //   for (let i = divide; i < faqs.length; i++) {
    //     col2.push(faqs[i]);
    //   }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().faqRow),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().faqCol),
                children: faqs.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                        children: i <= divide && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${index === i && (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().active)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                                    onClick: ()=>setIndex(index === i ? false : i),
                                    style: {
                                        background: `${accordion ? background : "none"}`,
                                        color: `${accordion ? color : "#000"}`,
                                        marginBottom: `${accordion ? "20px" : "0"}`
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                            icon: index === i ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMinus : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlus,
                                            style: {
                                                fontSize: "20px",
                                                maxWidth: "20px"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                                    children: i === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        className: (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().desc),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: item.desc
                                        })
                                    })
                                })
                            ]
                        })
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().faqCol),
                children: faqs.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: i > divide && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${index === i && (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().active)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                                    onClick: ()=>setIndex(index === i ? false : i),
                                    style: {
                                        background: `${accordion ? background : "none"}`,
                                        color: `${accordion ? color : "#000"}`,
                                        marginBottom: `${accordion ? "20px" : "0"}`
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                            icon: index === i ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMinus : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlus,
                                            style: {
                                                fontSize: "20px",
                                                maxWidth: "20px"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                                    children: i === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        className: (_styles_UI_Faqs_module_css__WEBPACK_IMPORTED_MODULE_5___default().desc),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: item.desc
                                        })
                                    })
                                })
                            ]
                        })
                    }))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faqs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;