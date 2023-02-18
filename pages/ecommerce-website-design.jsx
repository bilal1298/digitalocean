import React, { useState } from "react";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import PopupFormWebIn from "../components/UI/PopupFormWebIn";
import classes from "../styles/pages.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Ecommerce = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Southern Clothing",
      text: "Skyward Digital's ecommerce website design team was important in the success of our online store. Their ability to understand our target market and create a user-friendly, visually appealing website helped us increase online sales and improve customer satisfaction. Their team provided a range of services including product page optimization, checkout flow design, and integration with our payment gateway. Their ability to track and analyze website performance allowed for regular adjustments which helped us achieve our goals. Their dedication to customer service and attention to detail is unparalleled.",
      business: "/Client logo15.png",
    },
    {
      designation: "Technoor",
      text: "Skyward Digital's website design team went above and beyond for our mobile store. Their team provided a comprehensive strategy that included product page optimization, checkout flow design, and integration with our payment gateway. Their ability to understand our target market and tailor their strategy accordingly was instrumental in driving sales and improving customer satisfaction. Their attention to detail and dedication to customer service is unmatched. Our company recommends their services to any business looking to create their own website.",
      business: "/client logo1.png",
    },
    {
      designation: "Island Cowgirl Jewelry",
      text: "We needed an ecommerce website that effectively promoted our unique products and generated leads for our business. We knew that the design, user experience, and functionality of the website would play a crucial role in the success of our online presence. That's why we turned to Skyward Digital for their expert team of designers and developers.",
      business: "/client logo21.png",
    },
  ];
  const flipboxItems = [
    {
      title: "WooCommerce",
      desc: "Your online store needs a seamless checkout experience. WooCommerce focuses on reducing cart abandonment with features like guest checkout to deliver a successful sale.",
      icon: "/woocommerce.png",
      href: "/contact",
    },
    {
      title: "Shopify",
      desc: "You can use premade themes or create your own with Shopify, so you get your unique shop. An extensive app library allows for personalised experiences to help you stand out.",
      icon: "/shopify.png",
      href: "/contact",
    },
    {
      title: "Wix",
      desc: "Wix can help you deliver an exceptional customer experience by keeping up-to-date with customers’ orders on the go with their store mobile app.",
      icon: "/wix.png",
      href: "/contact",
    },
    {
      title: "Magento",
      desc: "Built with eCommerce in mind, Magento allows you to set up multiple payment gateways and currencies so you can sell no matter where your customers live.",
      icon: "/magento.png",
      href: "/contact",
    },
    {
      title: "BigCommerce",
      desc: "BigCommerce doesn’t think you need to be a rocket scientist to get started. With a simple drag and drop, create your store, and you can launch quickly.",
      icon: "/bigcommerce.png",
      href: "/contact",
    },
    {
      title: "Squarespace",
      desc: "Squarespace offers stunning designs to build an online store. With fast checkout times, intuitive inventory management and no product limits, you’ll be up and away in no time.",
      icon: "/squarespace.png",
      href: "/contact",
    },
  ];
  const [popup, setPopup] = useState(false);
  const router = useRouter();
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Ecommerce Website Design Services",
    url: "https://skywarddigital.com.au/ecommerce-website-design",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description:
      "Grow your online sales with Skyward Digital's expert ecommerce website design services. Contact us today to create a beautiful, user-friendly and conversion-optimized ecommerce website.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/ecommerce-website-design" />
        <title>Skyward Digital | Ecommerce Website Design Services</title>
        <meta name="title" content="Skyward Digital | Ecommerce Website Design Services" />
        <meta
          name="description"
          content="Grow your online sales with Skyward Digital's expert ecommerce website design services. Contact us today to create a beautiful, user-friendly and conversion-optimized ecommerce website."
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
      {popup && <PopupFormWebIn setPopup={setPopup} uqid={uqid} referrer={referrer} />}
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
            Focused on <span className="titleBackground">intuitive design</span> with a simple and <span className="titleBackground">fast shopping experience</span>
          </>
        }
        desc={
          <p className="subtitle">
            Your eCommerce store could be an extension of your existing bricks and mortar shop or exist only online. Either way, creating a delightful and seamless experience focused on your
            customer’s needs will generate revenue and repeat visits.
          </p>
        }
      />
      <FlipBox
        items={flipboxItems}
        title={
          <>
            All the eCommerce platforms in the galaxy to <span className="titleBackground">launch your next mission online</span>
          </>
        }
        desc={
          <p className="subtitle">
            Choosing the right solution for your eCommerce website doesn’t need to be Overwhelming.
            <br />
            <br />
            Do you need to keep up-to-date with customer orders on the go? Or is creating a personal online experience more meaningful? Need a custom theme or premade one?
            <br />
            <br />
            With Skyward Digital, we will assess your business goals and review any existing website you have. Then, after learning all we need during the briefing (the battle plan), we start building
            your robust and optimised website.
          </p>
        }
        background={"#d6e8eb"}
      />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Ecommerce;
