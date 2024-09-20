"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
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
          className="flex justify-center items-center w-60 h-60 text-center bg-purple-500 shadow-lg hover:bg-purple-600 hover:shadow-2xl rounded-md"
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
          className="flex justify-center items-center w-60 h-60 text-center bg-purple-500 shadow-lg hover:bg-purple-600 hover:shadow-2xl rounded-md"
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
          className="flex flex-col justify-center items-center w-60 h-60 text-center bg-purple-500 shadow-lg hover:bg-purple-600 hover:shadow-2xl rounded-md"
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

            mass: 5,
          }}
          className="flex flex-col justify-center items-center w-60 h-60 text-center bg-purple-500 shadow-lg hover:bg-purple-600 hover:shadow-2xl rounded-md"
        >
          <h1>Spring + Mass</h1>
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

            bounce: 0.6,
          }}
          className="flex flex-col justify-center items-center w-60 h-60 text-center bg-purple-500 shadow-lg hover:bg-purple-600 hover:shadow-2xl rounded-md"
        >
          <h1>Spring + Bounce</h1>
          <br /> <p></p>
        </motion.div>
      </div>
    </main>
  );
}
