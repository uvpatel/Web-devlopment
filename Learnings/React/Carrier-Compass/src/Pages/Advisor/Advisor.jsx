import React from 'react';


const Advisor = () => {
  return (
    <>
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
      </>
      
  );
};

export default Advisor;
