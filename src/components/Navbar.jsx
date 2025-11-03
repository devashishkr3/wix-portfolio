import { useState } from "react";
import { Menu, X } from "lucide-react"; // install via: npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Projects", "Info", "Journal", "Contact"];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-48 bg-[#f6eee8] flex-col justify-center px-6 space-y-6 text-[#1e1b4b] text-lg font-medium z-50">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:translate-x-1 transition-transform"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Mobile/Tablet Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#f6eee8] shadow-sm z-50">
        <div className="flex justify-between items-center px-6 py-3">
          <h1 className="text-[#1e1b4b] text-xl font-semibold">My Portfolio</h1>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="flex flex-col bg-[#f6eee8] border-t border-gray-300 text-[#1e1b4b] px-6 pb-4 space-y-3">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block hover:translate-x-1 transition-transform"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}


// export default function Navbar() {
//   const links = ["Home", "Projects", "Info", "Journal", "Contact"];

//   return (
//     <nav className="fixed left-0 top-0 h-full w-40 bg-[#f6eee8] flex flex-col justify-center items-start px-6 space-y-6 text-[#1e1b4b] text-lg font-medium">
//       {links.map(link => (
//         <a
//           key={link}
//           href={`#${link.toLowerCase()}`}
//           className="hover:translate-x-1 transition-transform"
//         >
//           {link}
//         </a>
//       ))}
//     </nav>
//   );
// }

