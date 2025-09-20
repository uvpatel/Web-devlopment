import { useState } from "react";
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setIsFinished(false);
  };

  return ( 
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Hello, Tailwind!</h1>
        <p className="text-gray-600 mt-2">This box is centered perfectly 🚀</p>
      </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!isFinished ? (
        <QuestionCard
          question={questions[current].question}
          options={questions[current].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <ScoreBoard
          score={score}
          total={questions.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
          </div>
  );
}

export default App;
