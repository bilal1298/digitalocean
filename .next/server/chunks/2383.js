exports.id = 2383;
exports.ids = [2383];
exports.modules = {

/***/ 5453:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonialContainer": "Testimonials_testimonialContainer__ZMGuZ",
	"testimonialImage": "Testimonials_testimonialImage__i5nYy",
	"testimonialData": "Testimonials_testimonialData__9y9ye",
	"business": "Testimonials_business__OrHRf",
	"readMore": "Testimonials_readMore__EyEkZ",
	"controls": "Testimonials_controls__rjR5l",
	"testimonialPopup": "Testimonials_testimonialPopup__5Ra4_",
	"close": "Testimonials_close__GnNJu",
	"testimonialModal": "Testimonials_testimonialModal__q0eY3",
	"testimonial": "Testimonials_testimonial__URXnG",
	"details": "Testimonials_details__Y5ymQ",
	"businessImage": "Testimonials_businessImage__ELQRe",
	"text": "Testimonials_text__3BL7C",
	"profile": "Testimonials_profile__BAe6Y"
};


/***/ }),

/***/ 2383:
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
/* harmony import */ var _styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5453);
/* harmony import */ var _styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5597);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Testimonials = ({ padding , background , testimonials  })=>{
    const [modalActive, setModalActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UI_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        padding: padding,
        background: background,
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "titleBackground",
            children: "Testimonials"
        }),
        children: [
            modalActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().testimonialPopup),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().testimonialModal),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faClose,
                            className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().close),
                            onClick: ()=>setModalActive(false),
                            style: {
                                width: "30px"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().testimonial),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().details),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().businessImage),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: testimonials[index].business,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().business),
                                                children: testimonials[index].designation
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: testimonials[index].text
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().testimonialContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().testimonialImage),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: testimonials[index].business,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().testimonialData),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: testimonials[index].text.replace(/(.{300})..+/, "$1…")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().readMore),
                                    onClick: ()=>setModalActive(true),
                                    children: "Read More >"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().business),
                                children: testimonials[index].designation
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_5___default().controls),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronLeft,
                                        onClick: ()=>setIndex(index === 0 ? testimonials.length - 1 : index - 1)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faChevronRight,
                                        onClick: ()=>setIndex(index === testimonials.length - 1 ? 0 : index + 1)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;