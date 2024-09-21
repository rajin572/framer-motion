/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div>
      <main className="w-full h-screen">
        <div className="w-full h-full flex  justify-center items-center text-white text-justify gap-10">
          <motion.div
            initial={{ x: -200, y: -150, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 2.5,
              type: "spring",
            }}
            className="flex justify-center items-center w-80 h-80 text-center bg-purple-500 shadow-lg hover:bg-purple-800 hover:shadow-2xl rounded-md"
          >
            Normal Spring
          </motion.div>
          <motion.div
            initial={{ x: -200, y: -150, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 2.5,
              type: "spring",
              damping: 3,
            }}
            className="flex justify-center items-center w-80 h-80 text-center bg-purple-500 shadow-lg hover:bg-purple-800 hover:shadow-2xl rounded-md"
          >
            Spring + Damping
            <br /> 0 means infinity and default value is 10. I set 3. More lower
            means more damped
          </motion.div>
          <motion.div
            initial={{ x: -200, y: -150, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 2.5,
              type: "spring",
              stiffness: 120,
              // mass: 50,
            }}
            className="flex flex-col justify-center items-center w-80 h-80 text-center bg-purple-500 shadow-lg hover:bg-purple-800 hover:shadow-2xl rounded-md"
          >
            <h1>Spring + Stiffness</h1>
            <br />{" "}
            <p>
              Default value is 100. When you increase the stiffness value, the
              element moves more quickly and forcefully toward its target. I set
              120
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -200, y: -150, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 2.5,
              type: "spring",

              mass: 2,
            }}
            className="flex flex-col justify-center items-center w-80 h-80 text-center bg-purple-500 shadow-lg hover:bg-purple-800 hover:shadow-2xl rounded-md"
          >
            <h1>Spring + Mass</h1>
            <br />{" "}
            <p>
              Default value is 1. The greater the mass, the slower the object
              will move, giving the impression that it's heavy or sluggish.
              Conversely, a lighter mass makes the object move quickly and
              responsively.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -200, y: -150, opacity: 0, scale: 0 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 2.5,
              type: "spring",

              bounce: 0.6,
            }}
            className="flex flex-col justify-center items-center w-80 h-80 text-center bg-purple-500 shadow-lg hover:bg-purple-800 hover:shadow-2xl rounded-md"
          >
            <h1>Spring + Bounce</h1>
            <br />{" "}
            <p>
              bounce determines the "bounciness" of a spring animation. 0 is no
              bounce, and 1 is extremely bouncy. If duration is set, this
              defaults to 0.25. Note: bounce and duration will be overridden if
              stiffness, damping or mass are set.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default page;
