"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const page = () => {
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
      name: "On Scroll Reveal",
      link: "/projects/on-scroll-revel",
    },
  ];
  return (
    <main className="w-full min-h-[90vh] ">
      <div className="w-full h-full flex flex-col justify-center items-center  gap-10 text-xl">
        <motion.div
          variants={containerVariants} //* Declear Variants
          initial={"hidden"}
          animate={"visible"}
          className="w-[500px] text-start mx-auto "
        >
          <motion.div
            layout
            className="font-bold border-b border-slate-400 px-5 py-3"
          >
            <div className="text-3xl bg-transparent border-transparent ">
              Projects:
            </div>
          </motion.div>
          <div className="flex flex-col gap-5 py-10 px-12">
            {menus.map((menu, i) => (
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
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default page;
