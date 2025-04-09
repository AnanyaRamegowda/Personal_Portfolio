import React from 'react';
import { motion } from 'framer-motion';
import { CloudCog, Bot, Award, Cpu, Laptop, LineChart as ChartLine, Brain, Microscope, Shield } from 'lucide-react';

export function Certifications() {
  const certifications = [
    { name: 'AWS Academy Cloud Architecting', icon: <CloudCog className="text-purple-500" size={24} /> },
    { name: 'AWS Academy Cloud Foundations (AWS)', icon: <CloudCog className="text-purple-500" size={24} /> },
    { name: 'Generative AI (Microsoft)', icon: <Bot className="text-purple-500" size={24} /> },
    { name: 'Postman API Fundamentals Student Expert (GSSoC)', icon: <Award className="text-purple-500" size={24} /> },
    { name: 'FPGA Accelerators for AI and ML (University of Rome Tor Vergata)', icon: <Cpu className="text-purple-500" size={24} /> },
    { name: 'Microsoft Fabric Bootcamp (Microsoft)', icon: <Laptop className="text-purple-500" size={24} /> },
    { name: 'Data Analytics and Visualization Job Simulation (Accenture)', icon: <ChartLine className="text-purple-500" size={24} /> },
    { name: 'Machine Learning and GenAI (IEduVibhu)', icon: <Brain className="text-purple-500" size={24} /> },
    { name: 'Machine Learning (Infosys Springboard)', icon: <Microscope className="text-purple-500" size={24} /> },
    { name: 'Cyber Security Consulting Simulation (pwc)', icon: <Shield className="text-purple-500" size={24} /> }
  ];

  return (
    <section id="certifications" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            className="p-6 border-2 border-white rounded-lg hover:border-pink-500/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3">
              {cert.icon}
              <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}