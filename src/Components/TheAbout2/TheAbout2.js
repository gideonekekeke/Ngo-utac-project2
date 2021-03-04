import React from "react";
import "./TheAbout2.css";
import { motion } from "framer-motion";

function TheAbout2() {
  const fadeLeft = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="TheAbout2GeneralDiv"
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
    >
      <div className="TheAbout2SubGeneralDiv">
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TheAbout2;
