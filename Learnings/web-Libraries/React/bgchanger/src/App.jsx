import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="h-screen flex justify-center items-center gap-4 transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        onClick={() => setColor("lightblue")}
      >
        Blue
      </button>
      <button
        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
        onClick={() => setColor("lightgreen")}
      >
        Green
      </button>
      <button
        className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition"
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
    </div>
  );
}
