// src/components/SettingsControls.jsx
import { useState } from "react";

const SettingsControls = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [volume, setVolume] = useState(50);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow space-y-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Settings</h2>

      {/* Switch */}
      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-12 h-6 rounded-full flex items-center transition ${
            darkMode ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`h-5 w-5 bg-white rounded-full shadow transform transition ${
              darkMode ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Checkbox */}
      <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
          className="w-4 h-4"
        />
        Receive Newsletter
      </label>

      {/* Slider */}
      <div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Volume: {volume}%</p>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-full accent-blue-500"
        />
      </div>
    </div>
  );
};

export default SettingsControls;
