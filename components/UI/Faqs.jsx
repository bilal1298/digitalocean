import React, { useState } from "react";
import classes from "../../styles/UI/Faqs.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faqs = ({ faqs, background, color }) => {
  const [index, setIndex] = useState();
  const [accordion, setAccordion] = useState();
  const divide = Math.ceil(faqs.length / 2) - 1;
  //   const col1 = [];
  //   const col2 = [];
  //   for (let i = 0; i < divide; i++) {
  //     col1.push(faqs[i]);
  //   }
  //   for (let i = divide; i < faqs.length; i++) {
  //     col2.push(faqs[i]);
  //   }

  return (
    <div className={classes.faqRow}>
      <div className={classes.faqCol}>
        {faqs.map((item, i) => (
          <React.Fragment key={i}>
            {i <= divide && (
              <div className={`${index === i && classes.active}`}>
                <div
                  className={classes.title}
                  onClick={() => setIndex(index === i ? false : i)}
                  style={{ background: `${accordion ? background : "none"}`, color: `${accordion ? color : "#000"}`, marginBottom: `${accordion ? "20px" : "0"}` }}
                >
                  <h3>{item.title}</h3>
                  <FontAwesomeIcon icon={index === i ? faMinus : faPlus} style={{ fontSize: "20px", maxWidth: "20px" }}></FontAwesomeIcon>
                </div>
                <AnimatePresence>
                  {i === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.4 }} exit={{ height: 0, opacity: 0 }} className={classes.desc}>
                      <p>{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={classes.faqCol}>
        {faqs.map((item, i) => (
          <>
            {i > divide && (
              <div className={`${index === i && classes.active}`}>
                <div
                  className={classes.title}
                  onClick={() => setIndex(index === i ? false : i)}
                  style={{ background: `${accordion ? background : "none"}`, color: `${accordion ? color : "#000"}`, marginBottom: `${accordion ? "20px" : "0"}` }}
                >
                  <h3>{item.title}</h3>
                  <FontAwesomeIcon icon={index === i ? faMinus : faPlus} style={{ fontSize: "20px", maxWidth: "20px" }}></FontAwesomeIcon>
                </div>
                <AnimatePresence>
                  {i === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.4 }} exit={{ height: 0, opacity: 0 }} className={classes.desc}>
                      <p>{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
