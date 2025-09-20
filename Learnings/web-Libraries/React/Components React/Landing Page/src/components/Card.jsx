// src/components/Card.jsx
import React from "react";
import { motion } from "framer-motion"; // for hover animation
import { ArrowRight } from "lucide-react"; // button icon

export default function Card({
  image,
  title,
  description,
  buttonText = "Learn More",
  buttonLink = "#",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      {/* Card Image */}
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>

        {/* Button */}
        <a
          href={buttonLink}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition self-start"
        >
          {buttonText} <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}
