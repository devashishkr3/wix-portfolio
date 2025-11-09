/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogs = [
    {
      title: "Mastering the MERN Stack — A Practical Guide",
      description:
        "A complete guide on how to master MongoDB, Express, React, and Node.js by building real-world projects and understanding scalable architecture.",
      date: "October 20, 2025",
      readTime: "7 min read",
      category: "Web Development",
      image: "/images/blog1.jpg",
      link: "#",
    },
    {
      title: "Building a Modern Portfolio Using React & Tailwind",
      description:
        "Step-by-step walkthrough of how I designed and developed my personal portfolio using Tailwind CSS, React, and Framer Motion animations.",
      date: "September 5, 2025",
      readTime: "5 min read",
      category: "Frontend Design",
      image: "/images/blog2.jpg",
      link: "#",
    },
    {
      title: "Optimizing Node.js APIs for Speed & Security",
      description:
        "Learn how to enhance Node.js performance and ensure secure REST API architecture using caching, rate limiting, and JWT authentication.",
      date: "July 15, 2025",
      readTime: "6 min read",
      category: "Backend Development",
      image: "/images/blog3.jpg",
      link: "#",
    },
  ];

  return (
    <section
      id="blog"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24 py-20 overflow-hidden"
    >
      {/* Background Blobs */}
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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-[#191733] mb-12 text-center"
      >
        Latest Blogs
      </motion.h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl z-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -5 }}
            className="group bg-white/80 backdrop-blur-md border border-[#191733]/10 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-out"
          >
            {/* Blog Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191733]/70 via-[#191733]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-[#191733]/70 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {blog.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#191733] mb-3 group-hover:text-[#28225a] transition-colors duration-200">
                {blog.title}
              </h3>

              <p className="text-sm text-[#191733]/70 leading-relaxed mb-5 line-clamp-3">
                {blog.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs bg-[#191733]/10 text-[#191733]/80 rounded-full">
                  {blog.category}
                </span>

                <motion.a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1 text-[#191733] font-medium hover:text-[#28225a] cursor-pointer"
                >
                  Read More <ArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
