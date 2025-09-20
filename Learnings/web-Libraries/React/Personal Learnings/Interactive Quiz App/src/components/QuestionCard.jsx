function QuestionCard({ question, options, onAnswer }) {
  return (
    <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{question}</h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
