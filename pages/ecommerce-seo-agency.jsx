import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import Industries from "../components/HomePage/Industries";
import FlipBox from "../components/ServicesPage/FlipBox";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopupForm from "../components/UI/PopupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import Schema from "../data/Schema";

const Ecommerceseo = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Fashion Autograph",
      text: "We engaged Skyward Digital for our E-commerce SEO needs and were thoroughly impressed with the results. Their team of experts implemented comprehensive optimization techniques for our website and product pages, resulting in a significant increase in organic traffic and sales. Furthermore, their ability to track and analyze our campaign performance allowed for regular adjustments which greatly contributed to the achievement of our objectives. The professionalism and dedication of their team members were top-notch and we were extremely satisfied with their level of service throughout the entire process. Their ability to understand our needs and tailor their strategy accordingly played a crucial role in achieving our goals.",
      business: "/client logo2.png",
    },
    {
      designation: "Protech Solutions",
      text: "Skyward Digital provided our B2B E-commerce company with exceptional SEO services, characterized by in-depth technical optimization, extensive keyword research and highly-efficient content optimization. Their team's aptitude in understanding our target market and tailoring their strategy accordingly was particularly noteworthy. Their expert analysis and recommendations helped us to improve the overall performance of our website and the customer engagement. As a result, we observed a marked increase in organic traffic, lead generation and revenue. They provided us with regular reports that helped us track the progress of our campaign and measure the impact of the SEO efforts.",
      business: "/Client logo7.png",
    },
    {
      designation: "Juliana Silva Studio",
      text: "We retained Skyward Digital's services for E-commerce SEO, and the experience was nothing short of exceptional. Their team executed a range of optimization techniques for our fashion E-commerce website including technical optimization, keyword research and content optimization. Their proficiency in promoting our products and educating our target market led to a substantial increase in website traffic, online visibility, and sales. Their ability to monitor and assess our campaign performance in real-time facilitated regular adjustments which greatly contributed to achieving our objectives. We appreciate their prompt communication and attention to detail throughout the project.",
      business: "/client logo20.png",
    },
    {
      designation: "Adventure Hiking & Climbing",
      text: "Skyward Digital played a critical role in expanding our market and augmenting online sales for our outdoor gear store through their E-commerce SEO services. Their team's proficiency in technical optimization, product page optimization and content strategy greatly contributed to improved visibility, online presence, and online sales. Their regular monitoring and analysis of our campaign performance allowed for necessary adjustments, greatly contributing to the achievement of our business objectives. Their team's creativity and expertise helped us to attract more customers and increase brand awareness. Taking help from Skyward Digital and expanding towards E-commerce was a great move for us.",
      business: "/client logo53.png",
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
      title: "Conversion tracking",
      desc: "We implement the most advanced analytics methods, including e-commerce goal conversions, to attribute every transaction to the right marketing effort. Thereby maximising your ROI through a completely transparent approach.",
      icon: "/conversion tracking.png",
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
    name: "Skyward Digital | Ecommerce SEO Agency for Online Success",
    url: "https://skywarddigital.com.au/ecommerce-seo-agency",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Maximize your ecommerce sales with Skyward Digital's expert Ecommerce SEO services. Contact us today to outrank your competition and drive more traffic and sales on your website.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/ecommerce-seo-agency" />
        <title>Skyward Digital | Ecommerce SEO Agency for Online Success</title>
        <meta name="title" content="Skyward Digital | Ecommerce SEO Agency for Online Success" />
        <meta
          name="description"
          content="Maximize your ecommerce sales with Skyward Digital's expert Ecommerce SEO services. Contact us today to outrank your competition and drive more traffic and sales on
your website."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={
          <>
            Cutting-Edge <br /> Ecommerce SEO Services To Grow Your Online Store’s Traffic & Sales
          </>
        }
        desc={
          <ul style={{ padding: "0", margin: "30px 0 40px" }}>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", marginRight: "7px", maxWidth: "25px" }} /> Comprehensive site audit
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", marginRight: "7px", maxWidth: "25px" }} /> Targeted keyword research for online stores
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", marginRight: "7px", maxWidth: "25px" }} /> Content marketing through your blog and other 3rd party platforms
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", marginRight: "7px", maxWidth: "25px" }} /> Ecommerce store optimisations for product pages, category pages, and more
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", marginRight: "7px", maxWidth: "25px" }} /> Technical SEO (site speed, mobile optimization, schema markup, etc.)
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", marginRight: "7px", maxWidth: "25px" }} /> Site structure optimisation
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", marginRight: "7px", maxWidth: "25px" }} /> High quality, manual link building
            </li>
          </ul>
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
            Discover How We Can <span className="titleBackground">Boost Your Ecommerce Sales</span> Using SEO
          </>
        }
        desc={<p className="subtitle">Our specialised eCommerce SEO solutions are tailored to help your brand outperform the competition.</p>}
        height={"500px"}
      />
      <Industries background={"#d6e8eb"} setPopup={setPopup} />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Ecommerceseo;
