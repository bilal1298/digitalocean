import React, { useState } from "react";
import classes from "../styles/WhiteLabelServices.module.css";
import Section from "../components/UI/Section";
import Faqs from "../components/UI/Faqs";
import Button from "../components/UI/Button";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import PopupFormWlS from "../components/UI/PopupFormWlS";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Whitelabelweb = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const [popup, setPopup] = useState(false);
  const [priceActive, setPriceActive] = useState("s");
  const router = useRouter();
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Superior White Label Web Design Services",
    url: "https://skywarddigital.com.au/white-label-web-design",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Offer cutting-edge web design services to your clients with Skyward Digital's white label web design solutions. Contact us today to learn how we can help you grow your agency.",
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
        name: "1. What Is White Label Website Design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White Label Website Design refers to the creation of custom websites for clients, which are then branded as if they were created by the agency itself. In other words, the agency can take credit for the website design and development work, without actually having to handle the technical aspects of it. This approach allows agencies to expand their services and increase their revenue without incurring the costs and time required to build and maintain an in-house design and development team. The white label website design process involves using a variety of platforms and technologies such as HTML, WordPress, PHP, React, Laravel, Shopify, Wix, Magento, and WooCommerce. This ensures that the website design can be customized to meet the specific needs and preferences of each individual client. The agency works with a white label partner to understand the client's goals and preferences, and then provides a design that aligns with their brand and target audience. The partner then handles the technical aspects of website design and development, delivering a high-quality, custom website that is both visually appealing and functional.",
        },
      },
      {
        "@type": "Question",
        name: "2. Why Should My Agency Use White Label Website Design And Development Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By using white label website design and development services, your agency can expand its offerings, increase its revenue, and provide its clients with a comprehensive digital solution. You can focus on what you do best, while relying on a trusted partner to handle the technical aspects of website design and development.",
        },
      },
      {
        "@type": "Question",
        name: "3. How Does Your White Label Website Design Work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our white label website design process begins with a thorough consultation with you to understand your clients' needs, goals, and preferences. We then create a customized website design that aligns with their brand and their target audience. Our team of website design and development experts will then bring the design to life, ensuring that it is both visually appealing and functional.",
        },
      },
      {
        "@type": "Question",
        name: "Why Is Skyward Digital's White Label Website Design And Development Better Than Its Competitors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skyward Digital's white label website design and development is better than competitors because we offer a personalized approach that is tailored to your clients' unique needs and goals. Our team of experts is highly experienced, knowledgeable, and results-driven, ensuring that your clients receive the best possible results. Additionally, our pricing is competitive, and we provide flexible, scalable, and cost-effective solutions that are designed to meet the needs of businesses of all sizes.",
        },
      },
      {
        "@type": "Question",
        name: "How Can I Start Using Your White Label Website Design Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To start using our white label website design services, simply reach out to us, and one of our account managers will be happy to assist you. We'll discuss your needs, answer any questions you may have, and provide you with a customized proposal that outlines our services and pricing. Once you've decided to move forward, we'll set up a dedicated account manager who will work with you every step of the way, from consultation and implementation to ongoing optimization and maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "How Much Do Your White Label Website Design And Development Services Cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our white label website design and development services start at $750, making them a cost-effective solution for businesses looking to expand their offerings, increase their revenue, and provide their clients with a comprehensive digital solution that delivers results. This price includes all the necessary tools, resources, and expertise to design and develop a custom website that meets your clients' needs and exceeds their expectations. Whether your clients need a simple brochure website or a complex e-commerce platform, we have the skills and experience to deliver the results they're looking for.",
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/white-label-web-design" />
        <title>Skyward Digital | Superior White Label Web Design Services</title>
        <meta name="title" content="Skyward Digital | Superior White Label Web Design Services" />
        <meta
          name="description"
          content="Offer cutting-edge web design services to your clients with Skyward Digital's white label web design solutions. Contact us today to learn how we can help you grow your agency."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
        <Schema jsonSchema={FAQ_SCHEMA}></Schema>
      </Head>
      {popup && <PopupFormWlS setPopup={setPopup} uqid={uqid} utm={utm} />}
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">A White Label Web Design Partner You Can Trust</h1>
            <br />
            <p>Skyward’s hassle-free white label web design services enable agencies to scale up profitably.</p>
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
      <Section
        title={
          <>
            Trusted By <span className="titleBackground">500+ Clients</span> Across The World
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p}>Supporting agencies from N. America and Europe to Asia and Australia in hundreds of industries and niches.</p>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Section
        title={
          <>
            <span className="titleBackground">Take your agency to the next level.</span> Score more wins with white label web design & development services.
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
      <Section
        title={
          <>
            Our Seasoned Team of <span className="titleBackground">Web Designers & Developers</span> Can Help You With
          </>
        }
        padding={"70px 0"}
      >
        <div className={classes.adsLogo}>
          <img src={"/google_ads.png"} alt="" />
          <img src={"/microsoftads.png"} alt="" />
          <img src={"/facebookads.png"} alt="" />
          <img src={"/instagramads.png"} alt="" />
          <img src={"/linkedinads.png"} alt="" />
          <img src={"/quoraads.png"} alt="" />
          <img src={"/tiktokads.png"} alt="" />
        </div>
      </Section>
      <Section
        title={
          <>
            Partner with the <span className="titleBackground"> growth experts </span>
          </>
        }
        padding={"70px 0"}
        background={"#fff"}
      >
        <p className={classes.p}>Work with a fully-functional, fast-moving group of PPC experts that can move rapidly and achieve aggressive growth.</p>
        <div className={classes.revenueGoals}>
          <img src={"/Don’t Leave Your Revenue Goals.png"} alt="" />
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
        background={"#dde3ff"}
      >
        <div className={classes.abcContainer}>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/Skyward Digital Is Your Wingman for All Your Digital Marketing.png"} alt="" />
              <h3>Scalable Solutions</h3>
              <p>
                Our white label website design & development services are designed to achieve authentic business growth. From onboarding to website launch, our web design reseller service is
                thoroughly scalable.
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
                With extensive experience across a diverse range of clients in both size and industry, our team of website design & development experts know how to optimize your clients’ campaigns to
                get the best results
              </p>
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
        title={
          <>
            Web Development - <span className="titleBackground">Starting from $30/ hour</span>
          </>
        }
        padding={"70px 0"}
        background={"#d6e8eb"}
      >
        <div className={classes.main}>
          <table className={classes.priceTable}>
            <tbody>
              <tr className={classes.priceTableHead}>
                <td>
                  Technology
                  <br />
                </td>
                <td>
                  Home Template
                  <br />
                </td>
                <td className={classes.greenWidth}>
                  Unique Template
                  <br />
                </td>
              </tr>

              <tr>
                <td>HTML</td>
                <td>$299</td>
                <td>$199</td>
              </tr>
              <tr>
                <td>Wordpress</td>
                <td>$419</td>
                <td>$179</td>
              </tr>
              <tr>
                <td>PHP</td>
                <td>$419</td>
                <td>$179</td>
              </tr>
              <tr>
                <td>React</td>
                <td>$419</td>
                <td>$179</td>
              </tr>
              <tr>
                <td>Laravel</td>
                <td>$419</td>
                <td>$179</td>
              </tr>
              <tr>
                <td>Shopify</td>
                <td>$419</td>
                <td>$179</td>
              </tr>
              <tr>
                <td>Wix</td>
                <td>$299</td>
                <td>$119</td>
              </tr>
              <tr>
                <td>Magento</td>
                <td>$539</td>
                <td>$359</td>
              </tr>
              {/* <tr>
                <td className={classes.price}>
                  <Button href="/">Get Started</Button>
                </td>
                <td className={classes.price}>
                  <Button href="/">Get Started</Button>
                </td>
                <td className={classes.price}>
                  <Button href="/">Get Started</Button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className={classes.main2}>
          <table className={classes.priceTable}>
            <tbody>
              <tr className={classes.priceTableHead}>
                <td>
                  Addons
                  <br />
                </td>
                <td>
                  Price
                  <br />
                </td>
              </tr>

              <tr>
                <td>WooCommerce</td>
                <td>$425</td>
              </tr>
              <tr>
                <td>Interactive Components</td>
                <td>$49</td>
              </tr>

              {/* <tr>
                <td className={classes.price}>
                  <Button href="/">Get Started</Button>
                </td>
                <td className={classes.price}>
                  <Button href="/">Get Started</Button>
                </td>
                <td className={classes.price}>
                  <Button href="/">Get Started</Button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <h2 className={`title ${classes.webPriceTitle}`}>
          Web Development <span className="titleBackground">Estimates</span>
        </h2>
        <div className={classes.main3}>
          <table className={classes.priceTable}>
            <tbody>
              <tr className={classes.priceTableHead}>
                <td>Small</td>
                <td>Medium</td>
                <td>Large</td>
                <td>Enterprise</td>
              </tr>
              <tr>
                <td>$1500</td>
                <td>$2500</td>
                <td>$5000</td>
                <td></td>
              </tr>
              <tr>
                <td>5 Pages</td>
                <td>12 Pages</td>
                <td>25 Pages</td>
                <td>35 Pages & Above</td>
              </tr>

              <tr>
                <td>1 Home, 4 Unique Templates</td>
                <td>1 Home, 7 Unique Templates, 4 Adaptations</td>
                <td>1 Home, 15 Unique Templates, 10 Adaptations</td>
                <td>Contact Us</td>
              </tr>
            </tbody>
          </table>
          <div className={classes.priceTabsContainer}>
            <div className={classes.priceTabs}>
              <div className={`${classes.priceTab} ${priceActive == "s" ? classes.active : ""}`} onClick={() => setPriceActive("s")}>
                &gt;&gt; Small
              </div>
              <div className={`${classes.priceTab} ${priceActive == "m" ? classes.active : ""}`} onClick={() => setPriceActive("m")}>
                &gt;&gt; Medium
              </div>
              <div className={`${classes.priceTab} ${priceActive == "l" ? classes.active : ""}`} onClick={() => setPriceActive("l")}>
                &gt;&gt; Large
              </div>
              <div className={`${classes.priceTab} ${priceActive == "e" ? classes.active : ""}`} onClick={() => setPriceActive("e")}>
                &gt;&gt; Enterprise
              </div>
            </div>
            <div className={classes.priceDesc}>
              {priceActive == "s" && (
                <>
                  <div className={classes.price}>
                    <h2>$1500</h2>
                  </div>
                  <ul>
                    <li>5 Pages</li>
                    <li>1 Home, 4 Unique Templates</li>
                  </ul>
                  <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
                    Get in Touch
                  </button>
                </>
              )}
              {priceActive == "m" && (
                <>
                  <div className={classes.price}>
                    <h2>$2500</h2>
                  </div>
                  <ul>
                    <li>12 Pages</li>
                    <li>1 Home, 4 Unique Templates</li>
                  </ul>
                  <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
                    Get in Touch
                  </button>
                </>
              )}
              {priceActive == "l" && (
                <>
                  <div className={classes.price}>
                    <h2>$5000</h2>
                  </div>
                  <ul>
                    <li>25 Pages</li>
                    <li>1 Home, 4 Unique Templates</li>
                  </ul>
                  <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
                    Get in Touch
                  </button>
                </>
              )}
              {priceActive == "e" && (
                <>
                  <div className={classes.price}>
                    <h2 style={{ fontSize: "30px" }}>Contact Us</h2>
                  </div>
                  <ul>
                    <li>35 Pages & above</li>
                    <li>1 Home, 4 Unique Templates</li>
                  </ul>
                  <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
                    Get in Touch
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Section>
      {/* <Testimonials padding={"70px 0"} /> */}
      <Section title={<span className="titleBackground">FAQs</span>} padding={"70px 0"} background={"#fff"}>
        <Faqs
          faqs={[
            {
              title: "What Is White Label Website Design?",
              desc: (
                <>
                  White Label Website Design refers to the creation of custom websites for clients, which are then branded as if they were created by the agency itself. In other words, the agency can
                  take credit for the website design and development work, without actually having to handle the technical aspects of it. This approach allows agencies to expand their services and
                  increase their revenue without incurring the costs and time required to build and maintain an in-house design and development team.
                  <br />
                  <br /> The white label website design process involves using a variety of platforms and technologies such as HTML, WordPress, PHP, React, Laravel, Shopify, Wix, Magento, and
                  WooCommerce. This ensures that the website design can be customized to meet the specific needs and preferences of each individual client. The agency works with a white label partner
                  to understand the client's goals and preferences, and then provides a design that aligns with their brand and target audience. The partner then handles the technical aspects of
                  website design and development, delivering a high-quality, custom website that is both visually appealing and functional.
                </>
              ),
            },
            {
              title: "Why Should My Agency Use White Label Website Design And Development Services?",
              desc: (
                <>
                  By using white label website design and development services, your agency can expand its offerings, increase its revenue, and provide its clients with a comprehensive digital
                  solution. You can focus on what you do best, while relying on a trusted partner to handle the technical aspects of website design and development.
                </>
              ),
            },
            {
              title: "How Does Your White Label Website Design Work?",
              desc: (
                <>
                  Our white label website design process begins with a thorough consultation with you to understand your clients' needs, goals, and preferences. We then create a customized website
                  design that aligns with their brand and their target audience. Our team of website design and development experts will then bring the design to life, ensuring that it is both
                  visually appealing and functional.
                </>
              ),
            },
            {
              title: "Why Is Skyward Digital's White Label Website Design And Development Better Than Its Competitors?",
              desc: (
                <>
                  Skyward Digital's white label website design and development is better than competitors because we offer a personalized approach that is tailored to your clients' unique needs and
                  goals. Our team of experts is highly experienced, knowledgeable, and results-driven, ensuring that your clients receive the best possible results. Additionally, our pricing is
                  competitive, and we provide flexible, scalable, and cost-effective solutions that are designed to meet the needs of businesses of all sizes.
                </>
              ),
            },
            {
              title: "How Can I Start Using Your White Label Website Design Services?",
              desc: (
                <>
                  To start using our white label website design services, simply reach out to us, and one of our account managers will be happy to assist you. We'll discuss your needs, answer any
                  questions you may have, and provide you with a customized proposal that outlines our services and pricing. Once you've decided to move forward, we'll set up a dedicated account
                  manager who will work with you every step of the way, from consultation and implementation to ongoing optimization and maintenance.
                </>
              ),
            },
            {
              title: "How Much Do Your White Label Website Design And Development Services Cost?",
              desc: (
                <>
                  Our white label website design and development services start at $750, making them a cost-effective solution for businesses looking to expand their offerings, increase their revenue,
                  and provide their clients with a comprehensive digital solution that delivers results. This price includes all the necessary tools, resources, and expertise to design and develop a
                  custom website that meets your clients' needs and exceeds their expectations. Whether your clients need a simple brochure website or a complex e-commerce platform, we have the skills
                  and experience to deliver the results they're looking for.
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

export default Whitelabelweb;
