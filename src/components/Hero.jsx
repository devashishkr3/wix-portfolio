/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full px-6 md:px-10 lg:px-0 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#191733]">
            Devashish Kumar
          </h1>
          <p className="mt-3 text-[#191733]/70 text-lg">Web Developer</p>
          <p className="mt-6 text-[#191733]/60">
            I create beautiful, modern, and responsive web experiences using
            React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full lg:w-2/3"
        >
          <img
            src="/images/img1.jpg"
            alt="Hero"
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
