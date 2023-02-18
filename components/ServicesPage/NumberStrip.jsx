import React from "react";
import classes from "../../styles/NumberStrip.module.css";

const NumberStrip = ({ items }) => {
  return (
    <div className={classes.numberStrip}>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div className={`${items.length == 4 ? "col-3" : "col-4"}`} key={Math.random()}>
              <div className={classes.icon}>
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberStrip;
