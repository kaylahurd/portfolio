'use client';

import { motion } from 'framer-motion';
import { HiCode, HiCube, HiChip, HiDatabase, HiExternalLink } from 'react-icons/hi';
import Image from 'next/image';
import { IconType } from 'react-icons';

type Experience = {
  title: string;
  company: string;
  period: string;
  icon: IconType;
  description: string[];
};

const experiences: Experience[] = [
  {
    title: 'Information Technology Intern',
    company: 'OTM Media & IT Solutions',
    period: 'June 2023 - Present',
    icon: HiCode,
    description: [
      'Assisted in the development and maintenance of client websites using HTML, CSS, and JavaScript',
      'Collaborated with senior developers to implement new features and fix bugs',
      'Participated in code reviews and learned best practices for web development',
      'Gained experience with version control systems and project management tools'
    ]
  },
  {
    title: 'CX Intern',
    company: 'SiteOne Landscape Supply',
    period: 'June 2022 - August 2022',
    icon: HiCube,
    description: [
      'Assisted in customer service and support operations',
      'Learned about inventory management and supply chain processes',
      'Developed communication and problem-solving skills',
      'Gained experience in a professional business environment'
    ]
  },
  {
    title: 'Main Programmer - FTC Robotics',
    company: 'FIRST Tech Challenge',
    period: 'September 2021 - Present',
    icon: HiChip,
    description: [
      'Led programming for an all-girls robotics team recognized as one of the top teams in the country',
      'Developed JavaScript programs for robot control and autonomous operations',
      'Managed team budget and sponsor relations',
      'Maintained safety protocols during competitions'
    ]
  },
  {
    title: 'Student Developer',
    company: 'Personal Projects',
    period: '2020 - Present',
    icon: HiCode,
    description: [
      'Developed various iOS applications using Swift and SwiftUI',
      'Created a task reminder app with SMS notifications using Twilio API',
      'Built a calorie tracking app with local storage capabilities',
      'Continuously learning and implementing new technologies'
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-custom-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-custom-black-50 mb-4">My Experience</h1>
          <p className="text-lg text-custom-black-200">
            Here&#39;s a timeline of my professional journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-custom-black-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <experience.icon className="h-8 w-8 text-custom-pink-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-custom-black-50">
                    {experience.title}
                  </h3>
                  <p className="text-custom-pink-500">{experience.company}</p>
                  <p className="text-custom-black-200 text-sm">{experience.period}</p>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-custom-black-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 