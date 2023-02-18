import React from "react";
import classes from "../styles/pages.module.css";
import Link from "next/link";
import Head from "next/head";

const PrivacyPolicy = ({ setHeaderBg }) => {
  setHeaderBg(true);
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/privacy-policy" />
        <title>Privacy Policy | Skyward Digital</title>
        <meta name="title" content="Privacy Policy | Skyward Digital" />
        <meta name="description" content="This Privacy Policy describes the information that we gather on or through our Services and how we use and process such information." />
      </Head>
      <section className={classes.privacySection}>
        <div className="container-lg">
          <h1 className="title">
            Privacy <span className="titleBackground">Policy</span>
          </h1>
          <p>
            Skyward Digital is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information. We have
            adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and
            dispose of your Personal Information. A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at
            www.aoic.gov.au
          </p>
          <h3>What is Personal Information and why do we collect it?</h3>
          <p>
            Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include: names, addresses, email addresses, phone and facsimile
            numbers.
            <br />
            <br />
            This Personal Information is obtained in many ways including [interviews, correspondence, by telephone and facsimile, by email, via our website www.skywarddigital.com.au, from your
            website, from media and publications, from other publicly available sources, from cookies- delete all that aren’t applicable] and from third parties. We don’t guarantee website links or
            policy of authorised third parties.
            <br />
            <br />
            We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information
            for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing
            lists at any time by contacting us in writing.
            <br />
            <br />
            When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.
          </p>
          <h3>Sensitive Information</h3>
          <p>
            Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a
            political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.
            <br />
            <br />
            Sensitive information will be used by us only:
          </p>
          <ul>
            <li>For the primary purpose for which it was obtained</li>
            <li>For a secondary purpose that is directly related to the primary purpose</li>
            <li>With your consent; or where required or authorised by law.</li>
          </ul>
          <h3>Third Parties</h3>
          <p>
            Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In
            such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
          </p>
          <h3>Disclosure of Personal Information</h3>
          <p>Your Personal Information may be disclosed in a number of circumstances including the following:</p>
          <ul>
            <li>Third parties where you consent to the use or disclosure; and</li>
            <li>Where required or authorised by law</li>
          </ul>
          <h3>Security of Personal Information</h3>
          <p>
            Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure. When your Personal Information is
            no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal
            Information is or will be stored in client files which will be kept by us for a minimum of 7 years.
          </p>
          <h3>Access to your Personal Information</h3>
          <p>
            You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us
            in writing. <br />
            <br />
            Skyward Digital will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information. In order to protect your Personal
            Information we may require identification from you before releasing the requested information.
          </p>
          <h3>Maintaining the Quality of your Personal Information</h3>
          <p>
            It is important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you
            find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality
            services to you.
          </p>
          <h3>Policy Updates</h3>
          <p>This Policy may change from time to time and is available on our website.</p>
          <h3>Privacy Policy Complaints and Enquiries</h3>
          <p>
            If you have any queries or complaints about our Privacy Policy please contact us at: &nbsp;<Link href="mailto:contact@skywarddigital.com.au">contact@skywarddigital.com.au</Link>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
