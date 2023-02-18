import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import Boxes from "../components/UI/Boxes";
import Portfolio from "../components/ServicesPage/Portfolio";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const Graphicdesign = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Estes Express",
      text: "We needed to showcase our work in a visually compelling way. Skyward Digital's graphic design team helped us to achieve that and more. Their attention to detail and ability to understand our needs was outstanding. We couldn't be happier with the results and would highly recommend Skyward Digital for any graphic design needs.",
      business: "/Client logo17.png",
    },
    {
      designation: "Baker Street",
      text: "Skyward’s attention to detail and ability to understand our unique brand guidelines allowed them to create visually stunning designs that effectively conveyed our messaging. Their expertise in print and digital design helped us to deliver a cohesive and impactful campaign across all mediums. Working with Skyward Digital was a seamless experience, their team was responsive and always willing to make adjustments to ensure our satisfaction.",
      business: "/Client logo5.png",
    },
    {
      designation: "FG Telecom",
      text: "Skyward Digital's graphic design team did a commendable job of designing our social media posts. They exceeded our expectations with their creativity and attention to detail. Their ability to understand our brand and target market was outstanding. We are extremely satisfied with the results and highly recommend Skyward Digital for any business looking for stunning graphic design services.",
      business: "/Client logo 4.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Graphic Design",
      desc: "We create Graphic Design that is unique, and creative but also practical. We will help you to stand out in a world saturated with images.",
      icon: "/graphic design.png",
      href: "/contact",
    },
    {
      title: "Logo Design",
      desc: "We know how to create simple but unique logos. Whatever your brand story is, we know how to create a dynamic and memorable logo for it.",
      icon: "/logo design.png",
      href: "/contact",
    },
    {
      title: "Web Design",
      desc: "Web design expertise that will make your website a launchpad for connection and success. We create web designs with aesthetic appeal that is user-friendly.",
      icon: "/webdesign.png",
      href: "/contact",
    },
    {
      title: "UI and UX",
      desc: "UI/UX design that is smooth and seamless. We know people and their habits. Our UI/UX design will help your customers navigate your site with ease.",
      icon: "/uiux.png",
      href: "/contact",
    },
    {
      title: "Brand Identity",
      desc: "How do you want to present your brand to the public? We will help you answer this important question and forge a powerful identity.",
      icon: "/brand identity.png",
      href: "/contact",
    },
    {
      title: "Packaging Design",
      desc: "Eye-grabbing packaging designs with the right colour, image, and typography to convey a unique product story. We enable your product to stand out from the crowd.",
      icon: "/packaging design.png",
      href: "/contact",
    },
    {
      title: "Label Design",
      desc: "We specialise in label design. We utilise creativity, technique, skills, and expertise to design and construct a sharp and original label for your brand.",
      icon: "/label design.png",
      href: "/contact",
    },
  ];
  const briefItems = [
    {
      title: "Brief",
      desc: "From the moment we receive a brief, we are ready for take-off! We will work with your vision, needs and goals to deliver results.",
      icon: "/brief.png",
    },
    {
      title: "Brainstorming",
      desc: "We will brainstorm to help curate a potential melting pot of thoughts. We will identify the best strategies and ideas for the journey ahead.",
      icon: "/brainstorming.png",
    },
    {
      title: "Execution",
      desc: "We are more than just innovative and creative! Our Skyward team has the skill, industry expertise and drive to execute your goals and achieve results.",
      icon: "/execution.png",
    },
    {
      title: "Revision",
      desc: "Just like a planet in orbit that never stops, we will work tirelessly with you. We revise to get exactly what you need and want.",
      icon: "/revision.png",
    },
    {
      title: "Delivery",
      desc: "We deliver creative and memorable designs and help you achieve market impact. We are dedicated to launching you above the rest and taking you Skyward!",
      icon: "/delivery.png",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital - Professional Graphic Design in Melbourne",
    url: "https://skywarddigital.com.au/graphic-design-melbourne",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Stand out with Skyward Digital's expert graphic design services in Melbourne. Contact us today to create stunning design solutions for your business.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/graphic-design-melbourne" />
        <title>Skyward Digital - Professional Graphic Design in Melbourne</title>
        <meta name="title" content="Skyward Digital - Professional Graphic Design in Melbourne" />
        <meta name="description" content="Stand out with Skyward Digital's expert graphic design services in Melbourne. Contact us today to create stunning design solutions for your business." />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Using Innovative Graphic Design To Take Your Business or Brand to New Heights!"}
        desc={
          <p>
            Design is no longer just about creating. The world is moving fast and is saturated with information. In this climate, we will be your wingman! We will equip you with the tools you need to
            not only stand out from the crowd but reach high in the sky.
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
      <FlipBox
        items={flipboxItems}
        title={
          <>
            We create <span className="titleBackground">Graphic Design</span> that is fresh, innovative and makes an impact
          </>
        }
        desc={
          <p className="subtitle">
            At Skyward, we offer a range of Graphic Design services including logo design, web design, UI/UX design, brand identity, packaging design and label design. We have years of industry
            expertise with our team’s knowledge of design and customer trends. We use Graphic Design to tell powerful stories and to shape brand identity. Skyward is here to help you make a strong
            market impact with unique and creative designs that can carry simple but high-octane messages.
          </p>
        }
        width={"25%"}
      />
      <Portfolio
        title={
          <>
            Some of Our <span className="titleBackground">Work</span>
          </>
        }
        items={[
          { t: "/grocery panda.jpg", i: "/grocery panda.jpg", id: 1 },
          { t: "/Jamet company.jpg", i: "/Jamet company.jpg", id: 2 },
          { t: "/Nashville UG.jpg", i: "/Nashville UG.jpg", id: 3 },
          { t: "/Steve_s car detailing service.jpg", i: "/Steve_s car detailing service.jpg", id: 4 },
        ]}
        slides={3}
      >
        <div style={{ textAlign: "center" }}>
          <img src={"/astronaut.png"} alt="" style={{ marginTop: "50px", width: "20%" }} />
        </div>
      </Portfolio>

      <Boxes
        title={
          <>
            <span className="titleBackground">Our Lifecycle</span> for Graphic Design Services
          </>
        }
        padding={"70px 0"}
        items={briefItems}
        background={"#d6e8eb"}
        setPopup={setPopup}
      />

      <Testimonials padding={"70px 0"} background={"#fff"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Graphicdesign;
