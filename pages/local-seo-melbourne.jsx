import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import Industries from "../components/HomePage/Industries";
import FlipBox from "../components/ServicesPage/FlipBox";
import PopupForm from "../components/UI/PopupForm";
import Head from "next/head";
import Schema from "../data/Schema";

const Localseo = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "The Green Grocer",
      text: "Skyward Digital's Local SEO service was a game changer for our small business. Their team of experts helped us to optimize our website for local search results, create a local listing and directory optimization strategy, and create a localized content strategy. They were able to identify the keywords and phrases our potential customers were searching for and helped us to rank higher in search engines. This helped us increase our visibility on local search results, get more online reviews and drive more foot traffic to our establishment. They were able to track and analyze our campaign performance, allowing for regular adjustments which helped us achieve our goals. The team was always willing to help and answer any questions we had throughout the process.",
      business: "/Client logo6.png",
    },
    {
      designation: "Paucek And Lage",
      text: "Skyward Digital's Local SEO service was a huge success for our hotel. Their team helped us optimize our website for local search results, create local listings and directories, and create local content. They helped us to create a Google My Business profile and optimize it to provide potential customers with all the necessary information such as contact details, opening hours, and photos. This helped us increase visibility and drive more reservations. Their ability to track and analyze our campaign performance in real-time allowed for regular adjustments which helped us achieve our goals. The team provided us with regular reports and helped us to understand the impact of their efforts on our business.",
      business: "/client logo 26.png",
    },
    {
      designation: "Top choice home renovation llc",
      text: "Skyward Digital's Local SEO service was instrumental in helping us increase visibility and drive more leads for our home renovation business. Their team helped us to optimize our website for local search results, create local listings and directories, and create local content. They helped us to identify the keywords and phrases that were important for our business and helped us to rank higher in search engines. This helped us increase our visibility on local search results and drive more leads. Their ability to track and analyze our campaign performance allowed for regular adjustments which helped us achieve our goals. They provided us with regular reports and helped us to understand the impact of their efforts on our business. They also helped us to improve our online reputation and get more positive reviews.",
      business: "/client logo 23.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Local SEO Audit",
      desc: "In-depth audit of your website, your target audience and industry to understand how we can dominate keywords that have the most potential. Then we carefully craft a strategy to achieve top rankings for those keywords.",
      icon: "/seo audit.png",
      href: "/contact",
    },
    {
      title: "On page",
      desc: "We integrate your content with the right keyword clusters to ensure that Google associates your website with keywords that are the most important for your business. This process also involves optimising your titles, descriptions, H1s & H2s, images, videos and meta keywords",
      icon: "/onpage seo.png",
      href: "/contact",
    },
    {
      title: "Core Local Profiles",
      desc: "We set up and claim your most important local profiles, including Google Business Profile, Bing Local and Yelp. These are integral to your local SEO strategy’s success.",
      icon: "/profile.png",
      href: "/contact",
    },
    {
      title: "Advanced GBP Optimisations",
      desc: "We perform advanced optimisations to your Google Business Profile like keyword optimised descriptions, geo-tagged images and videos, addition of services and products, among other proprietary tactics that are known to rank profiles on top positions.",
      icon: "/advanced gbp.png",
      href: "/contact",
    },
    {
      title: "NAP consistency",
      desc: "We ensure that your NAP (business name, address, and phone number) is consistent across all sites and listings. This is vital for your local SEO campaign. We leverage high authority sites like Yext, Moz Local, and Foursquare, to keep your NAP updated.",
      icon: "/nap consistency.png",
      href: "/contact",
    },
    {
      title: "Location pages",
      desc: "If you have more than 1 business location or your business requires us to set up a location-specific service page, we’ll create perfectly optimised local landing pages on your website. Complete with optimised titles, descriptions, headers, schema, images and maps.",
      icon: "/location pages.png",
      href: "/contact",
    },
    {
      title: "Link building",
      desc: "From citations and web 2.0s to guest blog links and niche edits, each link is acquired as a result of a well thought of link acquisition strategy to keep your website safe from running afoul of Google’s guidelines.",
      icon: "/link building.png",
      href: "/contact",
    },
    {
      title: "Content marketing",
      desc: "We create and propagate topical clustered content through multiple platforms such as, blogs on your own website, content sharing platforms, press releases, guest blogging, infographic websites, podcasts, Google stories and more!",
      icon: "/content marketing.png",
      href: "/contact",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital - Local SEO Experts in Melbourne",
    url: "https://skywarddigital.com.au/local-seo-melbourne",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Dominate local search results with Skyward Digital's expert local SEO services in Melbourne. Contact us today to increase online visibility in your area.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/local-seo-melbourne" />
        <title>Skyward Digital - Local SEO Experts in Melbourne</title>
        <meta name="title" content="Skyward Digital - Local SEO Experts in Melbourne" />
        <meta name="description" content="Dominate local search results with Skyward Digital's expert local SEO services in Melbourne. Contact us today to increase online visibility in your area." />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Strengthen Your Organic Presence With A ROI-Driven SEO Agency"}
        desc={
          <p>
            Get your brick and mortar business ranked on top positions of the Google search results page and maps through our highly effective local SEO services. By ranking high on predominant search
            engines such as Google and Bing, you can practically sky-rocket your store’s footfalls and sales.
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
            A <span className="titleBackground">SEO Game Plan</span> To Get You to the Top
          </>
        }
        desc={
          <p className="subtitle">
            Take the guesswork out of local SEO with our legit team of local SEO scientists. You can trust us with your local SEO results and get back to running your business. Here’s exactly what we
            will do for you:
          </p>
        }
      />
      <Industries background={"#d6e8eb"} setPopup={setPopup} />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Localseo;
