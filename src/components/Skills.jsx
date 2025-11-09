/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiPostman,
  SiJsonwebtokens,
  SiRedux,
  SiNextdotjs,
  SiNginx,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 dark:text-white" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-500" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-amber-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-900 dark:text-white" />,
    },
    { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
    { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute -top-20 left-0 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-[#191733] mb-10 text-center"
      >
        Skills & Technologies
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 max-w-6xl z-10"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md border border-[#191733]/10 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-sm sm:text-base text-[#191733]/80 font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[#191733]/70 mt-12 text-center text-sm sm:text-base max-w-2xl"
      >
        Constantly exploring new technologies to stay ahead of the curve — from
        writing clean, reusable code to building scalable backend systems and
        beautiful UIs.
      </motion.p>
    </section>
  );
}

// import React from "react";

// export default function Skills() {
//   const skills = [
//     "React",
//     "Tailwind CSS",
//     "JavaScript",
//     "TypeScript",
//     "Node.js",
//     "Framer Motion",
//     "Git",
//     "Responsive Design",
//   ];
//   return (
//     <div className="flex flex-wrap gap-3">
//       {skills.map((skill) => (
//         <span
//           key={skill}
//           className="px-3 py-1 bg-white/70 backdrop-blur border rounded-md text-sm"
//         >
//           {skill}
//         </span>
//       ))}
//     </div>
//   );
// }
