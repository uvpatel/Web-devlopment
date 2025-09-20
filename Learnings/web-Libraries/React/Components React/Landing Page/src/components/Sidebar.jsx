// src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  Home,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, link: "#home" },
    { name: "Profile", icon: <User size={20} />, link: "#profile" },
    { name: "Settings", icon: <Settings size={20} />, link: "#settings" },
    { name: "Logout", icon: <LogOut size={20} />, link: "#logout" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-blue-600 text-white rounded-lg"
        onClick={toggleMobileSidebar}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg
          transition-all duration-300 z-40
          ${isOpen ? "w-64" : "w-20"}
          hidden md:flex flex-col
        `}
      >
        {/* Toggle button (desktop only) */}
        <button
          onClick={toggleSidebar}
          className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Menu */}
        <nav className="flex-1 mt-6 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden">
          <div className="absolute top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6">
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
