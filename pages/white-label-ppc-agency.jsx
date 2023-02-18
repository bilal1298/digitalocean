import React, { useState } from "react";
import classes from "../styles/WhiteLabelServices.module.css";
import Section from "../components/UI/Section";
import Faqs from "../components/UI/Faqs";
import Button from "../components/UI/Button";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopupFormWlS from "../components/UI/PopupFormWlS";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Schema from "../data/Schema";

const Whitelabelppc = ({ uqid, setHeaderBg, utm, referrer }) => {
  setHeaderBg(false);
  const router = useRouter();
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Superior White Label PPC Services",
    url: "https://skywarddigital.com.au/white-label-ppc-agency",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Provide top-notch PPC services to your clients with Skyward Digital's white label PPC solutions. Contact us today to learn how we can help you grow your agency.",
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
        name: "What Is White Label PPC Management",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White Label PPC Management refers to the practice of managing and optimizing pay-per-click (PPC) advertising campaigns for your clients, using your own branding and under your own name. This includes advertising on platforms such as Google Ads, Microsoft Ads, Facebook Ads, LinkedIn Ads, Instagram Ads, Snapchat Ads, Tik Tok Ads and more.",
        },
      },
      {
        "@type": "Question",
        name: "Why Should My Agency Use White Label PPC Management Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By using white label PPC management services, your agency can expand its offerings, increase its revenue, and provide its clients with a comprehensive digital marketing solution. This allows you to focus on what you do best, while relying on a trusted partner to handle the day-to-day technical aspects of PPC management.",
        },
      },
      {
        "@type": "Question",
        name: "How Does Your White Label PPC Management Work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our white label PPC management services begin with a thorough analysis of your clients' businesses and their target audience. We then create a customized PPC strategy that aligns with their goals and objectives. Our team of PPC experts will then manage and optimize the campaigns on a daily basis, providing regular reporting and insights to keep you informed and to help drive continuous improvement.",
        },
      },
      {
        "@type": "Question",
        name: "Why Is Skyward Digital's White Label PPC Management Services Better Than Its Competitors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skyward Digital's white label PPC management services are better than competitors because we offer a personalized approach that is tailored to your clients' unique needs and goals. Our team of PPC experts is highly experienced, knowledgeable, and results-driven, ensuring that your clients receive the best possible results. Additionally, our pricing is competitive, and we provide flexible, scalable, and cost-effective solutions that are designed to meet the needs of businesses of all sizes.",
        },
      },
      {
        "@type": "Question",
        name: "How Can I Start Using Your White Label PPC Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To start using our white label PPC services, simply reach out to us, and one of our account managers will be happy to assist you. We'll discuss your needs, answer any questions you may have, and provide you with a customized proposal that outlines our services and pricing. Once you've decided to move forward, we'll set up a dedicated account manager who will work with you every step of the way, from consultation and implementation to ongoing optimization and reporting.",
        },
      },
      {
        "@type": "Question",
        name: "How Much Do Your White Label PPC Services Cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our white label PPC services are priced at $300/month, making them a cost-effective solution for businesses looking to expand their offerings, increase their revenue, and provide their clients with a comprehensive digital marketing solution that delivers results. This price includes all the necessary tools, resources, and expertise to manage and optimize your clients' PPC campaigns, ensuring that you receive a high-quality, results-driven solution that delivers long-lasting results.",
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/white-label-ppc-agency" />
        <title>Skyward Digital | Superior White Label PPC Services</title>
        <meta name="title" content="Skyward Digital | Superior White Label PPC Services" />
        <meta
          name="description"
          content="Provide top-notch PPC services to your clients with Skyward Digital's white label PPC solutions. Contact us today to learn how we can help you grow your agency."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
        <Schema jsonSchema={FAQ_SCHEMA}></Schema>
      </Head>
      {popup && <PopupFormWlS setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">Skyrocket your client’s revenue and take all the glory with 100% discreet white label PPC services.</h1>
            <br />
            <p>Skyward’s hassle-free white label services enable agencies to scale up profitably.</p>
            <br />
            <Link href={"#pricing"} className={"my-button-yellow"}>
              See Our Plans and Pricing
            </Link>
          </div>
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
      <Section
        title={
          <>
            Trusted By <span className="titleBackground">700+ Clients</span> Across The World
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
            Our seasoned team of <span className="titleBackground">PPC experts</span> can help you with
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

      <Section padding={"70px 0"} title={<span className="titleBackground">Our Process</span>} background={"#fff"}>
        <div className={classes.abcContainer}>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/fast onboarding.png"} alt="" />
              <h3>Fast Onboarding</h3>
              <p>You’re only a click away from the fastest onboarding process in the industry. We go from signup and research to custom landing page designs and campaign launch within 2-3 days.</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/ROI forecasting and market launch.png"} alt="" />
              <h3>Campaign Management</h3>
              <p>We simply link our Google Ads Manager Account to yours (takes 4 mins to do) and we’re ready to go. This means that your clients never find out that we’re managing their ads.</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/Define PPC Keywords & Targeting.png"} alt="" />
              <h3>Campaign Optimisations</h3>
              <p>
                To ensure that your clients’ ads are only served to the right audience, we optimize all campaigns on a DAILY BASIS. Yes. You read that right. We have zero tolerance for irrelevant
                clicks.
              </p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/stress free.png"} alt="" />
              <h3>Tracking</h3>
              <p>
                Our team handles setting up all of the conversion tracking and call tracking for you. We track everything from keywords and landing page visits to calls and contact forms so that
                performance metrics are always accurate to the T.
              </p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/PPC landing page optimisations.png"} alt="" />
              <h3>Landing Pages</h3>
              <p>
                More often than not, client websites aren’t conversion optimized and they’re averse to the idea of making changes. For a ridiculously small fee (you can up-charge your client for a
                neat profit), we’ll create a highly converting landing page to increase your leads.
              </p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/analytics, measuring and reporting.png"} alt="" />
              <h3>Reporting</h3>
              <p>
                In addition to our easy-to-understand dashboard that’s always at your disposal, we create custom weekly/monthly reports for your clients with YOUR BRANDING. The report will contain all
                core KPI stats and also compare to the previous period’s report.
              </p>
            </div>
          </div>
        </div>
        <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
          Get in Touch
        </button>
      </Section>
      <Section padding={"10px 0"} background={"#ededed"}>
        <div className={classes.partnerLogo}>
          <img src={"meta.png"} alt="" style={{ width: "15%" }} />
          <img src={"microsoft.png"} alt="" />
          <img src={"tiktok.png"} alt="" />
          <img src={"google.png"} alt="" style={{ width: "12%" }} />
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
        <Swiper
          className="pricingSwiper"
          style={{ padding: "35px" }}
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          ,
          <SwiperSlide>
            <div className={classes.pricingCard}>
              <div className={classes.container}>
                <div className={classes.detail}>
                  <div className={classes.shape}>
                    <img src={"/google ads.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>Google/Microsoft</h3>
                  <ul>
                    <li>Search Campaigns</li>
                    <li>Video Campaigns</li>
                    <li>YouTube Ads</li>
                    <li>Location Targeting</li>
                    <li>Budget Management</li>
                    <li>Conversion Tracking</li>
                    <li>Keyword Research</li>
                    <li>Ad Copywriting</li>
                    <li>Ad Testing</li>
                    <li>Conversion Analysis</li>
                    <li>New Features</li>
                    <li>Display Campaigns</li>
                    <li>Remarketing Ads</li>
                    <li>Ad Scheduling</li>
                    <li>Audience Targeting</li>
                    <li>Bid Management</li>
                    <li>Ad Extensions</li>
                    <li>Keyword Selection</li>
                    <li>Negative Keywords</li>
                    <li>Extension Testing</li>
                    <li>Budget Analysis</li>
                    <li>Reporting Dashboard</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $300
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.pricingCard}>
              <div className={classes.container}>
                <div className={classes.detail}>
                  <div className={classes.shape}>
                    <img src={"/facebook ads.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>Facebook/Instagram</h3>
                  <ul>
                    <ul>
                      <li>Lead Generation</li>
                      <li>Messenger Ads</li>
                      <li>Instagram Ads</li>
                      <li>Conversion Tracking</li>
                      <li>Lookalike Audiences</li>
                      <li>Location Targeting</li>
                      <li>Dynamic Creative</li>
                      <li>Ad Copywriting</li>
                      <li>Ad Testing</li>
                      <li>Conversion Analysis</li>
                      <li>New Features</li>
                      <li>Conversion Ads</li>
                      <li>Retargeting Ads</li>
                      <li>Budget Management</li>
                      <li>Audience Research</li>
                      <li>Custom Audiences</li>
                      <li>Detailed Targeting</li>
                      <li>Creative Production</li>
                      <li>Lead Forms</li>
                      <li>Audience Testing</li>
                      <li>Budget Analysis</li>
                      <li>Reporting Dashboard</li>
                    </ul>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $300
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.pricingCard}>
              <div className={classes.container}>
                <div className={classes.detail}>
                  <div className={classes.shape}>
                    <img src={"/linkedin ads.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>LinkedIn</h3>
                  <ul>
                    <li>Search Campaigns</li>
                    <li>Video Campaigns</li>
                    <li>YouTube Ads</li>
                    <li>Location Targeting</li>
                    <li>Budget Management</li>
                    <li>Conversion Tracking</li>
                    <li>Keyword Research</li>
                    <li>Ad Copywriting</li>
                    <li>Ad Testing</li>
                    <li>Conversion Analysis</li>
                    <li>New Features</li>
                    <li>Display Campaigns</li>
                    <li>Remarketing Ads</li>
                    <li>Ad Scheduling</li>
                    <li>Audience Targeting</li>
                    <li>Bid Management</li>
                    <li>Ad Extensions</li>
                    <li>Keyword Selection</li>
                    <li>Negative Keywords</li>
                    <li>Extension Testing</li>
                    <li>Budget Analysis</li>
                    <li>Reporting Dashboard</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $300
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Section>

      <Section
        title={
          <>
            Partner with the <span className="titleBackground"> growth experts </span>
          </>
        }
        padding={"70px 0"}
      >
        <p className={classes.p}>Work with a fully-functional, fast-moving group of PPC experts that can move rapidly and achieve aggressive growth.</p>
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
              <p>Our white label PPC services are designed to achieve authentic business growth. From onboarding to campaign optimisations, our PPC reseller service is thoroughly scalable.</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/hassle free onboarding.png"} alt="" />
              <h3>Hassle free onboarding</h3>
              <p>Speak to one of our PPC experts, fill in our onboarding questionnaire and you’re all set to go!</p>
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
            <img src={"/stress free 2.png"} alt="" />
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
      {/* <Testimonials padding={"70px 0"} background={"#fff"} /> */}
      <Section title={<span className="titleBackground">FAQs</span>} padding={"70px 0"} background={"#fff"}>
        <Faqs
          faqs={[
            {
              title: "What Is White Label PPC Management?",
              desc: (
                <>
                  White Label PPC Management refers to the practice of managing and optimizing pay-per-click (PPC) advertising campaigns for your clients, using your own branding and under your own
                  name. This includes advertising on platforms such as Google Ads, Microsoft Ads, Facebook Ads, LinkedIn Ads, Instagram Ads, Snapchat Ads, Tik Tok Ads and more.
                </>
              ),
            },
            {
              title: "Why Should My Agency Use White Label PPC Management Services?",
              desc: (
                <>
                  By using white label PPC management services, your agency can expand its offerings, increase its revenue, and provide its clients with a comprehensive digital marketing solution.
                  This allows you to focus on what you do best, while relying on a trusted partner to handle the day-to-day technical aspects of PPC management.
                </>
              ),
            },
            {
              title: "How Does Your White Label PPC Management Work?",
              desc: (
                <>
                  Our white label PPC management services begin with a thorough analysis of your clients' businesses and their target audience. We then create a customized PPC strategy that aligns
                  with their goals and objectives. Our team of PPC experts will then manage and optimize the campaigns on a daily basis, providing regular reporting and insights to keep you informed
                  and to help drive continuous improvement.{" "}
                </>
              ),
            },
            {
              title: "Why Is Skyward Digital's White Label PPC Management Services Better Than Its Competitors?",
              desc: (
                <>
                  Skyward Digital's white label PPC management services are better than competitors because we offer a personalized approach that is tailored to your clients' unique needs and goals.
                  Our team of PPC experts is highly experienced, knowledgeable, and results-driven, ensuring that your clients receive the best possible results. Additionally, our pricing is
                  competitive, and we provide flexible, scalable, and cost-effective solutions that are designed to meet the needs of businesses of all sizes.
                </>
              ),
            },
            {
              title: "How Can I Start Using Your White Label PPC Services?",
              desc: (
                <>
                  To start using our white label PPC services, simply reach out to us, and one of our account managers will be happy to assist you. We'll discuss your needs, answer any questions you
                  may have, and provide you with a customized proposal that outlines our services and pricing. Once you've decided to move forward, we'll set up a dedicated account manager who will
                  work with you every step of the way, from consultation and implementation to ongoing optimization and reporting.
                </>
              ),
            },
            {
              title: "How Much Do Your White Label PPC Services Cost?",
              desc: (
                <>
                  Our white label PPC services are priced at $300/month, making them a cost-effective solution for businesses looking to expand their offerings, increase their revenue, and provide
                  their clients with a comprehensive digital marketing solution that delivers results. This price includes all the necessary tools, resources, and expertise to manage and optimize your
                  clients' PPC campaigns, ensuring that you receive a high-quality, results-driven solution that delivers long-lasting results.
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

export default Whitelabelppc;
