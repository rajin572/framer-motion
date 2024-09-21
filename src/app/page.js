/* eslint-disable react/no-unescaped-entities */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showLinks, setShowLinks] = useState(true);

  //* Define Veriants
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        staggerChildren: 0.3, // Stagger when hiding
        when: "afterChildren", // Wait until children are hidden
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 13,
        mass: 1,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
  };
  const menus = [
    {
      name: "Spring",
      link: "/spring",
    },
    {
      name: "Animation Controll",
      link: "/animationControll",
    },
    {
      name: "View Base Animation",
      link: "/viewBaseAnimation",
    },
    {
      name: "Scroll Animation",
      link: "/scrollAnimation",
    },
    {
      name: "Spring",
      link: "/spring",
    },
    {
      name: "Spring",
      link: "/spring",
    },
  ];
  return (
    <main className="w-full h-[90vh] ">
      <div className="w-full h-full flex flex-col justify-center items-center  gap-10 text-xl">
        <AnimatePresence>
          <motion.div
            variants={containerVariants} //* Declear Variants
            initial={"hidden"}
            animate={"visible"}
            exit="hidden"
            className="w-[500px] text-start mx-auto "
          >
            <motion.div
              layout
              className="font-bold border-b border-slate-400 px-5 py-3"
            >
              <button
                onClick={() => setShowLinks(!showLinks)}
                className="text-3xl bg-transparent border-transparent "
              >
                Links:
              </button>
            </motion.div>
            <div className="flex flex-col gap-5 py-10 px-12">
              <AnimatePresence mode="wait">
                {showLinks &&
                  menus.map((menu, i) => (
                    <motion.span
                      variants={childVariants}
                      exit={{
                        x: -40,
                        opacity: 0,
                      }}
                      whileHover={{
                        scale: 1.3,
                        originX: 0,
                        color: "#f8e112",
                        transition: {
                          type: "spring",
                          stiffness: 200,
                        },
                      }} //* While Hover Animantion
                      key={i}
                    >
                      <Link href={menu.link}>{menu.name}</Link>
                    </motion.span>
                  ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
