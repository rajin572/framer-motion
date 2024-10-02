"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const revelVariants = {
  hidden: {
    opacity: 0.5,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const slideVarients = {
  hidden: {
    left: 0,
  },
  visible: {
    left: "100%",
  },
};

const Revel = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  const mainControll = useAnimation();
  const slideControll = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainControll.start("visible");
      slideControll.start("visible");
    } else {
      mainControll.start("hidden");
      slideControll.start("hidden");
    }
  }, [isInview, mainControll, slideControll]);
  return (
    <div ref={ref} className={`relative w-fit overflow-hidden`}>
      <motion.div
        variants={revelVariants}
        initial="hidden"
        animate={mainControll}
        transition={{ duration: 1, delay: 0.25 }}
        className="-z-10"
      >
        {children}
      </motion.div>
      <motion.div
        variants={slideVarients}
        initial="hidden"
        animate={slideControll}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="absolute top-0 left-0 bottom-0 right-0 bg-[#00ffc8] z-20"
      />
    </div>
  );
};

export default Revel;
