import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-black text-white">
        <nav className="flex justify-between items-center p-4">
          <div className="text-xl font-bold">MySite</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-indigo-200">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-indigo-200">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-indigo-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* 
          menuOpen = false → shows Menu icon ☰ → hides <ul>
menuOpen = true  → shows X icon ❌ → shows <ul>

*/}

          {/* Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {menuOpen && (
          <ul className="flex flex-col space-y-4 bg-gray-900 p-4 md:hidden">
            <li className="hover:text-indigo-200">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li className="hover:text-indigo-200">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li className="hover:text-indigo-200">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;
