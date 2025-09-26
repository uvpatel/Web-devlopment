"use client";
import { useState } from "react";
import { FiUser, FiMap, FiCpu, FiShield, FiGlobe, FiSettings, FiActivity, FiBox } from "react-icons/fi";

export default function Sidebar() {
  const [active, setActive] = useState("Digital ID");

  const tabs = [
    { name: "Digital ID Platform", icon: <FiUser /> },
    { name: "Tourist Mobile App", icon: <FiMap /> },
    { name: "AI & Analytics", icon: <FiCpu /> },
    { name: "Police Dashboard", icon: <FiShield /> },
    { name: "IoT Devices", icon: <FiActivity /> },
    { name: "Multilingual Access", icon: <FiGlobe /> },
    { name: "Privacy & Security", icon: <FiBox /> },
    { name: "Admin & Settings", icon: <FiSettings /> },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-100 flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Tourist Safety System
      </div>
      <div className="flex-1 overflow-y-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActive(tab.name)}
            className={`flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-800 ${
              active === tab.name ? "bg-gray-800 border-l-4 border-green-500" : ""
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © 2025 Tourist Safety
      </div>
    </div>
  );
}
