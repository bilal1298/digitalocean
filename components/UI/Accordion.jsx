import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import classes from "../../styles/UI/Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = ({ title, desc, background, backgroundD, color, active }) => {
  const [accordion, setAccordion] = useState(active);
  return (
    <section className={classes.accordionContainer}>
      <div className={`${accordion ? classes.active : ""}`}>
        <div className={classes.title} onClick={() => setAccordion(!accordion)} style={{ background: `${accordion ? background : "none"}`, color: `${accordion ? color : "#000"}` }}>
          {title}
          <FontAwesomeIcon icon={accordion ? faMinus : faPlus} style={{fontSize: '20px', width: '20px'}}></FontAwesomeIcon>
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
              {desc}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Accordion;
