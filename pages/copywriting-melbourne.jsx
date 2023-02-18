import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import Section from "../components/UI/Section";
import classes from "../styles/WhiteLabelServices.module.css";
import Head from "next/head";
import PopupForm from "../components/UI/PopupForm";
import Schema from "../data/Schema";

const Contentwriting = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Juliana Silva Studio",
      text: "Skyward Digital’s team of writers have a deep understanding of our industry and have been able to produce high-quality, informative blog posts and white papers that have helped us rank better and attract more visitors to our website. Their ability to turn around content quickly and efficiently has been a huge advantage for us. The level of customer service provided has been exceptional and they were always willing to make revisions to ensure our satisfaction. We appreciate their efforts and look forward to continuing our partnership.",
      business: "/client logo20.png",
    },
    {
      designation: " Olivia Wilson Fashion Boutique",
      text: "Skyward’s team of writers were able to clearly communicate our mission and message in a way that resonated with our target audience. Their attention to detail and willingness to work with us to make revisions helped ensure our content was accurate and effective. We appreciate their dedication to our cause and the positive impact it has had on our organisation.",
      business: "/client logo43.png",
    },
    {
      designation: "Smile Dental",
      text: "Skyward Digital has done our website’s content and continues to do our blogs for us and I’m very happy that their team of writers do thorough research about the dental industry before turning it in to me for approval. They’re really good at what they do and their consistency has resulted in great SEO results for our website.",
      business: "/client logo 55.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Website Content",
      desc: "The words your readers are reading should compel them to act! Our content is catchy. We help land readers, revenue and return on your investment. ",
      icon: "/website content.png",
      href: "/contact",
    },
    {
      title: "Blog Writing",
      desc: "Whatever blog topic, we will help you write original and well-researched content. Your readers want to read engaging material and we help you write that. ",
      icon: "/blog writing.png",
      href: "/contact",
    },
    {
      title: "Landing Pages",
      desc: "Create a powerful and strategic landing page that will influence your audience to act! Let them help drive your revenue and the metrics you desire. ",
      icon: "/landing page.png",
      href: "/contact",
    },
    {
      title: "Resume Writing",
      desc: "We help you write resumes that potential employers will make sure to notice and read. Let us amplify your skills to translate to potential employment.",
      icon: "/resume writing.png",
      href: "/contact",
    },
    {
      title: "Branding & Advertising",
      desc: " We will forge a brand identity that encapsulates you and is unique. Our honed marketing expertise will also propel your brand or business skyward!",
      icon: "/brand identity.png",
      href: "/contact",
    },
    {
      title: "Email Promotions",
      desc: "Email promotions that will stand out in a cluttered inbox. We create email content that will be catchy, and attractive, and drive traffic to you.",
      icon: "/email.png",
      href: "/contact",
    },
    {
      title: "Newsletters",
      desc: "Do you want newsletters that your readers will love being subscribed to? Do you want newsletters that are fresh? We can do that for you.",
      icon: "/newsletter.png",
      href: "/contact",
    },
    {
      title: "Press Releases",
      desc: "Press releases require expertise that will allow them to be successful. We have the industry experience to help you launch engaging and well-executed press releases. ",
      icon: "/press.png",
      href: "/contact",
    },
  ];

  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital - Professional Copywriting Services in Melbourne",
    url: "https://skywarddigital.com.au/copywriting-melbourne",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Increase conversions with Skyward Digital's expert copywriting services in Melbourne. Contact us today to create persuasive and compelling copy for your business.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/copywriting-melbourne" />
        <title>Skyward Digital - Professional Copywriting Services in Melbourne</title>
        <meta name="title" content="Skyward Digital - Professional Copywriting Services in Melbourne" />
        <meta
          name="description"
          content="Increase conversions with Skyward Digital's expert copywriting services in Melbourne. Contact us today to create persuasive and compelling copy for your business."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      <ServicesBanner
        title={"Premium Copywriting Agency"}
        desc={
          <p>
            Don’t be saying what everyone else is. Say what you want and convert words to powerful messages or revenue. We offer a range of content writing services. From website content to a resume,
            or a press release, we offer content that speaks volumes and converts words to a high ROI.
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
            We create <span className="titleBackground">Content Writing</span> That Is Sharp, Concise and That Communicates Powerfully.
          </>
        }
        desc={
          <p className="subtitle">
            Writing is powerful if utilised correctly. We specialise in a universe of services including website content, blog writing, landing pages, resume writing, brand and advertising, email
            promotions, newsletters, and press releases. We employ our own in-house content writing strategy to produce quality and powerful writing to propel your brand forward. Whether it’s a
            website or an email promotion, our content writing will launch your desired message in a way that will land with your readers.
          </p>
        }
      />

      <Section
        padding={"70px 0"}
        title={
          <>
            Our <span className="titleBackground">content writing process</span>
          </>
        }
        background={"#d6e8eb"}
      >
        <p className={"subtitle"}>Our reliable method for producing content writing that stirs readers and helps you achieve goals.</p>
        <div className={classes.abcContainer} style={{ justifyContent: "center" }}>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/prepare (1).png"} alt="" />
              <h3>Prepare</h3>
              <p>We spend quality time understanding your goals and needs. We cultivate content strategy relevant to brand identity and desired outcomes. Preparation is where success begins. </p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/liftoff.png"} alt="" />
              <h3>Lift off</h3>
              <p>Let the work begin! This is where our skilled team uses our breadth of talent to start producing writing and content that will empower you.</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/journey.png"} alt="" />
              <h3>The Journey</h3>
              <p>Content writing is a journey. That journey includes the production, promotion, and revision of content. We will be with you every step of the way.</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/land.png"} alt="" />
              <h3>Land</h3>
              <p>We spend time utilising our services to help your business land successfully. We specialise in strategies like SEO writing to achieve your desired results.</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/propel.png"} alt="" />
              <h3>Propel</h3>
              <p>There is more to be done than just producing content. We take the finished product and propel it towards a wider reach and greater success.</p>
            </div>
          </div>
        </div>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>

      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Contentwriting;
