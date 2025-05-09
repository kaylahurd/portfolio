'use client';

import { motion } from 'framer-motion';
import { HiCode, HiCube, HiChip, HiDatabase, HiExternalLink } from 'react-icons/hi';
import Image from 'next/image';
import { IconType } from 'react-icons';

type Project = {
  title: string;
  description: string;
  icon: IconType;
  type: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
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
    <div className="min-h-screen bg-custom-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-custom-black-50 mb-4">My Projects</h1>
          <p className="text-lg text-custom-black-200">
            Here are some of the projects I've worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-custom-black-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-custom-black-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-custom-black-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-custom-black-700 text-custom-pink-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-pink-500 hover:text-custom-pink-400"
                    >
                      <HiCode size={24} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-pink-500 hover:text-custom-pink-400"
                    >
                      <HiExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 