export default function Section({ id, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-60 py-16 border-b border-gray-200"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#1e1b4b]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#1e1b4b]/70 mb-8 text-sm md:text-base">{subtitle}</p>
      )}
      <div className="text-[#1e1b4b]/90 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}


// export default function Section({ id, title, subtitle, children }) {
//   return (
//     <section
//       id={id}
//       className="min-h-screen flex flex-col justify-center px-60 py-20 border-b border-gray-200"
//     >
//       <h2 className="text-3xl font-semibold mb-3 text-[#1e1b4b]">{title}</h2>
//       {subtitle && <p className="text-[#1e1b4b]/70 mb-8">{subtitle}</p>}
//       {children}
//     </section>
//   );
// }