import React from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code2, 
  Terminal, 
  FileCode,
  Globe,
  Cpu,
  Coffee,
  GitBranch,
  MonitorDot,
  Database,
  BarChart,
  Brain,
  Network
} from 'lucide-react';

export function About() {
  const skills = {
    'Programming Languages': [
      { name: 'C', icon: <Terminal /> },
      { name: 'C++', icon: <Code2 /> },
      { name: 'Python', icon: <FileCode /> },
      { name: 'HTML', icon: <Globe /> },
      { name: 'CSS', icon: <Cpu /> },
      { name: 'JavaScript', icon: <Coffee /> }
    ],
    'Developer Tools': [
      { name: 'Git/Github', icon: <GitBranch /> },
      { name: 'Google Colab', icon: <MonitorDot /> },
      { name: 'VS Code', icon: <Code2 /> },
      { name: 'Jupyter Notebook', icon: <Database /> }
    ],
    'Libraries': [
      { name: 'NumPy', icon: <BarChart /> },
      { name: 'Pandas', icon: <Database /> },
      { name: 'Matplotlib', icon: <BarChart /> },
      { name: 'Seaborn', icon: <BarChart /> },
      { name: 'Scikit-learn', icon: <Brain /> },
      { name: 'TensorFlow', icon: <Network /> },
      { name: 'Keras', icon: <Brain /> },
      { name: 'PyTorch', icon: <Network /> }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about-me" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <Book className="text-purple-500" size={24} />
              <h3 className="text-2xl font-semibold text-purple-400">Education</h3>
            </div>
            <p className="text-white font-bold text-lg mb-4">
              BE in Electronics and Communication Engineering 2026<br />
              NMIT, Bangalore
            </p>
            <p className="text-gray-300">
              Passionate about technology and innovation, I'm pursuing my degree while actively engaging in projects 
              that combine hardware and software solutions. My focus areas include Machine Learning, AI, and Web Development.
            </p>
          </motion.div>
        </div>

        {Object.entries(skills).map(([category, items]) => (
          <motion.div 
            key={category}
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="p-4 border-2 border-white rounded-lg hover:border-pink-500/50 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-purple-500">{skill.icon}</span>
                    <span className="text-white font-bold">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}