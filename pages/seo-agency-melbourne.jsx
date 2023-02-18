import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Section from "../components/UI/Section";
import FlipBox from "../components/ServicesPage/FlipBox";
import classes from "../styles/pages.module.css";
import Button from "../components/UI/Button";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const Seo = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Lowes Food",
      text: "Skyward Digital's SEO service was a game changer for our e-commerce store. Their team effectively optimized our website and product pages for search engines by implementing various techniques such as meta tags optimization, internal linking, and schema markup. They also provided us with guidance on how to create effective product descriptions, title tags and other on-page elements, which greatly contributed to our website's ranking. Their understanding of the latest SEO trends and techniques allowed them to continuously improve and adapt their strategy as needed. As a result, we observed a marked increase in organic traffic, conversion rates and revenue for our e-commerce store.",
      business: "/client logo 3.png",
    },
    {
      designation: "Baker Street",
      text: "As a local business owner, it was important for us to be easily found by potential customers searching online. Skyward Digital's team provided us with a comprehensive local SEO strategy that included building authoritative citations, on-page optimization of our website, and effective management of our Google My Business profile. Their team's proficiency in local SEO helped us to rank higher in local search results and drive more foot traffic to our establishment. Their ability to track and analyze the campaign performance in real-time, allowed for regular adjustments which helped us achieve our objectives and improve our online reputation.",
      business: "/Client logo5.png",
    },
    {
      designation: "The Green Grocer",
      text: "Skyward Digital's Local SEO service was a game changer for our small business. Their team of experts helped us to optimize our website for local search results, create a local listing and directory optimization strategy, and create a localized content strategy. They were able to identify the keywords and phrases our potential customers were searching for and helped us to rank higher in search engines. This helped us increase our visibility on local search results, get more online reviews and drive more foot traffic to our establishment. They were able to track and analyze our campaign performance, allowing for regular adjustments which helped us achieve our goals. The team was always willing to help and answer any questions we had throughout the process.",
      business: "/Client logo6.png",
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
  const caseStudies = [
    {
      image: "/Client logo9.png",
      slug: "abstract-creative",
      problem: `At Skyward Digital, we understand the importance of a strong online presence for creative agencies, particularly when it comes to increasing organic traffic. That's why we were excited to work with Abstract Creative, a branding agency that was struggling to increase their organic traffic.`,
    },
    {
      image: "/client logo 3.png",
      slug: "lowes-food",
      problem: `Skyward Digital was approached by Lowes Food, an e-commerce store looking to increase their online sales and attract new customers. Samira was especially struggling with organic traffic to her store, and had a string of bad experiences with agencies before she came onboard with us. Understanding the importance of SEO for e-commerce success, our team of experts stepped in to provide our SEO services.`,
    },
    {
      image: "/client logo65.png",
      slug: "zulekha-bagban-makeup",
      problem: `One of our clients, Zulekha Bagban Makeup, a local service provider, approached us looking to increase their organic rankings on Google and Bing, and reach new customers.`,
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Top SEO Agency in Melbourne",
    url: "https://skywarddigital.com.au/seo-agency-melbourne",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Maximize your online visibility with Skyward Digital's expert SEO services in Melbourne. Contact us today to dominate search results today.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/seo-agency-melbourne" />
        <title>Skyward Digital | Top SEO Agency in Melbourne</title>
        <meta name="title" content="Skyward Digital | Top SEO Agency in Melbourne" />
        <meta name="description" content="Maximize your online visibility with Skyward Digital's expert SEO services in Melbourne. Contact us today to dominate search results today." />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Strengthen Your Organic Presence With A ROI-Driven SEO Agency"}
        desc={
          <p>
            Skyward specialises in delivering top positions on the SERP across highly competitive industries. Our proven SEO strategies lead to increased organic traffic and ultimately more revenue.
            We also guarantee results, and our crew of SEO rockstars is dedicated to delivering the best ROI for our clients
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
      <Section
        title={
          <>
            A <span className="titleBackground">SEO game plan</span> to get you to the top
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <p className="subtitle">
          People who use Google or Bing to look for businesses rarely scroll past page 2 of Google’s Search Engine Results Page. The coveted first ranking requires more than luck. It requires SEO
          genius. We have that genius and offer services such as Local SEO, E-Commerce SEO and National/International SEO. From on-page SEO and off-page SEO to technical SEO and link building, our
          team will equip you with a holistic and unique SEO strategy to get you ahead of your competitors.
        </p>
        <div className={classes.sbsImageContainer}>
          <div className={classes.sbsImage}>
            <img src={"/Local SEO(1).png"} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>Local SEO</h3>
            <p>
              Local SEO: Improve hyper-targeted traffic and acquire new customers with a local SEO campaign. Ideal for local businesses. Google Business Profile optimisation, citation building,
              content marketing, and link building.
            </p>
            <br />
            <Button href="/local-seo-melbourne">Learn More</Button>
          </div>
        </div>
        <div className={classes.sbsImageContainerI}>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>E-commerce SEO</h3>
            <p>
              Our ecommerce SEO strategy is laser-focused on increasing your sales through technical enhancements, structured data markups, ongoing content strategy and our proprietary link building
              tactics.
            </p>
            <br />
            <Button href="/ecommerce-seo-agency">Learn More</Button>
          </div>
          <div className={classes.sbsImage}>
            <img src={"/ecommerce SEO.png"} alt="" style={{ width: "60%" }} />
          </div>
        </div>
        <div className={classes.sbsImageContainer}>
          <div className={classes.sbsImage}>
            <img src={"/global SEO.png"} alt="" style={{ width: "60%" }} />
          </div>
          <div className={classes.sbsContent}>
            <h3 className={classes.sbsTitle}>National/International SEO</h3>
            <p>We specialise in multiregional and multilingual SEO strategies, allowing our clients to deliver engaging experiences for their target audience regardless of location or language.</p>
            <br />
            <Button href="/international-seo-agency">Learn More</Button>
          </div>
        </div>
      </Section>
      <FlipBox
        items={flipboxItems}
        title={
          <>
            Our <span className="titleBackground">Process</span>
          </>
        }
        desc={""}
        height={"500px"}
      />
      <Industries background={"#d6e8eb"} setPopup={setPopup} />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
      <CaseStudies background={"#dde3ff"} caseStudies={caseStudies} />
    </React.Fragment>
  );
};

export default Seo;
