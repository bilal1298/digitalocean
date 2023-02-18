import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Section from "../components/UI/Section";
import BriefService from "../components/ServicesPage/BriefService";
import classes from "../styles/pages.module.css";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const Googleads = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Lowes Food",
      text: "We needed a team that could help us increase our online sales and reach a wider audience. Skyward Digital exceeded our expectations with their Google Ads management services. Their team tailored highly effective campaigns to our target audience, resulting in a noticeable increase in our online sales. Their proficiency in tracking and analyzing campaign performance allowed them to make regular adjustments and optimizations, leading to a successful outcome. The whole process was handled professionally and efficiently. We couldn't be happier with the results.",
      business: "/client logo 3.png",
    },
    {
      designation: "The Fit Society",
      text: "As a growing helping-hand organization, we were looking for a way to increase visibility and drive donations. Skyward Digital's Google Ads management services have been instrumental in helping us achieve these goals. Their team crafted highly focused campaigns that have led to a marked improvement in our visibility on Google search results and a boost in donations. They also provided valuable advice on how to make the most of our limited budget through Google Grants. Their regular analysis and reporting helped us to make necessary adjustments, leading to a successful outcome.",
      business: "/client logo 51.png",
    },
    {
      designation: "Island Cowgirl Jewelry",
      text: "Skyward Digital has been a great partner for our e-commerce business, their Google Ads management services have helped us to reach more customers and increase our online sales. Their team's deep understanding of our target market allowed them to tailor highly effective campaigns. Their proficiency in tracking and analyzing campaign performance allowed them to make regular adjustments and optimizations, resulting in a significant boost in our online sales. Working with them was a pleasure and the results were over the expectations.",
      business: "/client logo21.png",
    },
  ];
  const caseStudies = [
    {
      image: "/client logo67.png",
      slug: "candlewick",
      problem: `CandleWick, a small retail business that specialises in selling handmade candles and other home decor items, approached us with a problem of struggling to increase online sales and reach their target audience. They had tried various forms of advertising in the past, but were not seeing the results they were expecting. With a limited budget for advertising, they needed a cost-effective solution to improve their online presence. Their website was not generating enough traffic and they were not appearing on the first page of Google search results.`,
    },
    {
      image: "/Client logo7.png",
      slug: "protech",
      problem: `We were approached by ProTech Solutions, a B2B software company that specialises in providing a platform for project management. The company had been in business for several years and had a solid customer base, but they were struggling to generate new leads and increase their revenue. They had been using Google Ads for a while but were not seeing the results they were expecting. They were looking for a solution to improve their online presence and generate more leads at a lower cost. The company had been in business for several years and had a solid customer base, but they were struggling to generate new leads and increase their revenue. They had been using Google Ads for a while but were not seeing the results they were expecting. They were looking for a solution to improve their online presence and generate more leads at a lower cost. The main problem was that the company's cost per lead was too high, and their conversion rate was low. They were not reaching their target audience effectively and needed to improve their campaign. Their website was not generating enough traffic and they were not appearing on the first page of Google search results. Their cost per lead was high, and they were not seeing a good return on their investment.`,
    },
    {
      image: "/client logo66.png",
      slug: "mother-mary-welfare-center",
      problem: `Skyward Digital was approached by Mother Mary Welfare Center, a non-profit organisation that specialises in providing education and resources for individuals with disabilities. The organisation had been in business for several years, but was struggling to increase its online presence and reach new audiences. They had a limited budget for advertising and had not seen much success with their previous ad agency. The main problem was that the non-profit was not effectively reaching its target audience and website traffic was low. They needed a cost-effective solution to improve their online presence and raise awareness about their mission.`,
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Professional Google Ads Agency in Melbourne",
    url: "https://skywarddigital.com.au/google-ads-agency",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Achieve business growth with Skyward Digital's expert Google Ads services in Melbourne. Contact us today to create high-performing and cost-effective campaigns for your business.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/google-ads-agency" />
        <title>Skyward Digital | Professional Google Ads Agency in Melbourne</title>
        <meta name="title" content="Skyward Digital | Professional Google Ads Agency in Melbourne" />
        <meta
          name="description"
          content="Achieve business growth with Skyward Digital's expert Google Ads services in Melbourne. Contact us today to create high-performing and cost-effective campaigns for your business."
        />
      </Head>
      <Schema jsonSchema={JSON_SCHEMA}></Schema>
      <ServicesBanner
        title={"Discover Your True Growth Potential on Google"}
        desc={
          <p>
            Google search advertising is a highly effective form of pull marketing. This means that your audience already has an intent to buy or procure a product or service. Our Google ads certified
            experts rank your ads on top positions to send ultra-targeted audiences to your website on a daily basis. Work with a team that has a proven track record of delivering a 600% return on ad
            spend on average in the past year.
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
      <BriefService
        setPopup={setPopup}
        tab1i={"/trust.png"}
        tab1t={"Agency You Can Trust"}
        tab1d={"Leave the details and execution to us. We’ll always keep you posted with transparent reporting."}
        tab2i={"/process.png"}
        tab2t={"Unique Process"}
        tab2d={"We’re constantly testing new strategies to best our previous numbers. As a result, we’re always scaling up your ads and never taking the back seat."}
        tab3i={"/google ads.png"}
        tab3t={"Google Ads Setup"}
        tab3d={"We handle the entire setup, from account setup, tracking, copies, and landing page designs, so you don’t have to worry about any of the technical stuff."}
        tab4i={"/support.png"}
        tab4t={"Support"}
        tab4d={"We’re just a tap away. With our Google Ads certified success managers and our after hours support team, you and your campaigns are never left unattended."}
        title={
          <>
            Why <span className="titleBackground">Skyward Digital</span>?
          </>
        }
        desc={<p className="subtitle">Take your Google advertising ROI to the next level with comprehensive paid search growth strategies and superior management.</p>}
      />

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
      <CaseStudies background={"#dde3ff"} caseStudies={caseStudies} />
    </React.Fragment>
  );
};

export default Googleads;
