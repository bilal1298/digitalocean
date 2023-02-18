import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import Section from "../components/UI/Section";
import Boxes from "../components/UI/Boxes";
import classes from "../styles/pages.module.css";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const flipboxItems = [
  {
    title: "Brand Awareness ads",
    desc: "When you want to build a memorable brand and measure ad recall lift.",
    icon: "/brand awareness.png",
  },
  {
    title: "Reach ads",
    desc: "When you want to reach as many people as possible for an event or brand launch.",
    icon: "/reach ads.png",
  },
  {
    title: "Traffic ads",
    desc: "When you want to drive people to a specific web page",
    icon: "/traffic ads.png",
  },
  {
    title: "Engagement ads",
    desc: "When you want to increase your page followers, get more reacts on a post or increase sign ups to a Facebook event.",
    icon: "/engagement ads.png",
  },
  {
    title: "App Install ads",
    desc: "When you want people to download and engage with your app.",
    icon: "/app ads.png",
  },
  {
    title: "Video views ads",
    desc: "When you want more views on your video for multiple objectives.",
    icon: "/video ads.png",
  },
  {
    title: "Lead generation ads",
    desc: "When you want people to submit their contact details directly on Facebook.",
    icon: "/lead generation ads.png",
  },
  {
    title: "Message ads",
    desc: "When you want people to chat or ask questions about your products or services before working with you.",
    icon: "/message ads.png",
  },
  {
    title: "Conversion ads",
    desc: "When you want to drive traffic to your website specifically to make a purchase or signing up as a lead.",
    icon: "/conversion ads.png",
  },
  {
    title: "Catalog Sales ads",
    desc: "When you have a large product inventory and you want to serve ads to potential buyers based on their past interactions with your brand.",
    icon: "/catalog ads.png",
  },
  {
    title: "Store traffic ads",
    desc: "When you want people to visit your store physically and increase your footfall.",
    icon: "/store ads.png",
  },
];
const testimonials = [
  {
    designation: "The Garden Queen",
    text: "As a small business owner, I was hesitant to invest in Facebook ads but Skyward Digital proved to be the perfect partner. They understood our target market and created ads that effectively promoted our products. They helped us to identify the most effective ad formats and targeting options that resonated with our customers and generated the highest conversion rates. As a result, we saw a significant increase in website traffic and sales. Their ability to track and analyze the success of the campaign in real-time allowed for continuous optimization and improvement, and our return on investment was outstanding. We highly recommend Skyward Digital for any small business looking to grow through Facebook advertising.",
    business: "/Client logo10.png",
  },
  {
    designation: "Irie Kitchen",
    text: "Skyward Digital's Facebook ads campaign was a turning point for our local restaurant. They helped us reach new customers and drive foot traffic to our establishment. Their team's creativity in ad design and copywriting helped us to stand out in the crowded restaurant space. They were able to effectively promote our daily specials and events on Facebook, resulting in a noticeable increase in reservations and diners. Their ability to track and analyze campaign performance allowed for regular adjustments which helped us maximize our ROI.",
    business: "/Client logo16.png",
  },
  {
    designation: "Magnoos",
    text: "In B2B marketing, Facebook advertising was crucial in driving our lead generation efforts. Skyward Digital's team was able to develop and implement a highly targeted and effective Facebook ads campaign for our B2B software company. They were able to identify and reach the key decision-makers within our target market, by creating and promoting ads tailored to specific job titles and industries. Their ability to track and analyze the campaign's performance in real-time allowed for continuous optimization, which helped us achieve our goals and generate a strong return on investment. The team's expertise in B2B marketing and Facebook advertising played an invaluable role in our success.",
    business: "/Client logo14.png",
  },
];
const JSON_SCHEMA = {
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  name: "Skyward Digital | Premier Social Media Marketing Agency in Melbourne",
  url: "https://skywarddigital.com.au/social-media-agency-melbourne",
  logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
  image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
  description: "Grow your brand with Skyward Digital's expert Facebook and Social Media marketing services in Melbourne. Contact us today to increase your online presence.",
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
const Facebookads = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const [popup, setPopup] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/social-media-agency-melbourne" />
        <title>Skyward Digital | Premier Social Media Marketing Agency in Melbourne</title>
        <meta name="title" content="Skyward Digital | Premier Social Media Marketing Agency in Melbourne" />
        <meta
          name="description"
          content="Grow your brand with Skyward Digital's expert Facebook and Social Media marketing services in Melbourne. Contact us today to increase your online presence."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Unlock Your Business Potential With Facebook Ads"}
        desc={
          <p>
            Facebook is more than just an ad platform; it also provides you with the means to connect with current and prospective buyers at every stage of the sales process. <br />
            <br />A well-managed Facebook Advertising plan is one of the most effective and profitable strategies for expanding your brand.
          </p>
        }
        link={"/"}
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
                100%
                <br />
                ROI focused
              </>
            ),
            icon: "/roi focused.png",
          },
          {
            title: (
              <>
                Generated
                <br />
                $5 M+ Revenue
              </>
            ),
            icon: "/revenue.png",
          },
          {
            title: (
              <>
                Daily
                <br />
                Campaign Optimisations
              </>
            ),
            icon: "/optimisation.png",
          },
          {
            title: (
              <>
                100%
                <br />
                Transparency
              </>
            ),
            icon: "/transparency.png",
          },
        ]}
      />
      <Section
        title={
          <>
            <span className="titleBackground">What We Can Do</span> For You
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <div className={classes.sbsImageContainer} style={{ marginTop: "70px" }}>
          <div className={classes.sbsImage}>
            <img src={"/Lead Generation facebook ads.png"} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Lead Generation</h3>
            <p>
              We work hard to get you the highest quality leads through focused ad targeting and compelling copies. We constantly test new strategies and make data driven optimisations to ensure that
              we are always squeezing out the last drop of value for your ad spend.
            </p>
          </div>
        </div>
        <div className={classes.sbsImageContainerI}>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Retargeting</h3>
            <p>
              We start by priming your target audience with engaging ads. Then, we time our strike perfectly when they’re in “buying mode” and show them meticulously crafted ads that they just can’t
              scroll through. Moreover, our ingenious cross-platform retargeting strategies are known to convert at significantly higher rates than industry standards.
            </p>
          </div>
          <div className={classes.sbsImage}>
            <img src={"/retargeting facebook ads.png"} alt="" style={{ width: "60%" }} />
          </div>
        </div>
        <div className={classes.sbsImageContainer}>
          <div className={classes.sbsImage}>
            <img src={"/ecommerce facebook ads.png"} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Ecommerce</h3>
            <p>
              Skyward Digital’s ecommerce Facebook ads management has always been a step ahead of the competition through a process that is agile, effective and data-driven.Regardless of your niche,
              we’re committed to deliver a profitable ROI for your online store.
            </p>
          </div>
        </div>
      </Section>
      <Boxes
        setPopup={setPopup}
        items={flipboxItems}
        title={
          <>
            <span className="titleBackground">Types of Ads</span> We Run
          </>
        }
        desc={""}
        padding={"70px 0"}
        href={"/"}
        background={"#d6e8eb"}
      />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Facebookads;
