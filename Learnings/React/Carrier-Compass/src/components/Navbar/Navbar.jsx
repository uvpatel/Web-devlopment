import React from 'react';
import { Link } from 'react-router-dom'; // for navigation

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#4caf50", color: "white" }}>
      <h2>My React App</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
        <li><Link to="/advisor" style={{ color: "white" }}>AI Advisor</Link></li>
        <li><Link to="/assessment" style={{ color: "white" }}>Assessment</Link></li>
        <li><Link to="/roadmap" style={{ color: "white" }}>Roadmap</Link></li>
        <li><Link to="/login" style={{ color: "white" }}>login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


/* <>
      <nav class="navbar">
        <div class="container">
          <a href="{{ url_for('index') }}" class="logo">
            <i class="fas fa-compass" aria-hidden="true"></i> Career Compass
          </a>
          <div class="nav-links">
            <a href="{{ url_for('index') }}">Home</a>
            <a href="{{ url_for('chatbot') }} " class="active">AI Advisor</a>
            <a href="{{ url_for('resume_analyser') }}">Resume Analyzer</a>
            <a href="{{ url_for('skill_assessments') }}">Skill Assessment</a>
            <a href="{{ url_for('roadmap') }}">Roadmap</a>
            <a href="{{ url_for('login') }}" class="btn-primary"
              >Authentication</a>
          </div>
          <div class="mobile-menu-btn">
            <i class="fas fa-bars" aria-label="Toggle menu"></i>
          </div>
        </div>
      </nav>
      </> */