import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import Section from "../components/UI/Section";
import BriefService from "../components/ServicesPage/BriefService";
import classes from "../styles/pages.module.css";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const Emailmarketing = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Southern Clothing",
      text: "Skyward Digital's email marketing services helped our e-commerce business to increase sales and customer engagement. Their team of experts created targeted email campaigns, optimized our email templates, and helped us segment our customer base for more effective communication. Thanks to their expertise, we've seen an increase in our open and click-through rates and ultimately, an increase in online sales. Their ability to track and analyze the campaign performance allowed for regular adjustments which helped us achieve our goals. We are extremely satisfied with the results.",
      business: "/Client logo15.png",
    },
    {
      designation: "Center For Archaeology And Innovation",
      text: "Skyward Digital's team created targeted campaigns and optimized our email templates, which helped us to increase open and click-through rates and ultimately, drive more visitors to our website. Their ability to track and analyze campaign performance allowed for regular adjustments which helped us achieve our goals. We are very pleased with the results they have delivered.",
      business: "/client logo 50.png",
    },
    {
      designation: "Abstract Creative",
      text: "Skyward Digital's Email marketing services helped our B2B company to increase our customer retention and sales. Their team created targeted campaigns and helped us to segment our customer base, which helped us to increase open and click-through rates and ultimately drive more sales. Their expertise in creating automated email sequences helped us to improve our customer retention. Their regular analysis and reporting helped us to make necessary adjustments, which contributed to our overall success. We are very happy with the service received.",
      business: "/Client logo9.png",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Email Marketing Services To Scale Your Business",
    url: "https://skywarddigital.com.au/email-marketing-agency",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Grow your business with Skyward Digital's expert email marketing services. Contact us today to improve your ROI and increase customer engagement.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/email-marketing-agency" />
        <title>Skyward Digital | Email Marketing Services To Scale Your Business</title>
        <meta name="title" content="Skyward Digital | Email Marketing Services To Scale Your Business" />
        <meta name="description" content="Grow your business with Skyward Digital's expert email marketing services. Contact us today to improve your ROI and increase customer engagement." />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Full-Service Email Marketing Agency That Offers Result-Driven Email Services"}
        desc={
          <p>
            We provide successful email marketing services that will convert to results. Our strategy involves achieving your email marketing goals through interactive email templates, behaviour-based
            automation, and audience segmentation to convert emails to your desired outcome.
          </p>
        }
        button={"Get In Touch"}
        setPopup={setPopup}
        uqid={uqid}
        utm={utm}
        referrer={referrer}
      />
      {popup && <PopupForm setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
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
        tab1i={"/database scraping.png"}
        tab1t={"Database scraping"}
        tab1d={"We provide an easy process to automate the collection of data, such as email addresses, and convert such information into easy access for your business."}
        tab2i={"/email template.png"}
        tab2t={"Email template design"}
        tab2d={"Whether you have a design you need to be coded or need us to construct and code a fresh design, we build attractive, user-friendly templates."}
        tab3i={"/email campaign.png"}
        tab3t={"Email Campaign Management"}
        tab3d={"Take the load off your shoulders. Our email campaign management encompasses the scheduling, reporting and execution of your campaign. We are there from start to finish."}
        tab4i={"/email support.png"}
        tab4t={"Email operations support"}
        tab4d={"Skyward is here to help you with every step of your journey with email operations support such as scheduling, production, reporting, delivery, analysis and execution."}
        title={
          <>
            <span className="titleBackground">Stand Out</span> in a Cluttered Inbox
          </>
        }
        desc={
          <p className="subtitle">
            Email Marketing takes trusted strategies to deliver results. Our range of services includes database scraping, email template design, email campaign management, and email operations
            support. Here at Skyward, we get it. Mere visibility is not enough. We want to see you increase your revenue, growth, subscribers or loyal paying customers.
          </p>
        }
      />

      <Section
        title={
          <>
            <span className="titleBackground">Custom email templates</span> compatible with 40+ email clients, including:
          </>
        }
        padding={"70px 0"}
        background={"#d6e8eb"}
      >
        <div className={`row align-items-center ${classes.imagesContainer}`}>
          <div className="col-md-4 col-6">
            <div className={classes.imageContainer}>
              <img src={"/mailchimp.png"} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className={classes.imageContainer}>
              <img src={"/braze.png"} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className={classes.imageContainer}>
              <img src={"/marketo.png"} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className={classes.imageContainer}>
              <img src={"/klaviyo.png"} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className={classes.imageContainer}>
              <img src={"/sfmc.png"} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className={classes.imageContainer}>
              <img src={"/HubSpot.png"} alt="" />
            </div>
          </div>
        </div>
      </Section>
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Emailmarketing;
