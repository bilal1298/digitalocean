import React, { useState } from "react";
import classes from "../styles/WhiteLabelServices.module.css";
import Section from "../components/UI/Section";
import Faqs from "../components/UI/Faqs";
import Button from "../components/UI/Button";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Boxes from "../components/UI/Boxes";
import Link from "next/link";
import Testimonials from "../components/HomePage/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopupFormWlS from "../components/UI/PopupFormWlS";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Whitelabelseo = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const router = useRouter();

  const flipboxItems = [
    {
      title: "SEO audit",
      desc: "Our 100% manual, actionable SEO audit will Identify issues and improvement opportunities for your clients that no tools can find. Get in-depth on-site audit reports in a palatable format that will enable you to prioritize your clients’ SEO optimization needs effectively.",
      icon: "/seo audit.png",
    },
    {
      title: "Local SEO",
      desc: "We create an integrated local SEO strategy for your clients using on-page optimization tactics, manual outreach, citation building and cleaning, review-earning techniques, and more. Let us enhance your local SEO services by drawing more attention to your clients on local search results and Google Maps.",
      icon: "/Local SEO.png",
    },
    {
      title: "Content Marketing",
      desc: "Utilize our services to produce and distribute your clients’ content such as blogs, videos, podcasts, and other material to attract, retain, and grow an audience. When it's time to buy what you sell, people will think of your company first thanks to this strategy's promotion of brand awareness and establishment of competence.",
      icon: "/content marketing.png",
    },
    {
      title: "Global SEO",
      desc: "We improve your website’s global rankings making it both accessible and comprehensible to your target audience. This is achieved through employing a meticulously planned SEO process that includes industry-leading technical SEO best practices, a proprietary keyword research process, top-notch on site SOPs, and acquiring high authority links through manual outreach.",
      icon: "/global icon.png",
    },

    {
      title: "Ecommerce",
      desc: "Get cutting edge eCommerce SEO solutions for online stores of all sizes. Our ecommerce SEO experts will help you increase your eCommerce SEO bandwidth through swift and effective strategies.",
      icon: "/ecommerce.png",
    },
    {
      title: "Citations",
      desc: "Business citations are crucial to your website’s local SEO success. We build relevance and prominence using high authority citations, and maximize their effectiveness by indexing them through our special strategy.",
      icon: "/citation.png",
    },
    {
      title: "Link Building",
      desc: "Integrate white hat link building techniques into your digital marketing strategy to increase your site's indexability, attract more relevant visitors, and strengthen brand recognition.",
      icon: "/link building.png",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Superior White Label SEO Reseller Services",
    url: "https://skywarddigital.com.au/white-label-seo-reseller",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description: "Provide top-notch SEO services to your clients with Skyward Digital's white label SEO reseller solutions. Contact us today to learn how we can help you grow your agency.",
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
        name: "What Are White Label SEO Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'White label SEO services, Reseller SEO, and Private Label SEO all refer to SEO services that are rebranded and sold by one company to another under a different name. This allows businesses to offer high-quality SEO services to their clients without having to invest in the expertise, resources, and technology required to deliver those services in-house. With white label SEO, the original provider of the services remains anonymous, while the reselling company can market and sell the services as their own. This can be a great way for businesses to offer a complete suite of digital marketing services to their clients without having to develop their own expertise in each area. White label SEO services include keyword research and analysis, GBP (Google Business Profile) optimisations, website optimisation, link building, and content creation, among others. Our White Label SEO services are 100% discreet and are done under "white label logins" so nothing is exposed. By choosing us, you can focus on sales and client relationships, while we take care of the technical work required to deliver the services.',
        },
      },
      {
        "@type": "Question",
        name: "Why Should My Agency Use White Label SEO Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using white label SEO services can provide a number of benefits for your agency. First and foremost, it allows you to offer comprehensive digital marketing services to your clients without having to invest in the resources and expertise required to deliver those services in-house. By partnering with a white label SEO provider, you can focus on building relationships with your clients and growing your business, while the provider takes care of the technical work required to deliver the services. Additionally, white label SEO services can provide a cost-effective solution, enabling you to offer competitive pricing to your clients while still maintaining a high level of quality. With white label SEO, you also have the flexibility to tailor the services to your clients' needs, including custom branding, customized reporting, and a dedicated account manager. By choosing white label SEO, you can expand your offerings, increase your revenue, and provide your clients with a comprehensive digital marketing solution that delivers results.",
        },
      },
      {
        "@type": "Question",
        name: "How Do Your White Label SEO Services Work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skyward Digital's white label SEO services work by providing you with a complete suite of SEO services that you can rebrand and sell to your clients under your own name. Our team of experts will work behind the scenes to deliver high-quality SEO services, including keyword research, GBP optimisation, website optimization, link building, and content creation, among others. We use industry-leading tools and techniques to deliver results that drive traffic, improve rankings, and increase conversions. Our services are customizable, so you can choose the specific services that best fit your clients' needs.  We can also help you setup you call tracking softwares like Call Rail. Our team will work with you to create customized reporting and branding, ensuring that your clients receive a solution that is tailored to their unique requirements. Our goal is to help you expand your offerings, increase your revenue, and provide your clients with a comprehensive digital marketing solution that delivers results. With our white label SEO services, you'll have a partner who supports you every step of the way, from consultation and implementation to ongoing optimization and reporting.",
        },
      },
      {
        "@type": "Question",
        name: "Do You Use Black Hat Or Risky SEO Techniques And Tactics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Never! We do not use black hat or risky SEO techniques and tactics. Black hat SEO refers to practices that are considered unethical and violate search engine guidelines. These techniques may provide quick results in the short term, but they can lead to penalties, decreased visibility, and even blacklisting from search engines. We believe in providing ethical, sustainable, and long-term solutions to our clients. Our approach to SEO is based on the principles of transparency, accountability, and authenticity. We focus on creating high-quality content, improving website usability, and building natural, high-quality links to your website. We also keep up-to-date with the latest search engine guidelines and algorithms to ensure that our clients receive the best possible results. By choosing our white label SEO services, you can be confident that your clients' websites will be optimized using safe, effective, and ethical techniques that deliver long-lasting results.",
        },
      },
      {
        "@type": "Question",
        name: "Why Is Skyward Digital's White Label SEO Service Better Than Competitors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skyward Digital's white label SEO service is better than competitors for a number of reasons.: Firstly, we have a team of experienced and knowledgeable Australia-based SEO experts who use industry-leading tools and techniques to deliver results for our clients. Our approach to SEO is based on transparency, accountability, and authenticity, ensuring that our clients receive ethical, sustainable, and long-term solutions. We also provide customized reporting, branding, and account management to ensure that our clients receive a solution that is tailored to their unique requirements. Additionally, we stay up-to-date with the latest search engine algorithms and guidelines to ensure that our clients receive the best possible results. Our white label SEO service is flexible, scalable, and cost-effective, making it the perfect solution for businesses looking to expand their offerings, increase their revenue, and provide their clients with a comprehensive digital marketing solution that delivers results. By choosing Skyward Digital, you'll have a partner who supports you every step of the way, from consultation and implementation to ongoing optimization and reporting.",
        },
      },
      {
        "@type": "Question",
        name: "How Can I Start Using Your White Label SEO Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started with our white label SEO services is easy. All you have to do is click on the \"Get In Touch\" button and reach out to us. One of our account managers will schedule a free strategy session with you. On the call, we'll discuss your needs, answer any questions you may have, and provide you with a proposal that outlines our services and pricing. Once you've decided to move forward, we'll set up a dedicated account manager who will work with you to create custom branding, reporting, and a customized solution that meets the needs of your clients. Our team of SEO experts will then get to work on optimizing your clients' websites, delivering results that drive traffic, improve rankings, and increase conversions. Throughout the process, your dedicated account manager will be available to answer any questions you have and provide regular updates on the progress of your clients' campaigns. With our white label SEO services, you can be confident that you're providing your clients with a high-quality, results-driven solution that delivers long-lasting results. To get started, simply reach out to us and we'll take care of the rest.",
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/white-label-seo-reseller" />
        <title>Skyward Digital | Superior White Label SEO Reseller Services</title>
        <meta name="title" content="Skyward Digital | Superior White Label SEO Reseller Services" />
        <meta
          name="description"
          content="Provide top-notch SEO services to your clients with Skyward Digital's white label SEO reseller solutions. Contact us today to learn how we can help you grow your agency."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
        <Schema jsonSchema={FAQ_SCHEMA}></Schema>
      </Head>
      {popup && <PopupFormWlS setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
      <section className={classes.whiteLabelBanner}>
        <div className={`container-lg ${classes.heroContainer}`}>
          <div className={classes.heroText}>
            <h1 className="title">Skyrocket your client’s revenue and take all the glory with 100% discreet white label SEO services.</h1>
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
            <span className="titleBackground">Take your agencyto the next level.</span> Score more wins with white label SEO.
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

      <Boxes
        items={flipboxItems}
        title={
          <>
            Our seasoned team of <span className="titleBackground">SEO experts</span> can help you with
          </>
        }
        padding={"70px 0"}
        href={"/"}
        width={"25%"}
        setPopup={setPopup}
      />

      <Section padding={"10px 0"} background={"#ededed"}>
        <div className={classes.partnerLogo}>
          <img src={"/meta.png"} alt="" style={{ width: "15%" }} />
          <img src={"/microsoft.png"} alt="" />
          <img src={"/tiktok.png"} alt="" />
          <img src={"/google.png"} alt="" style={{ width: "12%" }} />
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
                    <img src={"/seo audit.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>White label SEO audit</h3>
                  <ul>
                    <li>Complete Technical SEO Audit</li>
                    <li>On-page SEO Analysis</li>
                    <li>Content Audit</li>
                    <li>Competitor Analysis</li>
                    <li>Off-page Analysis</li>
                    <li>Link Building Recommendations</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $200
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
                    <img src={"/Local SEO.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>White label Local SEO</h3>
                  <ul>
                    <li>Comprehensive SEO Audit</li>
                    <li>Competition Analysis</li>
                    <li>Keyword Research</li>
                    <li>Technical SEO Fixes</li>
                    <li>Content Optimisation</li>
                    <li>Citations</li>
                    <li>Advanced Graph Schema Markups</li>
                    <li>Google Analytics & Audience Tracking Tools</li>
                    <li>Manual Outreach Links</li>
                    <li>GBP Optimisation & Posts</li>
                    <li>Content Strategy & Marketing</li>
                    <li>Monthly Reporting</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $600
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
                    <img src={"/ecommerce.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>White label Ecommerce SEO</h3>
                  <ul>
                    <li>Comprehensive SEO Audit</li>
                    <li>Competition Analysis</li>
                    <li>Keyword Research</li>
                    <li>Technical SEO Fixes</li>
                    <li>Content Optimisation</li>
                    <li>Metadata Optimisation</li>
                    <li>Advanced Graph Schema Markups</li>
                    <li>Google Analytics & Audience Tracking Tools</li>
                    <li>Manual Outreach Links</li>
                    <li>Content Strategy & Marketing</li>
                    <li>Monthly Reporting</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $1200
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
                    <img src={"/global icon.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>White label Global SEO</h3>
                  <ul>
                    <li>Comprehensive SEO Audit</li>
                    <li>Competition Analysis</li>
                    <li>Keyword Research</li>
                    <li>Technical SEO Fixes</li>
                    <li>Content Optimisation</li>
                    <li>Metadata Optimisation</li>
                    <li>Advanced Graph Schema Markups</li>
                    <li>Google Analytics & Audience Tracking Tools</li>
                    <li>Manual Outreach Links</li>
                    <li>Content Strategy & Marketing</li>
                    <li>Monthly Reporting</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $1000
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
                    <img src={"/citation.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>White Label Citation</h3>
                  <ul>
                    <li>Citation Cleanup</li>
                    <li> Essential Citations</li>
                    <li> Niche Citations</li>
                    <li> Secondary & Supporting Citations</li>
                    <li> Country-specific Citations</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4>Starting from</h4>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    $80
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
                    <img src={"/content writing.png"} alt="" />
                  </div>
                  <h3 className={classes.title}>White label Content Writing</h3>
                  <ul>
                    <li>Website content</li>
                    <li> Blog content</li>
                    <li> Landing page content</li>
                    <li> Resume Writing</li>
                    <li> Email content</li>
                    <li> Newsletters</li>
                    <li> Press Releases</li>
                  </ul>
                </div>
                <div className={classes.priceContainer}>
                  <h4 className={classes.price} onClick={() => setPopup(true)}>
                    Flat 20 Cents/Word
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
        background={"#fff"}
      >
        <p className={classes.p}>Work with a fully-functional, fast-moving group of SEO experts that can move rapidly and achieve aggressive growth</p>
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
      >
        <div className={classes.abcContainer}>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/Skyward Digital Is Your Wingman for All Your Digital Marketing.png"} alt="" />
              <h3>Scalable Solutions</h3>
              <p>
                Our white label SEO services are designed to achieve authentic business growth. From creating high-volume links to impactful keyword optimisations, our SEO reseller service is
                thoroughly scalable.
              </p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/hassle free onboarding.png"} alt="" />
              <h3>Hassle free onboarding</h3>
              <p>Speak to one of our SEO experts, fill in our onboarding questionnaire and you’re all set to go!</p>
            </div>
          </div>
          <div className={classes.abcWrapper}>
            <div className={classes.abc}>
              <img src={"/results.png"} alt="" />
              <h3>Results-driven strategy</h3>
              <p>
                With extensive experience across a diverse range of clients in both size and industry, our team of SEO experts know how to optimize your clients’ campaigns to get the best results.
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
        background={"#fff"}
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
      {/* <Testimonials padding={"70px 0"} /> */}
      <Section title={<span className="titleBackground">FAQs</span>} padding={"70px 0"}>
        <Faqs
          faqs={[
            {
              title: "What Are White Label SEO Services?",
              desc: (
                <>
                  White label SEO services, Reseller SEO, and Private Label SEO all refer to SEO services that are rebranded and sold by one company to another under a different name. This allows
                  businesses to offer high-quality SEO services to their clients without having to invest in the expertise, resources, and technology required to deliver those services in-house. With
                  white label SEO, the original provider of the services remains anonymous, while the reselling company can market and sell the services as their own. This can be a great way for
                  businesses to offer a complete suite of digital marketing services to their clients without having to develop their own expertise in each area.
                  <br />
                  <br />
                  White label SEO services include keyword research and analysis, GBP (Google Business Profile) optimisations, website optimisation, link building, and content creation, among others.
                  Our White Label SEO services are 100% discreet and are done under "white label logins" so nothing is exposed. By choosing us, you can focus on sales and client relationships, while
                  we take care of the technical work required to deliver the services.
                </>
              ),
            },
            {
              title: "Why Should My Agency Use White Label SEO Services?",
              desc: (
                <>
                  Using white label SEO services can provide a number of benefits for your agency. First and foremost, it allows you to offer comprehensive digital marketing services to your clients
                  without having to invest in the resources and expertise required to deliver those services in-house. By partnering with a white label SEO provider, you can focus on building
                  relationships with your clients and growing your business, while the provider takes care of the technical work required to deliver the services. Additionally, white label SEO
                  services can provide a cost-effective solution, enabling you to offer competitive pricing to your clients while still maintaining a high level of quality.
                  <br />
                  <br />
                  With white label SEO, you also have the flexibility to tailor the services to your clients' needs, including custom branding, customized reporting, and a dedicated account manager.
                  By choosing white label SEO, you can expand your offerings, increase your revenue, and provide your clients with a comprehensive digital marketing solution that delivers results.
                </>
              ),
            },
            {
              title: "How Do Your White Label SEO Services Work?",
              desc: (
                <>
                  Skyward Digital's white label SEO services work by providing you with a complete suite of SEO services that you can rebrand and sell to your clients under your own name. Our team of
                  experts will work behind the scenes to deliver high-quality SEO services, including keyword research, GBP optimisation, website optimization, link building, and content creation,
                  among others. We use industry-leading tools and techniques to deliver results that drive traffic, improve rankings, and increase conversions. Our services are customizable, so you
                  can choose the specific services that best fit your clients' needs. We can also help you setup you call tracking softwares like Call Rail.
                  <br />
                  <br />
                  Our team will work with you to create customized reporting and branding, ensuring that your clients receive a solution that is tailored to their unique requirements. Our goal is to
                  help you expand your offerings, increase your revenue, and provide your clients with a comprehensive digital marketing solution that delivers results. With our white label SEO
                  services, you'll have a partner who supports you every step of the way, from consultation and implementation to ongoing optimization and reporting.
                </>
              ),
            },
            {
              title: "Do You Use Black Hat Or Risky SEO Techniques And Tactics?",
              desc: (
                <>
                  Never! We do not use black hat or risky SEO techniques and tactics. Black hat SEO refers to practices that are considered unethical and violate search engine guidelines. These
                  techniques may provide quick results in the short term, but they can lead to penalties, decreased visibility, and even blacklisting from search engines. We believe in providing
                  ethical, sustainable, and long-term solutions to our clients. Our approach to SEO is based on the principles of transparency, accountability, and authenticity.
                  <br />
                  <br />
                  We focus on creating high-quality content, improving website usability, and building natural, high-quality links to your website. We also keep up-to-date with the latest search
                  engine guidelines and algorithms to ensure that our clients receive the best possible results. By choosing our white label SEO services, you can be confident that your clients'
                  websites will be optimized using safe, effective, and ethical techniques that deliver long-lasting results.
                </>
              ),
            },
            {
              title: "Why Is Skyward Digital's White Label SEO Service Better Than Competitors?",
              desc: (
                <>
                  Skyward Digital's white label SEO service is better than competitors for a number of reasons.: <br />
                  <br />
                  Firstly, we have a team of experienced and knowledgeable Australia-based SEO experts who use industry-leading tools and techniques to deliver results for our clients. Our approach to
                  SEO is based on transparency, accountability, and authenticity, ensuring that our clients receive ethical, sustainable, and long-term solutions. We also provide customized reporting,
                  branding, and account management to ensure that our clients receive a solution that is tailored to their unique requirements. Additionally, we stay up-to-date with the latest search
                  engine algorithms and guidelines to ensure that our clients receive the best possible results.
                  <br />
                  <br />
                  Our white label SEO service is flexible, scalable, and cost-effective, making it the perfect solution for businesses looking to expand their offerings, increase their revenue, and
                  provide their clients with a comprehensive digital marketing solution that delivers results. By choosing Skyward Digital, you'll have a partner who supports you every step of the
                  way, from consultation and implementation to ongoing optimization and reporting.
                </>
              ),
            },
            {
              title: "How Can I Start Using Your White Label SEO Services?",
              desc: (
                <>
                  Getting started with our white label SEO services is easy. All you have to do is click on the "Get In Touch" button and reach out to us. One of our account managers will schedule a
                  free strategy session with you. On the call, we'll discuss your needs, answer any questions you may have, and provide you with a proposal that outlines our services and pricing. Once
                  you've decided to move forward, we'll set up a dedicated account manager who will work with you to create custom branding, reporting, and a customized solution that meets the needs
                  of your clients. Our team of SEO experts will then get to work on optimizing your clients' websites, delivering results that drive traffic, improve rankings, and increase
                  conversions.
                  <br />
                  <br />
                  Throughout the process, your dedicated account manager will be available to answer any questions you have and provide regular updates on the progress of your clients' campaigns. With
                  our white label SEO services, you can be confident that you're providing your clients with a high-quality, results-driven solution that delivers long-lasting results. To get started,
                  simply reach out to us and we'll take care of the rest.
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

export default Whitelabelseo;
