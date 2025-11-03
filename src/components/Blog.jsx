/* eslint-disable no-unused-vars */
import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "Improving React Performance",
      excerpt:
        "Learn the best techniques to optimize your React apps for speed and scalability.",
    },
    {
      title: "Design Systems with Tailwind",
      excerpt:
        "A guide to building consistent, scalable design systems using Tailwind CSS.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post, i) => (
        <div
          key={i}
          className="p-4 bg-white/70 backdrop-blur border rounded-md"
        >
          <h4 className="font-semibold mb-2">{post.title}</h4>
          <p className="text-sm text-[#191733]/80">{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
