// components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center h-screen px-6"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold">
        Hi, I'm <span className="text-blue-500">Urvil Patel</span>
      </h2>
      <p className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-400">
        Aspiring AI Engineer | Web Developer | Data Enthusiast
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/resume.pdf"
          className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
