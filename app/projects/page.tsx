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
    description: 'A full-stack React and Flask web app for tracking company equipment and supplies. Features: Editable item summaries, CSV export with formatting that matches the original spreadsheet, category grouping, default quantity handling, past summary history, and user authentication for secure access. Tech: React, Flask, Supabase, Styled UI components, CSV export libraries. Impact: Designed for real-world business use with a professional UI, enabling precise inventory control and historical tracking for accurate reporting.',
    icon: HiServer,
    type: 'Work Project',
    tech: ['React', 'Flask', 'Supabase', 'PostgreSQL', 'Docker', 'CSV Export'],
    image: '/project1.jpg',
    period: 'May 2025 – Present'
  },
  {
    title: 'Calorie Tracker App',
    description: 'A Swift iOS app that allows users to log meals and calculate daily calorie intake using Gemini\'s APIs for nutrition data. Features: Permanent ingredient storage, meal creation with serving sizes, automatic calorie calculation, and ingredient lookup powered by Gemini API. Tech: Swift, SwiftUI, Gemini API, UserDefaults for persistence. Impact: Provides a seamless and visually appealing mobile experience for tracking meals and managing nutrition goals.',
    icon: HiDeviceMobile,
    type: 'Personal Project',
    tech: ['Swift', 'SwiftUI', 'Gemini API', 'UserDefaults', 'iOS Development'],
    image: '/project2.jpg',
    period: 'Jan 2025 – May 2025'
  },
  {
    title: 'Flight Tracker App',
    description: 'A web app that uses the AviationStack API to search and track flights. Features: Search by flight number (MVP) and route (departure + arrival airports with date), with live flight status updates. Tech: React, AviationStack API, Axios. Impact: Provides travelers with quick, real-time flight data for better travel planning.',
    icon: HiGlobe,
    type: 'Personal Project',
    tech: ['React', 'AviationStack API', 'Axios', 'JavaScript', 'REST API'],
    image: '/project3.jpg',
    period: 'Feb 2025 – April 2025'
  },
  {
    title: 'AI Career Path Predictor',
    description: 'An AI-powered web app that predicts the most suitable tech career path for a user based on their skills, interests, and experience. Features: Interactive questionnaire, AI-based career suggestions, and role descriptions with required skills. Tech: Streamlit, OpenAI API, Python. Impact: Helps students and career changers identify the right tech path and understand how to prepare for it.',
    icon: HiChip,
    type: 'Personal Project',
    tech: ['Streamlit', 'OpenAI API', 'Python', 'Machine Learning', 'Web Development'],
    image: '/project4.jpg',
    period: 'Dec 2024 – Jan 2025'
  },
  {
    title: 'AI Study Buddy Chatbot',
    description: 'An AI-powered study assistant that explains complex topics in simple, beginner-friendly terms. Features: Instant Q&A, step-by-step explanations, and customizable difficulty level for responses. Tech: Streamlit, OpenAI API, Python. Impact: Supports learners in understanding challenging topics with personalized guidance and clear breakdowns.',
    icon: HiCode,
    type: 'Personal Project',
    tech: ['Streamlit', 'OpenAI API', 'Python', 'Natural Language Processing', 'Education Tech'],
    image: '/project5.jpg',
    period: 'Nov 2024 – Dec 2024'
  },
  {
    title: 'RealNest Real Estate Portal',
    description: 'Developed a full-stack property platform with authentication, role-based access, and real-time listings. Integrated a machine learning-powered price prediction model using historical market data for smarter buying decisions.',
    icon: HiGlobe,
    type: 'Personal Project',
    tech: ['React', 'GraphQL', 'AWS', 'Machine Learning', 'Authentication'],
    image: '/project3.jpg',
    period: 'Feb 2025 – July 2025'
  },
  {
    title: 'SMS Task Reminder App',
    description: 'A productivity app that sends SMS reminders for scheduled tasks. Features include task categorization, repeating reminders, and persistent task storage using Swift\'s local storage.',
    icon: HiCode,
    type: 'Personal Project',
    tech: ['Swift', 'SwiftUI', 'Twilio API', 'iOS Development'],
    image: '/project6.jpg',
    period: '2024'
  },
  {
    title: 'Student Management System',
    description: 'Developed a MySQL database to manage student information, course enrollment, and grades. Utilized DBeaver and designed SQL queries to retrieve and update data efficiently.',
    icon: HiDatabase,
    type: 'Academic Project',
    tech: ['MySQL', 'DBeaver', 'SQL', 'Database Design'],
    image: '/project1.jpg',
    period: '2024'
  },
  {
    title: 'FTC Robotics Competition',
    description: 'Led programming for an all-girls robotics team that was recognized as one of the top teams in the country. Developed JavaScript programs for robot control, managed team budget and sponsor relations, and maintained safety protocols during competitions.',
    icon: HiChip,
    type: 'Competition Project',
    tech: ['JavaScript', 'Robotics', 'Team Leadership', 'Project Management'],
    image: '/project2.jpg',
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