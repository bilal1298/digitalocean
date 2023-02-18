import React, { useState } from "react";
import classes from "../../styles/Testimonials.module.css";
import { faClose, faQuoteRight, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../UI/Section";

const Testimonials = ({ padding, background, testimonials }) => {
  const [modalActive, setModalActive] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <Section padding={padding} background={background} title={<span className={"titleBackground"}>Testimonials</span>}>
      {modalActive && (
        <div className={classes.testimonialPopup}>
          <div className={classes.testimonialModal}>
            <FontAwesomeIcon icon={faClose} className={classes.close} onClick={() => setModalActive(false)} style={{ width: "30px" }} />
            <div className={classes.testimonial}>
              <div className={classes.details}>
                <div className={classes.businessImage}>
                  <img src={testimonials[index].business} alt="" />
                </div>
                <div className={classes.text}>
                  <h3 className={classes.business}>{testimonials[index].designation}</h3>
                  <p>{testimonials[index].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={classes.testimonialContainer}>
        <div className={classes.testimonialImage}>
          <img src={testimonials[index].business} alt="" />
        </div>
        <div className={classes.testimonialData}>
          <p>{testimonials[index].text.replace(/(.{300})..+/, "$1…")}</p>
          <p>
            <strong className={classes.readMore} onClick={() => setModalActive(true)}>
              Read More &gt;
            </strong>
          </p>
          <h3 className={classes.business}>{testimonials[index].designation}</h3>
          <div className={classes.controls}>
            <FontAwesomeIcon icon={faChevronLeft} onClick={() => setIndex(index === 0 ? testimonials.length - 1 : index - 1)} />
            <FontAwesomeIcon icon={faChevronRight} onClick={() => setIndex(index === testimonials.length - 1 ? 0 : index + 1)} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
