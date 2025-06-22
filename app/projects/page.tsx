/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { HiCode, HiCube, HiChip, HiDatabase, HiExternalLink, HiServer, HiDeviceMobile, HiGlobe } from 'react-icons/hi';
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
  period: string;
};

const projects: Project[] = [
  {
    title: 'Inventory Management System',
    description: 'Built and deployed a full-stack inventory tracking system for internal use at LocumTenens, replacing spreadsheet-based workflows. Built a dynamic React dashboard with CSV exports, inline quantity editing, and category color coding. Engineered Flask REST APIs with Supabase (PostgreSQL) and containerized with Docker for dev environment parity.',
    icon: HiServer,
    type: 'Work Project',
    tech: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker', 'Supabase'],
    image: '/project1.jpg',
    period: 'May 2025 – Present'
  },
  {
    title: 'Calorie Tracker App',
    description: 'Developed an iOS app enabling users to create meals by combining saved ingredients, tracking serving sizes and calorie totals dynamically. Applied MVVM architecture for clean separation of UI logic and data models, and persisted all user data using UserDefaults. Integrated real-time calorie calculation and validation of user input for a polished and intuitive interface.',
    icon: HiDeviceMobile,
    type: 'Personal Project',
    tech: ['SwiftUI', 'UIKit', 'MVVM', 'iOS Development'],
    image: '/project2.jpg',
    period: 'Jan 2025 – May 2025'
  },
  {
    title: 'Flight Tracker',
    description: 'Built a flight tracking frontend that queries live data via AviationStack API, supporting search by flight number or route. Implemented responsive design, API error handling, and reusable components using React hooks. Added route-based filtering and date selection logic to enhance user control and frontend logic complexity.',
    icon: HiGlobe,
    type: 'Personal Project',
    tech: ['JavaScript', 'React', 'AviationStack API', 'REST API'],
    image: '/project3.jpg',
    period: 'Feb 2025 – April 2025'
  },
  {
    title: 'SMS Task Reminder App',
    description: 'A productivity app that sends SMS reminders for scheduled tasks. Features include task categorization, repeating reminders, and persistent task storage using Swift&apos;s local storage.',
    icon: HiCode,
    type: 'Personal Project',
    tech: ['Swift', 'SwiftUI', 'Twilio API', 'iOS Development'],
    image: '/project4.jpg',
    period: '2024'
  },
  {
    title: 'Student Management System',
    description: 'Developed a MySQL database to manage student information, course enrollment, and grades. Utilized DBeaver and designed SQL queries to retrieve and update data efficiently.',
    icon: HiDatabase,
    type: 'Academic Project',
    tech: ['MySQL', 'DBeaver', 'SQL'],
    image: '/project5.jpg',
    period: '2024'
  },
  {
    title: 'FTC Robotics Competition',
    description: 'Led programming for an all-girls robotics team that was recognized as one of the top teams in the country. Developed JavaScript programs for robot control, managed team budget and sponsor relations, and maintained safety protocols during competitions.',
    icon: HiChip,
    type: 'Competition Project',
    tech: ['JavaScript', 'Robotics', 'Team Leadership', 'Project Management'],
    image: '/project6.jpg',
    period: '2021 – Present'
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
            Here are some of the projects I&apos;ve worked on
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-custom-black-50">
                    {project.title}
                  </h3>
                </div>
                <p className="text-custom-black-200 mb-2 text-sm">{project.period}</p>
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