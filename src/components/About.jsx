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
      className="relative h-[calc(100vh-4rem)] overflow-hidden flex flex-col justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24"
    >
      {/* Ambient Background Glow */}
      <motion.div
        className="absolute -top-20 left-10 w-72 h-72 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center lg:text-left">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[#191733] mb-6 text-center"
        >
          About Me
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-[#191733]/80 leading-relaxed text-center mb-12"
        >
          I’m{" "}
          <span className="font-semibold text-[#191733]">Devashish Kumar</span>{" "}
          — a developer who turns ideas into reliable and meaningful digital
          experiences. I love crafting web solutions that are fast, functional,
          and built with precision. My work philosophy revolves around clean
          code, creative thinking, and a balance between **technical depth** and
          **design intuition**.
        </motion.p>

        {/* Second Paragraph (Journey / Dev Personality) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-[#191733]/75 leading-relaxed text-center mb-16"
        >
          Over the years, I’ve worked across the full stack — building robust
          APIs, scalable backend services, and visually polished UIs. I believe
          that every project deserves attention to detail, empathy for the user,
          and a developer who treats every line of code as part of a bigger
          story. Whether it’s optimizing performance or designing intuitive
          flows, my goal is to make technology feel effortless.
        </motion.p>

        {/* Grid of Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6 max-w-4xl mx-auto"
        >
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-[#191733]/10 flex flex-col items-center justify-center text-center transition-all"
            >
              <div className="text-[#191733] mb-2">{item.icon}</div>
              <p className="text-xs sm:text-sm text-[#191733]/80 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-[#191733] text-white rounded-full font-medium hover:bg-[#28225a] transition-all shadow-md hover:shadow-lg"
          >
            Let’s Build Something Great
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { Code, Cpu, Database, Monitor, Terminal, Wrench } from "lucide-react";

// export default function About() {
//   const skills = [
//     { icon: <Code size={20} />, label: "Frontend Development" },
//     { icon: <Database size={20} />, label: "Backend Architecture" },
//     { icon: <Cpu size={20} />, label: "API Design & Integration" },
//     { icon: <Monitor size={20} />, label: "Responsive UI/UX" },
//     { icon: <Terminal size={20} />, label: "Automation & Scripting" },
//     { icon: <Wrench size={20} />, label: "DevOps & CI/CD" },
//   ];

//   const tech = [
//     "React",
//     "Next.js",
//     "Node.js",
//     "Express",
//     "TypeScript",
//     "Prisma",
//     "Tailwind CSS",
//     "MongoDB",
//     "Docker",
//   ];

//   return (
//     <section
//       id="about"
//       className="relative py-24 bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] overflow-hidden"
//     >
//       {/* Background Decorations */}
//       <motion.div
//         className="absolute -top-20 -left-10 w-72 h-72 bg-[#191733]/10 rounded-full blur-3xl"
//         animate={{ y: [0, 40, 0] }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
//         {/* Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl sm:text-4xl font-bold text-[#191733] mb-6 text-center"
//         >
//           About Me
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="max-w-3xl mx-auto text-center text-[#191733]/80 mb-16"
//         >
//           I’m{" "}
//           <span className="font-semibold text-[#191733]">Devashish Kumar</span>{" "}
//           — a passionate Full Stack Developer who loves building performant and
//           scalable web applications. I combine elegant UI design with strong
//           backend engineering to create seamless digital experiences. My goal is
//           to bridge creativity and logic — crafting software that not only works
//           fast, but feels smooth and intuitive.
//         </motion.p>

//         {/* Main About Layout */}
//         <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
//           {/* Image */}
//           <motion.div
//             className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#191733]/10"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <img
//               src="/images/profile.png"
//               alt="Devashish Kumar"
//               className="w-full h-full object-cover"
//             />
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             />
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex-1"
//           >
//             <h3 className="text-2xl font-semibold text-[#191733] mb-4">
//               A Developer Who Codes with Passion 💻
//             </h3>
//             <p className="text-[#191733]/80 leading-relaxed mb-6">
//               I specialize in building dynamic, data-driven web applications
//               that deliver high performance and smooth user experiences. My
//               expertise spans from frontend architecture using{" "}
//               <strong>React</strong> & <strong>Next.js</strong>
//               to backend APIs powered by <strong>Node.js</strong> and{" "}
//               <strong>Express</strong>. I also work with{" "}
//               <strong>TypeScript</strong> and <strong>Prisma ORM</strong> for
//               scalability and maintainability.
//             </p>

//             {/* Work Highlights */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
//               {skills.map((s, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.05 }}
//                   className="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-[#191733]/10"
//                 >
//                   <div className="text-[#191733] mb-2">{s.icon}</div>
//                   <p className="text-sm text-[#191733]/80 text-center">
//                     {s.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-3 mb-6">
//               {tech.map((t, i) => (
//                 <motion.span
//                   key={i}
//                   whileHover={{ scale: 1.1 }}
//                   className="px-4 py-1.5 text-sm bg-[#191733]/5 border border-[#191733]/10 text-[#191733]/80 rounded-full shadow-sm"
//                 >
//                   {t}
//                 </motion.span>
//               ))}
//             </div>

//             {/* CTA */}
//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block px-6 py-3 bg-[#191733] text-white rounded-full font-medium hover:bg-[#28225a] transition-all shadow-md hover:shadow-lg"
//             >
//               Let’s Work Together
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
