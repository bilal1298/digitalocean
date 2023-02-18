"use strict";
(() => {
var exports = {};
exports.id = 4070;
exports.ids = [4070];
exports.modules = {

/***/ 2139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 1931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mail = __webpack_require__(2139);
mail.setApiKey(process.env.SENDGRID_API_KEY);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    const body = JSON.parse(req.body);
    let message = ``;
    for (const [key, value] of Object.entries(body)){
        message = message.concat(`${key}: ${value}\n`);
    }
    // "sanam@skywarddigital.com.au", "ash.v@skywarddigital.com.au", "dev@skywarddigital.com.au", body["page"] != "/dental-marketing-company" && "shaun@skywarddigital.com.au"
    const data = {
        to: [
            "sanam@skywarddigital.com.au"
        ],
        from: "contact@skywarddigital.com.au",
        subject: "New message from form",
        text: message,
        html: message.replace(/\n/g, "<br>")
    };
    let userMessage;
    if (body["page"] === "/seo-agency-melbourne" || body["page"] === "/local-seo-melbourne" || body["page"] === "/ecommerce-seo-agency" || body["page"] === "/international-seo-agency") {
        userMessage = `
Hey ${body["Full Name"]}\n
Thanks for signing up for a 30 min. obligation-free strategy session with us. Our team has started working on a comprehensive SEO audit of your business, industry and competition and will get in touch with you soon to schedule a time with you.\n
Here's what you can expect from the call:\n
1. We will provide you with a thorough walk through of your current SEO presence, your competition, and opportunities.\n
2. Our team will present you with a detailed break-down of our SEO solutions that will enable you to grow your business in a safe and effective manner.\n
3. They will also explain in detail about how our pricing works.\n
Looking forward to connecting with you.\n
Best,\n
Ashley V.\n
`;
    } else if (body["page"] === "/web-design-melbourne" || body["page"] === "/wordpress-web-design" || body["page"] === "/ecommerce-website-design" || body["page"] === "/business-website-design" || body["page"] === "/educational-website-design" || body["page"] === "/medical-website-design") {
        userMessage = `
Hey ${body["Full Name"]}\n
Thanks for showing interest in our web design and development services. Skyward Digital provides end-to-end web design, development, deployment and hosting services. Our team will contact you shortly to gain a thorough understanding of your needs and then recommend the best platform and solutions to achieve them.\n
Here's what you can expect from the call:\n
1. We will do a holistic review of your requirements.\n
2. Our team will present you with various options and recommend a solution that's the best for your business.\n
3. Detailed break-down of our pricing.\n
Looking forward to connecting with you.\n
Best,\n
Ashley V.\n
`;
    } else if (body["page"] === "/dental-marketing-company") {
        userMessage = `
Hey ${body["Full Name"]}
Thanks for showing interest in our one-of-its-kind guaranteed new patients program called the "Patient Booking Promise." When you sign up for this program, we deliver you a certain number of new patients every month, and if we don't book the promised quota, we'll give you a full refund of our fees for that month.
Here's what you can expect from the call:
1. We will provide you with a thorough walk through of your current online presence, your competition, and opportunities.
2. We'll explain how the PBP (Patient Booking Promise) works in detail.
3. Details about our pricing for the program.
Looking forward to amplifying your dental practice growth via a steady flow of new patient bookings every month.
Best,
Ashley V.
    `;
    } else if (body["page"] === "/ppc-agency-melbourne") {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for signing up for a 30 min. obligation-free PPC strategy session with us. Our team has started working on a comprehensive audit of your business, industry and competition and will get in touch with you soon to schedule a time with you.\n
Here's what you can expect from the call:\n
1. We will provide you with a thorough audit of your current PPC advertising program, your competition, and opportunities.\n
2. Our team will present you with a detailed break-down of our PPC advertising solutions that will enable you to grow your business and ensure a profitable ROI for your investment.\n
3. They will also explain in detail about how our pricing works.\n
Looking forward to revolutionizing your paid search and social marketing!\n
Best,\n
Ashley V.\n
    `;
    } else if (body["page"] === "/social-media-agency-melbourne") {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for signing up for a 30 min. obligation-free social media strategy session with us. Our team has started working on a comprehensive audit of your business, industry and competition and will get in touch with you soon to schedule a time with you.\n
Here's what you can expect from the call:\n
1. We will provide you with a thorough walk through of your current social presence, your competition, and opportunities.\n
2. Our team will present you with a detailed break-down of our social media marketing solutions that will enable you to grow your business and ensure a profitable ROI for your investment.\n
3. They will also explain in detail about how our pricing works.\n
Looking forward to revolutionizing your paid social marketing!\n
Best,\n
Ashley V.\n
    `;
    } else if (body["page"] === "/google-ads-agency") {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for signing up for a 30 min. obligation-free Google Ads strategy session with us. Our team has started working on a comprehensive audit of your business, industry and competition and will get in touch with you soon to schedule a time with you.\n
Here's what you can expect from the call:\n
1. We will provide you with a thorough audit of your current advertising program, your competition, and opportunities.\n
2. Our team will present you with a detailed break-down of our Google Ads solutions that will enable you to grow your business and ensure a profitable ROI for your investment.\n
3. They will also explain in detail about how our pricing works.\n
Looking forward to revolutionizing your paid search marketing!\n
Best,\n
Ashley V.\n
    `;
    } else if (body["page"] === "/email-marketing-agency") {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for signing up for a 30 min. obligation-free email marketing strategy session with us. Our team has started working on a comprehensive audit of your business, industry and competition and will get in touch with you soon to schedule a time with you.\n
Here's what you can expect from the call:\n
1. We will do a holistic review of your requirements.\n
2. Our team will present you with various options and recommend solutions that are the best for your business.\n
3. Detailed break-down of our pricing.\n
Looking forward to revolutionizing your email marketing strategy!\n
Best,\n
Ashley V.\n
`;
    } else if (body["page"] === "/graphic-design-melbourne") {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for showing interest in our graphic design services. Skyward Digital provides end-to-end design dolutions, ranging from web design and email design to logo, packaging and social media designs. Our team will contact you shortly to gain a thorough understanding of your needs.\n
Here's what you can expect from the call:\n
1. We will do a holistic review of your requirements.\n
2. Our team will walk you through our stage-wise design process and the timelines involved at each stage.\n
3. We'll explain how our service is priced.\n
Looking forward to reinventing your brand!\n
Best,\n
Ashley V.\n
    `;
    } else if (body["page"] === "/logo-design-services") {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for showing interest in our logo design services. Our team will contact you shortly to gain a thorough understanding of your needs.\n
Here's what you can expect from the call:\n
1. We will do a holistic review of your requirements.\n
2. Our team will walk you through our stage-wise logo design process and the timelines involved.\n
3. We'll explain how our service is priced.\n
Looking forward to reinventing your brand!\n
Best,\n
Ashley V.\n
    `;
    } else if (body["page"] === "/copywriting-melbourne") {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for showing interest in our content writing services. Skyward Digital provides end-to-end content dolutions, ranging from website content and emails to blogs, PRs and newsletters. Our team will contact you shortly to gain a thorough understanding of your needs.\n
Here's what you can expect from the call:\n
1. We will do a holistic review of your requirements.\n
2. Our team will walk you through our stage-wise content writing process and the timelines involved.\n
3. We'll explain how our flat pricing model per word works.\n
Looking forward to speaking with you.\n
Best,\n
Ashley V.\n
    `;
    } else if (body["page"] === "/pricing") {
        body["page"] === "/pricing" && body["Business Goals"] === "White Label Services" ? userMessage = `
Thanks for showing interest in our services. Here's a link to our marketing rate card - <a href='https://www.dropbox.com/s/fm1guz81z008d83/Skyward%20white%20label.pdf?dl=0'>Download Now</a> \n
If you want to get in touch with someone from our sales team, please call us on (03) 7043 2364 (between 9 AM to 6 PM) \n
Best,\n
Team Skyward Digital\n
` : userMessage = `   
Thanks for showing interest in our services. Here's a link to our marketing rate card - <a href='https://www.dropbox.com/s/u8aeth60o1wtynp/B2C%20Skyward.pdf?dl=0'>Download Now</a>  \n
If you want to get in touch with someone from our sales team, please call us on (03) 7043 2364 (between 9 AM to 6 PM) \n
Best,\n
Team Skyward Digital\n`;
    } else {
        userMessage = `
Hey ${body["Full Name"]} \n
Thanks for signing up for a 30 min. obligation-free strategy session with us. Our team has started working on a comprehensive audit of your business, industry and competition and will get in touch with you soon to schedule a time with you.\n
Here's what you can expect from the call:\n
1. We will provide you with a thorough walk through of your current online presence, your competition, and opportunities.\n
2. Our team will present you with solutions that will enable you to grow your business through the right online channels.\n
3. They will also explain how our pricing works for each service.\n
Looking forward to connecting with you.\n
Best,\n
Ashley V.\n
`;
    }
    const user = {
        to: `${body["Email"]}`,
        from: "contact@skywarddigital.com.au",
        subject: "New messge from Skyward Digital",
        text: userMessage,
        html: userMessage.replace(/\n/g, "<br>")
    };
    mail.send(data);
    mail.send(user);
    res.status(200).json({
        status: "Ok"
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1931));
module.exports = __webpack_exports__;

})();