// src/components/Board.jsx
import React from 'react';
import Square from './Square';

function Board({ squares, onClick, winningLine, xIsNext, winner, isDraw, isDarkMode }) {
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Draw!'
    : `Next: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="text-center">
      <div className={`text-xl md:text-2xl mb-4 ${winner || isDraw ? 'neon-blue' : 'text-white'}`}>
        {status}
      </div>
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => onClick(index)}
            isWinning={winningLine && winningLine.includes(index)}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;