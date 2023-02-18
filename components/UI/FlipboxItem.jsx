import React, { useState } from "react";
import classes from "../../styles/UI/Flipbox1.module.css";

import Button from "../UI/Button";
import { motion } from "framer-motion";
const FlipboxItem = ({ title, desc, icon, height, width, href }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div className={classes.flipboxWrapper} style={{ width: `${width ? width : "33%"}`, height: `${height ? height : "450px"}` }}>
      <div className={classes.flipbox}>
        {!flip && (
          <motion.div className={classes.front} onMouseEnter={() => setFlip(true)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <div className={classes.image}>
              <img src={icon} alt="" />
            </div>
            <h2>{title}</h2>
            {/* <p style={{ visibility: "hidden", height: '0px' }}>{desc}</p>   */}
          </motion.div>
        )}
        {flip && (
          <motion.div className={classes.back} onMouseLeave={() => setFlip(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1, delay: 0.1 }}>
            <p>{desc}</p>
            <Button href={href}>Learn More</Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FlipboxItem;
