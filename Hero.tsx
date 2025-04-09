import React from 'react';
import { Brain, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section 
      className="py-12 sm:py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            I'm Ananya AR
          </span>
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-white mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A third-year Electronics and Communication Engineering student passionate about machine learning, AI, and Web development.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-6 sm:gap-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <Brain size={36} sm:size={48} className="mx-auto mb-3 sm:mb-4 text-purple-500" />
            <span className="block text-xs sm:text-sm">Machine Learning</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <Database size={36} sm:size={48} className="mx-auto mb-3 sm:mb-4 text-pink-500" />
            <span className="block text-xs sm:text-sm">AI</span>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <Code size={36} sm:size={48} className="mx-auto mb-3 sm:mb-4 text-purple-500" />
            <span className="block text-xs sm:text-sm">Web Development</span>
          </motion.div>
        </motion.div>
        <motion.blockquote 
          className="text-lg sm:text-2xl italic border-2 border-purple-500/50 p-4 sm:p-8 rounded-lg mx-4 sm:mx-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          "Every journey begins with a single step—if I've come this far through hard work and persistence, so can you!"
        </motion.blockquote>
      </div>
    </motion.section>
  );
}