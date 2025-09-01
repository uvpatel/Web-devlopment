import { motion } from "framer-motion";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-500 transition"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
