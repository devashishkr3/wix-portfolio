/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github size={18} />,
      url: "https://github.com/DevashishKumar",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com/in/devashishkr3",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={18} />,
      url: "https://twitter.com/devashishkr3",
      label: "Twitter",
    },
    {
      icon: <Mail size={18} />,
      url: "mailto:devashishkr.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] overflow-hidden mt-20">
      {/* Background Motion Elements */}
      <motion.div
        className="absolute -top-10 left-10 w-40 h-40 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-10 flex flex-col items-center justify-center text-center"
      >
        {/* Name & Tagline */}
        <h3 className="text-2xl font-semibold text-[#191733] mb-2">
          Devashish Kumar
        </h3>
        <p className="text-sm text-[#191733]/70 mb-6">
          Building Scalable Web Experiences with Code & Creativity 💻✨
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mb-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label={social.label}
              className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-[#191733]/10 shadow-sm hover:shadow-md hover:bg-white text-[#191733] transition-all cursor-pointer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full max-w-md bg-[#191733]/10 mb-6" />

        {/* Copyright */}
        <p className="text-sm text-[#191733]/60">
          © {new Date().getFullYear()} Devashish Kumar. Built with ❤️ using{" "}
          <span className="font-semibold text-[#191733]">
            React + Tailwind + Framer Motion
          </span>
          .
        </p>
      </motion.div>
    </footer>
  );
}
