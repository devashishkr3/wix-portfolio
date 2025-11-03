import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function App() {
  return (
    <div className="min-h-screen font-[Georgia,serif] text-[#1e1b4b]">
      <Navbar />
      <main className="lg:ml-48 pt-14 lg:pt-0 h-screen lg:h-auto overflow-y-auto">
        <Section
          id="home"
          title="Presidio-"
          subtitle="Residential, San Francisco — July 2035"
        >
          <img
            src="/images/img1.jpg"
            alt="Project 1"
            className="w-full max-w-[600px] rounded-lg shadow-lg"
          />
        </Section>

        <Section id="projects" title="Modern Living">
          <img
            src="/images/img2.jpg"
            alt="Project 2"
            className="w-full max-w-[600px] rounded-lg shadow-lg"
          />
        </Section>

        <Section id="info" title="About Me">
          <p>
            I’m an interior designer who blends functionality with artistic
            vision. Based in San Francisco, I work on residential and commercial
            projects that harmonize color, form, and light.
          </p>
        </Section>

        <Section id="journal" title="Design Journal">
          <p>
            A curated collection of inspirations, materials, and color stories
            that influence my design approach.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <p>Email: info@mysite.com</p>
          <p>Phone: +1 234 567 890</p>
        </Section>
      </main>
    </div>
  );
}

// import Navbar from "./components/Navbar";
// import Section from "./components/Section";

// export default function App() {
//   return (
//     <div className="flex">
//       <Navbar />
//       <main className="ml-40 w-full overflow-y-scroll h-screen">
//         <Section id="home" title="Presidio-" subtitle="Residential Project, San Francisco">
//           <img
//             src="/images/img1.jpg"
//             alt="Project 1"
//             className="w-[600px] rounded-lg shadow-lg"
//           />
//         </Section>

//         <Section id="projects" title="Modern Living">
//           <img
//             src="/images/img2.jpg"
//             alt="Project 2"
//             className="w-[600px] rounded-lg shadow-lg"
//           />
//         </Section>

//         <Section id="info" title="About Me">
//           <p>
//             I’m an interior designer who blends functionality with artistic vision.
//             Based in San Francisco, I work on residential and commercial projects.
//           </p>
//         </Section>

//         <Section id="journal" title="Design Journal">
//           <p>
//             A curated collection of inspirations, materials, and color stories that
//             influence my work.
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
