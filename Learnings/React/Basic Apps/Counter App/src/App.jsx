import { useState } from "react";


function App() {
  const [count, setCount] = useState(0); removeEventListener

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <p className="text-2xl mb-6">Count: {count}</p>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
