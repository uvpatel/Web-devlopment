import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]); // list of tasks
  const [input, setInput] = useState(""); // input field

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]); // add task to list
    setInput(""); // clear input
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="border px-4 py-2 rounded"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
          >
            {task}
            <button
              onClick={() => removeTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
