import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import Boxes from "../components/UI/Boxes";
import PopupForm from "../components/UI/PopupForm";
import TrustedBy from "../components/HomePage/TrustedBy";
import Head from "next/head";
import Schema from "../data/Schema";

const Logodesign = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Magnoos",
      text: "When it came time for our startup to rebrand, we knew that our logo was going to be a key component of our visual identity. We turned to Skyward Digital for their logo design services, and we couldn't be happier with the results. Their team took the time to understand our brand and goals, and presented us with a variety of design options that perfectly captured our brand's essence. The final design not only looks great, but it's also versatile and easy to use across different mediums.We've received a lot of positive feedback from our customers, partners, and industry peers. We highly recommend Skyward Digital's logo design services to any company looking to refresh their visual identity.",
      business: "/Client logo14.png",
    },
    {
      designation: "Adventure Hiking & Climbing",
      text: "Skyward Digital understood our vision and created a logo that was not only visually appealing, but also representative of our brand's personality. Their team of designers presented us with several options to choose from, and were always willing to make revisions until we were completely satisfied with the final version. We are extremely happy with the final design and received great feedback from our customers. Thanks to Skyward Digital, our logo has become a defining element of our brand identity.",
      business: "/client logo53.png",
    },
    {
      designation: "Perfect Smile Dental Clinic",
      text: "Skyward digital’s cooperative and talented bunch of designers have been a joy to work with. They’ve been very accommodating of all my peculiar requests and my team is happy with the logo they’ve done for us. I’m thankful that the end product is something I’m still proud of after so many years as I continue to use their services for other graphic designs as well.",
      business: "/client logo54.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Emblem Design",
      desc: "We create beautiful Emblem Designs. We forge text and images to convey recognisable brand identity with the small amount of space an emblem inhabits.",
      icon: "/emblem.png",
      href: "/contact",
    },
    {
      title: "Pictorial Marks",
      desc: "We specialise in Pictorial Marks that are original and that convey volumes without the need for words. We can express your brand identity through pictures.",
      icon: "/pictorial.png",
      href: "/contact",
    },
    {
      title: "Wordmarks",
      desc: "Think Google. How do you make basic letters remarkable and memorable? We have the genius to turn simple words into something your customers will remember.",
      icon: "/wordmark.png",
      href: "/contact",
    },
    {
      title: "Monogram Logos",
      desc: "How can you use a few strokes or letters to create a Bang!? We can create monograms that can help your brand become easily recognisable. ",
      icon: "/monogram.png",
      href: "/contact",
    },
    {
      title: "Abstract Logo Marks",
      desc: "We have above-the-clouds type imagination and creativity to create amazing Abstract Logo Marks. We think out of the box but also above the current trends.",
      icon: "/abstract.png",
      href: "/contact",
    },
    {
      title: "Mascot Logos",
      desc: "Birthing unique and relatable characters to represent your brand. We not only create mascots that embody your brand but loveable characters that will become stars!",
      icon: "/mascot1.png",
      href: "/contact",
    },
    {
      title: "Combination Marks",
      desc: "Like the planets that make up the universe, can combine a variety of elements to make combination watermarks that are unique and what you need.",
      icon: "/combination.png",
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
    name: "Skyward Digital | Professional Logo Design in Melbourne",
    url: "https://skywarddigital.com.au/logo-design-services",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Stand out with Skyward Digital's expert logo design services in Melbourne. Contact us today to create stunning logo designs for your business.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/logo-design-services" />
        <title>Skyward Digital | Professional Logo Design in Melbourne</title>
        <meta name="title" content="Skyward Digital | Professional Logo Design in Melbourne" />
        <meta name="description" content="Stand out with Skyward Digital's expert logo design services in Melbourne. Contact us today to create stunning logo designs for your business." />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Creating Memorable Logos That Will Have a High-Impact Landing Within Your Market and the World."}
        desc={
          <p>
            We specialise in a range of logo design services such as Emblems, Pictorial Marks (or logo symbols), Wordmarks, Monogram logos (or lettermarks), abstract Logo Marks, Mascot logos and
            Combination marks. A logo speaks 1000 words. We have the creativity and necessary genius to create logos that become a part of the culture.
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
        title={
          <>
            Make A Mark With Custom <span className="titleBackground">Logo Designs</span>
          </>
        }
        desc={<p className="subtitle">Skyward is here to help you forge memorable logos that will help your customers and the world easily recognise you and your brand.</p>}
        padding={"70px 0"}
        items={flipboxItems}
        width={"25%"}
      />
      {/* <Section
        title={
          <>
            Some of Our <span className="titleBackground">Work</span>
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <div style={{ textAlign: "center" }}>
          <img src={"/astronaut.png"} alt="" style={{ marginTop: "50px", width: "20%" }} />
        </div>
      </Section> */}
      <TrustedBy
        title={
          <>
            Some of <span className="titleBackground">Our Work</span>
          </>
        }
      />
      <Boxes
        title={
          <>
            <span className="titleBackground">Our Lifecycle</span> for Logo Design Services
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

export default Logodesign;
