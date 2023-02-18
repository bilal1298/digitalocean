import React from "react";
import Section from "./Section";
import Button from "./Button";
import classes from "../../styles/UI/Boxes.module.css";

const Boxes = ({ title, padding, background, items, desc, width, setPopup }) => {
  return (
    <Section title={title} padding={padding} background={background}>
      {desc}
      <div className={classes.boxesContainer}>
        {items.map((i) => (
          <div className={classes.box} key={i.title} style={{ width: `${width ? width : "33%"}` }}>
            <div className={classes.boxContent}>
              <div className={classes.image}>
                <img src={i.icon} alt="" />
              </div>
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
              {i.href && <Button href={i.href}>Learn More</Button>}
            </div>
          </div>
        ))}
      </div>
      
        <div style={{ marginTop: "50px" }}>
          <button className={`my-button my-button-center`} onClick={() => setPopup(true)}>
            Get in Touch
          </button>
        </div>
      
    </Section>
  );
};

export default Boxes;
