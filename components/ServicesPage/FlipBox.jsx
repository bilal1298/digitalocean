import React, { useState } from "react";
import classes from "../../styles/UI/Flipbox1.module.css";
import FlipboxItem from "../UI/FlipboxItem";
import Section from "../UI/Section";
import AccordionFlip from "../UI/AccordionFlip";

const Flipbox = ({ items, background, title, desc, height, width }) => {
  return (
    <Section background={background} padding={"70px 0"} title={title} desc={desc}>
      <div className={classes.flipboxContainer}>
        {items.map((item) => (
          <FlipboxItem title={item.title} desc={item.desc} icon={item.icon} key={item.title} width={width} height={height} href={item.href} />
        ))}
      </div>
      <div className={classes.accordionContainer}>
        {items.map((item) => (
          <AccordionFlip
            title={
              <div className={classes.flipAccordion}>
                <div className={classes.image}>
                  <img src={item.icon} />
                </div>
                <h2>{item.title}</h2>
              </div>
            }
            background={"#D6E8EB"}
            backgroundD={""}
            color={""}
            desc={item.desc}
            href={item.href}
            key={item.title}
          />
        ))}
      </div>
    </Section>
  );
};

export default Flipbox;
