import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <p className="text-gray-300 mb-6">
          I'm open to collaborations, freelancing, and exciting opportunities. 
          Feel free to reach out!
        </p>
        <a
          href="mailto:uvpatel7271@gmail.com"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
