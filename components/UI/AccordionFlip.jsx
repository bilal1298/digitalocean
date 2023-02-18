import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import classes from "../../styles/UI/AccordionFlip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Accordion = ({ title, desc, background, backgroundD, color, href }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <section className={classes.accordionContainer}>
      <div className={`${accordion ? classes.active : ""}`}>
        <div
          className={classes.title}
          onClick={() => setAccordion(!accordion)}
          style={{ background: `${accordion ? background : "none"}`, color: `${accordion ? color : "#000"}`, marginBottom: `${accordion ? "20px" : "0"}`, position: "relative" }}
        >
          {title}
          {/* <p style={{ visibility: "hidden", height: "0px", width: "0px", position: "absolute" }}>{desc}</p> */}
          <FontAwesomeIcon icon={accordion ? faMinus : faPlus} style={{ fontSize: "20px", width: "20px" }}></FontAwesomeIcon>
        </div>
        <AnimatePresence>
          {accordion && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.2 }}
              exit={{ height: 0 }}
              className={classes.desc}
              style={{ background: `${accordion ? backgroundD : "none"}` }}
            >
              <p>{desc}</p>
              {href && (
                <Link className={classes.flipLink} href={href}>
                  Learn More
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Accordion;
