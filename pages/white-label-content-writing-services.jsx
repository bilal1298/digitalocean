import React, { useState } from "react";
import classes from "../styles/WhiteLabelServices.module.css";
import Section from "../components/UI/Section";
import Faqs from "../components/UI/Faqs";
import Boxes from "../components/UI/Boxes";
import Button from "../components/UI/Button";
import Link from "next/link";
import NumberStrip from "../components/ServicesPage/NumberStrip";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopupFormWlS from "../components/UI/PopupFormWlS";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Whitelabelcontent = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const router = useRouter();
  const flipboxItems = [
    {
      title: "Website Content",
      desc: "The words your readers are reading should compel them to act! Our content is catchy. We help land readers, revenue and return on your investment. ",
      icon: "/website content.png",
    },
    {
      title: "Blog Writing",
      desc: "Whatever blog topic, we will help you write original and well-researched content. Your readers want to read engaging material and we help you write that. ",
      icon: "/blog writing.png",
    },
    {
      title: "Landing Pages",
      desc: "Create a powerful and strategic landing page that will influence your audience to act! Let them help drive your revenue and the metrics you desire. ",
      icon: "/landing page.png",
    },
    {
      title: "Resume Writing",
      desc: "We help you write resumes that potential employers will make sure to notice and read. Let us amplify your skills to translate to potential employment.",
      icon: "/resume writing.png",
    },
    {
      title: "Branding & Advertising",
      desc: " We will forge a brand identity that encapsulates you and is unique. Our honed marketing expertise will also propel your brand or business skyward!",
      icon: "/brand identity.png",
    },
    {
      title: "Email Promotions",
      desc: "Email promotions that will stand out in a cluttered inbox. We create email content that will be catchy, and attractive, and drive traffic to you.",
      icon: "/email.png",
    },
    {
      title: "Newsletters",
      desc: "Do you want newsletters that your readers will love being subscribed to? Do you want newsletters that are fresh? We can do that for you.",
      icon: "/newsletter.png",
    },
    {
      title: "Press Releases",
      desc: "Press releases require expertise that will allow them to be successful. We have the industry experience to help you launch engaging and well-executed press releases. ",
      icon: "/press.png",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | White Label Content Writing Services",
    url: "https://skywarddigital.com.au/white-label-content-writing-services",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description:
      "Offer professional content writing services to your clients with Skyward Digital's white label copywriting solutions. Contact us today to learn how we can help you grow your agency.",
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
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "1. What Is White Label Content Writing/Copywriting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White Label Content Writing or Copywriting refers to the creation of written materials that can be used by agencies to enhance their clients' digital presence. This includes website content, blog writing, landing page content, resume writing, branding and advertising content, email promotions, newsletters, and press releases. White Label Content Writing allows agencies to offer comprehensive digital services to their clients, without having to worry about the time-consuming process of creating and writing the content themselves.",
        },
      },
      {
        "@type": "Question",
        name: "Why Should My Agency Use White Label Content Writing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By using White Label Content Writing, agencies can free up their time and resources to focus on other critical aspects of their business, such as strategy and client management. This enables them to offer a wider range of services, increase their revenue, and improve their competitive advantage in the market.",
        },
      },
      {
        "@type": "Question",
        name: "How Does Your White Label Content Writing Service Work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our White Label Content Writing Service works by connecting agencies with professional writers who understand the client's needs and can produce high-quality, custom content that aligns with their brand and target audience. The agency provides the writer with the relevant information and guidelines, and the writer handles the rest. The finished product is then sent to the agency for review and final approval.",
        },
      },
      {
        "@type": "Question",
        name: "Why Is Skyward Digital's White Label Content Writing Better Than Its Competitors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skyward Digital's White Label Content Writing Service is better than its competitors because we are a team of experienced, professional writers who understand the importance of producing high-quality, engaging content. We work closely with each agency to ensure that we deliver a product that meets their clients' needs and exceeds their expectations.",
        },
      },
      {
        "@type": "Question",
        name: "How Can I Start Using Your White Label Content Writing Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To start using our White Label Content Writing Services, simply reach out to us and let us know what your needs are. Our team will work with you to understand your requirements and provide you with a quote and a timeline for delivery.",
        },
      },
      {
        "@type": "Question",
        name: "How Much Do Your White Label Content Writing Services Cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our White Label Content Writing Services cost 20 cents per word, providing agencies with an affordable and flexible solution for their content needs. Whether you need website content, blog writing, or any other type of written material, we have the expertise and experience to deliver a high-quality product that meets your requirements.",
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/white-label-content-writing-services" />
        <title>Skyward Digital | White Label Content Writing Services</title>
        <meta name="title" content="Skyward Digital | White Label Content Writing Services" />
        <meta
          name="description"
          content="Offer professional content writing services to your clients with Skyward Digital's white label copywriting solutions. Contact us today to learn how we can help you grow your agency."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
        <Schema jsonSchema={FAQ_SCHEMA}></Schema>
      </Head>
      {popup && <PopupFormWlS setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">Premium White Label Content Partner</h1>
            <br />
            <p>Skyward’s hassle-free white label content writing services enable agencies to scale up profitably.</p>
            <br />
            <Link href={"#pricing"} className={"my-button-yellow"}>
              See Our Plans and Pricing
            </Link>
          </div>{" "}
          <div className={classes.heroForm}>
            <div className={classes.form}>
              <h3 className="title">Get a free audit</h3>
              <p>100% Transparency, No BS, No dodgy stuff. Just pure results.</p>
              <form action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads433875000000274020" method="POST" onSubmit='javascript:document.charset="UTF-8"' accept-charset="UTF-8">
                <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3" />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="9d30a34c942dc338e7b79b92c5d52b788cbdf82b990e41bdc2cf42fdc8285d9c" />
                <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
                <input type="text" style={{ display: "none" }} name="returnURL" defaultValue={`https://skywarddigital.com.au/thank-you${router.asPath}`} />
                <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name" required />
                <input type="text" name="Company" id="Company" placeholder="Business Name" required />
                <input type="email" name="Email" id="Email" placeholder="Email" required />
                <input type="text" name="Mobile" id="Mobile" placeholder="Phone Number" required />
                <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxlength="255" defaultValue={router.asPath} />
                <input type="text" style={{ display: "none" }} id="LEADCF5" name="LEADCF5" maxlength="255" defaultValue={uqid} />
                <input type="text" style={{ display: "none" }} id="LEADCF6" name="LEADCF6" maxlength="255" defaultValue={utm} />
                <input type="text" style={{ display: "none" }} id="LEADCF7" name="LEADCF7" maxlength="255" defaultValue={referrer} />
                <select style={{ display: "none" }} id="Lead_Source" name="Lead Source">
                  <option value="-None-">-None-</option>
                  <option value="Website" selected>
                    Website
                  </option>
                </select>
                <button id="formsubmit" type="submit">
                  Get in Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <NumberStrip
        items={[
          {
            title: (
              <>
                100%
                <br />
                Discreet Services
              </>
            ),
            icon: "/discreet.png",
          },
          {
            title: (
              <>
                100%
                <br />
                Original Content
              </>
            ),
            icon: "/original content.png",
          },
          {
            title: (
              <>
                Fast Turn
                <br />
                Around Time
              </>
            ),
            icon: "/fast turn.png",
          },
          {
            title: (
              <>
                SEO
                <br />
                Optimized Content
              </>
            ),
            icon: "/seo optimised.png",
          },
        ]}
      />
      <Section
        title={
          <>
            Trusted By <span className="titleBackground">500+ Clients</span> Across The World
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p} style={{ marginBottom: 0 }}>
          Supporting agencies from N. America and Europe to Asia and Australia in hundreds of industries and niches.
        </p>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Section
        title={
          <>
            <span className="titleBackground"> Take your agency to the next level.</span> Score more wins with white label PPC.
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <div className={classes.industryBoxes}>
          <div className={classes.industryBox}>
            <h3>100% Australia Managed</h3>
            <p>Provide your clients with superior-quality services with our 100% Australia managed team.</p>
            <img src={"/australia managed.png"} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Seamless Communication</h3>
            <p>Our experts are always available on Slack for you. We pride ourselves on our lightning-quick response times and after hour support.</p>
            <img src={"/seamless communication.png"} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>No Hogwash</h3>
            <p>We don’t do contracts, setup fees, or hidden costs.</p>
            <img src={"/No hogwash.png"} alt="" />
          </div>
          <div className={classes.industryBox}>
            <h3>Battle-tested Strategies</h3>
            <p>Get the most effective and innovative white label services for your clients.</p>
            <img src={"/battle tested white label strategies.png"} alt="" />
          </div>
        </div>
        <Button href="#pricing" position={"center"}>
          EXPLORE PLANS & PRICING
        </Button>
      </Section>

      {/* <FlipBox
        items={flipboxItems}
        title={
          <>
            Our seasoned team of <span className="titleBackground">SEO experts</span> can help you with
          </>
        }
        background={"#fff"}
      /> */}

      <Section
        title={
          <>
            Partner with the <span className="titleBackground"> growth experts </span>
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p}>Work with a fully-functional, fast-moving crew of content writers and copywriters that can move rapidly and achieve aggressive growth.</p>
        <div className={classes.revenueGoals}>
          <img src={"/australia managed.png"} alt="" />
        </div>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>

      <Section
        padding={"70px 0"}
        title={
          <>
            Getting started is as easy as <span className="titleBackground">A-B-C</span>
          </>
        }
        background={"#fff"}
      >
        <div className={classes.abcContainer}>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/Skyward Digital Is Your Wingman for All Your Digital Marketing.png"} alt="" />
              <h3>Scalable Solutions</h3>
              <p>
                Our white label content writing services are designed to achieve authentic business growth. From onboarding to website launch, our web design reseller service is thoroughly scalable.
              </p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/hassle free onboarding.png"} alt="" />
              <h3>Hassle free onboarding</h3>
              <p>Speak to one of our onboarding superstars, fill in our questionnaire and you’re all set to go!</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/results.png"} alt="" />
              <h3>Results-driven strategy</h3>
              <p>
                With extensive experience across a diverse range of clients in both size and industry, our team of PPC experts know how to optimize your clients’ campaigns to get the best results.
              </p>
            </div>
          </div>
        </div>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Section
        padding={"70px 0"}
        title={
          <>
            Our <span className="titleBackground">content writing process</span>
          </>
        }
        background={"#DDE3FF"}
      >
        <p className={classes.p}>Our reliable method for producing content writing that stirs readers and helps you achieve goals.</p>
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
      <Section
        title={
          <>
            <span className="titleBackground">Ready To Take The First Step</span> Towards Scaling Your Agency?
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p}>Agencies face many difficult dilemmas, but partnering with us shouldn't be one of them.</p>
        <div className={classes.agencyBoxes}>
          <div className={classes.agencyBox}>
            <h3>Agency Growth</h3>
            <p>Grow and scale your agency with our Australia-managed team, supercharged client support, and industry-leading SOPs.</p>
            <img src={"/agency growth.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Client Growth</h3>
            <p>You'll receive the credit and be the hero to your clients with our behind-the-scenes work.</p>
            <img src={"/client growth.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Full Support</h3>
            <p>Partnering with us provides you access to our full, Australia-managed team of leadership and specialists.</p>
            <img src={"/full support.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Stress Free</h3>
            <p>White label is a no brainer. No in-house hassles, training, raises, bonuses, benefits, taxes, or other headaches.</p>
            <img src={"/stress free.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>100% Discreet</h3>
            <p>We sign iron-clad NDAs with clients to ensure your peace of mind. Customer poaching is just not us.</p>
            <img src={"/discreet white label services.png"} alt="" />
          </div>
          <div className={classes.agencyBox}>
            <h3>Reporting Dashboards</h3>
            <p>Live, white labeled reporting dashboards to stay on top of all important metrics.</p>
            <img src={"/white label reporting.png"} alt="" />
          </div>
        </div>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Section padding={"10px 0"} background={"#ededed"}>
        <div className={classes.partnerLogo}>
          <img src={"/clutchReview.png"} alt="" style={{ padding: "20px" }} />
          <img src={"/trustpilot.png"} alt="" style={{ padding: "20px" }} />
          <img src={"/goodfirms.png"} alt="" style={{ padding: "20px" }} />
        </div>
      </Section>
      <div id="pricing"></div>
      <Section
        padding={"70px 0"}
        background={"#D6E8EB"}
        title={
          <>
            <span className="titleBackground">Pricing</span>
          </>
        }
        color={"#000"}
      >
        <div className={classes.flatPrice}>
          <h3 onClick={() => setPopup(true)}>Flat 20 cents/word</h3>
        </div>
      </Section>
      <Boxes
        items={flipboxItems}
        title={
          <>
            <span className="titleBackground">Content writing</span> that is sharp, concise and that communicates powerfully.
          </>
        }
        desc={
          <p className="subtitle">
            Description: Writing is powerful if utilised correctly. We specialise in a universe of services including website content, blog writing, landing pages, resume writing, brand and
            advertising, email promotions, newsletters, and press releases. We employ our own in-house content writing strategy to produce quality and powerful writing to propel your brand forward.
            Whether it’s a website or an email promotion, our content writing will launch your desired message in a way that will land with your readers.
          </p>
        }
        href={"/"}
        padding={"70px 0"}
        setPopup={setPopup}
      >
        <Button href="/">Let's Talk</Button>
      </Boxes>
      {/* <Testimonials padding={"70px 0"} background={"#fff"} /> */}
      <Section title={<span className="titleBackground">FAQs</span>} padding={"70px 0"} background={"#fff"}>
        <Faqs
          faqs={[
            {
              title: "What Is White Label Content Writing/Copywriting?",
              desc: (
                <>
                  White Label Content Writing or Copywriting refers to the creation of written materials that can be used by agencies to enhance their clients' digital presence. This includes website
                  content, blog writing, landing page content, resume writing, branding and advertising content, email promotions, newsletters, and press releases. White Label Content Writing allows
                  agencies to offer comprehensive digital services to their clients, without having to worry about the time-consuming process of creating and writing the content themselves.
                </>
              ),
            },
            {
              title: "Why Should My Agency Use White Label Content Writing?",
              desc: (
                <>
                  By using White Label Content Writing, agencies can free up their time and resources to focus on other critical aspects of their business, such as strategy and client management. This
                  enables them to offer a wider range of services, increase their revenue, and improve their competitive advantage in the market.
                </>
              ),
            },
            {
              title: "How Does Your White Label Content Writing Service Work?",
              desc: (
                <>
                  Our White Label Content Writing Service works by connecting agencies with professional writers who understand the client's needs and can produce high-quality, custom content that
                  aligns with their brand and target audience. The agency provides the writer with the relevant information and guidelines, and the writer handles the rest. The finished product is
                  then sent to the agency for review and final approval.
                </>
              ),
            },
            {
              title: "Why Is Skyward Digital's White Label Content Writing Better Than Its Competitors?",
              desc: (
                <>
                  Skyward Digital's White Label Content Writing Service is better than its competitors because we are a team of experienced, professional writers who understand the importance of
                  producing high-quality, engaging content. We work closely with each agency to ensure that we deliver a product that meets their clients' needs and exceeds their expectations.
                </>
              ),
            },
            {
              title: "How Can I Start Using Your White Label Content Writing Services?",
              desc: (
                <>
                  To start using our White Label Content Writing Services, simply reach out to us and let us know what your needs are. Our team will work with you to understand your requirements and
                  provide you with a quote and a timeline for delivery.
                </>
              ),
            },
            {
              title: "How Much Do Your White Label Content Writing Services Cost?",
              desc: (
                <>
                  Our White Label Content Writing Services cost 20 cents per word, providing agencies with an affordable and flexible solution for their content needs. Whether you need website
                  content, blog writing, or any other type of written material, we have the expertise and experience to deliver a high-quality product that meets your requirements.
                </>
              ),
            },
          ]}
        ></Faqs>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
    </React.Fragment>
  );
};

export default Whitelabelcontent;
