// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion"; // for animations
import { ArrowRight } from "lucide-react"; // modern icon

// Reusable Hero Component
export default function Hero({
  title = "Build Modern UIs with React & Tailwind",
  subtitle = "A responsive and reusable hero section for your app or landing page.",
  buttonText = "Get Started",
  image = "https://via.placeholder.com/500x350",
}) {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
      {/* Left Side: Text */}
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">{subtitle}</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-700 transition">
          {buttonText} <ArrowRight size={20} />
        </button>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={image}
          alt="Hero Illustration"
          className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
