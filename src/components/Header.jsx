"use client";
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const headerVariants = {
    hidden: { y: -250 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };
  const iconVariants = {
    hover: {
      scale: 1.3,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition: { type: "spring", duration: 2 },
    },
  };
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      //   initial={{ y: -250 }}
      //   animate={{ y: -10 }}
      //   transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      className="bg-[#5A166F] text-white overflow-hidden flex items-center gap-5 px-10 py-5 z-50 sticky top-0"
    >
      <Link href="/">
        <motion.div variants={iconVariants} whileHover={"hover"} className="">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            style={{
              width: "40px",
              overflow: "visible",
              stroke: "#fff",
              strokeWidth: 2,
              strokeLinejoin: "round",
              strokeLinecap: "round",
            }}
          >
            <motion.path
              d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
              variants={icon}
              initial="hidden"
              animate="visible"
              whileHover={"hover"}
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </motion.div>
      </Link>
      <motion.div
        variants={headerVariants}
        initial={"hidden"}
        animate={"visible"}
        className="w-full border-b border-white/25 pb-3"
      >
        <h1>Learn Framer Motion</h1>
      </motion.div>
    </motion.header>
  );
};

export default Header;
