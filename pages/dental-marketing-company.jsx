import React, { useState } from "react";
import classes from "../styles/DentalDigital.module.css";
import Section from "../components/UI/Section";
import Boxes from "../components/UI/Boxes";
import Testimonials from "../components/HomePage/Testimonials";
import Button from "../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faPhone, faEnvelope, faCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import PopupFormD from "../components/UI/PopupFormDental";
import Head from "next/head";
import { useRouter } from "next/router";
import Schema from "../data/Schema";

const dental = ({ uqid, utm, referrer }) => {
  const router = useRouter();
  const testimonials = [
    {
      designation: "Smile Dental",
      text: "The team at Skyward Digital is like your own team. The best thing about them is that they stand by their Patient Booking Promise, and they've helped us grow with their digital marketing strategies. We recommend Skyward Digital to any dentist or doctor looking for a good dental marketing company.",
      business: "/dental client logo 3.jpg",
    },
    {
      designation: "Happy Teeth",
      text: "My experience with Skyward Digital has been commendable and I'd always recommend the for how they were able to increase the patient walk-in at my dentistry. When I compare the stats from the previous year's marketing company, I see a lot of difference and that is why they'll always be someone I depend on!",
      business: "/client logo 63.png",
    },
    {
      designation: "Perfect Smile Dental Clinic",
      text: "My experience with Skyward has been positive from day one and they've ensured that my website and SEO are top-notch. The thing I like the most is how they've been able to provide me with an additional service that helps me capture any calls missed from patients This has increased my patient capture by 40%.",
      business: "/client logo54.png",
    },
    {
      designation: "Healthy Smiles Dental Clinic",
      text: "The team at Skyward Digital has allowed my business to grow by bringing in more patients through SEO and PPC. We've seen almost a 400% increase in new patients across 3 locations. I would highly recommend their services.",
      business: "/client logo 64.png",
    },
  ];
  const flipboxItems = [
    {
      title: "Web design",
      icon: "/webdesign.png",
      desc: "A team with a combined 100+ years of experience building dental websites. We design clean websites that are engineered to book more appointments.",
    },
    {
      title: "SEO",
      icon: "/seo.png",
      desc: "Our proprietary SEO tactics give us an advantage over everyone in your market. We deliver top positions to our clients for their websites on major search engines like Google, Bing and Duckduckgo.",
    },
    {
      title: "Google Ads",
      icon: "/google ads.png",
      desc: "We are PPC veterans who have spent more than $2M on dental marketing campaigns and use cutting-edge tactics to explode your conversion rates. Facebook Ads: We use hyper-targeting strategies on Facebook & Instagram to drive patients to your practice.",
    },
  ];
  const [popup, setPopup] = useState(false);
  const JSON_SCHEMA = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "#1 In Dental Practice Growth. Top-notch Dental Marketing, Digital Marketing, PPC, SEO, & Web Design.",
    url: "https://skywarddigital.com.au/dental-marketing-company/",
    logo: "https://skywarddigital.com.au/Skyward-Digital-Logo.png",
    image: "https://skywarddigital.com.au/dental-marketing-banner.png",
    description:
      "Skyward Digital is a leading dental marketing company that guarantees you new patients every month or your money back. We offer dental websites, digital marketing, SEO, PPC ads & more. Schedule a free strategy session.",
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
        <link rel="canonical" href="https://skywarddigital.com.au/dental-marketing-company" />
        <title>#1 In Dental Practice Growth. Top-notch Dental Marketing, Digital Marketing, PPC, SEO, & Web Design.</title>
        <meta name="title" content="#1 In Dental Practice Growth. Top-notch Dental Marketing, Digital Marketing, PPC, SEO, & Web Design." />
        <meta
          name="description"
          content="Skyward Digital is a leading dental marketing company that guarantees you new patients every month or your money back. We offer dental websites, digital marketing, SEO, PPC ads & more. Schedule a free strategy session."
        />
        <meta name="robots" content="noindex" />
        <Schema jsonSchema={JSON_SCHEMA}></Schema>
      </Head>
      {popup && <PopupFormD setPopup={setPopup} uqid={uqid} utm={utm} referrer={referrer} />}
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src="/Skyward-Digital-Logo.png" alt="" />
        </div>
        <div className={classes.cta}>
          <button className={`my-button`} onClick={() => setPopup(true)}>
            Free Consultation
          </button>
        </div>
      </header>
      <main>
        <section className={classes.whiteLabelBanner}>
          <div className={`container-lg ${classes.heroContainer}`}>
            <div className={classes.heroText}>
              <h1 className="title" style={{ textAlign: "left", fontSize: "35px" }}>
                <span className="titleBackground">#1 Dental Marketing Company</span> <br />
                SEO, PPC, Web Design
              </h1>
              <img src={"/dental-marketing-banner.png"} alt="" className={classes.mobileImage} />

              <p>
                Guaranteed new patients every month or we work for free. Award winning digital marketing agency.
                <br />
                Our clients book 25 new patients/mo. On avg,
                <br />
                Special Offer - <strong>Starting at $800/mo</strong>
              </p>

              <div className={classes.heroForm}>
                <div className={classes.form}>
                  <h3 className="title">Talk to a dental marketing expert</h3>
                  <p>For a free online marketing audit</p>

                  <form action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads433875000000274020" method="POST" onSubmit='javascript:document.charset="UTF-8"' accept-charset="UTF-8">
                    <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3" />
                    <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                    <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="9d30a34c942dc338e7b79b92c5d52b788cbdf82b990e41bdc2cf42fdc8285d9c" />
                    <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
                    <input type="text" style={{ display: "none" }} name="returnURL" defaultValue={`https://skywarddigital.com.au/thank-you${router.asPath}`} />
                    <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name" required />
                    <input type="text" name="Company" id="Company" placeholder="Practice Name" required />
                    <input type="email" name="Email" id="Email" placeholder="Email" required />
                    <input type="text" name="Mobile" id="Mobile" placeholder="Phone Number" required />
                    <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxlength="255" defaultValue={router.asPath} />
                    <input type="text" style={{ display: "none" }} id="LEADCF5" name="LEADCF5" maxlength="255" defaultValue={uqid} />
                    <input type="text" style={{ display: "none" }} id="LEADCF6" name="LEADCF6" maxlength="255" defaultValue={utm} />
                    <input type="text" style={{ display: "none" }} id="LEADCF7" name="LEADCF7" maxlength="255" defaultValue={referrer} />
                    <button id="formsubmit" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className={classes.heroImage}>
              <img src={"/dental-marketing-banner.png"} alt="" />
            </div>
          </div>
        </section>
        <section className={classes.numbers}>
          <div className="container-lg">
            <div className="row">
              <div className={`${classes.number} col-4`}>
                <h3>$10 M+</h3>
                <p>Increase In Revenue</p>
              </div>
              <div className={`${classes.number} col-4`}>
                <h3>Avg. 25+</h3>
                <p>New Patients/Month</p>
              </div>
              <div className={`${classes.number} col-4`}>
                <h3>200+</h3>
                <p>Dentists On Patient Booking Promise</p>
              </div>
            </div>
          </div>
        </section>
        <Section
          title={
            <>
              Experience Skyward Digital’s <span className="titleBackground">Guarantee</span>
            </>
          }
          padding={"70px 0"}
          background={"#fff"}
        >
          <p className={classes.p}>
            We guarantee you 100% satisfaction. If our dental marketing services don’t deliver the promised results within the first 30 days, we won’t charge you a cent. Guaranteed!
          </p>

          <button className={`${classes.myButton} my-button-center`} onClick={() => setPopup(true)}>
            Let's Book new patients
          </button>
        </Section>
        <Section
          padding={"70px 0"}
          title={
            <>
              Here’s What We’ll Do <span className="titleBackground">Exactly</span>
            </>
          }
        >
          <div className={classes.stepsContainer}>
            <div className={classes.steps}>
              <div className={classes.step}>
                <div className={classes.img}>
                  <img src={"/webdesignstep.png"} alt="" />
                </div>
                <div className={classes.stepDesc}>
                  <h3>Step 1</h3>
                  <p>Build you a stunning website (If your current website is great, we’ll optimize it for conversions)</p>
                </div>
              </div>
              <div className={classes.step}>
                <div className={classes.img}>
                  <img src={"/targetstep.png"} alt="" />
                </div>
                <div className={classes.stepDesc}>
                  <h3>Step 2</h3>
                  <p>We target patients who are looking for a dentist in your area through SEO & ads</p>
                </div>
              </div>
              <div className={classes.step}>
                <div className={classes.img}>
                  <img src={"/appointmentstep.png"} alt="" />
                </div>
                <div className={classes.stepDesc}>
                  <h3>Step 3</h3>
                  <p>We track every call and appointment to give you a qualified list of new patients</p>
                </div>
              </div>
              <div className={classes.step}>
                <div className={classes.img}>
                  <img src={"/refundstep.png"} alt="" />
                </div>
                <div className={classes.stepDesc}>
                  <h3>Step 4</h3>
                  <p>If we don’t deliver on our promise, you get a full refund</p>
                </div>
              </div>
            </div>
            <div className={classes.image}>
              <div className={classes.stepsText}>
                <h4>We Give You A List Of Qualified Patient Names Who Book Through Digital Marketing Every Month</h4>
                <h3>If We Don't Book The Quota, We Give You A Refund</h3>
              </div>
            </div>
          </div>
          <Button href="#case-studies" position={"center"}>
            See Results
          </Button>
        </Section>
        <Boxes title={<span className="titleBackground">Services</span>} items={flipboxItems} padding={"70px 0"} background={"#fff"} setPopup={setPopup} />
        <Testimonials padding={"70px 0"} testimonials={testimonials} />
        <Section
          title={
            <>
              Working With Us Is A <span className="titleBackground">No Brainer</span>
            </>
          }
          padding={"70px 0"}
          background={"#fff"}
        >
          <div className={classes.noBrainer}>
            <div className={classes.item}>
              <img src={"/nocontracts.png"} alt="" />
              <h3>No Contracts</h3>
            </div>
            <div className={classes.item}>
              <img src={"/nocompetitor.png"} alt="" />
              <h3>We don’t work with your direct competitors</h3>
            </div>
            <div className={classes.item}>
              <img src={"/guarantee.png"} alt="" />
              <h3>Guaranteed new patient bookings</h3>
            </div>
            <div className={classes.item}>
              <img src={"/reduce.png"} alt="" />
              <h3>Reduce your marketing spend by at least 20%</h3>
            </div>
          </div>

          <button className={`${classes.myButton} my-button-center`} onClick={() => setPopup(true)}>
            Schedule a Free Demo
          </button>
        </Section>
        <div id="case-studies"></div>
        <Section
          padding={"70px 0"}
          background={"#DDE3FF"}
          title={
            <>
              Case <span className={"titleBackground"}>Studies</span>
            </>
          }
        >
          <Swiper
            style={{ padding: "35px" }}
            className={"dentalCase"}
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
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
            <SwiperSlide>
              <div className={classes.caseStudy}>
                <div className={classes.details}>
                  <div className={classes.image}>
                    <img src="/dental client logo 2.jpg" alt="" />
                  </div>
                  <h3>Advanced Dental Care</h3>
                  <p>7 Locations • 20 Providers</p>
                </div>
                <div className={classes.content}>
                  <p>
                    <FontAwesomeIcon icon={faCircle} /> <strong>400% Increase</strong> In New Patients Across 7 Locations <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> Books More Than <strong>500 New Patients</strong> Per Month <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>Grew To 7</strong> Locations From 5 Locations <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>Ranks number 1</strong> for keywords like "Dentist near me" in a radius of 8 Kms around their practice
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.caseStudy}>
                <div className={classes.details}>
                  <div className={classes.image}>
                    <img src="/dental client logo 1.jpg" alt="" />
                  </div>
                  <h3>Albion Dental</h3>
                  <p>3 Locations • 5 Providers</p>
                </div>
                <div className={classes.content}>
                  <p>
                    <FontAwesomeIcon icon={faCircle} /> 0 To <strong>100 New Patients</strong> Booked Per Month <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>Built Their 1st</strong> Practice With Skyward <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>Grew To 3 Locations</strong> From 1 Location <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>Ranks number 1</strong> for keywords like "Pediatric dentist near me" around their practice
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.caseStudy}>
                <div className={classes.details}>
                  <div className={classes.image}>
                    <img src="/dental client logo 3.jpg" alt="" />
                  </div>
                  <h3>Smile Dental</h3>
                  <p>2 Locations • 3 Providers</p>
                </div>
                <div className={classes.content}>
                  <p>
                    <FontAwesomeIcon icon={faCircle} /> 0 To <strong>80 New Patients</strong> Booked Per Month <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>We Designed</strong> Their Entire Logo And Brand <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>7 Years</strong> With Skyward Digital <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>Our First</strong> Dental Practice <br />
                    <br />
                    <FontAwesomeIcon icon={faCircle} /> <strong>Ranks 1st Position</strong> For “Endodontist near me” among Other Keywords in their target area
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Section>
        <section className={classes.horizontalFormSection}>
          <div className="container-lg">
            <h2 className={"title"}>
              Let's Book You <span className="titleBackground">New Patients</span>
            </h2>
            <div className={classes.horizontalForm}>
              <form action="https://crm.zoho.in/crm/WebToLeadForm" name="WebToLeads433875000000274020" method="POST" onSubmit='javascript:document.charset="UTF-8"' accept-charset="UTF-8">
                <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue="f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3" />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue="9d30a34c942dc338e7b79b92c5d52b788cbdf82b990e41bdc2cf42fdc8285d9c" />
                <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" />
                <input type="text" style={{ display: "none" }} name="returnURL" defaultValue={`https://skywarddigital.com.au/thank-you${router.asPath}`} />
                <input type="text" name="Last Name" id="Last_Name" placeholder="Full Name" required />
                <input type="text" name="Company" id="Company" placeholder="Practice Name" required />
                <input type="email" name="Email" id="Email" placeholder="Email" required />
                <input type="text" name="Mobile" id="Mobile" placeholder="Phone Number" required />
                <input type="text" style={{ display: "none" }} id="LEADCF4" name="LEADCF4" maxlength="255" defaultValue={router.asPath} />
                <input type="text" style={{ display: "none" }} id="LEADCF5" name="LEADCF5" maxlength="255" defaultValue={uqid} />
                <button id="formsubmit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className={classes.footer}>
        <div className="container-lg">
          <div className={classes.footerRow}>
            <div className={classes.footerCol}>
              <h4>Email:</h4>
              <Link href={"mailto:contact@skywarddigital.com.au"} className={classes.email}>
                <span className={classes.icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>contact@skywarddigital.com.au</span>
              </Link>
            </div>
            <div className={classes.footerCol}>
              <h4>Support Hours:</h4>
              <h3 className={classes.hours}>
                <span className={classes.icon}>
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <span>9 AM to 9 PM AEST</span>
              </h3>
            </div>
            <div className={classes.footerCol}>
              <h4>Call:</h4>
              <Link href="tel:(03) 7043 2364" className={classes.phone}>
                <span className={classes.icon}>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>(03) 7043 2364</span>
              </Link>
            </div>
            <div className={classes.footerCol}>
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
      </footer>
    </React.Fragment>
  );
};

export default dental;
