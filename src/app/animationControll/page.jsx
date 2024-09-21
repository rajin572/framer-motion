"use client";
import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const [flip, setFlip] = useState(false);
  const controls = useAnimationControls();

  const handleClick = () => {
    setFlip(!flip);
    flip ? controls.start("flop") : controls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Move it!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            x: -500,
            rotate: "360deg",
            transition: { duration: 0.5 },
          },
          flop: {
            x: 500,
            rotate: "0deg",
            transition: { duration: 0.5 },
          },
        }}
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
