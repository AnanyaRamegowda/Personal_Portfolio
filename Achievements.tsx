import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, GitPullRequest, Users, Trophy } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      text: 'Shortlisted by Microsoft for Software Engineering',
      icon: <Award className="text-blue-500" size={24} />
    },
    {
      text: 'Top Performer in Academics',
      icon: <Star className="text-yellow-500" size={24} />
    },
    {
      text: 'Recognized Open-Source Contributor',
      icon: <GitPullRequest className="text-green-500" size={24} />
    },
    {
      text: 'Selected for Exclusive Tech Events in Microsoft, SAP, Nokia',
      icon: <Users className="text-purple-500" size={24} />
    },
    {
      text: 'Team Lead in Ideathons & Hackathons',
      icon: <Trophy className="text-pink-500" size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-6 border-2 border-white rounded-lg hover:border-pink-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                {achievement.icon}
                <div className="text-xl font-bold text-white">{achievement.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}