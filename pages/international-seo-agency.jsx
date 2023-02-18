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

const Nationalseo = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Estes Express",
      text: "Hiring Skyward Digital for our International SEO needs was a wise decision for our company as we expand globally. Their team of experts helped us to optimize our website for multiple languages and cultures and created a targeted strategy for international keyword research. This helped us improve our visibility in global search results and drive more traffic to our website. While there were some challenges during the process, the team at Skyward Digital was always available to help us work through them. They are also able to track and analyze our campaign performance to make necessary adjustments, this helped us reach our goals. We are satisfied with the results.",
      business: "/Client logo17.png",
    },
    {
      designation: "Exim Asian Internation Trading group",
      text: "Working with Skyward Digital for our international SEO needs was an overall positive experience for our online retail business. Their team helped us optimize our website for multiple languages and cultures and created an international keyword strategy which helped us increase visibility and drive more sales in key international markets. We had good communication with the team and received regular updates on the progress. They were also able to track and analyze our campaign performance in real-time and make necessary adjustments which helped us achieve our desired results.",
      business: "/Client logo18.png",
    },
    {
      designation: "Star Tours",
      text: "Our goal was to increase our visibility and bookings in international markets. Skyward Digital's International SEO service helped us to achieve just that. Their team of experts helped us to optimize our website for multiple languages and cultures, and create a targeted strategy for international keywords research. They also helped us to improve our website's localization and content to better cater to our international audience. While it was a challenging process, the Skyward Digital team was always available to guide us through the process and make necessary adjustments as we went along. We've seen a significant increase in bookings from international markets and we're happy with the results.",
      business: "/Client logo8.png",
    },
  ];
  const flipboxItems = [
    {
      title: "SEO audit",
      desc: "We perform an in-depth audit of your website, your target audience and industry to understand how we can dominate keywords that have the most potential to boost your revenue. Then we carefully craft a strategy to achieve top rankings for those keywords.",
      icon: "/seo audit.png",
      href: "/contact",
    },
    {
      title: "Technical SEO",
      desc: "We optimise your website’s code to ensure that everything is technically sound. This includes aspects like but not limited to, your website load times, mobile friendliness, sitemap optimisations, robot txt file, broken links, schema, URL structures, and Javascript optimisation for better crawling/indexing.",
      icon: "/technical seo.png",
      href: "/contact",
    },
    {
      title: "On Page SEO",
      desc: "We integrate your content with the right keyword clusters to ensure that Google associates your website with keywords that are the most important for your business. This process also involves optimising your meta titles, descriptions, H1s & H2s, images, videos and meta keywords. Additionally, we execute highly effective internal linking silos to give your website topical authority.",
      icon: "/onpage seo.png",
      href: "/contact",
    },
    {
      title: "Link building",
      desc: "We don’t build links for the sake of building links. Quality is of paramount consideration when we define a link building strategy. From citations and contextual backlinks for local businesses to manual outreach links and niche edits for enterprise projects, each link is acquired after careful deliberation to keep your website safe from running afoul of Google’s guidelines.",
      icon: "/link building.png",
      href: "/contact",
    },
    {
      title: "Content marketing",
      desc: "Our content strategy revolves around identifying and producing content based on topical clusters for your business or products. We then propagate this content through multiple platforms. This includes highly optimised blogs on your own website, content sharing platforms, press releases, guest blogging, infographic websites, podcasts, Google stories and more! We also build high authority links to these content properties for maximum effectiveness.",
      icon: "/content marketing.png",
      href: "/contact",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | International SEO Agency for Global Success",
    url: "https://skywarddigital.com.au/international-seo-agency",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description:
      "Expand your online reach with Skyward Digital's expert International SEO services. Contact us today to dominate search results and drive traffic from all across the world to your website.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/international-seo-agency" />
        <title>Skyward Digital | International SEO Agency for Global Success</title>
        <meta name="title" content="Skyward Digital | International SEO Agency for Global Success" />
        <meta
          name="description"
          content="Expand your online reach with Skyward Digital's expert International SEO services. Contact us today to dominate search results and drive traffic from all across the world to your website."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Harness the Power of SEO and Increase Your Brand Equity Across the Globe"}
        desc={
          <p>
            As businesses expand, so does their physical and virtual presence. This includes providing products and services in many cities, states, and countries, as well as the languages spoken in
            those places. <br />
            <br />
            We specialise in multiregional and multilingual SEO strategies, allowing our clients to deliver engaging experiences for their target audience regardless of location or language.
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
                15+
                <br />
                Years Of Experience
              </>
            ),
            icon: "/experience.png",
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
          {
            title: (
              <>
                No
                <br />
                SEO Malpractice
              </>
            ),
            icon: "/no malpractice.png",
          },
          {
            title: (
              <>
                No
                <br />
                Contracts
              </>
            ),
            icon: "/no contract.png",
          },
        ]}
      />
      <FlipBox
        items={flipboxItems}
        title={
          <>
            Let’s Work Together To <span className="titleBackground">Grow Your Business</span>
          </>
        }
        desc={
          <p className="subtitle">
            Take the guesswork out of enterprise SEO with our legit team of global SEO scientists. You can trust us with your SEO results and get back to running your business. Here’s a glimpse into
            what our national/international SEO services include:
          </p>
        }
        height={"500px"}
      />
      <Industries background={"#fff"} setPopup={setPopup} />
      <Section
        title={
          <>
            A Deep Dive Into Our <span className="titleBackground">Global SEO Process</span>
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
            <h3 className={classes.sbsTitle}>Identify most profitable markets</h3>
            <p>We start with an evaluation of your current business and target market to figure out which countries you should focus more on.</p>
            <br />
            <h3 className={classes.sbsTitle}>Strategy formulation</h3>
            <p>Once we’ve determined the countries likely to yield the most success, we’ll create a go-to-market strategy, which will outline how we plan to launch our strategy.</p>
          </div>
        </div>
        <div className={classes.sbsImageContainerI}>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>ROI forecasting</h3>
            <p>
              Once we’ve drawn up a comprehensive strategy, we'll use your current marketing plan and market research to figure out which channels will make you the most money. Next, it’s time to
              launch internationally. To do that, we’ll put together a complete market launch strategy to ensure the launch is promoted and your products or services reach its intended audience.
            </p>
            <br />
            <h3 className={classes.sbsTitle}>Market launch</h3>
            <p>
              Next, it’s time to launch internationally. To do that, we’ll put together a complete market launch strategy to ensure the launch is promoted and your products or services reach its
              intended audience.
            </p>
          </div>
          <div className={classes.sbsImage}>
            <img src={"/ROI forecasting and market launch.png"} alt="" style={{ width: "60%" }} />
          </div>
        </div>
        <div className={classes.sbsImageContainer}>
          <div className={classes.sbsImage}>
            <img src={"/channel-wise analysis and scaling up.png"} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Channel-wise analysis</h3>
            <p>
              After the campaign is live, we will collect and analyse data to determine the cost per acquisition (total cost/amount of new customers acquired by channel). Then, we will be able to form
              a strategy going forward based on the channels that have proven to be most profitable.
            </p>
            <br />
            <h3 className={classes.sbsTitle}>Scaling up globally</h3>
            <p>Once the first campaign is up and running, we'll work harder and expand our campaigns to more countries.</p>
          </div>
        </div>
      </Section>
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Nationalseo;
