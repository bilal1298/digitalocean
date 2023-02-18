import React, { useState } from "react";
import classes from "../../styles/UI/PopupForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const PopupFormWl = ({ setPopup, uqid, utm, referrer }) => {
  const router = useRouter();

  return (
    <>
      <div className={classes.popupContainer}>
        <div className={classes.popup}>
          <div className={classes.heroForm}>
            <FontAwesomeIcon icon={faClose} className={classes.close} onClick={() => setPopup(false)} style={{ maxWidth: "20px" }} />
            <div className={classes.form}>
              <h3 className="title">Schedule A Free 30 Min. Discovery Call</h3>
              <p>Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!</p>
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
                <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name" required />
                <input type="text" name="Company" id="Company" placeholder="Business Name" required />
                <input type="email" name="Email" id="Email" placeholder="Email" required />
                <input type="tel" name="Mobile" id="Mobile" placeholder="Phone Number" required />
                <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxlength="255" defaultValue={router.asPath} />
                <input type="text" style={{ display: "none" }} id="LEADCF5" name="LEADCF5" maxlength="255" defaultValue={uqid} />
                <input type="text" style={{ display: "none" }} id="LEADCF6" name="LEADCF6" maxlength="255" defaultValue={utm} />
                <input type="text" style={{ display: "none" }} id="LEADCF7" name="LEADCF7" maxlength="255" defaultValue={referrer} />
                <select name="LEADCF2" id="LEADCF2" defaultValue={"DEFAULT"} required>
                  <option value="DEFAULT" disabled>
                    Service You’re Interested In
                  </option>
                  <option value="Digital&#x20;Marketing">Digital Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Social&#x20;Media&#x20;Marketing">Social Media Marketing</option>
                  <option value="PPC&#x20;Ads">PPC Ads</option>
                  <option value="Web&#x20;Design">Web Design</option>
                  <option value="Email&#x20;Marketing">Email Marketing</option>
                  <option value="Graphic&#x20;Design">Graphic Design</option>
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
        </div>
      </div>
    </>
  );
};

export default PopupFormWl;
