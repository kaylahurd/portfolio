'use client';

import { motion } from 'framer-motion';
import { HiCode, HiCube, HiChip, HiDatabase } from 'react-icons/hi';
import Image from 'next/image';

const projects = [
  {
    title: 'FTC Robotics Competition',
    description: 'Led programming for an all-girls robotics team that was recognized as one of the top teams in the country. Developed JavaScript programs for robot control, managed team budget and sponsor relations, and maintained safety protocols during competitions.',
    icon: HiChip,
    type: 'Competition Project',
    tech: ['JavaScript', 'Robotics', 'Team Leadership', 'Project Management'],
    image: '/project1.jpg'
  },
  {
    title: 'FLL Robotics Program',
    description: 'Introduced to programming through FIRST LEGO League robotics. Programmed pre-built robots using block-based coding, laying the foundation for more advanced programming concepts.',
    icon: HiChip,
    type: 'Competition Project',
    tech: ['Block Programming', 'Robotics', 'Problem Solving'],
    image: '/project2.jpg'
  },
  {
    title: 'SMS Task Reminder App',
    description: 'A productivity app that sends SMS reminders for scheduled tasks. Features include task categorization, repeating reminders, and persistent task storage using Swift\'s local storage.',
    icon: HiCode,
    type: 'Personal Project',
    tech: ['Swift', 'SwiftUI', 'Twilio API', 'iOS Development'],
    image: '/project3.jpg'
  },
  {
    title: 'Calorie Tracker App',
    description: 'Used Swift and XCode to create a Calorie Tracking app enabling users to log ingredients, meals, and monitor their nutrition goals.',
    icon: HiCube,
    type: 'Personal Project',
    tech: ['Swift', 'XCode', 'iOS Development'],
    image: '/project4.jpg'
  },
  {
    title: 'Student Management System',
    description: 'Developed a MySQL database to manage student information, course enrollment, and grades. Utilized DBeaver and designed SQL queries to retrieve and update data efficiently.',
    icon: HiDatabase,
    type: 'Work Project',
    tech: ['MySQL', 'DBeaver', 'SQL'],
    image: '/project5.jpg'
  },
  {
    title: 'Open Wheelchair Project',
    description: 'Involved in building motorized wheelchairs using PVC and other materials for delivery to children in need.',
    icon: HiChip,
    type: 'Personal Project',
    tech: ['Hardware', 'Engineering', 'Community Service'],
    image: '/project4.jpg'
  },
  {
    title: 'FIRST Robotics',
    description: 'Member of an all-girls team recognized as one of the top teams in the country. Utilized JavaScript to program the hub to enable autonomous actions, and basic controller-driven movements.',
    icon: HiCode,
    type: 'Personal Project',
    tech: ['JavaScript', 'Robotics', 'Team Leadership'],
    image: '/project5.jpg'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-pink-900 dark:text-pink-100 mb-8 text-center">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-pink-800/80 rounded-lg shadow-md backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <project.icon className="h-6 w-6 text-pink-600 dark:text-pink-300 mr-2" />
                  <h2 className="text-xl font-semibold text-pink-900 dark:text-pink-100">{project.title}</h2>
                </div>
                <p className="text-pink-700 dark:text-pink-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-700 text-pink-800 dark:text-pink-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-pink-600 dark:text-pink-300">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 