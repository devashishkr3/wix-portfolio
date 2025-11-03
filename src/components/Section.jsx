/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-[#191733] mb-6">
            {title}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

// export default function Section({ id, title, subtitle, children }) {
//   return (
//     <section
//       id={id}
//       className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-60 py-16 border-b border-gray-200"
//     >
//       <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#1e1b4b]">
//         {title}
//       </h2>
//       {subtitle && (
//         <p className="text-[#1e1b4b]/70 mb-8 text-sm md:text-base">{subtitle}</p>
//       )}
//       <div className="text-[#1e1b4b]/90 text-sm md:text-base leading-relaxed">
//         {children}
//       </div>
//     </section>
//   );
// }
