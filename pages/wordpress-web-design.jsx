import React, { useState } from "react";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import Section from "../components/UI/Section";
import PopupFormWebIn from "../components/UI/PopupFormWebIn";
import classes from "../styles/pages.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Wordpress = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const router = useRouter();

  const testimonials = [
    {
      designation: "Esther & co.",
      text: "As a start-up e-commerce company, it was crucial for us to have a website that effectively showcased our products and streamlined the purchasing process. Skyward Digital's team of WordPress experts delivered exactly that. They were able to create a visually stunning website that effectively promotes our products and makes it easy for customers to purchase. We've already seen a significant increase in online sales and couldn't be happier with the results.",
      business: "/client logo19.png",
    },
    {
      designation: "Center For Archaeology And Innovation",
      text: "Skyward Digital's team of WordPress experts helped us to create a website that effectively communicates our mission and message.Their ability to understand our unique needs and tailor the website to our specific audience was impressive. The outcome is a website that effectively promotes our center and drives engagement with our target audience.",
      business: "/client logo 50.png",
    },
    {
      designation: "Open Books",
      text: "As a small business, we needed a website that effectively communicates our services and establishes our credibility with potential customers. Skyward Digital's team of WordPress experts delivered exactly that. Their ability to understand our needs and create a visually stunning website was impressive. We now have a professional and user-friendly website that effectively communicates our services and has already generated a positive impact on our business.",
      business: "/Client logo12.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Custom WordPress Website Development ",
      desc: "Tweak, change and customise your website to achieve the user experience you want to deliver. It’s an efficient and cost-effective way to build a unique website.",
      icon: "/wordpress.png",
      href: "/contact",
    },
    {
      title: "Theme Development",
      desc: "Building a custom theme means lighting speeds to rank higher and boost traffic. In addition, your website has better security than off-shelf themes, which are frequent hacking targets.",
      icon: "/theme development.png",
      href: "/contact",
    },
    {
      title: "WooCommerce Development",
      desc: "You can easily and quickly reach your social media audience with WooCommerce. It’s simple to share new products and content, gliding them to your online store in one click.",
      icon: "/woocommerce.png",
      href: "/contact",
    },
    {
      title: "WP Plugin Development",
      desc: "Give your WordPress site a rocket boost in performance with custom plug-ins. Avoid costly mistakes with sluggish performance and poor UX resulting in customers clicking off.",
      icon: "/plugin development.png",
      href: "/contact",
    },
    {
      title: "Blog Development",
      desc: "Showcase your experience and position your business as an authority with blogging. WP provides excellent flexibility, ease of use, and SEO to get found in search.",
      icon: "/blog development.png",
      href: "/contact",
    },
    {
      title: "API Integration",
      desc: "It opens up new galaxies to explore for your business. Such as creating a native mobile app or communicating with other apps universally.",
      icon: "/api integration.png",
      href: "/contact",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Cutting-edge Wordpress Web Design",
    url: "https://skywarddigital.com.au/wordpress-web-design",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description:
      "Get a powerful, secure, flexible and easy to use website with Skyward Digital's expert Wordpress web design services. Contact us today to create a website that works for your business.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/wordpress-web-design" />
        <title>Skyward Digital | Cutting-edge Wordpress Web Design</title>
        <meta name="title" content="Skyward Digital | Cutting-edge Wordpress Web Design" />
        <meta
          name="description"
          content="Get a powerful, secure, flexible and easy to use website with Skyward Digital's expert Wordpress web design services. Contact us today to create a website that works for your business."
        />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>

      <section className={`${classes.banner}`}>
        <div className={`container ${classes.banner}`}>
          <div className={classes.heroText}>
            <h1>Web Design To Propel And Power Your Business Around Your Universe</h1>

            <p>
              Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue.
              <br />
              <br />
              We reimagine your website with cost-effective packages and transparent reporting to ignite your business.
            </p>

            <button className={`my-button-yellow`} onClick={() => setPopup(true)}>
              Get in Touch
            </button>
          </div>
          <div className={classes.heroForm}>
            <div className={classes.form}>
              <h3 className="title">Let's Kickstart Your Web Development Project</h3>
              <p>(Fast turnaround times, cutting-edge designs)</p>
              <form
                action="https://crm.zoho.in/crm/WebToLeadForm"
                name="WebToLeads433875000000295017"
                method="POST"
                onSubmit='javascript:document.charset="UTF-8"; return checkMandatory433875000000295017()'
                accept-charset="UTF-8"
              >
                <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3" />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="9d30a34c942dc338e7b79b92c5d52b78f4c59e112b55286ffafb9173cc698082" />
                <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
                <input type="text" style={{ display: "none" }} name="returnURL" defaultValue={`https://skywarddigital.com.au/thank-you${router.asPath}`} />
                <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name*" required />
                <input type="text" name="Website" id="Website" placeholder="Website URL*" required />
                <input type="email" name="Email" id="Email" placeholder="Email*" required />
                <input type="tel" name="Mobile" id="Mobile" placeholder="Phone Number*" required />
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
                <textarea name="Description" id="Description" cols="30" rows="10" placeholder="Additional info you'd like for us to know"></textarea>
                <button id="formsubmit" type="submit">
                  Let's Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {popup && <PopupFormWebIn setPopup={setPopup} uqid={uqid} referrer={referrer} utm={utm} />}
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
      <Section
        title={
          <>
            Create a high-converting site optimised for search with Skyward’s <span className="titleBackground">professional WordPress design and development</span> services
          </>
        }
        padding={"70px 0 0"}
      ></Section>
      <BriefService
        setPopup={setPopup}
        tab1i={"/cross browser.png"}
        tab1t={"Cross-browser compatible"}
        tab1d={"Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others."}
        tab2i={"/mobile friendly.png"}
        tab2t={"Mobile Friendly"}
        tab2d={"We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs."}
        tab3i={"/lightning.png"}
        tab3t={"Lightning Fast"}
        tab3d={"We design lightning fast websites that both search engines and users love."}
        tab4i={"/conversion optimized.png"}
        tab4t={"Conversion Optimised"}
        tab4d={"Our high-performance website designs are engineered to convert browsers into buyers."}
        title={""}
        desc={
          <p className="subtitle">
            WordPress offers a simple platform to manage your website. But if you’re looking for a custom WordPress website, you need an expert designer and developer to help. This way, you will get
            what you were looking for without learning code.
            <br />
            <br />
            Skyward Digital has built hundreds of custom WordPress websites. With a range of plugins to help you get found in search. And WordPress makes it easy for customers to click on your online
            store from social media.
            <br />
            <br />
            It’s no wonder WordPress powers nearly half the world’s websites. So if you need an online store, a small business website or even a healthcare website, then WordPress is a proven and
            reliable solution.
          </p>
        }
      />
      <FlipBox
        items={flipboxItems}
        title={
          <>
            Tinker, Swap, and Modify Your WordPress Website To <span className="titleBackground">Build Your Mothership</span>
          </>
        }
        desc={
          <p className="subtitle">
            Customising your WordPress website allows you to present your business online uniquely. For example, you may want to change your theme to improve site speed. Or you want to grow organic
            traffic but need some support around setting up your blog. <br />
            <br />
            Our WordPress development services can help your business supercharge your website to grow revenue and boost your brand.
          </p>
        }
        background={"#d6e8eb"}
      />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Wordpress;
