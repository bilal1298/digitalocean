exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 1706:
/***/ ((module) => {

// Exports
module.exports = {
	"accordionContainer": "AccordionFlip_accordionContainer__Mj_Yd",
	"title": "AccordionFlip_title__MUj7l",
	"desc": "AccordionFlip_desc__59I0f",
	"flipLink": "AccordionFlip_flipLink__Xucyt"
};


/***/ }),

/***/ 2301:
/***/ ((module) => {

// Exports
module.exports = {
	"flipboxContainer": "Flipbox1_flipboxContainer__epJuS",
	"flipboxWrapper": "Flipbox1_flipboxWrapper__iQklm",
	"flipbox": "Flipbox1_flipbox__GWfhx",
	"front": "Flipbox1_front__Sbmxw",
	"image": "Flipbox1_image__Ilesl",
	"back": "Flipbox1_back__MRFca",
	"flipAccordion": "Flipbox1_flipAccordion__uanhN",
	"accordionContainer": "Flipbox1_accordionContainer__StlKs"
};


/***/ }),

/***/ 8:
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
/* harmony import */ var _styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2301);
/* harmony import */ var _styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_FlipboxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _UI_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5597);
/* harmony import */ var _UI_AccordionFlip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_FlipboxItem__WEBPACK_IMPORTED_MODULE_2__, _UI_AccordionFlip__WEBPACK_IMPORTED_MODULE_4__]);
([_UI_FlipboxItem__WEBPACK_IMPORTED_MODULE_2__, _UI_AccordionFlip__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Flipbox = ({ items , background , title , desc , height , width  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UI_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        background: background,
        padding: "70px 0",
        title: title,
        desc: desc,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_5___default().flipboxContainer),
                children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_FlipboxItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title: item.title,
                        desc: item.desc,
                        icon: item.icon,
                        width: width,
                        height: height,
                        href: item.href
                    }, item.title))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_5___default().accordionContainer),
                children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_AccordionFlip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_5___default().flipAccordion),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: item.icon
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: item.title
                                })
                            ]
                        }),
                        background: "#D6E8EB",
                        backgroundD: "",
                        color: "",
                        desc: item.desc,
                        href: item.href
                    }, item.title))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flipbox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2801:
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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1706);
/* harmony import */ var _styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Accordion = ({ title , desc , background , backgroundD , color , href  })=>{
    const [accordion, setAccordion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6___default().accordionContainer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${accordion ? (_styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6___default().active) : ""}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                    onClick: ()=>setAccordion(!accordion),
                    style: {
                        background: `${accordion ? background : "none"}`,
                        color: `${accordion ? color : "#000"}`,
                        marginBottom: `${accordion ? "20px" : "0"}`,
                        position: "relative"
                    },
                    children: [
                        title,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: accordion ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMinus : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPlus,
                            style: {
                                fontSize: "20px",
                                width: "20px"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                    children: accordion && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: "auto"
                        },
                        transition: {
                            duration: 0.2
                        },
                        exit: {
                            height: 0
                        },
                        className: (_styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6___default().desc),
                        style: {
                            background: `${accordion ? backgroundD : "none"}`
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: desc
                            }),
                            href && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                className: (_styles_UI_AccordionFlip_module_css__WEBPACK_IMPORTED_MODULE_6___default().flipLink),
                                href: href,
                                children: "Learn More"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ href , position , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: `my-button ${position === "center" ? "my-button-center" : undefined}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 14:
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
/* harmony import */ var _styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2301);
/* harmony import */ var _styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3235);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FlipboxItem = ({ title , desc , icon , height , width , href  })=>{
    const [flip, setFlip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4___default().flipboxWrapper),
        style: {
            width: `${width ? width : "33%"}`,
            height: `${height ? height : "450px"}`
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4___default().flipbox),
            children: [
                !flip && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4___default().front),
                    onMouseEnter: ()=>setFlip(true),
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.1
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: icon,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: title
                        })
                    ]
                }),
                flip && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: (_styles_UI_Flipbox1_module_css__WEBPACK_IMPORTED_MODULE_4___default().back),
                    onMouseLeave: ()=>setFlip(false),
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.1,
                        delay: 0.1
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: desc
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: href,
                            children: "Learn More"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlipboxItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;