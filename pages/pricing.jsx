import React from "react";
import classes from "../styles/Pricing.module.css";
import Testimonials from "../components/HomePage/Testimonials";
import { blogs } from "../data/blogs";
import Blog from "../components/HomePage/Blog";
import Head from "next/head";
import { useRouter } from "next/router";
const pricing = ({ setHeaderBg, uqid, utm, referrer }) => {
  setHeaderBg(false);
  const testimonials = [
    {
      designation: "Center For Archaeology And Innovation",
      text: "Skyward Digital's team of WordPress experts helped us to create a website that effectively communicates our mission and message.Their ability to understand our unique needs and tailor the website to our specific audience was impressive. The outcome is a website that effectively promotes our center and drives engagement with our target audience.",
      business: "/client logo 50.png",
    },
    {
      designation: "Perfect Smile Dental Clinic",
      text: "Skyward digital’s cooperative and talented bunch of designers have been a joy to work with. They’ve been very accommodating of all my peculiar requests and my team is happy with the logo they’ve done for us. I’m thankful that the end product is something I’m still proud of after so many years as I continue to use their services for other graphic designs as well.",
      business: "/client logo54.png",
    },
    {
      designation: "Lowes Food",
      text: "Skyward Digital's SEO service was a game changer for our e-commerce store. Their team effectively optimized our website and product pages for search engines by implementing various techniques such as meta tags optimization, internal linking, and schema markup. They also provided us with guidance on how to create effective product descriptions, title tags and other on-page elements, which greatly contributed to our website's ranking. Their understanding of the latest SEO trends and techniques allowed them to continuously improve and adapt their strategy as needed. As a result, we observed a marked increase in organic traffic, conversion rates and revenue for our e-commerce store.",
      business: "/client logo 3.png",
    },
  ];
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/pricing" />
        <title>Skyward Digital | Pricing Plans</title>
        <meta name="title" content="Skyward Digital | Pricing Plans" />
        <meta name="description" content="Fill up your details to download our pricing rate card" />
      </Head>
      <section className={classes.pricingBanner}>
        <div className={`container-lg`}>
          <div className={classes.heroText}>
            <h1 className="title">Fair & Value-driven Pricing For Your Business Needs</h1>
            <p>
              Pick A Service That Best Suits Your Needs And Download Our Rate Card <br />
            </p>
          </div>
          <div className={classes.heroContainer}>
            <div className={classes.heroForm}>
              <div className={classes.form}>
                <h3 className="title">Schedule A Free Discovery Call</h3>
                <p>We'll Walk You Through Our Services And How Things Work, Which Should Answer Most Of Your Questions</p>

                <form action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads433875000000274020" method="POST" onSubmit='javascript:document.charset="UTF-8"' accept-charset="UTF-8">
                  <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3" />
                  <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                  <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="9d30a34c942dc338e7b79b92c5d52b788cbdf82b990e41bdc2cf42fdc8285d9c" />
                  <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
                  <input type="text" style={{ display: "none" }} name="returnURL" defaultValue={`https://skywarddigital.com.au/thank-you${router.asPath}`} />
                  <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name" required />
                  <input type="text" name="Company" id="Company" placeholder="Business Name" required />
                  <input type="email" name="Email" id="Email" placeholder="Email" required />
                  <input type="tel" name="Mobile" id="Mobile" placeholder="Phone Number" required />
                  <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxlength="255" defaultValue={router.asPath} />
                  <input type="text" style={{ display: "none" }} id="LEADCF5" name="LEADCF5" maxlength="255" defaultValue={uqid} />
                  <input type="text" style={{ display: "none" }} id="LEADCF6" name="LEADCF6" maxlength="255" defaultValue={utm} />
                  <input type="text" style={{ display: "none" }} id="LEADCF7" name="LEADCF7" maxlength="255" defaultValue={referrer} />
                  <select name="LEADCF1" id="LEADCF1" defaultValue={"DEFAULT"} required>
                    <option value="DEFAULT" disabled>
                      Business Goals
                    </option>
                    <option value="Help&#x20;me&#x20;generate&#x20;more&#x20;leads&#x2f;enquiries">Help me generate more leads&#x2f;enquiries</option>
                    <option value="Help&#x20;me&#x20;drive&#x20;more&#x20;sales&#x20;&#x28;e-commerce&#x29;">Help me drive more sales &#x28;e-commerce&#x29;</option>
                    <option value="Help&#x20;me&#x20;build&#x20;&amp;&#x20;design&#x20;my&#x20;website">Help me build &amp; design my website</option>
                    <option value="Help&#x20;me&#x20;optimise&#x20;my&#x20;customer&#x20;experience">Help me optimise my customer experience</option>
                    <option value="Help&#x20;me&#x20;redesign&#x20;my&#x20;brand">Help me redesign my brand</option>
                    <option value="White&#x20;Label&#x20;Services&#x28;For&#x20;Agencies&#x29;">White Label Services&#x28;For Agencies&#x29;</option>
                  </select>
                  <select style={{ display: "none" }} id="Lead_Source" name="Lead Source">
                    <option value="-None-">-None-</option>
                    <option value="Website" selected>
                      Website
                    </option>
                  </select>
                  <button id="formsubmit" type="submit">
                    Download Rate Card
                  </button>
                </form>
              </div>
            </div>

            <div className={classes.heroImage}>
              <img src="/pricing banner.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Testimonials padding={"70px 0"} testimonials={testimonials} />
      <Blog blogs={blogs} />
    </React.Fragment>
  );
};

export default pricing;
