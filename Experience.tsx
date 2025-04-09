import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Database } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'SkillCraft Technology',
      role: 'Machine Learning Intern',
      period: 'Sept 2024 - Oct 2024',
      icon: <Code2 className="text-purple-500" size={24} />,
      responsibilities: [
        'Developed a Linear Regression Model to predict house prices.',
        'Built a K-Means Clustering Algorithm to segment retail customers.',
        'Implemented a Support Vector Machine (SVM) to classify images of cats and dogs.',
        'Designed a Hand Gesture Recognition Model using CNNs for gesture-based interactions.',
        'Worked with Python, TensorFlow, Scikit-learn, and data preprocessing.'
      ]
    },
    {
      company: 'Risk Guard Enterprise Solutions',
      role: 'Research Intern',
      period: 'Dec 2024 - March 2024',
      icon: <Database className="text-purple-500" size={24} />,
      responsibilities: [
        'Conducted risk assessment and data analysis to identify business threats.',
        'Performed market competitor research to track industry trends.',
        'Assisted in data collection and report preparation for risk mitigation.',
        'Collaborated with cross-functional teams to develop risk strategies.',
        'Gained hands-on experience in business intelligence and research methodologies.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="mb-12 border-2 border-white rounded-lg p-6 hover:border-pink-500/50 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {exp.icon}
              <h3 className="text-2xl font-semibold text-purple-400">{exp.company}</h3>
            </div>
            <p className="text-purple-500 mb-4 font-bold">{exp.role} | {exp.period}</p>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, i) => (
                <motion.li 
                  key={i} 
                  className="mb-3 text-white font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}