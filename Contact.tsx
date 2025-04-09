import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      icon: <img src="https://github.com/fluidicon.png" alt="GitHub" className="w-6 h-6" />,
      text: 'GitHub',
      link: 'https://github.com/ananyaramegowda',
      color: 'text-gray-400 hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      text: 'LinkedIn',
      link: 'https://linkedin.com/in/ananya-a-r-2376a1304',
      color: 'text-blue-500'
    },
    {
      icon: <Mail className="w-6 h-6 text-red-500" />,
      text: 'Email',
      link: 'mailto:arananya6403@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      text: 'Phone',
      link: 'tel:+919731650268',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact-me" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 gap-6 p-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.text}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-6 border-2 border-white rounded-lg hover:border-pink-500/50 transition-colors ${contact.color}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {contact.icon}
              <span className="font-bold text-lg">{contact.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}