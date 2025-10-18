"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // install react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Carrier Compass
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link href="/" className="hover:text-gray-400 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400 transition">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-400 transition">Services</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400 transition">Contact</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} aria-label="Toggle menu">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white flex flex-col items-center space-y-6 py-6 text-lg font-medium">
          <li><Link href="/" onClick={toggleNavbar} className="hover:text-gray-400 transition">Home</Link></li>
          <li><Link href="/about" onClick={toggleNavbar} className="hover:text-gray-400 transition">About</Link></li>
          <li><Link href="/services" onClick={toggleNavbar} className="hover:text-gray-400 transition">Services</Link></li>
          <li><Link href="/contact" onClick={toggleNavbar} className="hover:text-gray-400 transition">Contact</Link></li>
        </ul>
      )}
    </header>
  );
}
