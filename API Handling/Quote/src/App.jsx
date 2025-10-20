import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quote from "./pages/QuoteGenerator";
import JokeGenerator from "./pages/JokeGenerator";
import Todo from "./pages/Todo";
import Button from "./components/button";
import Text from "./components/Text";
function App() {
  return (
    <>
      <Router>
      <nav className="p-4 bg-gray-100 m-2">
        <Link to="/" className="mr-4 text-blue-600 font-semibold">Home</Link>
        <Link to="/quotes" className="text-blue-600 font-semibold">Quote </Link>
        <Link to="/joke" className="text-blue-600 font-semibold">Joke</Link>
        <Link to="/Todo" className="text-blue-600 font-semibold">Todo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-20 text-3xl">Welcome to My App</h1>} />
        <Route path="/quotes" element={<Quote />} />
        <Route path="/joke" element={<JokeGenerator />} />
        <Route path="/Todo" element={<Todo />} />

      </Routes>
      </Router>
      <Button />
      <Text />
    </>
  );
}

export default App;
