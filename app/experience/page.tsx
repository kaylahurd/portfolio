'use client';

import { motion } from 'framer-motion';
import { HiBriefcase, HiOfficeBuilding, HiDatabase, HiCode, HiChip } from 'react-icons/hi';

const experiences = [
  {
    title: 'Information Technology Intern',
    company: 'OTM Media & IT Solutions',
    period: 'Oct 2024 – Present',
    icon: HiBriefcase,
    description: [
      'Provided technical support and troubleshooting, ensuring system reliability and user satisfaction',
      'Collaborated with clients on small-scale programming projects, contributing to solutions that enhance business operations',
      'Assisted in building small business inventory management systems, contributing to full software lifecycle from development to testing',
      'Collaborated with IT specialists and clients to analyze technical requirements and deliver custom solutions',
      'Assisted in the development and debugging of client-side software solutions using Python and Java'
    ]
  },
  {
    title: 'CX Intern',
    company: 'SiteOne Landscape Supply',
    period: 'May 2024 – August 2024',
    icon: HiOfficeBuilding,
    description: [
      'Developed strategies to boost online engagement and drive customer sign-ups for pricing and inventory access',
      'Implemented the Partner Program for online orders, enhancing user experience and incentivizing customer interaction',
      'Contributed to software optimization efforts aimed at improving platform accessibility and user satisfaction',
      'Gained valuable insights into software development, UI/UX design, and data analysis'
    ]
  },
  {
    title: 'Data Entry Clerk',
    company: 'Environmental Tech. Corporation and Health Solutions',
    period: 'May 2018 – Present',
    icon: HiDatabase,
    description: [
      'Entered customers&apos; hearing data accurately and efficiently',
      'Managed email communication and ensured correct data entry by collaborating with other employees',
      'Authorized checks and handled bank deposits'
    ]
  },
  {
    title: 'Main Programmer - FTC Robotics',
    company: 'Alpharetta, GA',
    period: 'Aug 2017 - May 2022',
    icon: HiCode,
    description: [
      'Led programming for an all-girls robotics team recognized as one of the top teams in the country',
      'Utilized JavaScript to program the robot hub for autonomous actions and controller-driven movements',
      'Managed team budget, coordinated with sponsors, and handled financial matters',
      'Maintained safety protocols during competitions and meetings',
      'Performed robot assembly tasks using various tools and machinery'
    ]
  },
  {
    title: 'Counter and Server',
    company: 'Alessios, Johns Creek, GA',
    period: 'May 2021 - Mar 2022',
    icon: HiBriefcase,
    description: [
      'Managed takeout orders and addressed customer queries via phone',
      'Ensured accuracy in order packaging and delivery',
      'Provided attentive table service and maintained a clean dining area',
      'Cross-trained in various roles including salad preparation, dishwashing, expo, and hosting'
    ]
  },
  {
    title: 'Drive Thru Leader',
    company: 'McDonalds, Alpharetta, GA',
    period: 'May 2020 - May 2021',
    icon: HiBriefcase,
    description: [
      'Took customer orders and processed payments',
      'Demonstrated multitasking abilities in a fast-paced environment',
      'Efficiently handled food at the drive-thru window and managed order packaging'
    ]
  },
  {
    title: 'Main Programmer - FLL Robotics',
    company: 'Alpharetta, GA',
    period: 'Aug 2012 - May 2017',
    icon: HiCode,
    description: [
      'Programmed pre-built robots using block-based coding',
      'Learned fundamental programming concepts through hands-on robotics experience',
      'Participated in team competitions and collaborative problem-solving'
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-pink-900 dark:text-pink-100 mb-8 text-center">Work Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-pink-800/80 rounded-lg shadow-md backdrop-blur-sm p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <experience.icon className="h-8 w-8 text-pink-600 dark:text-pink-300" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-pink-900 dark:text-pink-100">{experience.title}</h2>
                  <p className="text-pink-700 dark:text-pink-300 mb-4">{experience.company} • {experience.period}</p>
                  <ul className="space-y-3">
                    {experience.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="text-pink-800 dark:text-pink-200 flex items-start"
                      >
                        <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-pink-900 dark:text-pink-100 mb-6 text-center">Education</h2>
          <div className="bg-white/80 dark:bg-pink-800/80 rounded-lg shadow-md backdrop-blur-sm p-6">
            <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">Computer Science, B.S.</h3>
            <p className="text-pink-700 dark:text-pink-300 mb-2">Georgia State University • 2022 - Fall 2025</p>
            <p className="text-pink-800 dark:text-pink-200">GPA: 3.8/4.0</p>
            <div className="mt-4">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Awards & Achievements</h4>
              <ul className="space-y-2">
                <li className="text-pink-800 dark:text-pink-200 flex items-center">
                  <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                  Hooch Excellence Award - 2022
                </li>
                <li className="text-pink-800 dark:text-pink-200 flex items-center">
                  <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                  Dean's List - Fall 2022-Fall 2024
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-pink-900 dark:text-pink-100 mb-6 text-center">Personal Projects</h2>
          <div className="bg-white/80 dark:bg-pink-800/80 rounded-lg shadow-md backdrop-blur-sm p-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                  <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">FTC Robotics Competition Project</h3>
                </div>
                <div className="ml-6">
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Languages:</span> JavaScript
                  </p>
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Skills:</span> Robotics, Team Leadership, Project Management
                  </p>
                  <p className="text-pink-800 dark:text-pink-200">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Description:</span> Led the development of competition robot software, implementing autonomous routines and precise control systems. Member of an all-girls team recognized as one of the top teams in the country.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                  <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">SMS Task Reminder App</h3>
                </div>
                <div className="ml-6">
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Languages:</span> Swift
                  </p>
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Skills:</span> SwiftUI, Twilio API, iOS Development
                  </p>
                  <p className="text-pink-800 dark:text-pink-200">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Description:</span> A productivity app that sends SMS reminders for scheduled tasks. Features include task categorization, repeating reminders, and persistent task storage.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                  <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">Calorie Tracker App</h3>
                </div>
                <div className="ml-6">
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Languages:</span> Swift
                  </p>
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Skills:</span> XCode, iOS Development
                  </p>
                  <p className="text-pink-800 dark:text-pink-200">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Description:</span> Created an iOS app for tracking calories and monitoring nutrition goals using Swift and XCode.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                  <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">Student Management System</h3>
                </div>
                <div className="ml-6">
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Languages:</span> SQL
                  </p>
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Skills:</span> MySQL, DBeaver, Database Design
                  </p>
                  <p className="text-pink-800 dark:text-pink-200">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Description:</span> Developed a MySQL database system for managing student information, course enrollment, and grades.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-pink-600 dark:text-pink-300">•</span>
                  <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">Open Wheelchair Project</h3>
                </div>
                <div className="ml-6">
                  <p className="text-pink-800 dark:text-pink-200 mb-2">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Skills:</span> Hardware Engineering, Community Service
                  </p>
                  <p className="text-pink-800 dark:text-pink-200">
                    <span className="font-semibold text-pink-900 dark:text-pink-100">Description:</span> Contributed to building motorized wheelchairs using PVC materials for children in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 