import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import TypesOfWeb from "../components/ServicesPage/TypesOfWeb";
import TrustedBy from "../components/HomePage/TrustedBy";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import Portfolio from "../components/ServicesPage/Portfolio";
import PopupFormWeb from "../components/UI/PopupFormWeb";
import classes from "../styles/pages.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Websitedesign = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);

  const testimonials = [
    {
      designation: "Olivia Wilson Fashion Boutique",
      text: "Skyward Digital's website design team transformed our online presence in ways we never thought possible. As a small fashion boutique, we were looking for a website that truly reflected our unique style and effectively showcased our products. The team at Skyward Digital went above and beyond in creating a website that exceeded our expectations. Their attention to detail and ability to understand our vision was outstanding. We now have a website that not only looks beautiful but also effectively drives sales and helps us stand out from the competition. We couldn't be happier with the results and would highly recommend their services to any business looking to revamp their online presence.",
      business: "/client logo43.png",
    },
    {
      designation: "Abstract Creative",
      text: "The team at Skyward Digital exceeded our expectations with their website design services. As a B2B service provider, our website is the first impression for potential clients, and it was important that it effectively communicated our expertise and services. The Skyward Digital team delivered a sleek and professional website that is not only visually stunning but also user-friendly, making it easy for potential clients to navigate and find the information they need. We've received numerous compliments on our new website and are already seeing a positive impact on our business. The attention to detail and ability to understand our vision was outstanding.",
      business: "/Client logo9.png",
    },
    {
      designation: "Lowes Food",
      text: "Skyward Digital's website team was a game-changer for our e-commerce store. Their ability to understand our brand, target market and our specific needs allowed them to create a website that not only looks great but also effectively converts visitors into customers. Their attention to detail and ability to work within our budget was outstanding. We're seeing a significant increase in online sales and are thrilled with the results. Their customer service and support throughout the entire process was exceptional. We would highly recommend their services to any e-commerce business looking to improve their online presence and boost sales.",
      business: "/client logo 3.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Wordpress",
      desc: "WordPress powers 43% of websites globally. Its CMS quickly allows you to create and update content. And with thousands of unique themes, you'll soon be soaring.",
      icon: "/wordpress.png",
      href: "/contact",
    },
    {
      title: "Shopify",
      desc: "With Shopify's low costs and user-friendly platform, you can start selling online quickly. And Shopify effortlessly integrates with your store, other marketplaces and social media.",
      icon: "/shopify.png",
      href: "/contact",
    },
    {
      title: "Woocommerce",
      desc: "99% of all WordPress stores are run by WooCommerce. It’s great for beginners setting up eCommerce on their website as it’s easy to use and flexible",
      icon: "/woocommerce.png",
      href: "/contact",
    },
    {
      title: "Magento",
      desc: "Magento offers multicurrency and multilingual eCommerce websites. From local traders to large companies, Magento enables design flexibility to create the perfect digital customer experience.",
      icon: "/magento.png",
      href: "/contact",
    },
    {
      title: "Wix",
      desc: "Wix is a flexible, custom website builder. With attractive and adaptable designs, Wix offers a range of tools you can add, like SEO, eCommerce and email marketing.",
      icon: "/wix.png",
      href: "/contact",
    },
    {
      title: "React",
      desc: "If you need a quick and scalable website or app, then ReactJS can help. React excels at delivering exceptional interactive experiences for mobile and native apps.",
      icon: "/react.png",
      href: "/contact",
    },
    {
      title: "Laravel",
      desc: "Laravel helps enterprises build large and robust applications. It includes powerful security features and is diverse enough to make bespoke architecture and functionality.",
      icon: "/laravel.png",
      href: "/contact",
    },
    {
      title: "Php",
      desc: "Need a website delivering lightyears fast speed? Then PHP gives you limitless possibilities to build and scale a dynamic website for Windows, Mac and Linux.",
      icon: "/php.png",
      href: "/contact",
    },
  ];
  const [popup, setPopup] = useState(false);
  const router = useRouter();
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Professional Web Design in Melbourne",
    url: "https://skywarddigital.com.au/web-design-melbourne",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Stand out online with Skyward Digital's expert web design services in Melbourne. Contact us today to create a stunning, functional and user-friendly website.",
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
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/web-design-melbourne" />
        <title>Skyward Digital | Professional Web Design in Melbourne</title>
        <meta name="title" content="Skyward Digital | Professional Web Design in Melbourne" />
        <meta
          name="description"
          content="Stand out online with Skyward Digital's expert web design services in Melbourne. Contact us today to create a stunning, functional and user-friendly website."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <section className={`${classes.banner}`}>
        <div className={`container ${classes.banner}`}>
          <div className={classes.heroText}>
            <h1>Web Design To Propel And Power Your Business Around Your Universe</h1>

            <p>
              Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue.
              <br />
              <br />
              We reimagine your website with cost-effective packages and transparent reporting to ignite your business.
            </p>

            <button className={`my-button-yellow`} onClick={() => setPopup(true)}>
              Get in Touch
            </button>
          </div>
          <div className={classes.heroForm}>
            <div className={classes.form}>
              <h3 className="title">Let's Kickstart Your Web Development Project</h3>
              <p>(Fast turnaround times, cutting-edge designs)</p>
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
                <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name*" required />
                <input type="text" name="Website" id="Website" placeholder="Website URL*" required />
                <input type="email" name="Email" id="Email" placeholder="Email*" required />
                <input type="tel" name="Mobile" id="Mobile" placeholder="Phone Number*" required />
                <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxlength="255" defaultValue={router.asPath} />
                <input type="text" style={{ display: "none" }} id="LEADCF5" name="LEADCF5" maxlength="255" defaultValue={uqid} />
                <input type="text" style={{ display: "none" }} id="LEADCF6" name="LEADCF6" maxlength="255" defaultValue={utm} />
                <input type="text" style={{ display: "none" }} id="LEADCF7" name="LEADCF7" maxlength="255" defaultValue={referrer} />
                <select name="LEADCF2" id="LEADCF2" defaultValue={"DEFAULT"} required>
                  <option value="DEFAULT" disabled>
                    I'm interested in*
                  </option>
                  <option value="Wordpress&#x20;Web&#x20;Design">Wordpress Web Design</option>
                  <option value="Ecommerce&#x20;Web&#x20;Design">Ecommerce Web Design</option>
                  <option value="Business&#x20;&amp;&#x20;Services&#x20;Web&#x20;Design">Business &amp; Services Web Design</option>
                  <option value="Education&#x20;Web&#x20;Design">Education Web Design</option>
                  <option value="Health&#x20;Care&#x20;Web&#x20;Design">Health Care Web Design</option>
                </select>
                <select style={{ display: "none" }} id="Lead_Source" name="Lead Source">
                  <option value="-None-">-None-</option>
                  <option value="Website" selected>
                    Website
                  </option>
                </select>
                <textarea name="Description" id="Description" cols="30" rows="10" placeholder="Additional info you'd like for us to know"></textarea>
                <button id="formsubmit" type="submit">
                  Let's Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {popup && <PopupFormWeb setPopup={setPopup} uqid={uqid} referrer={referrer} utm={utm} />}
      <NumberStrip
        items={[
          {
            title: (
              <>
                500+
                <br />
                Happy Clients
              </>
            ),
            icon: "/happyclients.png",
          },
          {
            title: (
              <>
                Award
                <br />
                Winning Agency
              </>
            ),
            icon: "/award.png",
          },
          {
            title: (
              <>
                After Hours
                <br />
                Support
              </>
            ),
            icon: "/support.png",
          },
          {
            title: (
              <>
                Guaranteed
                <br />
                Results
              </>
            ),
            icon: "/guaranteed.png",
          },
        ]}
      />
      <BriefService
        setPopup={setPopup}
        tab1i={"/cross browser.png"}
        tab1t={"Cross-browser compatible"}
        tab1d={"Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others."}
        tab2i={"/mobile friendly.png"}
        tab2t={"Mobile Friendly"}
        tab2d={"We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs."}
        tab3i={"/lightning.png"}
        tab3t={"Lightning Fast"}
        tab3d={"We design lightning fast websites that both search engines and users love."}
        tab4i={"/conversion optimized.png"}
        tab4t={"Conversion Optimised"}
        tab4d={"Our high-performance website designs are engineered to convert browsers into buyers."}
        title={
          <>
            Is Your Website <span className="titleBackground">Ready for Blast-Off</span> To Soar Your Sales?
          </>
        }
        desc={
          <p className="subtitle">
            Fast, mobile-first websites that create a memorable spaceflight…we mean… experience. Whether you are a GP, tradie, or eCommerce store owner, your website is your mothership. Often it's the
            first place prospects arrive from social media, SEO and paid ads. <br />
            <br />
            Asides from building visually stunning websites, we prioritise a positive and engaging experience to help you rank highly. Skyward Digital web design balances SEO and UX to get the right
            traffic and drive engagement, propelling customers deeper on their digital journey.
            <br />
            <br />
            At Skyward Digital, we understand when we lift the hood on your rocket (website) how to bring together your brand, business and customers to impact your results.
          </p>
        }
      />
      <TypesOfWeb setPopup={setPopup} />
      <Portfolio
        items={[
          { t: "/brauns roofing t.jpg", i: "/brauns roofing.jpg", id: 1 },
          { t: "/FMS Dental t.jpg", i: "/FMS Dental.jpg", id: 2 },
          { t: "/north italia t.jpg", i: "/north italia.jpg", id: 3 },
          { t: "/the joint t.jpg", i: "/the joint.jpg", id: 4 },
        ]}
        title={<span className="titleBackground">Portfolio</span>}
        slides={2}
      />
      <TrustedBy />
      <FlipBox
        items={flipboxItems}
        title={
          <>
            <span className="titleBackground">Skilled website scientists</span> who engineer websites with WordPress, Shopify, Wix and others in the fleet
          </>
        }
        desc={
          <p class="subtitle">
            Skyward Digital offers fully customisable websites on various platforms. Do you know what’s right for you?
            <br />
            <br />
            We specialise in WordPress, Shopify, WooCommerce, Wix, Magento, React, Laravel and PHP to build your next high-converting website. We are your digital marketing partner to understand your
            goals and digital strategy to create a website that skyrockets results.
            <br />
            <br />
            Skyward Digital builds your website to create a rich and deep customer experience. That way, Google knows your site is engaging and valuable, helping you to rank higher.
          </p>
        }
        background={"#d6e8eb"}
      />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Websitedesign;

{
  /* banner form and popup form (inn website design main page and in inner page remove select) 
    <h>Let's Kickstart Your Web Development Project</h>
    <p>(Fast turnaround times, cutting-edge designs)</p>
  <select name="service" id="" defaultValue={"DEFAULT"} required>
                <option value="DEFAULT" disabled>
                  I'm interested in
                </option>
                <option value={"wordpress"}>Wordpress</option>
                <option value={"ecommerce"}>Ecommerce</option>
                <option value={"businessServices"}>Business & Services</option>
                <option value={"education"}>Education</option>
                <option value={"healthCare"}>Health Care</option>
              </select>
              <textarea name="notes" cols="30" rows="10" placeholder="Additional info you'd like for us to know"></textarea> 
              <button>Let's Talk</button>
              */
}
