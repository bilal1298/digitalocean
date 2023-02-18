import React from "react";
import classes from "../../styles/Industries.module.css";
import Section from "../UI/Section";

const Industries = ({ background, setPopup }) => {
  return (
    <Section padding={"70px 0"} background={background} title={<><span className="titleBackground">Industries</span> We Specialize In</>}>
      <div className={classes.icons}>
        <div className={classes.icon}>
          <div>
            <img src={"/business.png"} alt="" />
          </div>
          <p>Business</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/education.png"} alt="" />
          </div>
          <p>Education</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/finance.png"} alt="" />
          </div>
          <p>Finance</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/healthcare.png"} alt="" />
          </div>
          <p>Healthcare</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/realestate.png"} alt="" />
          </div>
          <p>Real Estate</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/insurance.png"} alt="" />
          </div>
          <p>Insurance</p>
        </div>

        <div className={classes.icon}>
          <div>
            <img src={"/tech.png"} alt="" />
          </div>
          <p>Tech</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/automotive.png"} alt="" />
          </div>
          <p>Automotive</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/dental.png"} alt="" />
          </div>
          <p>Dental</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/non profit.png"} alt="" />
          </div>
          <p>Non-Profit</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/recruitment.png"} alt="" />
          </div>
          <p>Recruitment</p>
        </div>
        <div className={classes.icon}>
          <div>
            <img src={"/law.png"} alt="" />
          </div>
          <p>Legal</p>
        </div>
      </div>
      <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
        Get in Touch
      </button>
    </Section>
  );
};

export default Industries;
