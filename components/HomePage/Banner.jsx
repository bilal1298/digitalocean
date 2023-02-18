import React from "react";
import classes from "../../styles/Banner.module.css";

const Banner = ({ title, desc, heroImg, bg, setPopup }) => {
  return (
    <section className={`${classes.banner} ${bg ? classes.bg : undefined}`}>
      <div className={`container ${classes.banner}`}>
        <div className={classes.heroText}>
          {title}
          {desc}
          <button className={`my-button`} onClick={() => setPopup(true)}>
            Get in Touch
          </button>
        </div>
        <div className={classes.heroImage}>
          <img src={"/banner.png"} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
