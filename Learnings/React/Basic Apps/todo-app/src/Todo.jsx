import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, isEditing: false }]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleEdit = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const saveEdit = (index, newText) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { text: newText, isEditing: false } : task
      )
    );
  };

  // Filter tasks based on search text
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>

      {/* Add new task input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="border px-4 py-2 rounded w-64"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Search bar */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="border px-4 py-2 rounded w-72 mb-6"
      />

      {/* Task list */}
      <ul className="w-full max-w-md">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
            >
              {task.isEditing ? (
                <input
                  type="text"
                  defaultValue={task.text}
                  onBlur={(e) => saveEdit(index, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(index, e.target.value);
                  }}
                  autoFocus
                  className="border px-2 py-1 rounded w-full mr-2"
                />
              ) : (
                <span>{task.text}</span>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => toggleEdit(index)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  {task.isEditing ? "Cancel" : "Edit"}
                </button>
                <button
                  onClick={() => removeTask(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks found.</p>
        )}
      </ul>
    </div>
  );
}

export default ToDo;
