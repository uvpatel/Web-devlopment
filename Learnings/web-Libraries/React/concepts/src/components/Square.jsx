// src/components/Square.jsx
import React from 'react';

function Square({ value, onClick, isWinning, isDarkMode }) {
  let neonClass = '';
  if (value === 'X') {
    neonClass = 'neon-blue';
  } else if (value === 'O') {
    neonClass = 'neon-pink';
  }

  return (
    <button
      className={`w-20 h-20 md:w-24 md:h-24 text-4xl md:text-5xl font-bold flex items-center justify-center border-2 neon-border bg-transparent hover:bg-opacity-10 transition-all duration-200 ${isWinning ? 'winning-glow' : ''} ${isDarkMode ? 'hover:bg-white' : 'hover:bg-gray-200'}`}
      onClick={onClick}
      disabled={!!value}
    >
      <span className={neonClass}>{value}</span>
    </button>
  );
}

export default Square;