import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import TrustedBy from "../components/HomePage/TrustedBy";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Section from "../components/UI/Section";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const DigitalMarketing = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Lowes Food",
      text: "Skyward Digital's SEO service was a game changer for our e-commerce store. Their team effectively optimized our website and product pages for search engines by implementing various techniques such as meta tags optimization, internal linking, and schema markup. They also provided us with guidance on how to create effective product descriptions, title tags and other on-page elements, which greatly contributed to our website's ranking. Their understanding of the latest SEO trends and techniques allowed them to continuously improve and adapt their strategy as needed. As a result, we observed a marked increase in organic traffic, conversion rates and revenue for our e-commerce store.",
      business: "/client logo 3.png",
    },
    {
      designation: "The Garden Queen",
      text: "As a small business owner, I was hesitant to invest in Facebook ads but Skyward Digital proved to be the perfect partner. They understood our target market and created ads that effectively promoted our products. They helped us to identify the most effective ad formats and targeting options that resonated with our customers and generated the highest conversion rates. As a result, we saw a significant increase in website traffic and sales. Their ability to track and analyze the success of the campaign in real-time allowed for continuous optimization and improvement, and our return on investment was outstanding. We highly recommend Skyward Digital for any small business looking to grow through Facebook advertising.",
      business: "/Client logo10.png",
    },
    {
      designation: "Southern Clothing",
      text: "Skyward Digital's email marketing services helped our e-commerce business to increase sales and customer engagement. Their team of experts created targeted email campaigns, optimized our email templates, and helped us segment our customer base for more effective communication. Thanks to their expertise, we've seen an increase in our open and click-through rates and ultimately, an increase in online sales. Their ability to track and analyze the campaign performance allowed for regular adjustments which helped us achieve our goals. We are extremely satisfied with the results.",
      business: "/Client logo15.png",
    },
  ];
  const caseStudies = [
    {
      image: "/client logo 61.png",
      slug: "zest-technologies",
      problem: `At Skyward Digital, we specialise in helping SaaS companies increase their website conversions through our Digital Marketing Services. One of our clients Zest Technologies, a provider in the project management space, was facing challenges in converting website visitors into paying customers. They had tried various tactics to improve their website and digital marketing strategy, but nothing seemed to be working.`,
    },
    {
      image: "/Client logo16.png",
      slug: "irie-kitchen",
      problem: `Skyward Digital understands the importance of a strong online presence for local businesses, particularly for restaurants like Irie Kitchen. That's why we were excited to work with a local restaurant that was struggling to drive online orders and reservations.`,
    },
    {
      image: "/Client logo15.png",
      slug: "southern-clothing",
      problem: `We help e-commerce businesses increase their sales through our Digital Marketing Services. One of our clients, Southern Clothing, an e- commerce store, was struggling to drive sales and attract new customers. They knew that digital marketing was key to their success, but they didn't have the expertise or resources to handle it on their own.`,
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Digital Marketing Agency in Australia",
    url: "https://skywarddigital.com.au/digital-marketing-agency-australia",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Grow your business with Skyward Digital, the leading Digital Marketing Agency in Australia. Contact us today to skyrocket your business today.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/digital-marketing-ageny-australia" />
        <title>Skyward Digital | Digital Marketing Agency in Australia</title>
        <meta name="title" content="Skyward Digital | Digital Marketing Agency in Australia" />
        <meta name="description" content="Grow your business with Skyward Digital, the leading Digital Marketing Agency in Australia. Contact us today to skyrocket your business today." />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Full Spectrum Digital Marketing Services That Drive Results"}
        desc={
          <p>
            Digital Marketing is the fuel for your success. Like rocket fuel used during a rocket launching, Digital Marketing is the tool that will drive and propel your business or brand to be seen
            and known. We offer a range of services and will employ leading strategies to ensure your success.
            <br />
            <br />
            Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!
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
        tab1i={"/seo.png"}
        tab1t={"SEO"}
        tab1d={"SEO services that deliver results. With a range of services from local SEO, E-Commerce SEO to National/International services, we make sure your business thrives on the SERP."}
        tab2i={"/social media marketing.png"}
        tab2t={"Social Media Marketing"}
        tab2d={"At Skyward we ace social media marketing! Whether it’s Facebook, Instagram, LinkedIn, Quora, or Tik Tok we can create strategies and campaigns that drive success. "}
        tab3i={"/ppc.png"}
        tab3t={"PPC"}
        tab3d={
          "Our power-packed PPC strategies have a proven track record of turning clicks into revenue for a sundry of industries. We have spent more than $5 M in ad spend with an average ROAS of 600% on PPC platforms like Google Ads and Microsoft ads."
        }
        tab4i={"/email.png"}
        tab4t={"Email Marketing"}
        tab4d={"Leading strategies that will help you stand out in a cluttered inbox. We offer a range of services from email marketing to email campaign management."}
        title={
          <>
            Digital Marketing Services that help you <span className="titleBackground">grow faster, better and smarter</span>
          </>
        }
        desc={
          <p className="subtitle">
            We are more than words, we are about numbers too. Numbers that matter to you. Digital Marketing has the ability to drive your visibility, growth and revenue. We know how to harness
            services such as SEO services, social media marketing (Facebook, Instagram, LinkedIn, Quora, Tik Tok), PPC (Google or Microsoft ads) and email marketing and transform leading strategies to
            help your business retain customers, audience and profit. Digital Marketing that drives results.
          </p>
        }
      />
      <TrustedBy />
      <Section
        title={
          <>
            Digital Marketing that will take you <span className="titleBackground">to new heights</span>
          </>
        }
        padding={"70px 0"}
        background={"#d6e8eb"}
      >
        <p className="subtitle">
          Skyward helps you stand out in a universe saturated with products and businesses. Our services are here to see you forge a unique identity and space within the market. We take time to
          understand your business and goals and then propel you forward through laser-focused digital marketing strategies.
        </p>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
      <CaseStudies background={"#dde3ff"} caseStudies={caseStudies} />
      <Industries setPopup={setPopup} />
    </React.Fragment>
  );
};

export default DigitalMarketing;
