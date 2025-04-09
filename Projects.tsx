import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain, Home, Hand, Image } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Travel Website (Tourly)',
      description: 'A responsive travel website with modern design and features.',
      demo: 'https://ananyaramegowda.github.io/Tourly_Travel_Website/',
      github: 'https://github.com/ananyaramegowda/Tourly_Travel_Website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: <Globe className="text-blue-500" size={24} />
    },
    {
      title: 'Heart Attack Risk Prediction',
      description: 'ML model to predict heart attack risk using patient data.',
      github: 'https://github.com/AnanyaRamegowda/Heart_attack_risk_prediction',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      icon: <Brain className="text-red-500" size={24} />
    },
    {
      title: 'House Price Prediction',
      description: 'Linear regression model for predicting house prices.',
      github: 'https://github.com/AnanyaRamegowda/House_Price_Detection',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib'],
      icon: <Home className="text-green-500" size={24} />
    },
    {
      title: 'Hand Gesture Recognition',
      description: 'CNN-based model for recognizing hand gestures.',
      github: 'https://github.com/AnanyaRamegowda/Hand_Gesture_Recognition_Using_CNN',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
      icon: <Hand className="text-yellow-500" size={24} />
    },
    {
      title: 'Image Classification (Cats vs Dogs)',
      description: 'SVM model for classifying images of cats and dogs.',
      github: 'https://github.com/AnanyaRamegowda/Classification_Of_Cats_and_Dogs_Using_SVM',
      technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
      icon: <Image className="text-purple-500" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title} 
            className="border-2 border-white rounded-lg p-4 sm:p-6 hover:border-pink-500/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {project.icon}
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-400">{project.title}</h3>
            </div>
            <p className="text-white font-bold mb-4 text-sm sm:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-2 sm:px-3 py-1 border-2 border-white rounded-full text-white font-bold hover:border-pink-500/50 transition-colors text-xs sm:text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors font-bold text-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-purple-500 rounded-lg hover:bg-purple-500/10 transition-colors font-bold text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="https://github.com/fluidicon.png" alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}