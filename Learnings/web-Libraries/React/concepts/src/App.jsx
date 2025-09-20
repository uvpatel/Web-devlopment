// src/App.jsx
import React, { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen neon-bg flex flex-col items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <Game toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;