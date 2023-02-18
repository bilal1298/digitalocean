import React from "react";
import classes from "../../styles/ServicesBanner.module.css";
import { useRouter } from "next/router";

const ServicesBanner = ({ title, desc, setPopup, uqid, utm, referrer }) => {
  const router = useRouter();
  return (
    <section className={`${classes.banner}`}>
      <div className={`container ${classes.banner}`}>
        <div className={classes.heroText}>
          <h1>{title}</h1>

          {desc}

          <button className={`my-button-yellow`} onClick={() => setPopup(true)}>
            Get in Touch
          </button>
        </div>
        <div className={classes.heroForm}>
          <div className={classes.form}>
            <h3 className="title">Get a free audit</h3>
            <p>100% Transparency, No BS, No dodgy stuff. Just pure results.</p>
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
              <input type="text" name="Website" id="Website" placeholder="Website URL" required />
              <input type="email" name="Email" id="Email" placeholder="Email" required />
              <input type="tel" name="Mobile" id="Mobile" placeholder="Phone Number" required />
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
                Talk to a growth guru
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
