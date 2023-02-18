import { AnimatePresence, motion } from "framer-motion";

import logo from "../../public/illwhite.png";
const Loader = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ x: "100vw" }} animate={{ x: 0 }} exit={{ x: "-100vw" }} transition={{ type: "stiff", duration: 0.1 }} className="loadingContainer">
        <img src={'/illwhite.png'} alt="" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
