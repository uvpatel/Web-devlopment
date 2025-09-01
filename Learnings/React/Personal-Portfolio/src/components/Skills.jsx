import React from "react";
// import "../Skills.css";

const skills = ["React", "Tailwind CSS", "Python", "GitHub", "JavaScript"];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
