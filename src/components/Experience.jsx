/* eslint-disable no-unused-vars */
import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      desc: "Built scalable UI components, improved app performance, and collaborated with designers.",
    },
    {
      title: "UI Engineer",
      company: "Design Studio",
      period: "2019 - 2022",
      desc: "Worked closely with design teams to develop responsive and accessible web interfaces.",
    },
  ];
  return (
    <div className="space-y-4">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="p-4 bg-white/70 backdrop-blur border rounded-md"
        >
          <div className="flex justify-between">
            <h3 className="font-semibold">{exp.title}</h3>
            <span className="text-sm text-[#191733]/60">{exp.period}</span>
          </div>
          <p className="text-sm text-[#191733]/80">{exp.company}</p>
          <p className="text-sm mt-2">{exp.desc}</p>
        </div>
      ))}
    </div>
  );
}
