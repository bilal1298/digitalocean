import React from "react";
import classes from "../../styles/BriefService.module.css";

const BriefService = ({ tab1i, tab1t, tab1d, tab2i, tab2t, tab2d, tab3i, tab3t, tab3d, tab4i, tab4t, tab4d, title, desc, background, setPopup }) => {
  return (
    <section className={classes.briefService} style={{ background: background }}>
      <div className={`${classes.briefService} container`}>
        <div className={classes.tabs}>
          <div className={classes.tabs1}>
            <div className={classes.tab1}>
              <div className={classes.image}>
                <img src={tab1i} alt="" />
              </div>
              <h3>{tab1t}</h3>
              <p>{tab1d}</p>
            </div>
            <div className={classes.tab2}>
              <div className={classes.image}>
                <img src={tab2i} alt="" />
              </div>
              <h3>{tab2t}</h3>
              <p>{tab2d}</p>
            </div>
          </div>
          <div className={classes.tabs2}>
            <div className={classes.tab3}>
              <div className={classes.image}>
                <img src={tab3i} alt="" />
              </div>
              <h3>{tab3t}</h3>
              <p>{tab3d}</p>
            </div>
            <div className={classes.tab4}>
              <div className={classes.image}>
                <img src={tab4i} alt="" />
              </div>
              <h3>{tab4t}</h3>
              <p>{tab4d}</p>
            </div>
          </div>
        </div>
        <div className={classes.desc}>
          {title && <h2 className="title">{title}</h2>}
          {desc}
          <button className={`my-button`} onClick={() => setPopup(true)}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default BriefService;
