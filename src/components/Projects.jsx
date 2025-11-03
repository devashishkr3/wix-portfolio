/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const items = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={src}
            alt={`project-${i}`}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
