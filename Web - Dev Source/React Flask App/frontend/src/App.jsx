// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // adjust path if in `components/Navbar.jsx`

// Dummy page components (replace with real ones later)
function Home() {
  return <h1>Home Page</h1>;
}
function Login() {
  return <h1>Login Page</h1>;
}
function Signup() {
  return <h1>Signup Page</h1>;
}
function Advisor() {
  return <h1>AI Advisor Page</h1>;
}
function Analyser() {
  return <h1>Resume Analyzer Page</h1>;
}
function Roadmap() {
  return <h1>Roadmap Page</h1>;
}

function App() {
  return (
    <>
      <header className="bg-black text-white">

        <Router>
          <Navbar />
          <div className="container mx-auto mt-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/advisor" element={<Advisor />} />
              <Route path="/analyser" element={<Analyser />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </div>
        </Router>
      </header>
    </>
  );
}

export default App;
