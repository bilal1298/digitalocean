import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import Industries from "../components/HomePage/Industries";
import Section from "../components/UI/Section";
import FlipBox from "../components/ServicesPage/FlipBox";
import classes from "../styles/pages.module.css";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const flipboxItems = [
  {
    title: "Facebook ads",
    desc: "We help our clients reach their ideal customers and drive them to take action through superior targeting, effective ad copy, visuals, and calls-to-action.",
    icon: "/facebook (1).png",
    href: "/social-media-agency-melbourne",
  },
  {
    title: "Instagram ads",
    desc: "We utilise Instagram ads to increase our clients' leads and sales by creating visually appealing and engaging ads that are delivered to the right audience.",
    icon: "/instagram (1).png",
    href: "/contact",
  },
  {
    title: "Google ads",
    desc: "We use a combination of keyword research, ad copywriting, and bid management to ensure that our clients' ads are seen by the right people at the right time.",
    icon: "/google (1).png",
    href: "/google-ads-agency",
  },
  {
    title: "Microsoft ads",
    desc: "We leverage the second most important search engine after Google, Microsoft ads, to deliver effective ad campaigns to your target audience.",
    icon: "/microsoft (1).png",
    href: "/contact",
  },
  {
    title: "TikTok ads",
    desc: "We utilise TikTok ads to increase our clients revenue by creating fun and engaging ads that capture the attention of younger audiences on the platform.",
    icon: "/tiktok (1).png",
    href: "/contact",
  },
  {
    title: "LinkedIn ads",
    desc: "By using LinkedIn's advanced targeting options, we can help our clients connect with their ideal customers and drive them to take action on the world’s largest professional network.",
    icon: "/linkedin (1).png",
    href: "/contact",
  },
  {
    title: "Quora ads",
    desc: "Increase your leads by reaching a highly engaged audience on the popular question and answer platform.",
    icon: "/quora (1).png",
    href: "/contact",
  },
];
const testimonials = [
  {
    designation: "The Garden Queen",
    text: "As a small business owner, I was hesitant to invest in Facebook ads but Skyward Digital proved to be the perfect partner. They understood our target market and created ads that effectively promoted our products. They helped us to identify the most effective ad formats and targeting options that resonated with our customers and generated the highest conversion rates. As a result, we saw a significant increase in website traffic and sales. Their ability to track and analyze the success of the campaign in real-time allowed for continuous optimization and improvement, and our return on investment was outstanding. We highly recommend Skyward Digital for any small business looking to grow through Facebook advertising.",
    business: "/Client logo10.png",
  },
  {
    designation: "Lowes Food",
    text: "We needed a team that could help us increase our online sales and reach a wider audience. Skyward Digital exceeded our expectations with their Google Ads management services. Their team tailored highly effective campaigns to our target audience, resulting in a noticeable increase in our online sales. Their proficiency in tracking and analyzing campaign performance allowed them to make regular adjustments and optimizations, leading to a successful outcome. The whole process was handled professionally and efficiently. We couldn't be happier with the results.",
    business: "/client logo 3.png",
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
  name: "Skyward Digital | Professional PPC Agency in Melbourne",
  url: "https://skywarddigital.com.au/ppc-agency-melbourne",
  logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
  image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
  description: "Maximize ROI with Skyward Digital's expert PPC services in Melbourne. Contact us today to create effective and efficient paid advertising campaigns for your business.",
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
const Ppc = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const [popup, setPopup] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/ppc-agency-melbourne" />
        <title>Skyward Digital | Professional PPC Agency in Melbourne</title>
        <meta name="title" content="Skyward Digital | Professional PPC Agency in Melbourne" />
        <meta
          name="description"
          content="Maximize ROI with Skyward Digital's expert PPC services in Melbourne. Contact us today to create effective and efficient paid advertising campaigns for your business."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Bypass the Industry Clutter and Ensure Your Brand Is on Top of Page One With Superior PPC Services"}
        desc={
          <p>
            We specialise in helping businesses of all sizes improve their online presence and drive more leads and sales through targeted advertising.
            <br />
            <br />
            We’ve generated over $5 M in revenue for our clients in 2022! Google Ads Management generated well over $5 million in revenue just in 2018!
            <br />
            <br />
            We know how to create compelling ad campaigns that grab attention and drive results across PPC platforms like Google, Microsoft, Facebook, Instagram, LinkedIn, Quora and Tik Tok.
          </p>
        }
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
      <FlipBox
        items={flipboxItems}
        title={
          <>
            Our Seasoned Team of PPC Experts Can <span className="titleBackground">Help You With</span>
          </>
        }
        desc={""}
        width={"25%"}
      />
      <Industries background={"#fff"} setPopup={setPopup} />
      <Section
        title={
          <>
            Our <span className="titleBackground">Process</span>
          </>
        }
        padding={"70px 0"}
        background={"#d6e8eb"}
      >
        <div className={classes.sbsImageContainer} style={{ marginTop: "70px" }}>
          <div className={classes.sbsImage}>
            <img src={"/identify and measure goals PPC.png"} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Identify Goals</h3>
            <p>Everything we do is focused on maximising your ROI. We identify goals, evaluate historical data, and create a clear plan during our initial evaluation.</p>
            <br />
            <h3 className={classes.sbsTitle}>Setup Tracking</h3>
            <p>All of our PPC marketing staff is Google Ads and Google Analytics certified. We can integrate simple to advanced tracking options for any clients, regardless of their tech stack.</p>
          </div>
        </div>
        <div className={classes.sbsImageContainerI}>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Define Keywords & Targeting</h3>
            <p>
              You can burn hundreds of thousands of dollars every year if you don't use the appropriate keywords and targeting. When approaching new clients, we frequently find that deleting subpar
              ads and keywords more than pays for our fees. In many cases, we either refine their account or create a new one from scratch.
            </p>
          </div>
          <div className={classes.sbsImage}>
            <img src={"/Define Keywords & Targeting.png"} alt="" style={{ width: "60%" }} />
          </div>
        </div>
        <div className={classes.sbsImageContainer}>
          <div className={classes.sbsImage}>
            <img src={"/PPC landing page optimisations.png"} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Create Ad Copies</h3>
            <p>Because you are only as good as your copy and creative, we ensure that your copy is best-in-class by putting our experience, data analysis, and testing abilities to full use.</p>
            <br />
            <h3 className={classes.sbsTitle}>Landing Page Optimisation</h3>
            <p>We use our unique and proven CRO methods to maximise conversion rates on your website’s advertising landing pages.</p>
          </div>
        </div>
      </Section>
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Ppc;
