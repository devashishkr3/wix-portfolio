/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../data/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold text-[#191733]">
            MyPortfolio
          </a>
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-[#191733]/80 hover:text-[#191733] transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur"
          >
            <div className="px-4 py-3 flex flex-col space-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="py-2 text-[#191733]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // install via: npm install lucide-react

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const links = ["Home", "Projects", "Info", "Journal", "Contact"];

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <nav className="hidden lg:flex fixed left-0 top-0 h-full w-48 bg-[#f6eee8] flex-col justify-center px-6 space-y-6 text-[#1e1b4b] text-lg font-medium z-50">
//         {links.map((link) => (
//           <a
//             key={link}
//             href={`#${link.toLowerCase()}`}
//             className="hover:translate-x-1 transition-transform"
//           >
//             {link}
//           </a>
//         ))}
//       </nav>

//       {/* Mobile/Tablet Navbar */}
//       <div className="lg:hidden fixed top-0 left-0 w-full bg-[#f6eee8] shadow-sm z-50">
//         <div className="flex justify-between items-center px-6 py-3">
//           <h1 className="text-[#1e1b4b] text-xl font-semibold">My Portfolio</h1>
//           <button onClick={() => setOpen(!open)}>
//             {open ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {open && (
//           <div className="flex flex-col bg-[#f6eee8] border-t border-gray-300 text-[#1e1b4b] px-6 pb-4 space-y-3">
//             {links.map((link) => (
//               <a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 onClick={() => setOpen(false)}
//                 className="block hover:translate-x-1 transition-transform"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
