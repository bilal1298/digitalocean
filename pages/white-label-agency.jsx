import React, { useState } from "react";
import classes from "../styles/whitelabel.module.css";
import Section from "../components/UI/Section";
import Faqs from "../components/UI/Faqs";
import Button from "../components/UI/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopupFormWl from "../components/UI/PopupFormWl";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Whitelabel = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const [popup, setPopup] = useState(false);
  const router = useRouter();
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | White Label Marketing Agency",
    url: "https://skywarddigital.com.au/white-label-agency",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Offer top-notch marketing services to your clients with Skyward Digital's white label solutions. Contact us today to learn how we can help you grow your agency.",
    priceRange: "AUD",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      ratingCount: 313,
      bestRating: 5,
      worstRating: 3,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Waterman Business Chadstone, 1341 Dandenong Road, Level 2, UL40",
      addressLocality: "Chadstone",
      addressRegion: "Victoria",
      postalCode: "3148",
      addressCountry: "Australia",
    },
    telephone: "(03)70432364",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.88563368049739,
      longitude: 145.0827093593359,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "(03)70432364",
        contactType: "customer support",
        areaServed: ["AU"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "(03)70432364",
        contactType: "technical support",
        areaServed: ["AU"],
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/skywarddigitalmarketing",
      "https://twitter.com/skywardigitalau",
      "https://www.linkedin.com/company/skyward-digital-solutions/",
      "https://www.instagram.com/skywarddigitalmarketing/",
      "https://youtube.com/@skywarddigitalmarketing",
    ],
  };
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What Is A White Label Agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White Label Agency refers to a company that provides services under another company's brand name. In this case, Skyward Digital provides various digital marketing services such as SEO, PPC, Website Design, and Content Writing as a White Label solution for other agencies.",
        },
      },
      {
        "@type": "Question",
        name: "Why Should My Agency Use White Label Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White Label Services are a great solution for agencies looking to expand their service offerings without the added burden of hiring and training additional staff. By partnering with Skyward Digital, your agency can offer high-quality digital marketing services to your clients without sacrificing time and resources.",
        },
      },
      {
        "@type": "Question",
        name: "How Does Your White Label Service Work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our White Label Service is simple and straightforward. You can use our services as your own and present them to your clients as if they were done in-house. Our team will work behind the scenes to provide you with the best results, freeing up your time and resources.",
        },
      },
      {
        "@type": "Question",
        name: "How Much Do Your White Label Services Cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our pricing varies depending on the service you choose. Our SEO services start at $750/month, PPC is $300/month, Website Design starts at $750, and content writing is flat 20 cents/word. With Skyward Digital, you'll receive high-quality services at an affordable price, making it easy for you to expand your service offerings and grow your business.",
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/white-label-agency" />
        <title>Skyward Digital | White Label Marketing Agency</title>
        <meta name="title" content="Skyward Digital | White Label Marketing Agency" />
        <meta
          name="description"
          content="Offer top-notch marketing services to your clients with Skyward Digital's white label solutions. Contact us today to learn how we can help you grow your agency."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
        <Schema jsonSchema={FAQ_SCHEMA}></Schema>
      </Head>
      {popup && <PopupFormWl setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">Grow Your Agency Faster With White Label Web Design, Seo, Google Ads, Facebook Ads, Linkedin Ads, Microsoft Ads And Tiktok Ads</h1>
            <br />
            <p>Skyward’s hassle-free white label services enable agencies to scale up profitably.</p>
            <br />
            <Link href={"#pricing"} className={"my-button-yellow"}>
              EXPLORE PLANS & PRICING
            </Link>
          </div>
          <div className={classes.heroForm}>
            <div className={classes.form}>
              <h3 className="title">Get a free audit</h3>
              <p>100% Transparency, No BS, No dodgy stuff. Just pure results.</p>
              <form
                action="https://crm.zoho.in/crm/WebToLeadForm"
                name="WebToLeads433875000000295017"
                method="POST"
                onSubmit='javascript:document.charset="UTF-8"; return checkMandatory433875000000295017()'
                accept-charset="UTF-8"
              >
                <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3" />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="9d30a34c942dc338e7b79b92c5d52b78f4c59e112b55286ffafb9173cc698082" />
                <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
                <input type="text" style={{ display: "none" }} name="returnURL" defaultValue={`https://skywarddigital.com.au/thank-you${router.asPath}`} />
                <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name" required />
                <input type="text" name="Company" id="Company" placeholder="Business Name" required />
                <input type="email" name="Email" id="Email" placeholder="Email" required />
                <input type="tel" name="Mobile" id="Mobile" placeholder="Phone Number" required />
                <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxlength="255" defaultValue={router.asPath} />
                <input type="text" style={{ display: "none" }} id="LEADCF5" name="LEADCF5" maxlength="255" defaultValue={uqid} />
                <input type="text" style={{ display: "none" }} id="LEADCF6" name="LEADCF6" maxlength="255" defaultValue={utm} />
                <input type="text" style={{ display: "none" }} id="LEADCF7" name="LEADCF7" maxlength="255" defaultValue={referrer} />
                <select name="LEADCF2" id="LEADCF2" defaultValue={"DEFAULT"} required>
                  <option value="DEFAULT" disabled>
                    Service You’re Interested In
                  </option>
                  <option value="Digital&#x20;Marketing">Digital Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Social&#x20;Media&#x20;Marketing">Social Media Marketing</option>
                  <option value="PPC&#x20;Ads">PPC Ads</option>
                  <option value="Web&#x20;Design">Web Design</option>
                  <option value="Email&#x20;Marketing">Email Marketing</option>
                  <option value="Graphic&#x20;Design">Graphic Design</option>
                </select>
                <select style={{ display: "none" }} id="Lead_Source" name="Lead Source">
                  <option value="-None-">-None-</option>
                  <option value="Website" selected>
                    Website
                  </option>
                </select>
                <button id="formsubmit" type="submit">
                  Get in Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Section padding={"10px 0"} background={"#ededed"}>
        <div className={classes.partnerLogo}>
          <img src={"/meta.png"} alt="" style={{ width: "15%" }} />
          <img src={"/microsoft.png"} alt="" />
          <img src={"/tiktok.png"} alt="" />
          <img src={"/google.png"} alt="" style={{ width: "12%" }} />
        </div>
      </Section>
      <Section
        title={
          <>
            Trusted By <span className="titleBackground">700+ Clients</span> Across The World
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p}>Supporting agencies from N. America and Europe to Asia and Australia in hundreds of industries and niches.</p>

        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Section
        title={
          <>
            <span className="titleBackground">Industry-Leading</span> White Label Services And Peerless Support
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <div className={classes.industryBoxes}>
          <div className={classes.industryBox}>
            <h3>100% Australia Managed</h3>
            <p>Provide your clients with superior-quality services with our 100% Australia managed team.</p>
            <img src={"/australia managed.png"} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Seamless Communication</h3>
            <p>Our experts are always available on Slack for you. We pride ourselves on our lightning-quick response times and after hour support.</p>
            <img src={"/seamless communication.png"} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>No Hogwash</h3>
            <p>We don’t do contracts, setup fees, or hidden costs.</p>
            <img src={"/No hogwash.png"} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Battle-tested Strategies</h3>
            <p>Get the most effective and innovative white label services for your clients.</p>
            <img src={"/battle tested white label strategies.png"} alt="" />
          </div>
        </div>
        <Button href="#pricing" position={"center"}>
          EXPLORE PLANS & PRICING
        </Button>
      </Section>
      <Section
        title={
          <>
            <span className="titleBackground">Make More Money With Less Work</span> And Have Happy Clients
          </>
        }
        padding={"70px 0"}
        background={"#dde3ff"}
      >
        <div className={classes.whiteLabelBoxes}>
          <div className={classes.whiteLabelBox}>
            <h3>White Label SEO</h3>
            <p>Transform business success with customized, efficient, and expert white label SEO solutions.</p>
            <Button href="/white-label-seo-reseller">Learn More</Button>
          </div>
          <div className={classes.whiteLabelBox}>
            <h3>White Label PPC</h3>
            <p>Maximize ROI, streamline operations and save time with white label PPC solutions tailored to your clients' needs.</p>
            <Button href="/white-label-ppc-agency">Learn More</Button>
          </div>
          <div className={classes.whiteLabelBox}>
            <h3>White Label Web Design</h3>
            <p>Deliver exceptional results for clients with reliable, custom, high-quality white label web design and development.</p>
            <Button href="/white-label-web-design">Learn More</Button>
          </div>
          <div className={classes.whiteLabelBox}>
            <h3>White Label Content Writing</h3>
            <p>Transform your clients' online presence with compelling, engaging and affordable white label content writing.</p>
            <Button href="/white-label-content-writing-services">Learn More</Button>
          </div>
        </div>
      </Section>
      <Section
        title={
          <>
            <span className="titleBackground">Ready To Take The First Step</span> Towards Scaling Your Agency?
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p}>Agencies face many difficult dilemmas, but partnering with us shouldn't be one of them.</p>
        <div className={classes.agencyBoxes}>
          <div className={classes.agencyBox}>
            <h3>Agency Growth</h3>
            <p>Grow and scale your agency with our Australia-managed team, supercharged client support, and industry-leading SOPs.</p>
            <img src={"/agency growth.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Client Growth</h3>
            <p>You'll receive the credit and be the hero to your clients with our behind-the-scenes work.</p>
            <img src={"/client growth.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Full Support</h3>
            <p>Partnering with us provides you access to our full, Australia-managed team of leadership and specialists.</p>
            <img src={"/full support.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Stress Free</h3>
            <p>White label is a no brainer. No in-house hassles, training, raises, bonuses, benefits, taxes, or other headaches.</p>
            <img src={"/stress free.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>100% Discreet</h3>
            <p>We sign iron-clad NDAs with clients to ensure your peace of mind. Customer poaching is just not us.</p>
            <img src={"/discreet white label services.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Reporting Dashboards</h3>
            <p>Live, white labeled reporting dashboards to stay on top of all important metrics.</p>
            <img src={"/white label reporting.png"} alt="" />
          </div>
        </div>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <div id="pricing"></div>
      <Section
        padding={"70px 0"}
        background={"#D6E8EB"}
        title={
          <>
            <span className="titleBackground">Pricing</span>
          </>
        }
        color={"#000"}
      >
        <Swiper
          className="pricingSwiper"
          style={{ padding: "35px" }}
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={classes.pricingCard}>
              <div className={classes.container}>
                <div className={classes.detail}>
                  <div className={classes.shape}>
                    <img src={"/webdesign.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>Web Design</h3>
                  <ul>
                    <li>HTML</li>
                    <li>Wordpress</li>
                    <li>PHP</li>
                    <li>React</li>
                    <li>Laravel</li>
                    <li>Shopify</li>
                    <li>Wix</li>
                    <li>Magento</li>
                    <li>Woocommerce</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $750
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.pricingCard}>
              <div className={classes.container}>
                <div className={classes.detail}>
                  <div className={classes.shape}>
                    <img src={"/seo.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>SEO</h3>
                  <ul>
                    <li>Local SEO</li>
                    <li>Global SEO</li>
                    <li>Ecommerce SEO</li>
                    <li>Manual Outreach</li>
                    <li>Link Building</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $750
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.pricingCard}>
              <div className={classes.container}>
                <div className={classes.detail}>
                  <div className={classes.shape}>
                    <img src={"/ppc.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>PPC</h3>
                  <ul>
                    <li>Google Ads</li>
                    <li>Microsoft Ads</li>
                    <li>Facebook Ads</li>
                    <li>Instagram Ads</li>
                    <li>Linkedin Ads</li>
                    <li>Quora Ads</li>
                    <li>Tiktok Ads</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $400
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.pricingCard}>
              <div className={classes.container}>
                <div className={classes.detail}>
                  <div className={classes.shape}>
                    <img src={"/content writing.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>Content Writing</h3>
                  <ul>
                    <li>Website Content</li>
                    <li>Blog Content</li>
                    <li>Landing Page Content</li>
                    <li>Resume Writing</li>
                    <li>Email Content</li>
                    <li>Newsletters</li>
                    <li>Press Releases</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    Flat 20 Cents/word
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Section>
      <Section
        title={
          <>
            Don’t Leave Your <span className="titleBackground">Revenue Goals</span> Drifting Through The Galaxy To Infinity And Beyond.
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p} style={{ marginBottom: "50px" }}>
          Our crew of trusted flight commanders are on a mission to help businesses like yours.
        </p>
        <div className={classes.revenueGoals}>
          <img src={"/Don’t Leave Your Revenue Goals.png"} alt="" />
        </div>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Section title={<span className="titleBackground">FAQs</span>} padding={"70px 0"} background={"#fff"}>
        <Faqs
          faqs={[
            {
              title: "What Is A White Label Agency?",
              desc: (
                <>
                  White Label Agency refers to a company that provides services under another company's brand name. In this case, Skyward Digital provides various digital marketing services such as
                  SEO, PPC, Website Design, and Content Writing as a White Label solution for other agencies.
                </>
              ),
            },
            {
              title: "Why Should My Agency Use White Label Services?",
              desc: (
                <>
                  White Label Services are a great solution for agencies looking to expand their service offerings without the added burden of hiring and training additional staff. By partnering with
                  Skyward Digital, your agency can offer high-quality digital marketing services to your clients without sacrificing time and resources.
                </>
              ),
            },
            {
              title: "How Does Your White Label Service Work?",
              desc: (
                <>
                  Our White Label Service is simple and straightforward. You can use our services as your own and present them to your clients as if they were done in-house. Our team will work behind
                  the scenes to provide you with the best results, freeing up your time and resources.
                </>
              ),
            },
            {
              title: "How Much Do Your White Label Services Cost?",
              desc: (
                <>
                  Our pricing varies depending on the service you choose. Our SEO services start at $750/month, PPC is $300/month, Website Design starts at $750, and content writing is flat 20
                  cents/word. With Skyward Digital, you'll receive high-quality services at an affordable price, making it easy for you to expand your service offerings and grow your business.
                </>
              ),
            },
          ]}
        ></Faqs>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
    </React.Fragment>
  );
};

export default Whitelabel;
