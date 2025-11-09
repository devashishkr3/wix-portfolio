// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Section from "./components/Section";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6eee8] text-[#191733] font-[Georgia,serif]">
      <Navbar />
      <main className="pt-20">
        <Hero />

        {/* <Section id="about" title="About"> */}
        <About />
        {/* </Section> */}
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        {/* <Section id="projects" title="Projects">
          <Projects />
        </Section> */}
        <Section id="blog" title="Blog">
          <Blog />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
        <footer className="py-8 text-center text-sm text-[#191733]/70">
          © {new Date().getFullYear()} Your Name — Built with React + Tailwind +
          Framer Motion
        </footer>
      </main>
    </div>
  );
}

// import Navbar from "./components/Navbar";
// import Section from "./components/Section";

// export default function App() {
//   return (
//     <div className="min-h-screen font-[Georgia,serif] text-[#1e1b4b]">
//       <Navbar />
//       <main className="lg:ml-48 pt-14 lg:pt-0 h-screen lg:h-auto overflow-y-auto">
//         <Section
//           id="home"
//           title="Presidio-"
//           subtitle="Residential, San Francisco — July 2035"
//         >
//           <img
//             src="/images/img1.jpg"
//             alt="Project 1"
//             className="w-full max-w-[600px] rounded-lg shadow-lg"
//           />
//         </Section>

//         <Section id="projects" title="Modern Living">
//           <img
//             src="/images/img2.jpg"
//             alt="Project 2"
//             className="w-full max-w-[600px] rounded-lg shadow-lg"
//           />
//         </Section>

//         <Section id="info" title="About Me">
//           <p>
//             I’m an interior designer who blends functionality with artistic
//             vision. Based in San Francisco, I work on residential and commercial
//             projects that harmonize color, form, and light.
//           </p>
//         </Section>

//         <Section id="journal" title="Design Journal">
//           <p>
//             A curated collection of inspirations, materials, and color stories
//             that influence my design approach.
//           </p>
//         </Section>

//         <Section id="contact" title="Contact">
//           <p>Email: info@mysite.com</p>
//           <p>Phone: +1 234 567 890</p>
//         </Section>
//       </main>
//     </div>
//   );
// }
