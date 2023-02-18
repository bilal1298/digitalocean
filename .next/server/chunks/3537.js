exports.id = 3537;
exports.ids = [3537];
exports.modules = {

/***/ 2875:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "ServicesBanner_banner___Sp8F",
	"heroText": "ServicesBanner_heroText__BBCHj",
	"heroForm": "ServicesBanner_heroForm__xnDW_",
	"form": "ServicesBanner_form__xOtpd"
};


/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2875);
/* harmony import */ var _styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const ServicesBanner = ({ title , desc , setPopup , uqid , utm , referrer  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${(_styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().banner)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `container ${(_styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().banner)}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().heroText),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: title
                        }),
                        desc,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `my-button-yellow`,
                            onClick: ()=>setPopup(true),
                            children: "Get in Touch"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().heroForm),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_ServicesBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title",
                                children: "Get a free audit"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "100% Transparency, No BS, No dodgy stuff. Just pure results."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "https://crm.zoho.in/crm/WebToLeadForm",
                                name: "WebToLeads433875000000295017",
                                method: "POST",
                                onSubmit: 'javascript:document.charset="UTF-8"; return checkMandatory433875000000295017()',
                                "accept-charset": "UTF-8",
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
                                        defaultValue: "9d30a34c942dc338e7b79b92c5d52b78f4c59e112b55286ffafb9173cc698082"
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "Last Name",
                                        id: "Last_Name",
                                        placeholder: "Full Name",
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "Website",
                                        id: "Website",
                                        placeholder: "Website URL",
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
                                        maxlength: "255",
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
                                        children: "Talk to a growth guru"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesBanner);


/***/ })

};
;