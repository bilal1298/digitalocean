import React, { useState } from "react";
import classes from "../../styles/UI/PopupForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const PopupForm = ({ setPopup, uqid, utm, referrer }) => {
  const router = useRouter();
  // async function submitHandler(e) {
  //   e.preventDefault();

  //   const formData = {};
  //   Array.from(e.currentTarget.elements).forEach((field) => {
  //     formData[field.name] = field.value;
  //   });
  //   formData["page"] = `${router.pathname}`;
  //   formData["uqid"] = uqid;
  //   fetch("/api/mail", {
  //     method: "post",
  //     body: JSON.stringify(formData),
  //   });
  //   e.currentTarget.reset();
  //   router.push(`/thank-you${router.asPath}`);
  // }
  return (
    <>
      <div className={classes.popupContainer}>
        <div className={classes.popup}>
          <div className={classes.heroForm}>
            <FontAwesomeIcon icon={faClose} className={classes.close} onClick={() => setPopup(false)} style={{ maxWidth: "20px" }} />
            <div className={classes.form}>
              <h3 className="title">Schedule A Free 30 Min. Discovery Call</h3>
              <p>Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!</p>
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
        </div>
      </div>
      {/* // Exit intent popup (either on 30 sec or on exit intent)
        //     <div className={classes.popupContainer}>
        //     <div className={classes.popup}>
        //       <div className={classes.heroForm}>
        //         <FontAwesomeIcon icon={faClose} className={classes.close} onClick={() => setPopupActive(false)} />
        //         <div className={classes.form}>
        //           <h3 className="title">Schedule A Free 30 Min. Strategy Call</h3>
        //           <p>Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!</p>
        //           <form onSubmit={submitHandler}>
        //             <input type="text" name="fullName" id="" placeholder="Full Name" required />
        //             <input type="text" name="businessName" id="" placeholder="Business Name" required />
        //             <input type="email" name="email" id="" placeholder="Email" required />
        //             <input type="tel" name="phone" id="" placeholder="Phone Number" required />
        //             <select name="service" id="" defaultValue={"DEFAULT"} required>
        //               <option value="DEFAULT" disabled>
        //                 Business Goals
        //               </option>
        //               <option value={"leads"}>Help me generate more leads/enquiries</option>
        //               <option value={"ecommerce"}>Help me drive more sales (e-commerce)</option>
        //               <option value={"website"}>Help me build & design my website</option>
        //               <option value={"customerExperience"}>Help me optimise my customer experience</option>
        //               <option value={"redesign"}>Help me redesign my brand</option>
        //             </select>
        //             <button type="submit">Get in Touch</button>
        //           </form>
        //         </div>
        //       </div>
        //     </div>
        //   </div> */}
    </>
  );
};

export default PopupForm;
