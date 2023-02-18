exports.id = 7760;
exports.ids = [7760];
exports.modules = {

/***/ 3827:
/***/ ((module) => {

// Exports
module.exports = {
	"boxesContainer": "Boxes_boxesContainer__vFrwi",
	"box": "Boxes_box__kupKG",
	"boxContent": "Boxes_boxContent___Y4Nd",
	"image": "Boxes_image__dWE24"
};


/***/ }),

/***/ 7760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5597);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3235);
/* harmony import */ var _styles_UI_Boxes_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3827);
/* harmony import */ var _styles_UI_Boxes_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_UI_Boxes_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Boxes = ({ title , padding , background , items , desc , width , setPopup  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: title,
        padding: padding,
        background: background,
        children: [
            desc,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_UI_Boxes_module_css__WEBPACK_IMPORTED_MODULE_4___default().boxesContainer),
                children: items.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_UI_Boxes_module_css__WEBPACK_IMPORTED_MODULE_4___default().box),
                        style: {
                            width: `${width ? width : "33%"}`
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_UI_Boxes_module_css__WEBPACK_IMPORTED_MODULE_4___default().boxContent),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_UI_Boxes_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: i.icon,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: i.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: i.desc
                                }),
                                i.href && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    href: i.href,
                                    children: "Learn More"
                                })
                            ]
                        })
                    }, i.title))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginTop: "50px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: `my-button my-button-center`,
                    onClick: ()=>setPopup(true),
                    children: "Get in Touch"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boxes);


/***/ })

};
;