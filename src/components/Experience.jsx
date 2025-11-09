/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Briefcase, Code, Rocket } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Vaastman",
      role: "Project Lead | Full Stack Developer",
      period: "Sept 2024 — Present",
      description:
        "At Vaastman, I oversee the entire product lifecycle — from architecture and backend design to frontend development and deployment. Leading the dev team, optimizing APIs, and ensuring product scalability and performance are my key responsibilities.",
      icon: <Rocket size={22} />,
    },
    {
      company: "ParivartanX",
      role: "Full Stack Developer",
      period: "June 2024 — August 2024",
      description:
        "Worked as a full stack developer building production-grade applications using React, Node.js, and MongoDB. Collaborated closely with designers and business teams to create scalable digital solutions.",
      icon: <Briefcase size={22} />,
    },
    {
      company: "Freelancing & Consulting",
      role: "Software Developer | Technical Consultant",
      period: "2022 — 2024",
      description:
        "Worked with multiple businesses to craft custom digital solutions — from web apps to automation tools. Helped startups modernize their systems and optimize workflows through code, design, and tech innovation.",
      icon: <Code size={22} />,
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24 py-20 overflow-hidden"
    >
      {/* Background Motion Elements */}
      <motion.div
        className="absolute -top-20 -left-10 w-96 h-96 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-[#191733] mb-12 text-center"
      >
        Experience
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#191733]/20 rounded-full hidden md:block" />

        {/* Timeline Items */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative md:w-[calc(50%-1rem)] p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-md border border-[#191733]/10 ${
                i % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
              }`}
            >
              {/* Connector Dot */}
              <div
                className={`hidden md:flex absolute top-6 ${
                  i % 2 === 0 ? "-left-[0.9rem]" : "-right-[0.9rem]"
                } w-5 h-5 rounded-full bg-[#191733] border-4 border-[#f6eee8]`}
              ></div>

              {/* Icon */}
              <div className="flex items-center gap-3 mb-3 text-[#191733]">
                <span className="bg-[#191733]/10 p-2 rounded-full">
                  {exp.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {exp.company}
                </h3>
              </div>

              {/* Role + Period */}
              <div className="text-sm text-[#191733]/70 mb-2">
                {exp.role} — <span className="italic">{exp.period}</span>
              </div>

              {/* Description */}
              <p className="text-[#191733]/80 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center max-w-3xl text-[#191733]/80"
      >
        <p className="text-base sm:text-lg leading-relaxed">
          Over <span className="font-semibold text-[#191733]">2+ years</span> of
          hands-on experience building and delivering real-world applications
          for startups and clients — from frontend design to backend
          architecture and deployment.
        </p>
      </motion.div>
    </section>
  );
}
