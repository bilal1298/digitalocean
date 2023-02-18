import React from "react";
import classes from "../../styles/Blogs.module.css";

const dev = ({ setHeaderBg }) => {
  setHeaderBg(true);
  return (
    <section className={classes.blogSection}>
      <div className="container-lg">
        <div className={classes.author}>
          <div className={classes.authorImage}>
            <img src="/dev-oza.png" alt="" />
          </div>
          <div className={classes.authorBio}>
            <h3>Dev Oza</h3>
            <p>
            Meet Dev, a digital marketer with a passion for crafting impactful online experiences. With 12 years of expertise, Dev has a proven track record of boosting engagement, conversions and online visibility. Combining creative vision, tech know-how, and a data-driven approach, Dev creates marketing magic that delivers results and makes a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dev;
