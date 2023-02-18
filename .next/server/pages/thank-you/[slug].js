"use strict";
(() => {
var exports = {};
exports.id = 8300;
exports.ids = [8300];
exports.modules = {

/***/ 6658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9709);
/* harmony import */ var _styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3235);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_serialize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1073);
/* harmony import */ var react_serialize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_serialize__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const slugs = [
    "digital-marketing-agency-australia",
    "seo-agency-melbourne",
    "local-seo-melbourne",
    "ecommerce-seo-agency",
    "international-seo-agency",
    "email-marketing-agency",
    "social-media-agency-melbourne",
    "web-design-melbourne",
    "wordpress-web-design",
    "ecommerce-website-design",
    "business-website-design",
    "educational-website-design",
    "medical-website-design",
    "white-label-agency",
    "white-label-seo-reseller",
    "white-label-web-design",
    "white-label-ppc-agency",
    "blog",
    "case-studies",
    "thank-you",
    "contact",
    "pricing",
    "white-label-content-writing-services",
    "graphic-design-melbourne",
    "logo-design-services",
    "copywriting-melbourne",
    "dental-marketing-company",
    "ppc-agency-melbourne",
    "google-ads-agency"
];
const getStaticPaths = ()=>{
    const paths = slugs.map((item)=>{
        return {
            params: {
                slug: item
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
    const data = slugs.find((item)=>item === slug);
    return {
        props: {
            page: data
        }
    };
};
const ThankYou = ({ setHeaderBg  })=>{
    setHeaderBg(true);
    const blogs = [
        {
            title: "The Benefits of White Label Services for Digital Marketing Agencies",
            slug: "the-benefits-of-white-label-services-for-digital-marketing-agencies",
            desc: (0,react_serialize__WEBPACK_IMPORTED_MODULE_9__.serialize)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "In the digital marketing industry, competition is fierce. Agencies are constantly looking for ways to stand out, grow their client base, and increase revenue. One way to achieve this is by offering white label services to other agencies.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "White label services refer to the practice of one company providing services or products to another company, who then rebrands and sells them as their own. In the case of digital marketing, this could include SEO, PPC, social media marketing, web design and development, and more.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "There are several benefits of white label services for digital marketing agencies:",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/digital marketing.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Increased revenue: White label services provide an additional revenue stream for agencies. By reselling services to other agencies, they can increase their revenue without having to invest in additional resources or staff.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Cost-effective: White label services are often more cost-effective than developing and offering services in-house. Agencies can purchase services at a lower cost and resell them at a markup, generating profit without the added expenses of development and maintenance.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Scalability: White label services allow agencies to scale their services quickly and efficiently. By reselling services, agencies can take on more clients without having to invest in additional resources.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/SCALABLE.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Specialisation: White label services allow agencies to specialise in specific areas of digital marketing. For example, an agency may not have the resources to develop a robust PPC campaign, but by reselling white label PPC services, they can still offer that service to their clients.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Increased credibility: By reselling white label services, agencies can offer a wider range of services to their clients, which can increase their credibility and reputation in the industry.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "However, it's essential to choose the right white label provider. Agencies should thoroughly research potential providers, looking at their experience, reputation, and the quality of their services. By partnering with a reputable white label provider, agencies can ensure that they are offering high-quality services to their clients.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/reputation.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "According to a study by MarketsandMarkets, the global white label services market is expected to grow from $19.4 billion in 2020 to $32.4 billion by 2025, at a CAGR of 10.7%. This growth is driven by the increasing demand for outsourcing and the need for cost-effective solutions.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "In conclusion, white label services offer a range of benefits for digital marketing agencies. They provide an additional revenue stream, are cost-effective, scalable, and allow agencies to specialise in specific areas of digital marketing. By partnering with a reputable white label provider, agencies can ensure that they are offering high-quality services to their clients and increase their credibility in the industry. With the increasing demand for outsourcing and the need for cost-effective solutions, the global white label services market is expected to grow significantly in the coming years."
                        ]
                    })
                ]
            })),
            image: "/The Benefits of White Label Services for Digital Marketing Agencies.jpg",
            excerpt: "In the digital marketing industry, competition is fierce. Agencies are constantly looking for ways to stand out, grow their client base, and increase revenue. One way to achieve this is by offering white label services to other agencies. White label services refer to the practice of one company providing services or products to another company, who then rebrands and sells them as their own. In the case of digital marketing, this could include SEO, PPC, social media marketing, web design and development, and more."
        },
        {
            title: "How to Improve Your PPC Campaigns for Better ROI",
            slug: "how-to-improve-your-ppc-campaigns-for-better-roi",
            desc: (0,react_serialize__WEBPACK_IMPORTED_MODULE_9__.serialize)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Pay-per-click (PPC) advertising is a powerful tool for driving traffic and conversions to your website. However, with so many businesses using PPC advertising, it can be challenging to stand out and achieve a positive return on investment (ROI). In this blog post, we will explore several strategies for improving your PPC campaigns and achieving better ROI.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/Target Audience.jpg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Use Negative Keywords: Negative keywords are keywords that you don't want your ads to show up for. By using negative keywords, you can prevent your ads from being shown to users who are not likely to convert. This can help improve your ROI by reducing the number of irrelevant clicks on your ads.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Test Ad Copy and Landing Pages: PPC advertising is an ongoing process of testing and optimization. By testing different ad copy and landing pages, you can find the combination that generates the highest click-through rate (CTR) and conversion rate. Additionally, by using A/B testing, you can identify which ad copy and landing page elements are most effective.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/Landing Page (1).jpg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Monitor and Analyze Your Campaigns: PPC advertising is data-driven, and it's essential to monitor and analyze your campaigns regularly. By monitoring your campaigns, you can identify which keywords and ad groups are performing well and which are not. Additionally, by analyzing your campaigns, you can identify trends and patterns that can help you make data-driven decisions."
                    ]
                })
            })),
            image: "/How to Improve Your PPC Campaigns for Better ROI.jpg",
            excerpt: "Pay-per-click (PPC) advertising is a powerful tool for driving traffic and conversions to your website. However, with so many businesses using PPC advertising, it can be challenging to stand out and achieve a positive return on investment (ROI). In this blog post, we will explore several strategies for improving your PPC campaigns and achieving better ROI."
        },
        {
            title: "The Role of Social Media in Building Brand Awareness",
            slug: "the-role-of-social-media-in-building-brand-awareness",
            desc: (0,react_serialize__WEBPACK_IMPORTED_MODULE_9__.serialize)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Social media has become an integral part of our daily lives, and it's no surprise that it has also become a crucial component of digital marketing. With over 3 billion active users on social media, it's an excellent platform for businesses to connect with their target audience, build brand awareness, and drive conversions. In this blog post, we will explore the role of social media in building brand awareness and the best practices for creating a successful social media marketing strategy.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "First, it's essential to understand that social media is not just about promoting products or services. It's about building relationships with your audience and creating a community around your brand. By consistently providing valuable content, businesses can establish trust and credibility with their followers, making them more likely to engage with their brand and recommend it to others.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "One of the best ways to build brand awareness on social media is by creating visually appealing content. The use of images and videos can increase engagement and reach, making it more likely that your content will be shared and seen by a larger audience. Additionally, using relevant hashtags and targeting specific demographics can also help increase visibility and reach.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Another important aspect of social media is engaging with your audience. Responding to comments and messages, hosting live Q&A sessions, and running contests and giveaways can not only increase engagement but also foster a sense of community around your brand.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "However, it's essential to remember that social media is not a one-size-fits-all solution. Different platforms have different audiences and purposes, so it's important to understand where your target audience is most active and tailor your content accordingly. For example, Instagram is great for visually-driven content, while LinkedIn is a better platform for B2B marketing.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/Building Relationship.gif"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "According to a recent study by Sprout Social, businesses that use social media for brand awareness see an average of 18% more engagement than those that don't. Furthermore, businesses that actively engage with their audience on social media see a 5.7% increase in website traffic, and a 9.8% increase in conversion rates.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/target audience.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "According to a recent study by Sprout Social, businesses that use social media for brand awareness see an average of 18% more engagement than those that don't. Furthermore, businesses that actively engage with their audience on social media see a 5.7% increase in website traffic, and a 9.8% increase in conversion rates.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/increase in website traffic.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "In conclusion, social media is a powerful tool for building brand awareness, and businesses that use it strategically can see significant benefits in terms of engagement and conversions. By creating visually appealing content, engaging with your audience, and understanding where your target audience is most active, businesses can establish trust and credibility with their followers and increase visibility and reach."
                    ]
                })
            })),
            image: "/The Role of Social Media in Building Brand Awareness.png",
            excerpt: "Social media has become an integral part of our daily lives, and it's no surprise that it has also become a crucial component of digital marketing. With over 3 billion active users on social media, it's an excellent platform for businesses to connect with their target audience, build brand awareness, and drive conversions. In this blog post, we will explore the role of social media in building brand awareness and the best practices for creating a successful social media marketing strategy."
        }
    ];
    const caseStudies = [
        {
            image: "/client logo 61.png",
            slug: "zest-technologies",
            problem: `At Skyward Digital, we specialize in helping companies like SaaS companies increase their website conversions through our Digital Marketing Services. One of our clients Zest Technologies, a provider in the project management space, was facing challenges in converting website visitors into paying customers. They had tried various tactics to improve their website and digital marketing strategy, but nothing seemed to be working.
        
        That's when they contacted us for help. Our team of experts conducted an in-depth analysis of their website, identifying areas that needed improvement and making suggestions for changes. We worked closely with them to redesign their pricing page, simplify their messaging, and improve the overall design of their website. Additionally, we helped them optimize their customer journey to ensure that their website visitors had the best experience possible. Using tools such as heatmap and analytics, we were able to understand user behavior and identify bottlenecks.
         
        We also helped them with their paid advertising campaigns, by creating targeted ads, managing the budget and monitoring the performance. We also did a thorough keyword research and helped them optimize their website's SEO. This helped them reach a larger audience and increase brand awareness.
        
        The results of our efforts were astounding. Within just a few months of working with us, our client's website conversions increased by a staggering 50%. This directly led to a significant increase in their revenue and allowed them to scale their business.
        
        At Skyward Digital, we pride ourselves on providing exceptional service to our clients. Our team is composed of experts in their field who are dedicated to helping our clients achieve their goals. We were always available to answer their questions and provide guidance and support. Our client was impressed with our ability to understand their business and provide valuable insights.
        `
        },
        {
            image: "/Client logo9.png",
            slug: "abstract-creative",
            problem: `At Skyward Digital, we understand the importance of a strong online presence for creative agencies, particularly when it comes to increasing organic traffic. That's why we were excited to work with Abstract Creative, a branding agency that was struggling to increase their organic traffic.`
        },
        {
            image: "/Client logo7.png",
            slug: "protech",
            problem: `We were approached by ProTech Solutions, a B2B software company that specialises in providing a platform for project management. The company had been in business for several years and had a solid customer base, but they were struggling to generate new leads and increase their revenue. They had been using Google Ads for a while but were not seeing the results they were expecting. They were looking for a solution to improve their online presence and generate more leads at a lower cost.
     
        The company had been in business for several years and had a solid customer base, but they were struggling to generate new leads and increase their revenue. They had been using Google Ads for a while but were not seeing the results they were expecting. They were looking for a solution to improve their online presence and generate more leads at a lower cost.
         
        The main problem was that the company's cost per lead was too high, and their conversion rate was low. They were not reaching their target audience effectively and needed to improve their campaign. Their website was not generating enough traffic and they were not appearing on the first page of Google search results. Their cost per lead was high, and they were not seeing a good return on their investment.
        `
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "robots",
                    content: "noindex"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().thankYouSection),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "titleBackground",
                                children: "Thank You"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "subtitle",
                            children: "We have received your contact details. We'll get back to you shortly. In the meantime, check out some online marketing case studies and blogs."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            href: "/",
                            position: "center",
                            children: "Back To Home"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().caseStudies),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "title",
                            children: [
                                "Case ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "titleBackground",
                                    children: "Studies"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                            className: "caseStudiesSwiper",
                            style: {
                                padding: "35px"
                            },
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                                swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
                            ],
                            spaceBetween: 50,
                            slidesPerView: 3,
                            navigation: true,
                            autoplay: {
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            },
                            breakpoints: {
                                320: {
                                    slidesPerView: 1
                                },
                                576: {
                                    slidesPerView: 2
                                },
                                991: {
                                    slidesPerView: 3
                                }
                            },
                            children: caseStudies.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().caseStudy),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item.image,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: JSON.stringify(item.problem).replace(/(.{150})..+/, "$1…")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().readMore),
                                                href: `/case-study/${item.slug}`,
                                                children: "Read More >"
                                            })
                                        ]
                                    })
                                }, item.slug))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().blogSection),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "titleBackground",
                                children: "Blog"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().blogs)}`,
                            children: blogs.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().blog),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().blogImage),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().blogTitle),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().excerpt),
                                                    children: item.excerpt.replace(/(.{300})..+/, "$1…")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                className: (_styles_ThankYou_module_css__WEBPACK_IMPORTED_MODULE_10___default().readMore),
                                                href: `/blog/${item.slug}`,
                                                children: "Read More >"
                                            })
                                        })
                                    ]
                                }, item.title))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThankYou);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1073:
/***/ ((module) => {

module.exports = require("react-serialize");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7634], () => (__webpack_exec__(6658)));
module.exports = __webpack_exports__;

})();