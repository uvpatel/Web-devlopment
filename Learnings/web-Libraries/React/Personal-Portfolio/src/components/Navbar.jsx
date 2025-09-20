import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-lg font-bold">Urvil Patel</h1>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-black w-full md:w-auto left-0 transition-all ${
            isOpen ? "top-16" : "top-[-200px]"
          }`}
        >
          <li><a href="#home" className="block py-2 px-4">Home</a></li>
          <li><a href="#about" className="block py-2 px-4">About</a></li>
          <li><a href="#skills" className="block py-2 px-4">Skills</a></li>
          <li><a href="#projects" className="block py-2 px-4">Projects</a></li>
          <li><a href="#contact" className="block py-2 px-4">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
