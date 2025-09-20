import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <img
          
          alt="Profile"
          className="mx-auto rounded-full w-48 h-48 mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto">
          I am a passionate developer with a love for building beautiful and functional web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
