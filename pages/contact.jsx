import React from "react";
import classes from "../styles/Contact.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faClock, faShareNodes, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Contact = ({ setHeaderBg, uqid, referrer, utm }) => {
  setHeaderBg(true);
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/contact" />
        <title>Contact Us | Skyward Digital</title>
        <meta name="title" content="Contact Us | Skyward Digital" />
        <meta name="description" content="Get in touch with us to sky-rocket your business to the next level" />
      </Head>
      <section className={classes.contactSection}>
        <div className="container-lg">
          <h1 className="title">
            <span className="titleBackground">Contact</span>
          </h1>
          <div className={classes.contactBoxes}>
            <div className={classes.contactBox}>
              <div className={classes.singleBox}>
                <FontAwesomeIcon icon={faEnvelope} />
                <h3>Email:</h3>
                <Link href="mailto:contact@skywarddigtal.com.au">contact@skywarddigtal.com.au</Link>
              </div>
            </div>
            <div className={classes.contactBox}>
              <div className={classes.singleBox}>
                <FontAwesomeIcon icon={faClock} />
                <h3>Support:</h3>
                <p>9 AM to 9 PM AEST</p>
              </div>
            </div>
            <div className={classes.contactBox}>
              <div className={classes.singleBox}>
                <FontAwesomeIcon icon={faPhone} />
                <h3>Call:</h3>
                <Link href="tel:(03) 7043 2364">(03) 7043 2364</Link>
              </div>
            </div>
            <div className={classes.contactBox}>
              <div className={classes.singleBox}>
                <FontAwesomeIcon icon={faShareNodes} />
                <h3>Social:</h3>

                <div className={classes.social}>
                  <Link href="https://www.facebook.com/skywarddigitalmarketing" target={"_blank"}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link href="https://twitter.com/skywardigitalau" target={"_blank"}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link href="https://www.instagram.com/skywarddigitalmarketing/" target={"_blank"}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/skyward-digital-solutions/" target={"_blank"}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link href="https://youtube.com/@skywarddigitalmarketing" target={"_blank"}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.form}>
            <h2 className="title">
              Get In <span className="titleBackground">Touch</span>
            </h2>
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
              <select name="LEADCF1" id="" defaultValue={"DEFAULT"} required>
                <option value="DEFAULT" disabled>
                  Business Goals
                </option>
                <option value="Help&#x20;me&#x20;generate&#x20;more&#x20;leads&#x2f;enquiries">Help me generate more leads&#x2f;enquiries</option>
                <option value="Help&#x20;me&#x20;drive&#x20;more&#x20;sales&#x20;&#x28;e-commerce&#x29;">Help me drive more sales &#x28;e-commerce&#x29;</option>
                <option value="Help&#x20;me&#x20;build&#x20;&amp;&#x20;design&#x20;my&#x20;website">Help me build &amp; design my website</option>
                <option value="Help&#x20;me&#x20;optimise&#x20;my&#x20;customer&#x20;experience">Help me optimise my customer experience</option>
                <option value="Help&#x20;me&#x20;redesign&#x20;my&#x20;brand">Help me redesign my brand</option>
              </select>
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
      </section>
    </React.Fragment>
  );
};

export default Contact;
