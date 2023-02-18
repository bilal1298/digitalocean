(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP",
	"footerRow": "Footer_footerRow__toXFh",
	"row1": "Footer_row1__lEmMy",
	"logo": "Footer_logo__PM82v",
	"socialIcons": "Footer_socialIcons__GyWll",
	"contact": "Footer_contact__NtJac",
	"quickLinks": "Footer_quickLinks__amyHT",
	"reviews": "Footer_reviews__arEaw",
	"review": "Footer_review__TPuif",
	"form": "Footer_form__YICi7",
	"sitemap": "Footer_sitemap__bXyNZ"
};


/***/ }),

/***/ 5522:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__VYZ3G",
	"scrolled": "Header_scrolled__Mdlwn",
	"active": "Header_active__EB8lX",
	"logoBlue": "Header_logoBlue__EQyXY",
	"logoWhite": "Header_logoWhite__eq_wu",
	"logo": "Header_logo__6vBZG",
	"nav": "Header_nav__F3t74",
	"menu": "Header_menu___mY7M",
	"downArrow": "Header_downArrow__nfxoP",
	"headerButton": "Header_headerButton__FHmqQ",
	"button": "Header_button__4rS9_",
	"subContainer": "Header_subContainer__vcD0B",
	"resourceSubContainer": "Header_resourceSubContainer__els0q",
	"mobileMenuIcon": "Header_mobileMenuIcon__uoSwf",
	"hamIcon": "Header_hamIcon__qcnwh",
	"mobileMenu": "Header_mobileMenu__6nfNW",
	"mobileMenuTopBar": "Header_mobileMenuTopBar__z_HUU",
	"closeIcon": "Header_closeIcon__H45PZ",
	"mobileMenuList": "Header_mobileMenuList__wK7x3",
	"resourcesli": "Header_resourcesli____RlV",
	"resourcesLink": "Header_resourcesLink__rgXhS"
};


/***/ }),

/***/ 4687:
/***/ ((module) => {

// Exports
module.exports = {
	"servicesSubContainer": "ServicesSub_servicesSubContainer__GGzKY",
	"resourcesContainer": "ServicesSub_resourcesContainer__8sGuf",
	"active": "ServicesSub_active__VHDP9",
	"menu": "ServicesSub_menu__jaVp1",
	"menuItems": "ServicesSub_menuItems__Agkeo",
	"menuItem": "ServicesSub_menuItem__mjDJE"
};


/***/ }),

/***/ 2719:
/***/ ((module) => {

// Exports
module.exports = {
	"accordionContainer": "Accordion_accordionContainer__x58S9",
	"title": "Accordion_title__5pdAj",
	"desc": "Accordion_desc__lpzsl"
};


/***/ }),

/***/ 5086:
/***/ ((module) => {

// Exports
module.exports = {
	"imagesContainer": "pages_imagesContainer__xc27k",
	"imageContainer": "pages_imageContainer__I92Cs",
	"sbsImageContainer": "pages_sbsImageContainer__FZTwz",
	"sbsImageContainerI": "pages_sbsImageContainerI__yXHUT",
	"sbsImage": "pages_sbsImage__xBW0g",
	"sbsContent": "pages_sbsContent__kkpro",
	"sbsTitle": "pages_sbsTitle__CmMXA",
	"banner": "pages_banner__qcvQC",
	"heroText": "pages_heroText__27kR3",
	"heroForm": "pages_heroForm__7miXA",
	"form": "pages_form__rFXtX",
	"privacySection": "pages_privacySection__abGCx",
	"cookieWrapper": "pages_cookieWrapper__lTYrn",
	"cookieContainer": "pages_cookieContainer__8kVLF",
	"cookieImage": "pages_cookieImage__85sMv",
	"cookieText": "pages_cookieText__44anr",
	"cookieButton": "pages_cookieButton__YfWZ9"
};


/***/ }),

/***/ 1594:
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
/* harmony import */ var _styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5086);
/* harmony import */ var _styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Cookie = ()=>{
    const cookie = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("Cookies Accepted", "yes");
        setCookies(true);
    };
    const [cookies, setCookies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("Cookies Accepted") && setCookies(true);
        !js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("Cookies Accepted") && setCookies(false);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: !cookies && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieWrapper),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieContainer),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieImage),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Have a cookie :)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/cookie.png",
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieText),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Have a cookie :)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "This website uses cookies to enhance your browsing experience."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().cookieButton),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: cookie,
                                children: "Understood. Yum!"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookie);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7127:
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
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4852);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Footer = ({ uqid , utm , referrer  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: `${(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().footerRow),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().row1),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/illwhite.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().socialIcons),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "https://www.facebook.com/skywarddigitalmarketing",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFacebook,
                                                    style: {
                                                        color: "#002eff"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "https://www.linkedin.com/company/skyward-digital-solutions/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinkedin,
                                                    style: {
                                                        color: "#002eff"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "https://www.instagram.com/skywarddigitalmarketing/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInstagram,
                                                    style: {
                                                        color: "#002eff"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "https://youtube.com/@skywarddigitalmarketing",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faYoutube,
                                                    style: {
                                                        color: "#002eff"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "https://twitter.com/skywardigitalau",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTwitter,
                                                    style: {
                                                        color: "#002eff"
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().contact),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLocationDot,
                                                        style: {
                                                            maxWidth: "18px"
                                                        }
                                                    }),
                                                    "\xa0 Waterman Business Chadstone ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "1341 Dandenong Road, Level 2, UL40, Chadstone Victoria 3148"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "mailto:contact@skywarddigital.com.au",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope,
                                                        style: {
                                                            maxWidth: "18px"
                                                        }
                                                    }),
                                                    "\xa0 contact@skywarddigital.com.au"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "tel:(03) 7043 2364",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPhone,
                                                        style: {
                                                            maxWidth: "18px"
                                                        }
                                                    }),
                                                    "\xa0 (03) 7043 2364"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().quickLinks),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Quick Links"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/digital-marketing-agency-australia",
                                                    children: "Digital Maketing"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/social-media-agency-melbourne",
                                                    children: "Social Media Marketing"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/seo-agency-melbourne",
                                                    children: "SEO"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/ppc-agency-melbourne",
                                                    children: "PPC"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/web-design-melbourne",
                                                    children: "Website Design"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/white-label-agency",
                                                    children: "White Label"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().reviews),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().review),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/meta.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().review),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/microsoft.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().review),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/tiktok.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().review),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/google.png",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            action: "https://crm.zoho.in/crm/WebToLeadForm",
                            name: "WebToLeads433875000000274020",
                            method: "POST",
                            onSubmit: 'javascript:document.charset="UTF-8"',
                            acceptCharset: "UTF-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    name: "xnQsjsdp",
                                    defaultValue: "f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "hidden",
                                    name: "zc_gad",
                                    id: "zc_gad",
                                    defaultValue: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    name: "xmIwtLD",
                                    defaultValue: "9d30a34c942dc338e7b79b92c5d52b788cbdf82b990e41bdc2cf42fdc8285d9c"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    name: "actionType",
                                    defaultValue: "TGVhZHM="
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    name: "returnURL",
                                    defaultValue: `https://skywarddigital.com.au/thank-you${router.asPath}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "title",
                                    children: "Let's Sky-rocket Your Business"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "100% Transparency, No BS, No dodgy stuff. Just pure results."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "Last Name",
                                    id: "Last_Name",
                                    placeholder: "Full Name",
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "Company",
                                    id: "",
                                    placeholder: "Company",
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    name: "Email",
                                    id: "Email",
                                    placeholder: "Email",
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "tel",
                                    name: "Mobile",
                                    id: "Mobile",
                                    placeholder: "Phone Number",
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    id: "LEADCF4",
                                    name: "LEADCF4",
                                    maxLength: "255",
                                    defaultValue: router.asPath
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    id: "LEADCF5",
                                    name: "LEADCF5",
                                    maxlength: "255",
                                    defaultValue: uqid
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    id: "LEADCF6",
                                    name: "LEADCF6",
                                    maxlength: "255",
                                    defaultValue: utm
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    style: {
                                        display: "none"
                                    },
                                    id: "LEADCF7",
                                    name: "LEADCF7",
                                    maxlength: "255",
                                    defaultValue: referrer
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    name: "LEADCF1",
                                    id: "LEADCF1",
                                    defaultValue: "DEFAULT",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "DEFAULT",
                                            disabled: true,
                                            children: "Business Goals"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Help me generate more leads/enquiries",
                                            children: "Help me generate more leads/enquiries"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Help me drive more sales (e-commerce)",
                                            children: "Help me drive more sales (e-commerce)"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Help me build & design my website",
                                            children: "Help me build & design my website"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Help me optimise my customer experience",
                                            children: "Help me optimise my customer experience"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Help me redesign my brand",
                                            children: "Help me redesign my brand"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    style: {
                                        display: "none"
                                    },
                                    id: "Lead_Source",
                                    name: "Lead Source",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "-None-",
                                            children: "-None-"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "Website",
                                            selected: true,
                                            children: "Website"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "formsubmit",
                                    type: "submit",
                                    children: "Let's Talk"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6375:
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
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5522);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ServicesSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _ResourcesSub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6492);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var _UI_Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8611);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _UI_Accordion__WEBPACK_IMPORTED_MODULE_8__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _UI_Accordion__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Header = (props)=>{
    const [menuActive, setMenuActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [serviceActive, setServiceActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [resourceActive, setResourceActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMenuActive(false);
    }, [
        router
    ]);
    const pageIndicator = ()=>{
        if (router.asPath.includes("/digital-marketing-agency-australia") || router.asPath.includes("/seo-agency-melbourne") || router.asPath.includes("/local-seo-melbourne") || router.asPath.includes("/ecommerce-seo-agency") || router.asPath.includes("/international-seo-agency") || router.asPath.includes("/email-marketing-agency") || router.asPath.includes("/ppc-agency-melbourne") || router.asPath.includes("/google-ads-agency") || router.asPath.includes("/social-media-agency-melbourne") || router.asPath.includes("/web-design-melbourne") || router.asPath.includes("/wordpress-web-design") || router.asPath.includes("/ecommerce-website-design") || router.asPath.includes("/business-website-design") || router.asPath.includes("/educational-website-design") || router.asPath.includes("/medical-website-design") || router.asPath.includes("/graphic-design-melbourne") || router.asPath.includes("/logo-design-services") || router.asPath.includes("/copywriting-melbourne") || router.asPath.includes("/white-label-agency") || router.asPath.includes("/white-label-seo-reseller") || router.asPath.includes("/white-label-web-design") || router.asPath.includes("/white-label-ppc-agency") || router.asPath.includes("/white-label-content-writing-services")) {
            return true;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().header)} ${props.offset > 30 ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrolled) : undefined}`,
        style: {
            background: `${props.headerBg ? "#031254" : ""}`
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: `container ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().nav)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/illwhite.png",
                                    alt: "",
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().logoWhite)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/Skyward-Digital-Logo.png",
                                    alt: "",
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().logoBlue)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().menu),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        className: `${router.asPath === "/" && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)}`,
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    onMouseEnter: ()=>setServiceActive(true),
                                    onMouseLeave: ()=>setServiceActive(false),
                                    style: {
                                        marginRight: "10px"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "javascript:void(0)",
                                        className: `${pageIndicator() && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)}`,
                                        children: [
                                            "Services ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/downArrow.png",
                                                alt: "",
                                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().downArrow)
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onMouseEnter: ()=>setResourceActive(true),
                                    onMouseLeave: ()=>setResourceActive(false),
                                    style: {
                                        marginRight: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "javascript:void(0)",
                                            className: `${(router.asPath.includes("/blog") || router.asPath.includes("/case-studies") || router.asPath.includes("/privacy-policy")) && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)}`,
                                            children: [
                                                "Resources ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/downArrow.png",
                                                    alt: "",
                                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().downArrow)
                                                })
                                            ]
                                        }),
                                        resourceActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                                            initial: {
                                                scale: 0,
                                                y: -50
                                            },
                                            animate: {
                                                scale: 1,
                                                y: 0
                                            },
                                            exit: {
                                                scale: 0,
                                                y: -50
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().resourceSubContainer),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResourcesSub__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                setResourceActive: setResourceActive
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/pricing",
                                        className: `${router.asPath.includes("/pricing") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)}`,
                                        children: "Pricing"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerButton),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),
                                        href: "/contact",
                                        children: "Get In Touch"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().mobileMenuIcon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAlignCenter,
                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().hamIcon),
                            onClick: ()=>setMenuActive(true),
                            style: {
                                width: "30px"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
                        children: menuActive && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                            initial: {
                                left: "-100vw"
                            },
                            animate: {
                                left: 0
                            },
                            transition: {
                                type: "stiff"
                            },
                            exit: {
                                left: "-100vw"
                            },
                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().mobileMenu),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().mobileMenuTopBar),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/Skyward-Digital-Logo.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faClose,
                                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().closeIcon),
                                            onClick: ()=>setMenuActive(false),
                                            style: {
                                                color: "#000",
                                                width: "30px"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().mobileMenuList),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            className: `${router.asPath === "/" && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)}`,
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: `${pageIndicator() && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)}`,
                                        children: "Services"
                                    }),
                                    background: "#002eff",
                                    backgroundD: "#EBF5FF",
                                    color: "#fff",
                                    active: pageIndicator(),
                                    desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Digital Marketing"
                                                }),
                                                backgroundD: "#ebebeb",
                                                active: router.asPath.includes("/digital-marketing-agency-australia") || router.asPath.includes("/seo-agency-melbourne") || router.asPath.includes("/local-seo-melbourne") || router.asPath.includes("/ecommerce-seo-agency") || router.asPath.includes("/international-seo-agency") || router.asPath.includes("/email-marketing-agency") || router.asPath.includes("/ppc-agency-melbourne") || router.asPath.includes("/google-ads-agency") || router.asPath.includes("/social-media-agency-melbourne"),
                                                desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/digital-marketing-agency-australia",
                                                            className: router.asPath.includes("/digital-marketing-agency-australia") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                            children: "Digital Marketing"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: "SEO"
                                                            }),
                                                            backgroundD: "#fff",
                                                            active: router.asPath.includes("/seo-agency-melbourne") || router.asPath.includes("/local-seo-melbourne") || router.asPath.includes("/ecommerce-seo-agency") || router.asPath.includes("/international-seo-agency"),
                                                            desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/seo-agency-melbourne",
                                                                            className: router.asPath.includes("/seo-agency-melbourne") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                            children: "SEO"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/local-seo-melbourne",
                                                                            className: router.asPath.includes("/local-seo-melbourne") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                            children: "Local SEO"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/ecommerce-seo-agency",
                                                                            className: router.asPath.includes("/ecommerce-seo-agency") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                            children: "Ecommerce SEO"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/international-seo-agency",
                                                                            className: router.asPath.includes("/international-seo-agency") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                            children: "National/Global SEO"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: "PPC"
                                                            }),
                                                            backgroundD: "#fff",
                                                            active: router.asPath.includes("/ppc-agency-melbourne") || router.asPath.includes("/google-ads-agency") || router.asPath.includes("/social-media-agency-melbourne"),
                                                            desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/ppc-agency-melbourne",
                                                                            className: router.asPath.includes("/ppc-agency-melbourne") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                            children: "PPC"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/social-media-agency-melbourne",
                                                                            className: router.asPath.includes("/social-media-agency-melbourne") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                            children: "Facebook Ads"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: "/google-ads-agency",
                                                                            className: router.asPath.includes("/google-ads-agency") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                            children: "Google Ads"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/email-marketing-agency",
                                                            className: router.asPath.includes("/email-marketing-agency") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                            children: "Email Marketing"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Web Design"
                                                }),
                                                backgroundD: "#ebebeb",
                                                active: router.asPath.includes("/web-design-melbourne") || router.asPath.includes("/wordpress-web-design") || router.asPath.includes("/ecommerce-website-design") || router.asPath.includes("/business-website-design") || router.asPath.includes("/educational-website-design") || router.asPath.includes("/medical-website-design"),
                                                desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/web-design-melbourne",
                                                                className: router.asPath.includes("/web-design-melbourne") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Website Design"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/wordpress-web-design",
                                                                className: router.asPath.includes("/wordpress-web-design") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Wordpress"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/ecommerce-website-design",
                                                                className: router.asPath.includes("/ecommerce-website-design") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Ecommerce"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/business-website-design",
                                                                className: router.asPath.includes("/business-website-design") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Business & Services"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/educational-website-design",
                                                                className: router.asPath.includes("/educational-website-design") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Education"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/medical-website-design",
                                                                className: router.asPath.includes("/medical-website-design") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Health Care"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "White Label"
                                                }),
                                                backgroundD: "#ebebeb",
                                                active: router.asPath.includes("/white-label-agency") || router.asPath.includes("/white-label-seo-reseller") || router.asPath.includes("/white-label-web-design") || router.asPath.includes("/white-label-ppc-agency") || router.asPath.includes("/white-label-content-writing-services"),
                                                desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/white-label-agency",
                                                                className: router.asPath.includes("/white-label-agency") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "White Label"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/white-label-seo-reseller",
                                                                className: router.asPath.includes("/white-label-seo-reseller") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "SEO"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/white-label-web-design",
                                                                className: router.asPath.includes("/white-label-web-design") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Web Design"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/white-label-ppc-agency",
                                                                className: router.asPath.includes("/white-label-ppc-agency") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "PPC"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/white-label-content-writing-services",
                                                                className: router.asPath.includes("/white-label-content-writing-services") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Content Writing"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Design"
                                                }),
                                                backgroundD: "#ebebeb",
                                                active: router.asPath.includes("/graphic-design-melbourne") || router.asPath.includes("/logo-design-services") || router.asPath.includes("/copywriting-melbourne"),
                                                desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/graphic-design-melbourne",
                                                                className: router.asPath.includes("/graphic-design-melbourne") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Graphic Design"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/logo-design-services",
                                                                className: router.asPath.includes("/logo-design-servicese") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Logo Design"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: "/copywriting-melbourne",
                                                                className: router.asPath.includes("/copywriting-melbourne") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                                children: "Content Writing"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Accordion__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Resources"
                                    }),
                                    background: "#002eff",
                                    backgroundD: "#EBF5FF",
                                    color: "#fff",
                                    active: router.asPath.includes("/blog") || router.asPath.includes("/case-studies"),
                                    desc: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().resourcesli),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/blog",
                                                    className: `${router.asPath.includes("/blog") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)} ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().resourcesLink)}`,
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().resourcesli),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/case-studies",
                                                    className: `${router.asPath.includes("/case-studies") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)} ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().resourcesLink)}`,
                                                    children: "Case Studies"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().resourcesli),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/privacy-policy",
                                                    className: `${router.asPath.includes("/privacy-policy") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active)} ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().resourcesLink)}`,
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().mobileMenuList),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/pricing",
                                                className: router.asPath.includes("/pricing") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                children: "Pricing"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/contact",
                                                className: router.asPath.includes("/contact") && (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active),
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
                children: serviceActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                    initial: {
                        scale: 0,
                        y: -150
                    },
                    animate: {
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        scale: 0,
                        y: -150
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().subContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ServicesSub__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        setServiceActive: setServiceActive
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6492:
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
/* harmony import */ var _styles_ServicesSub_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4687);
/* harmony import */ var _styles_ServicesSub_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ServicesSub_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





const ResourcesSub = ({ setResourceActive  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onMouseEnter: ()=>setResourceActive(true),
        onMouseLeave: ()=>setResourceActive(false),
        className: (_styles_ServicesSub_module_css__WEBPACK_IMPORTED_MODULE_4___default().resourcesContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/blog",
                className: router.asPath === "/blog" && (_styles_ServicesSub_module_css__WEBPACK_IMPORTED_MODULE_4___default().active),
                children: "Blog"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/case-studies",
                className: router.asPath === "/case-studies" && (_styles_ServicesSub_module_css__WEBPACK_IMPORTED_MODULE_4___default().active),
                children: "Case Studies"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/privacy-policy",
                className: router.asPath === "/privacy-policy" && (_styles_ServicesSub_module_css__WEBPACK_IMPORTED_MODULE_4___default().active),
                children: "Privacy Policy"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResourcesSub);


/***/ }),

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ServicesSub)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/ServicesSub.module.css
var ServicesSub_module = __webpack_require__(4687);
var ServicesSub_module_default = /*#__PURE__*/__webpack_require__.n(ServicesSub_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/DMSubMenu.jsx





const DMSubMenu = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ServicesSub_module_default()).menuItems,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/seo-agency-melbourne",
                        className: `${router.asPath.includes("/seo-agency-melbourne") && (ServicesSub_module_default()).active} ${(ServicesSub_module_default()).menuItem}`,
                        children: "SEO"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `${router.asPath.includes("/local-seo-melbourne") && (ServicesSub_module_default()).active}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/local-seo-melbourne",
                                    children: "Local SEO"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `${router.asPath.includes("/ecommerce-seo-agency") && (ServicesSub_module_default()).active}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/ecommerce-seo-agency",
                                    children: "Ecommerce SEO"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `${router.asPath.includes("/international-seo-agency") && (ServicesSub_module_default()).active}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/international-seo-agency",
                                    children: "National/Global SEO"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            margin: "20px 0 0"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/email-marketing-agency",
                            className: `${router.asPath.includes("/email-marketing-agency") && (ServicesSub_module_default()).active} ${(ServicesSub_module_default()).menuItem}`,
                            children: "Email Marketing"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/ppc-agency-melbourne",
                        className: `${router.asPath.includes("/ppc-agency-melbourne") && (ServicesSub_module_default()).active} ${(ServicesSub_module_default()).menuItem}`,
                        children: "PPC"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `${router.asPath.includes("/social-media-agency-melbourne") && (ServicesSub_module_default()).active}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/social-media-agency-melbourne",
                                    children: "Facebook Ads"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `${router.asPath.includes("/google-ads-agency") && (ServicesSub_module_default()).active}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/google-ads-agency",
                                    children: "Google Ads"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_DMSubMenu = (DMSubMenu);

;// CONCATENATED MODULE: ./components/WDSubMenu.jsx





const WDSubMenu_DMSubMenu = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ServicesSub_module_default()).menuItems,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/web-design-melbourne",
                    className: `${router.asPath.includes("/web-design-melbourne") && (ServicesSub_module_default()).active} ${(ServicesSub_module_default()).menuItem}`,
                    children: "Web Design"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/wordpress-web-design") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/wordpress-web-design",
                                children: "Wordpress"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/ecommerce-website-design") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/ecommerce-website-design",
                                children: "Ecommerce"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/business-website-design") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/business-website-design",
                                children: "Business & Services"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/educational-website-design") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/educational-website-design",
                                children: "Education"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/medical-website-design") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/medical-website-design",
                                children: "Health Care"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const WDSubMenu = (WDSubMenu_DMSubMenu);

;// CONCATENATED MODULE: ./components/WLSubMenu.jsx





const WLSubMenu_DMSubMenu = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ServicesSub_module_default()).menuItems,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/white-label-agency",
                    className: `${router.asPath.includes("/white-label-agency") && (ServicesSub_module_default()).active} ${(ServicesSub_module_default()).menuItem}`,
                    children: "White Label"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/white-label-seo-reseller") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/white-label-seo-reseller",
                                children: "SEO"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/white-label-web-design") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/white-label-web-design",
                                children: "Web Design"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/white-label-ppc-agency") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/white-label-ppc-agency",
                                children: "PPC"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/white-label-content-writing-services") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/white-label-content-writing-services",
                                children: "Content Writing"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const WLSubMenu = (WLSubMenu_DMSubMenu);

;// CONCATENATED MODULE: ./components/DSubMenu.jsx





const DSubMenu_DMSubMenu = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ServicesSub_module_default()).menuItems,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/graphic-design-melbourne",
                    className: (ServicesSub_module_default()).menuItem,
                    children: "Design"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/graphic-design-melbourne") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/graphic-design-melbourne",
                                children: "Graphic Design"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/logo-design-services") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/logo-design-services",
                                children: "Logo Design"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${router.asPath.includes("/copywriting-melbourne") && (ServicesSub_module_default()).active}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/copywriting-melbourne",
                                children: "Content Writing"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const DSubMenu = (DSubMenu_DMSubMenu);

;// CONCATENATED MODULE: ./components/ServicesSub.jsx









const ServicesSub = (props)=>{
    const router = (0,router_.useRouter)();
    const pageIndicator = ()=>{
        if (router.asPath.includes("/digital-marketing-agency-australia") || router.asPath.includes("/seo-agency-melbourne") || router.asPath.includes("/local-seo-melbourne") || router.asPath.includes("/ecommerce-seo-agency") || router.asPath.includes("/international-seo-agency") || router.asPath.includes("/email-marketing-agency") || router.asPath.includes("/ppc-agency-melbourne") || router.asPath.includes("/google-ads-agency") || router.asPath.includes("/social-media-agency-melbourne")) {
            return "dm";
        } else if (router.asPath.includes("/web-design-melbourne") || router.asPath.includes("/wordpress-web-design") || router.asPath.includes("/ecommerce-website-design") || router.asPath.includes("/business-website-design") || router.asPath.includes("/educational-website-design") || router.asPath.includes("/medical-website-design")) {
            return "wd";
        } else if (router.asPath.includes("/white-label-agency") || router.asPath.includes("/white-label-seo-reseller") || router.asPath.includes("/white-label-web-design") || router.asPath.includes("/white-label-ppc-agency") || router.asPath.includes("/white-label-content-writing-services")) {
            return "wl";
        } else if (router.asPath.includes("/graphic-design-melbourne") || router.asPath.includes("/logo-design-services") || router.asPath.includes("/copywriting-melbourne")) {
            return "d";
        } else {
            return "de";
        }
    };
    const [activeMenu, setActiveMenu] = (0,external_react_.useState)(pageIndicator());
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `container ${(ServicesSub_module_default()).servicesSubContainer}`,
        onMouseEnter: ()=>props.setServiceActive(true),
        onMouseLeave: ()=>props.setServiceActive(false),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ServicesSub_module_default()).menu,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: activeMenu === "dm" || activeMenu === "de" ? (ServicesSub_module_default()).active : undefined,
                            onMouseEnter: ()=>setActiveMenu("dm"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/digital-marketing-agency-australia",
                                className: `${pageIndicator() === "dm" && (ServicesSub_module_default()).active}`,
                                children: "Digital Marketing"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: activeMenu === "wd" ? (ServicesSub_module_default()).active : undefined,
                            onMouseEnter: ()=>setActiveMenu("wd"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/web-design-melbourne",
                                className: `${pageIndicator() === "wd" && (ServicesSub_module_default()).active}`,
                                children: "Web Design"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: activeMenu === "wl" ? (ServicesSub_module_default()).active : undefined,
                            onMouseEnter: ()=>setActiveMenu("wl"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/white-label-agency",
                                className: `${pageIndicator() === "wl" && (ServicesSub_module_default()).active}`,
                                children: "White Label"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: activeMenu === "d" ? (ServicesSub_module_default()).active : undefined,
                            onMouseEnter: ()=>setActiveMenu("d"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/graphic-design-melbourne",
                                className: `${pageIndicator() === "d" && (ServicesSub_module_default()).active}`,
                                children: "Design"
                            })
                        })
                    ]
                })
            }),
            (activeMenu === "dm" || activeMenu === "de") && /*#__PURE__*/ jsx_runtime_.jsx(components_DMSubMenu, {}),
            activeMenu === "wd" && /*#__PURE__*/ jsx_runtime_.jsx(WDSubMenu, {}),
            activeMenu === "wl" && /*#__PURE__*/ jsx_runtime_.jsx(WLSubMenu, {}),
            activeMenu === "d" && /*#__PURE__*/ jsx_runtime_.jsx(DSubMenu, {})
        ]
    });
};
/* harmony default export */ const components_ServicesSub = (ServicesSub);


/***/ }),

/***/ 8611:
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
/* harmony import */ var _styles_UI_Accordion_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2719);
/* harmony import */ var _styles_UI_Accordion_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UI_Accordion_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Accordion = ({ title , desc , background , backgroundD , color , active  })=>{
    const [accordion, setAccordion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(active);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_styles_UI_Accordion_module_css__WEBPACK_IMPORTED_MODULE_5___default().accordionContainer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${accordion ? (_styles_UI_Accordion_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_UI_Accordion_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                    onClick: ()=>setAccordion(!accordion),
                    style: {
                        background: `${accordion ? background : "none"}`,
                        color: `${accordion ? color : "#000"}`
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
                    children: accordion && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
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
                        className: (_styles_UI_Accordion_module_css__WEBPACK_IMPORTED_MODULE_5___default().desc),
                        style: {
                            background: `${accordion ? backgroundD : "none"}`
                        },
                        children: desc
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

/***/ 8754:
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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6375);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7127);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1594);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Cookie__WEBPACK_IMPORTED_MODULE_5__, js_cookie__WEBPACK_IMPORTED_MODULE_6__]);
([_Header__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Cookie__WEBPACK_IMPORTED_MODULE_5__, js_cookie__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Layout = (props)=>{
    const date = new Date();
    const uqid = Number(`${Math.floor(Math.random() * 4000)}${date.getUTCMinutes()}${date.getUTCSeconds()}`);
    const utm = js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get("utm");
    const referrer = js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get("referrer");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: router.pathname !== "/dental-marketing-company" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    offset: props.offset,
                    headerBg: props.headerBg
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    children: props.children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cookie__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    uqid: uqid,
                    utm: utm,
                    referrer: referrer
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5931);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UI_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8754);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7935);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_UI_Layout__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_7__]);
([_components_UI_Layout__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import Loader from "../components/UI/Loader";
// import { motion, AnimatePresence } from "framer-motion";


// function Loading() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&
//       setTimeout(() => {
//         setLoading(false);
//       }, 500);
//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);
//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });
//   return (
//     loading && (
//       <AnimatePresence>
//         <motion.div key={1} exit={{ x: "-100vw" }}>
//           <Loader />
//         </motion.div>
//       </AnimatePresence>
//     )
//   );
// }
function MyApp({ Component , pageProps  }) {
    const [headerBg, setHeaderBg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [myReferrer, setReferrer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        react_gtm_module__WEBPACK_IMPORTED_MODULE_6___default().initialize({
            gtmId: "GTM-TTN55LM"
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const onScroll = ()=>setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setReferrer(document.referrer);
    }, []);
    const date = new Date();
    const uqid = Number(`${Math.floor(Math.random() * 4000)}${date.getUTCMinutes()}${date.getUTCSeconds()}`);
    !js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("token") && js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("token", uqid, {
        expires: 30
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    router.query["utm_source"] && !js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("utm") && js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("utm", router.query["utm_source"], {
        expires: 30
    });
    !js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("referrer") && js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("referrer", myReferrer, {
        expires: 1
    });
    const referrer = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("referrer");
    const utm = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("utm");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        offset: offset,
        headerBg: headerBg,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps,
            setHeaderBg: setHeaderBg,
            uqid: uqid,
            utm: utm,
            referrer: referrer
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5931:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 7935:
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 303:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();