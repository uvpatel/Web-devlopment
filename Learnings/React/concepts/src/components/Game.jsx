// src/components/Game.jsx
import React, { useState, useEffect } from 'react';
import Board from './Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null, line: null };
}

function Game({ toggleTheme, isDarkMode }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [scores, setScores] = useState({ xWins: 0, oWins: 0, draws: 0 });
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const { winner, line: winningLine } = calculateWinner(currentSquares);
  const isDraw = !winner && currentSquares.every(square => square !== null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('history');
    const savedMove = localStorage.getItem('currentMove');
    const savedScores = localStorage.getItem('scores');
    if (savedHistory && savedMove) {
      setHistory(JSON.parse(savedHistory));
      setCurrentMove(parseInt(savedMove, 10));
    }
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
    localStorage.setItem('currentMove', currentMove.toString());
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [history, currentMove, scores]);

  useEffect(() => {
    if (winner || isDraw) {
      if (winner === 'X') {
        setScores(prev => ({ ...prev, xWins: prev.xWins + 1 }));
      } else if (winner === 'O') {
        setScores(prev => ({ ...prev, oWins: prev.oWins + 1 }));
      } else if (isDraw) {
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      }
    }
  }, [winner, isDraw]);

  function handlePlay(index) {
    if (winner || currentSquares[index]) return;
    const nextSquares = currentSquares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  function restart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function resetScores() {
    setScores({ xWins: 0, oWins: 0, draws: 0 });
    restart();
  }

  const moves = history.map((_, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to start';
    return (
      <li key={move}>
        <button 
          onClick={() => jumpTo(move)} 
          className={`text-sm hover:underline ${move === currentMove ? 'neon-blue' : 'text-gray-300'}`}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="game-board">
        <Board 
          squares={currentSquares} 
          onClick={handlePlay} 
          winningLine={winningLine} 
          xIsNext={xIsNext} 
          winner={winner} 
          isDraw={isDraw}
          isDarkMode={isDarkMode}
        />
        <div className="mt-4 flex justify-center gap-4">
          <button 
            onClick={restart} 
            className="px-4 py-2 neon-border rounded hover:bg-opacity-20 transition-all"
          >
            Restart
          </button>
          <button 
            onClick={resetScores} 
            className="px-4 py-2 neon-border rounded hover:bg-opacity-20 transition-all"
          >
            Reset Scores
          </button>
          <button 
            onClick={toggleTheme} 
            className="px-4 py-2 neon-border rounded hover:bg-opacity-20 transition-all"
          >
            {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
      <div className="game-info text-center md:text-left">
        <h2 className="text-lg mb-2">History</h2>
        <ul className="space-y-1 max-h-48 overflow-y-auto">{moves}</ul>
        <h2 className="text-lg mt-4 mb-2">Scores</h2>
        <p>X Wins: {scores.xWins}</p>
        <p>O Wins: {scores.oWins}</p>
        <p>Draws: {scores.draws}</p>
      </div>
    </div>
  );
}

export default Game;