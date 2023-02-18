import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import FlipBox from "../components/ServicesPage/FlipBox";
import PopupFormWebIn from "../components/UI/PopupFormWebIn";
import classes from "../styles/pages.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Education = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
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
    name: "Skyward Digital | Educational Website Design Services",
    url: "https://skywarddigital.com.au/educational-website-design",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description:
      "Enhance the online learning experience with Skyward Digital's expert educational website design services. Contact us today to create a user-friendly, interactive and engaging website for your educational institution.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/educational-website-design" />
        <title>Skyward Digital | Educational Website Design Services</title>
        <meta name="title" content="Skyward Digital | Educational Website Design Services" />
        <meta
          name="description"
          content="Enhance the online learning experience with Skyward Digital's expert educational website design services. Contact us today to create a user-friendly, interactive and engaging website for your educational institution."
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
      {popup && <PopupFormWebIn setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
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
            Websites to <span className="titleBackground">power learning and marketing</span> of schools and education organisations
          </>
        }
        desc={
          <p className="subtitle">
            Your educational website should showcase your achievements and provide a snapshot of your learning with your institution. In addition, you can share information about teachers, the
            school’s curriculum, sports and specialist programs.
          </p>
        }
      />
      <FlipBox
        items={flipboxItems}
        title={
          <>
            Help our brightest minds shine in the galaxy with <span className="titleBackground">educational websites that inspire possibilities</span>
          </>
        }
        desc={
          <p className="subtitle">
            Early learning centres, kinders, and schools can attract parents with an engaging, informational education website. And when a high school student is looking at university or TAFE,
            educational websites should highlight course outlines, campus life and career outcomes.
            <br />
            <br />
            For many, remote school learning is now consigned to the history books. But it's still essential that your website can scale and be flexible when needed. Such as posting the school's
            newsletter, information for enrollment or integrating tools to make paying schools fees effortless.
            <br />
            <br />
            And if you're a career change coach or teach new skills. Then a website for your coaching consultancy can house course content and learning resources and host an online community group.
          </p>
        }
        background={"#d6e8eb"}
      />
    </React.Fragment>
  );
};

export default Education;
