/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Code, Cpu, Database, Monitor, Terminal, Wrench } from "lucide-react";

export default function About() {
  const specialties = [
    { icon: <Code size={22} />, label: "Frontend Engineering" },
    { icon: <Database size={22} />, label: "Backend & APIs" },
    { icon: <Monitor size={22} />, label: "System Design" },
    { icon: <Terminal size={22} />, label: "Performance Optimization" },
    { icon: <Cpu size={22} />, label: "Scalable Architecture" },
    { icon: <Wrench size={22} />, label: "CI/CD & DevOps" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Ambient Blobs */}
      <motion.div
        className="absolute -top-20 -left-10 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl w-full bg-white/60 backdrop-blur-md shadow-xl rounded-3xl p-8 sm:p-12 border border-white/40 text-center flex flex-col justify-center"
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#191733] mb-6">
          About Me
        </h2>

        {/* Paragraphs */}
        <p className="text-[#191733]/80 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto mb-6">
          I’m{" "}
          <span className="font-semibold text-[#191733]">Devashish Kumar</span>{" "}
          — a developer who believes in crafting web experiences that are
          reliable, purposeful, and meaningful. Every product I create blends
          performance with precision and design with intent. My focus is always
          on building interfaces and systems that don’t just look good but
          perform beautifully under the hood.
        </p>

        <p className="text-[#191733]/75 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto mb-12">
          I’m deeply passionate about solving problems through code — whether
          it’s optimizing backend logic, designing intuitive frontends, or
          integrating complex APIs. I approach every project as a balance of
          creativity and logic, ensuring the result is not just functional but
          delightful to use.
        </p>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6 justify-items-center">
          {specialties.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[#191733]/10 flex flex-col items-center justify-center text-center w-full sm:w-32 lg:w-40"
            >
              <div className="text-[#191733] mb-2">{item.icon}</div>
              <p className="text-xs sm:text-sm text-[#191733]/80 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-12 px-8 py-3 bg-[#191733] text-white rounded-full font-medium hover:bg-[#28225a] transition-all shadow-md hover:shadow-lg"
        >
          Let’s Build Something Great
        </motion.a>
      </motion.div>
    </section>
  );
}

/* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { Code, Cpu, Database, Monitor, Terminal, Wrench } from "lucide-react";

// export default function About() {
//   const specialties = [
//     { icon: <Code size={22} />, label: "Frontend Engineering" },
//     { icon: <Database size={22} />, label: "Backend & APIs" },
//     { icon: <Monitor size={22} />, label: "System Design" },
//     { icon: <Terminal size={22} />, label: "Performance Optimization" },
//     { icon: <Cpu size={22} />, label: "Scalable Architecture" },
//     { icon: <Wrench size={22} />, label: "CI/CD & DevOps" },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative h-[calc(100vh-4rem)] overflow-hidden flex flex-col justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24"
//     >
//       {/* Ambient Background Glow */}
//       <motion.div
//         className="absolute -top-20 left-10 w-72 h-72 bg-[#191733]/10 rounded-full blur-3xl"
//         animate={{ y: [0, 30, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-10 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
//         animate={{ y: [0, -30, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 max-w-6xl mx-auto text-center lg:text-left">
//         {/* Section Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-3xl sm:text-4xl font-bold text-[#191733] mb-6 text-center"
//         >
//           About Me
//         </motion.h2>

//         {/* Intro Paragraph */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto text-[#191733]/80 leading-relaxed text-center mb-12"
//         >
//           I’m{" "}
//           <span className="font-semibold text-[#191733]">Devashish Kumar</span>{" "}
//           — a developer who turns ideas into reliable and meaningful digital
//           experiences. I love crafting web solutions that are fast, functional,
//           and built with precision. My work philosophy revolves around clean
//           code, creative thinking, and a balance between **technical depth** and
//           **design intuition**.
//         </motion.p>

//         {/* Second Paragraph (Journey / Dev Personality) */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto text-[#191733]/75 leading-relaxed text-center mb-16"
//         >
//           Over the years, I’ve worked across the full stack — building robust
//           APIs, scalable backend services, and visually polished UIs. I believe
//           that every project deserves attention to detail, empathy for the user,
//           and a developer who treats every line of code as part of a bigger
//           story. Whether it’s optimizing performance or designing intuitive
//           flows, my goal is to make technology feel effortless.
//         </motion.p>

//         {/* Grid of Specialties */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6 max-w-4xl mx-auto"
//         >
//           {specialties.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-[#191733]/10 flex flex-col items-center justify-center text-center transition-all"
//             >
//               <div className="text-[#191733] mb-2">{item.icon}</div>
//               <p className="text-xs sm:text-sm text-[#191733]/80 font-medium">
//                 {item.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <a
//             href="#contact"
//             className="px-8 py-3 bg-[#191733] text-white rounded-full font-medium hover:bg-[#28225a] transition-all shadow-md hover:shadow-lg"
//           >
//             Let’s Build Something Great
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
