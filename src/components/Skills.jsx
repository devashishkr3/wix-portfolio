/* eslint-disable no-unused-vars */
import React from "react";

export default function Skills() {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Framer Motion",
    "Git",
    "Responsive Design",
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-white/70 backdrop-blur border rounded-md text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
