export default function Navbar() {
  const links = ["Home", "Projects", "Info", "Journal", "Contact"];

  return (
    <nav className="fixed left-0 top-0 h-full w-40 bg-[#f6eee8] flex flex-col justify-center items-start px-6 space-y-6 text-[#1e1b4b] text-lg font-medium">
      {links.map(link => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="hover:translate-x-1 transition-transform"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}