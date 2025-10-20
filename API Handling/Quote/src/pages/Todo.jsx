import React, { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const API_URL = "https://api.freeapi.app/api/v1/todos/";

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const res = await fetch(`${API_URL}?query=reactjs&complete=false`);
      const data = await res.json();
      setTodos(data.todos || []);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  // Create a new todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (!newTodoTitle) return;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: newTodoTitle,
        description: newTodoDescription,
      }),
    };

    try {
      const response = await fetch(API_URL, options);
      const data = await response.json();
      console.log("Created Todo:", data);
      setNewTodoTitle("");
      setNewTodoDescription("");
      fetchTodos(); // refresh list
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}${id}`, { method: "DELETE" });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Update a todo
  const updateTodo = async (id) => {
    const updatedTitle = prompt("Enter new title:");
    if (!updatedTitle) return;

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: updatedTitle }),
    };

    try {
      await fetch(`${API_URL}${id}`, options);
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">My Todos</h1>

      {/* Form to add a new todo */}
      <form
        onSubmit={createTodo}
        className="w-full max-w-2xl flex flex-col sm:flex-row gap-2 mb-6"
      >
        <input
          type="text"
          placeholder="Todo title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors font-semibold"
        >
          Add Todo
        </button>
      </form>

      {/* Todos list */}
      <div className="w-full max-w-2xl space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center hover:shadow-xl transition-shadow"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-800">{todo.title}</h3>
              {todo.description && (
                <p className="text-gray-600 text-sm">{todo.description}</p>
              )}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => updateTodo(todo.id)}
                className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Update
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <p className="mt-10 text-gray-500 text-lg">No todos available</p>
      )}
    </div>
  );
}
