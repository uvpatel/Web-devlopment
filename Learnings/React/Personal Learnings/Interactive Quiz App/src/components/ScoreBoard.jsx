function ScoreBoard({ score, total, onRestart }) {
  return (
    <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Quiz Finished 🎉</h2>
      <p className="text-lg text-gray-700 mb-6">
        You scored <span className="font-semibold">{score}</span> out of {total}
      </p>
      <button
        onClick={onRestart}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ScoreBoard;
