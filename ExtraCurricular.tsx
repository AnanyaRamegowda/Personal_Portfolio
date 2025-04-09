import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, Lightbulb, Database, Cloud, Users, Trophy, Heart } from 'lucide-react';

export function ExtraCurricular() {
  const activities = [
    {
      title: "GirlScript Summer of Code (GSSoC'24)",
      description: 'Contributed to open-source projects, collaborating with developers.',
      link: 'https://www.linkedin.com/posts/ananya-a-r-2376a1304_postmanapi-apifundamentals-postmanstudentexpert-activity-7262042331862749185-mra6',
      icon: <Code2 className="text-purple-500" size={24} />
    },
    {
      title: "Hacktoberfest'24",
      description: 'Made valuable contributions to open-source repositories through GitHub.',
      link: 'https://www.linkedin.com/posts/ananya-a-r-2376a1304_opensource-hacktoberfest-community-activity-7261010250357493762-LGxp',
      icon: <GitBranch className="text-orange-500" size={24} />
    },
    {
      title: 'Innotect Ideathon 2024 with SINE IIT Bombay',
      description: '24 hour ideathon to solve real-world problems and present innovative solutions.',
      link: 'https://www.linkedin.com/posts/ananya-a-r-2376a1304_certificateofrecognition-innovation-sustainability-activity-7278007660581441538-dsg-',
      icon: <Lightbulb className="text-yellow-500" size={24} />
    },
    {
      title: 'Microsoft Fabric Bootcamp 2024',
      description: 'Gained hands-on experience with Microsoft Fabric and data analytics.',
      link: 'https://www.linkedin.com/posts/ananya-a-r-2376a1304_microsoftfabric-dataanalytics-bootcamp-activity-7252311707782443008-spUG',
      icon: <Database className="text-blue-500" size={24} />
    },
    {
      title: 'SAP Inside Track (SIT) Bengaluru 2024',
      description: 'Explored enterprise solutions, cloud technology, and AI innovations.',
      link: 'https://www.linkedin.com/posts/ananya-a-r-2376a1304_sapinsidetrack-bengaluru2024-continuouslearning-activity-7273294192208998400-_SIE',
      icon: <Cloud className="text-cyan-500" size={24} />
    },
    {
      title: 'Open Source India 2k24',
      description: 'Attended sessions and networked with industry experts in the open-source community.',
      link: 'https://www.linkedin.com/posts/ananya-a-r-2376a1304_opensource-hacktoberfest-community-activity-7261010250357493762-LGxp',
      icon: <Users className="text-green-500" size={24} />
    },
    {
      title: 'SPARK 2k24 & Phase-Shift 2k23',
      description: 'Applied technical and creative skills to solve real-world problems.',
      link: 'https://www.linkedin.com/posts/ananya-a-r-2376a1304_ideathon-waterconservation-sustainability-activity-7276586999690530816-uOVH',
      icon: <Trophy className="text-pink-500" size={24} />
    },
    {
      title: 'National Service Scheme (NSS) at NMIT',
      description: 'Engaged in community service and leadership activities.',
      link: '#',
      icon: <Heart className="text-red-500" size={24} />
    }
  ];

  return (
    <section id="extra-curricular-activities" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Extra Curricular Activities
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity, index) => (
          <motion.a
            key={activity.title}
            href={activity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border-2 border-white rounded-lg hover:border-pink-500/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-3">
              {activity.icon}
              <h3 className="text-xl font-semibold text-purple-400">{activity.title}</h3>
            </div>
            <p className="text-white font-bold">{activity.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}