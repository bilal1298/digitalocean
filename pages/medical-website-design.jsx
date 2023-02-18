import React, { useState } from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import PopupFormWebIn from "../components/UI/PopupFormWebIn";
import classes from "../styles/pages.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const Health = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Chiropractic Healthcare Clinic",
      text: "As a growing chiropractic practice, our website needed to not only look professional but also provide patients with an easy and secure way to access our services. Skyward Digital's team of designers and developers were able to deliver exactly that. They created a sleek and informative website that not only helped us improve our online presence, but also provided our patients with an easy and secure way to access our services. Their ability to create a website that was easy to navigate, providing patients with a great user experience, truly set them apart from the competition.",
      business: "/client 56.png",
    },
    {
      designation: "Pocono Urgent Care",
      text: "As an Urgent Care, we needed a website that effectively communicated our services to patients and provided them with valuable information and resources. Skyward Digital's team of designers and developers were able to deliver a website that exceeded our expectations. They were able to create a website that was easy to navigate, providing patients with all the information they would need to know about our services. The end result was a website that truly met our patients' needs and improved their experience when visiting our hospital.",
      business: "/Client logo 22.png",
    },
    {
      designation: "Asilia Home Health Care",
      text: "As a provider of home healthcare services, we needed a website that would make it easy for patients to access our services and provide them with all the information they would need to know about our services. Skyward Digital's team of designers and developers were able to deliver a visually appealing and user-friendly website that met all of our requirements. Their attention to detail and dedication to customer service was outstanding. They truly understood our business and were able to create a website that truly met the needs of our patients.",
      business: "/client logo 57.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Dental",
      desc: "Showcase your expertise and commitment to patient care with a professional website. Educate your patients on a range of helpful topics around dental care.",
      icon: "/dental.png",
      href: "/contact",
    },
    {
      title: "Optometry",
      desc: "With a custom-built website, you can be found quicker in search than DIY sites. And can position you as a thought leader with a blog.",
      icon: "/optometry.png",
      href: "/contact",
    },
    {
      title: "Chiropractors",
      desc: "Help your clients reach you faster with clickable phone numbers and straightforward appointment booking. And share how your treatments can assist with a comprehensive services page.",
      icon: "/chiropractor.png",
      href: "/contact",
    },
    {
      title: "Physiotherapy",
      desc: "Imagine a client injuring themselves at basketball. They reach for their phone to find the nearest Physio. That’s why you need a mobile responsive website.",
      icon: "/physiotherapy.png",
      href: "/contact",
    },
    {
      title: "Private Medical Practitioner",
      desc: "GPs leveraged online appointments during the pandemic to prevent poor patient experience when reception staff were absent. And including the new patient registry online limits in-person contact.",
      icon: "/private medical.png",
      href: "/contact",
    },
    {
      title: "Dermatologist ",
      desc: "Improve your patient’s experience by avoiding waiting on hold to do basic tasks like updating their address or switching an appointment.",
      icon: "/dermatologist.png",
      href: "/contact",
    },
    {
      title: "Private Hospitals ",
      desc: "A hospital stay is often not something people look forward to visiting. So a hospital website needs to balance compassion, education and engagement.",
      icon: "/hospital.png",
      href: "/contact",
    },
  ];
  const router = useRouter();
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "Skyward Digital | Medical Website Design Services",
    url: "https://skywarddigital.com.au/medical-website-design",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",
    description:
      "Improve patient engagement with Skyward Digital's expert medical website design services. Contact us today to create a professional, user-friendly and Privacy Act compliant website for your healthcare practice.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/medical-website-design" />
        <title>Skyward Digital | Medical Website Design Services</title>
        <meta name="title" content="Skyward Digital | Medical Website Design Services" />
        <meta
          name="description"
          content="Improve patient engagement with Skyward Digital's expert medical website design services. Contact us today to create a professional, user-friendly and Privacy Act compliant website for your healthcare practice."
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
      {popup && <PopupFormWebIn setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
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
        title={
          <>
            <span className="titleBackground">Trust the Experts</span> in Healthcare Website Design
          </>
        }
        desc={
          <div style={{ margin: "40px 0", textAlign: "left" }}>
            <div style={{ marginBottom: "25px" }}>
              <h3>Communicates</h3>
              <p>Your organisation’s voice, products and services, and mission.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3>Interactive features</h3>
              <p>for messaging and data exchange.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3>Appeals</h3>
              <p>to both existing and prospective users.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3>Discoverable</h3>
              <p>by prospective users through search engines.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3> Complies</h3>
              <p>with all applicable security and regulatory standards – including HIPAA, ADA, GDPR, and CCPA.</p>
            </div>
          </div>
        }
        background={"#fff"}
      />
      <FlipBox
        items={flipboxItems}
        title={
          <>
            <span className="titleBackground">Healthcare websites</span> for doctors, surgeons, dentists, specialists and allied professionals
          </>
        }
        desc={
          <p className="subtitle">
            Reliable and accurate healthcare information is essential to building trust as a dentist, local GP or hospital operator.
            <br />
            <br />
            Your healthcare website should help busy parents book an appointment for a sick child. Or if they have injured themselves playing footy on the weekend, they turn to your physio website to
            learn how to self-manage or if they should seek expert advice.
            <br />
            <br />
            And with every changing rule around Covid-19, patients use healthcare websites to stay informed about entry requirements to medical facilities.
          </p>
        }
        background={"#d6e8eb"}
        width={"25%"}
      />
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
    </React.Fragment>
  );
};

export default Health;
