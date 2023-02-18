import React from "react";
import classes from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = ({ uqid, utm, referrer }) => {
  const router = useRouter();

  return (
    <footer className={`${classes.footer}`}>
      <div className="container-lg">
        <div className={classes.footerRow}>
          <div className={classes.row1}>
            <div className={classes.logo}>
              <Link href={"/"}>
                <img src={"/illwhite.png"} alt="" />
              </Link>
              <h3>Follow Us</h3>
              <div className={classes.socialIcons}>
                <Link href="https://www.facebook.com/skywarddigitalmarketing" target={"_blank"}>
                  <FontAwesomeIcon icon={faFacebook} style={{ color: "#002eff" }} />
                </Link>
                <Link href="https://www.linkedin.com/company/skyward-digital-solutions/" target={"_blank"}>
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: "#002eff" }} />
                </Link>
                <Link href="https://www.instagram.com/skywarddigitalmarketing/" target={"_blank"}>
                  <FontAwesomeIcon icon={faInstagram} style={{ color: "#002eff" }} />
                </Link>
                <Link href="https://youtube.com/@skywarddigitalmarketing" target={"_blank"}>
                  <FontAwesomeIcon icon={faYoutube} style={{ color: "#002eff" }} />
                </Link>
                <Link href="https://twitter.com/skywardigitalau" target={"_blank"}>
                  <FontAwesomeIcon icon={faTwitter} style={{ color: "#002eff" }} />
                </Link>
              </div>
              <div className={classes.contact}>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} style={{ maxWidth: "18px" }} />
                  &nbsp; Waterman Business Chadstone <br />
                  1341 Dandenong Road, Level 2, UL40, Chadstone Victoria 3148
                </p>
                <Link href="mailto:contact@skywarddigital.com.au">
                  <FontAwesomeIcon icon={faEnvelope} style={{ maxWidth: "18px" }} />
                  &nbsp; contact@skywarddigital.com.au
                </Link>
                <Link href="tel:(03) 7043 2364">
                  <FontAwesomeIcon icon={faPhone} style={{ maxWidth: "18px" }} />
                  &nbsp; (03) 7043 2364
                </Link>
              </div>
            </div>
            <div className={classes.quickLinks}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/digital-marketing-agency-australia">Digital Maketing</Link>
                </li>
                <li>
                  <Link href="/social-media-agency-melbourne">Social Media Marketing</Link>
                </li>
                <li>
                  <Link href="/seo-agency-melbourne">SEO</Link>
                </li>
                <li>
                  <Link href="/ppc-agency-melbourne">PPC</Link>
                </li>
                <li>
                  <Link href="/web-design-melbourne">Website Design</Link>
                </li>
                <li>
                  <Link href="/white-label-agency">White Label</Link>
                </li>
              </ul>
            </div>
            <div className={classes.reviews}>
              <div className={classes.review}>
                <img src={"/meta.png"} alt="" />
              </div>
              <div className={classes.review}>
                <img src={"/microsoft.png"} alt="" />
              </div>
              <div className={classes.review}>
                <img src={"/tiktok.png"} alt="" />
              </div>
              <div className={classes.review}>
                <img src={"/google.png"} alt="" />
              </div>
            </div>
          </div>
          <div className={classes.form}>
            <form action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads433875000000274020" method="POST" onSubmit='javascript:document.charset="UTF-8"' acceptCharset="UTF-8">
              <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3" />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="9d30a34c942dc338e7b79b92c5d52b788cbdf82b990e41bdc2cf42fdc8285d9c" />
              <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
              <input type="text" style={{ display: "none" }} name="returnURL" defaultValue={`https://skywarddigital.com.au/thank-you${router.asPath}`} />
              <h3 className="title">Let's Sky-rocket Your Business</h3>
              <p>100% Transparency, No BS, No dodgy stuff. Just pure results.</p>
              <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name" required />
              <input type="text" name="Company" id="" placeholder="Company" required />
              <input type="email" name="Email" id="Email" placeholder="Email" required />
              <input type="tel" name="Mobile" id="Mobile" placeholder="Phone Number" required />
              <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxLength="255" defaultValue={router.asPath} />
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
              </select>
              <select style={{ display: "none" }} id="Lead_Source" name="Lead Source">
                <option value="-None-">-None-</option>
                <option value="Website" selected>
                  Website
                </option>
              </select>
              <button id="formsubmit" type="submit">
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
