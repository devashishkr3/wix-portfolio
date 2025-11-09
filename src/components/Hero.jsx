/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  // Parallax effect for background only
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], [0, 60]); // background float

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between h-[calc(100vh-4rem)] -mt-[10px] overflow-visible bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24"
    >
      {/* Animated Background Circles (Parallax Motion) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-10 left-10 w-40 h-40 bg-[#191733]/10 rounded-full blur-3xl"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-10 right-10 w-48 h-48 bg-[#191733]/15 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left Content (Fixed in place) */}
      <motion.div
        className="relative z-10 w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#191733]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hey, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#191733] to-[#5a4abf]">
            Devashish Kumar
          </span>
        </motion.h1>

        <motion.h2
          className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-[#191733]/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full Stack Developer | Backend Specialist
        </motion.h2>

        <motion.p
          className="mt-5 text-[#191733]/70 leading-relaxed max-w-md mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          I craft modern, scalable web applications that blend performance and
          aesthetics. Let’s build something unique together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#191733] text-white rounded-full flex items-center gap-2 hover:bg-[#28225a] transition-all shadow-md hover:shadow-xl"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="/Devashish_Resume.pdf"
            download
            className="px-6 py-3 border border-[#191733] rounded-full text-[#191733] hover:bg-[#191733] hover:text-white transition-all shadow-sm hover:shadow-lg"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full shadow-2xl overflow-hidden ring-4 ring-white/40"
        >
          <img
            src="/images/profile.png"
            alt="Devashish Kumar"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.img
          src="/icons/docker.svg"
          className="absolute -top-6 left-6 w-10 opacity-70 drop-shadow-md backdrop-blur-sm"
          whileHover={{ rotate: 10, scale: 1.05 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.img
          src="/icons/nodedotjs.svg"
          className="absolute -top-10 right-0 w-10 opacity-70 drop-shadow-md backdrop-blur-sm"
          whileHover={{ rotate: -10, scale: 1.05 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.img
          src="/icons/tailwindcss.svg"
          className="absolute -bottom-5 left-28 w-10 opacity-70 drop-shadow-md backdrop-blur-sm"
          whileHover={{ rotate: 8, scale: 1.05 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#191733]/80 flex flex-col items-center z-20 cursor-pointer"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => {
          const nextSection = document.querySelector("#about");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <ArrowDown
          size={22}
          className="hover:scale-110 transition-transform duration-200"
        />
        <span className="text-xs mt-1">Scroll</span>
      </motion.div>
    </section>
  );
}

// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowDown, ArrowRight } from "lucide-react";

// export default function Hero() {
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 300], [0, 60]); // parallax motion

//   return (
//     <section
//       id="home"
//       className="relative flex flex-col-reverse lg:flex-row items-center justify-between h-[calc(100vh-4rem)] -mt-[10px] overflow-visible bg-gradient-to-br from-[#f6eee8] to-[#e8e1da] px-6 sm:px-12 lg:px-24"
//     >
//       {/* Animated Gradient Circles */}
//       <motion.div
//         className="absolute top-10 left-10 w-40 h-40 bg-[#191733]/10 rounded-full blur-3xl"
//         animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-10 w-48 h-48 bg-[#191733]/15 rounded-full blur-3xl"
//         animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Left Content */}
//       <motion.div
//         style={{ y: y1 }}
//         className="relative z-10 w-full lg:w-1/2 text-center lg:text-left"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#191733]"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           Hey , I'm{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#191733] to-[#5a4abf]">
//             Devashish Kumar
//           </span>
//         </motion.h1>

//         <motion.h2
//           className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-[#191733]/70"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           Full Stack Developer | Backend Specialist
//         </motion.h2>

//         <motion.p
//           className="mt-5 text-[#191733]/70 leading-relaxed max-w-md mx-auto lg:mx-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 0.8 }}
//         >
//           I craft modern, scalable web applications that blend performance and
//           aesthetics. Let's build something unique together.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-[#191733] text-white rounded-full flex items-center gap-2 hover:bg-[#28225a] transition-all shadow-md hover:shadow-xl"
//           >
//             View Projects <ArrowRight size={18} />
//           </a>
//           <a
//             href="/Devashish_Resume.pdf"
//             download
//             className="px-6 py-3 border border-[#191733] rounded-full text-[#191733] hover:bg-[#191733] hover:text-white transition-all shadow-sm hover:shadow-lg"
//           >
//             Download Resume
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, duration: 1 }}
//       >
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 200 }}
//           className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full shadow-2xl overflow-hidden ring-4 ring-white/40"
//         >
//           <img
//             src="/images/profile.png"
//             alt="Devashish Kumar"
//             className="w-full h-full object-cover"
//           />
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             transition={{ duration: 0.4 }}
//           />
//         </motion.div>

//         {/* Floating Tech Icons */}
//         {/* <motion.img
//           src="/icons/docker.svg"
//           className="absolute -top-8 left-4 w-12 drop-shadow-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//         <motion.img
//           src="/icons/nodedotjs.svg"
//           className="absolute top-28 -right-8 w-12 drop-shadow-lg"
//           whileHover={{ rotate: -10, scale: 1.1 }}
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2.5, repeat: Infinity }}
//         />
//         <motion.img
//           src="/icons/tailwindcss.svg"
//           className="absolute bottom-8 left-6 w-12 drop-shadow-lg"
//           whileHover={{ rotate: 8, scale: 1.1 }}
//           animate={{ y: [0, -12, 0] }}
//           transition={{ duration: 3.5, repeat: Infinity }}
//         /> */}
//         {/* Floating Tech Icons */}
//         <motion.img
//           src="/icons/docker.svg"
//           className="absolute -top-6 left-6 w-10 opacity-70 drop-shadow-md backdrop-blur-sm"
//           whileHover={{ rotate: 10, scale: 1.05 }}
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />

//         <motion.img
//           src="/icons/nodedotjs.svg"
//           className="absolute -top-10 -right-5 w-10 opacity-70 drop-shadow-md backdrop-blur-sm"
//           whileHover={{ rotate: -10, scale: 1.05 }}
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2.8, repeat: Infinity }}
//         />

//         <motion.img
//           src="/icons/tailwindcss.svg"
//           className="absolute -bottom-5 left-30 w-10 opacity-70 drop-shadow-md backdrop-blur-sm"
//           whileHover={{ rotate: 8, scale: 1.05 }}
//           animate={{ y: [0, -12, 0] }}
//           transition={{ duration: 3.5, repeat: Infinity }}
//         />
//       </motion.div>

//       <motion.div
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#191733]/80 flex flex-col items-center z-20 cursor-pointer"
//         animate={{ y: [0, -8, 0] }}
//         transition={{ duration: 1.5, repeat: Infinity }}
//         onClick={() => {
//           const nextSection = document.querySelector("#about");
//           if (nextSection) {
//             nextSection.scrollIntoView({ behavior: "smooth" });
//           }
//         }}
//       >
//         <ArrowDown
//           size={22}
//           className="hover:scale-110 transition-transform duration-200"
//         />
//         <span className="text-xs mt-1">Scroll</span>
//       </motion.div>
//     </section>
//   );
// }
