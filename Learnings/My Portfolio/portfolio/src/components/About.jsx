import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I'm <span className="text-indigo-400 font-semibold">Urvil Patel</span>, 
          a passionate developer who loves building interactive web applications 
          with modern technologies like React, Tailwind, and AI/ML tools.
        </p>
      </div>
    </section>
  );
};

export default About;
