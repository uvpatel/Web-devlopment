import { Link } from "react-router-dom";

const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "digital-id", label: "Digital ID", path: "/digital-id" },
  // { id: "mobile-app", label: "Mobile App", path: "/mobile-app" },
  { id: "ai-anomaly", label: "AI Anomaly Detection", path: "/ai-anomaly" },
  { id: "dashboard", label: "Tourism Dashboard", path: "/dashboard" },
  // { id: "iot", label: "IoT Integration", path: "/iot" },
  // { id: "multilingual", label: "Multilingual Support", path: "/multilingual" },
  // { id: "privacy", label: "Privacy & Security", path: "/privacy" },
];

export default function Sidebar({ activeTab, setActiveTab, isOpen, onClose }) {
  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-0"} overflow-hidden h-screen flex flex-col`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Safe Suffar</h1>
        <button onClick={onClose}>✖</button>
      </div>
      <ul className="p-4 space-y-2">
        {tabs.map(tab => (
          <li key={tab.id}>
            <Link
              to={tab.path}
              onClick={() => setActiveTab(tab.id)}
              className={`block w-full p-2 rounded-lg ${
                activeTab === tab.id ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
