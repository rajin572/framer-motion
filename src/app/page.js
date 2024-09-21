/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  //* Define Veriants
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
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
    },
  };
  const menus = [
    {
      name: "Spring",
      link: "/spring",
    },
    {
      name: "Spring",
      link: "/spring",
    },
    {
      name: "Spring",
      link: "/spring",
    },
    {
      name: "Spring",
      link: "/spring",
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
        <motion.div
          variants={containerVariants} //* Declear Variants
          initial={"hidden"}
          animate={"visible"}
          className="w-96 text-start mx-auto "
        >
          <div className="font-bold border-b border-slate-400 px-5 py-3">
            <h2 className="text-3xl">Links:</h2>
          </div>
          <div className="flex flex-col gap-5 py-10 px-12">
            {menus.map((menu, i) => (
              <motion.span
                variants={childVariants}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }} //* While Hover Animantion
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
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
}
