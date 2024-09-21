"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  //   const isInView = useInView(ref, { once: true });

  //   useEffect(() => {
  //     console.log("Is in view -> ", isInView);
  //   }, [isInView]);

  return (
    <>
      <motion.div
        style={{ height: "100vh", background: "#5A166F" }}
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[50%] h-[50%] bg-white mx-auto"
        ></motion.div>
      </motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-10 justify-items-center items-center w-full px-40"
      >
        <motion.div
          ref={ref}
          className="bg-white rounded w-full h-96"
          animate={
            isInView
              ? { opacity: 1, x: 0, transition: { duration: 1 } }
              : { opacity: 0, x: -800, transition: { duration: 1 } }
          }
        />
        <motion.div
          ref={ref}
          className="bg-white rounded w-full h-96"
          animate={
            isInView
              ? { opacity: 1, y: 0, transition: { duration: 1 } }
              : { opacity: 0, y: 500, transition: { duration: 1 } }
          }
        />
        <motion.div
          ref={ref}
          className="bg-white rounded w-full h-96"
          animate={
            isInView
              ? { opacity: 1, x: 0, transition: { duration: 1 } }
              : { opacity: 0, x: 800, transition: { duration: 1 } }
          }
        />
      </div>
    </>
  );
};

export default ViewBasedAnimations;
