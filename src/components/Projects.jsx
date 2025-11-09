/* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import { projectsData } from "../data/projectData";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24 py-20 overflow-hidden"
//     >
//       {/* Background Animation */}
//       <motion.div
//         className="absolute -top-20 -left-10 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
//         animate={{ y: [0, 30, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#191733]/10 rounded-full blur-3xl"
//         animate={{ y: [0, -30, 0] }}
//         transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Section Header */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl font-bold text-[#191733] mb-12 text-center"
//       >
//         Featured Projects
//       </motion.h2>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl z-10">
//         {projectsData.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             whileHover={{ y: -5 }}
//             className="group relative bg-white/85 backdrop-blur-md border border-[#191733]/10 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-300 ease-out"
//           >
//             {/* Project Image */}
//             <div className="relative h-56 sm:h-64 overflow-hidden">
//               <motion.img
//                 src={project.image}
//                 alt={project.title}
//                 // className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#191733]/60 via-[#191733]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center flex flex-col justify-between h-[250px]">
//               <h3 className="text-lg sm:text-xl font-semibold text-[#191733] mb-2 group-hover:text-[#28225a] transition-colors duration-200">
//                 {project.title}
//               </h3>

//               <p className="text-sm text-[#191733]/70 leading-relaxed mb-4 line-clamp-3">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap justify-center gap-2 mb-4">
//                 {project.tech.map((t, j) => (
//                   <span
//                     key={j}
//                     className="text-xs px-3 py-1 rounded-full bg-[#191733]/10 text-[#191733]/80 group-hover:bg-[#191733]/15 transition-all duration-200"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex items-center justify-center gap-6 mt-auto">
//                 {project.github && (
//                   <motion.a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ scale: 1.08 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ duration: 0.2 }}
//                     className="flex items-center gap-2 text-[#191733] font-medium cursor-pointer hover:text-[#28225a] transition-colors duration-200"
//                   >
//                     <Github size={18} />
//                     Code
//                   </motion.a>
//                 )}
//                 {project.live && project.live !== "#" && (
//                   <motion.a
//                     href={project.live}
//                     target="_blank"
//                     rel="noreferrer"
//                     whileHover={{ scale: 1.08 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ duration: 0.2 }}
//                     className="flex items-center gap-2 text-[#191733] font-medium cursor-pointer hover:text-[#28225a] transition-colors duration-200"
//                   >
//                     <ExternalLink size={18} />
//                     Live
//                   </motion.a>
//                 )}
//               </div>
//             </div>

//             {/* Soft Hover Glow */}
//             <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#191733]/10 group-hover:shadow-[0_0_25px_rgba(25,23,51,0.1)] transition-all duration-300 ease-out" />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Vaastman — Real Estate Platform",
      description:
        "A full-stack property listing platform with authentication, admin dashboards, image uploads, and advanced filtering using React, Node, and Prisma.",
      image: "/images/project1.jpg",
      tech: ["React", "Node.js", "Prisma", "Tailwind CSS"],
      github: "https://github.com/DevashishKumar/Vaastman",
      live: "https://vaastman.com",
    },
    {
      title: "College Management System",
      description:
        "A MERN-based web app for managing students, faculty, attendance, and results with JWT-based authentication and admin panels.",
      image: "/images/project2.jpg",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/DevashishKumar/college-system",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive, animated portfolio built with React, Tailwind, and Framer Motion showcasing projects, blogs, and developer journey.",
      image: "/images/project3.jpg",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/DevashishKumar/portfolio",
      live: "#",
    },
    {
      title: "E-Commerce Backend API",
      description:
        "RESTful API built using Express.js, Prisma ORM, JWT authentication, and Stripe integration for secure payments and product management.",
      image: "/images/project4.jpg",
      tech: ["Node.js", "Express", "Prisma", "JWT"],
      github: "https://github.com/DevashishKumar/ecommerce-backend",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24 py-20 overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute -top-20 -left-10 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-[#191733] mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-white/70 backdrop-blur-lg border border-[#191733]/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#191733]/70 via-[#191733]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 text-center flex flex-col justify-between h-[250px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#191733] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#191733]/70 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-[#191733]/10 text-[#191733]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-[#191733] hover:text-[#28225a] font-medium"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-[#191733] hover:text-[#28225a] font-medium"
                  >
                    <ExternalLink size={18} />
                    Live
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="inline-block mt-16 px-8 py-3 bg-[#191733] text-white rounded-full font-medium hover:bg-[#28225a] transition-all shadow-md hover:shadow-lg"
      >
        View More Projects
      </motion.a>
    </section>
  );
}
