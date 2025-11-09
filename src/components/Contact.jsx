/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24 py-20 overflow-hidden"
    >
      {/* Background Animation */}
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
        Get In Touch
      </motion.h2>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl z-10">
        {/* LEFT: Cal.com Meeting Embed */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-[#191733]/10"
        >
          <h3 className="text-xl font-semibold text-[#191733] mb-4">
            Schedule a Meeting
          </h3>
          <p className="text-sm text-[#191733]/70 mb-6">
            Want to discuss a project, collaboration, or idea? Book a slot on my
            calendar and let’s connect!
          </p>

          <div className="relative w-full h-[480px] rounded-lg overflow-hidden border border-[#191733]/10 shadow-inner">
            <iframe
              src="https://cal.com/devashishkr3"
              title="Schedule Meeting"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-[#191733]/10 flex flex-col justify-between"
        >
          <h3 className="text-xl font-semibold text-[#191733] mb-4">
            Contact Me
          </h3>
          <p className="text-sm text-[#191733]/70 mb-6">
            You can also reach out directly via this form or connect with me on
            my socials.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-[#191733]/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#191733]/40"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-[#191733]/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#191733]/40"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-md border border-[#191733]/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#191733]/40 resize-none"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#191733] text-white rounded-md font-medium hover:bg-[#28225a] transition-all shadow-md hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-8 space-y-3 text-[#191733]/80">
            <div className="flex items-center gap-2">
              <Mail size={18} /> <span>devashishkr.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} /> <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} /> <span>India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// import React from "react";

// export default function Contact() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div>
//         <p>
//           Email:{" "}
//           <a href="mailto:info@mysite.com" className="underline">
//             info@mysite.com
//           </a>
//         </p>
//         <p className="mt-2">Phone: +1 234 567 890</p>
//       </div>
//       <form className="space-y-3">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//         />
//         <textarea
//           rows="4"
//           placeholder="Message"
//           className="w-full p-2 border rounded"
//         ></textarea>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-[#191733] text-white rounded"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }
