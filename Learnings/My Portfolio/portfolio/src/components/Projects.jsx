import { motion } from "framer-motion";

const projects = [
  { title: "AI Career Compass", desc: "AI-powered career advisor built with Flask + Firebase." },
  { title: "Python Modules Repo", desc: "Comprehensive Python modules with documentation." },
  { title: "React Portfolio", desc: "Personal portfolio showcasing my skills & projects." },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
