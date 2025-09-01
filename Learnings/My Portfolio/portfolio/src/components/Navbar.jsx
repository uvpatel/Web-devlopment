// components/Navbar.jsx
import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Urvil Patel</h1>
        <div className="flex items-center gap-6">
          {["Hero", "About", "Projects", "Experience", "Contact"].map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase()}`}
              className="hover:text-blue-500 transition"
            >
              {sec}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
