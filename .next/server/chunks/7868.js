"use strict";
exports.id = 7868;
exports.ids = [7868];
exports.modules = {

/***/ 7868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3598);
/* harmony import */ var _styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PopupForm = ({ setPopup , uqid , utm , referrer  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // async function submitHandler(e) {
    //   e.preventDefault();
    //   const formData = {};
    //   Array.from(e.currentTarget.elements).forEach((field) => {
    //     formData[field.name] = field.value;
    //   });
    //   formData["page"] = `${router.pathname}`;
    //   formData["uqid"] = uqid;
    //   fetch("/api/mail", {
    //     method: "post",
    //     body: JSON.stringify(formData),
    //   });
    //   e.currentTarget.reset();
    //   router.push(`/thank-you${router.asPath}`);
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().popupContainer),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().popup),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().heroForm),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faClose,
                            className: (_styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().close),
                            onClick: ()=>setPopup(false),
                            style: {
                                maxWidth: "20px"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_UI_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "title",
                                    children: "Schedule A Free 30 Min. Discovery Call"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    action: "https://crm.zoho.in/crm/WebToLeadForm",
                                    name: "WebToLeads433875000000274020",
                                    method: "POST",
                                    onSubmit: 'javascript:document.charset="UTF-8"',
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
                                            id: "Company",
                                            placeholder: "Business Name",
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
                                            type: "text",
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
                                            name: "LEADCF1",
                                            id: "",
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
                                            children: "Get in Touch"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;