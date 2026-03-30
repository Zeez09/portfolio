import React from "react";
import { motion } from "framer-motion";

function TechSkills({ children, text }) {
  return (
    <motion.div
      className="flex items-center flex-col gap-5 sm:gap-2"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <p className="text-gray-600 text-xl leading-10 sm:text-xl sm:leading-8 text-center">
        {text}
      </p>
    </motion.div>
  );
}

export default TechSkills;