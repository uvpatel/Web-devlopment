import React from "react";
// import "../Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React & Tailwind.",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot using Python & Flask.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div className="project-card p-6 bg-gray-800 rounded-lg shadow-lg" key={index}>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-indigo-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
