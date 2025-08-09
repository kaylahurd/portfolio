/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { HiCode, HiCube, HiChip, HiDatabase, HiExternalLink, HiBriefcase, HiSupport } from 'react-icons/hi';
import Image from 'next/image';
import { IconType } from 'react-icons';

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  icon: IconType;
  description: string[];
};

const experiences: Experience[] = [
  {
    title: 'Software Developer Intern',
    company: 'LocumTenens.com',
    period: 'May 2025 – July 2025',
    location: 'Alpharetta, GA',
    icon: HiCode,
    description: [
      'Engineered full-stack web applications with React, Flask, and Supabase, adding secure authentication, role-based access, and real-time data sync to modernize internal tools.',
      'Developed and optimized C# APIs for a .NET platform integrated with Salesforce, Axuall, and Martech systems, enabling automated credentialing and marketing workflows.',
      'Led API debugging and performance tuning using Postman, SQL, and logging tools while collaborating with Software Engineering, Martech, and Product teams to deliver scalable, production-ready solutions.'
    ]
  },
  {
    title: 'Information Technology Intern',
    company: 'OTM Media and IT Solutions',
    period: 'Oct 2024 – May 2025',
    location: 'Smyrna, GA',
    icon: HiSupport,
    description: [
      'Developed internal web tools for asset tracking and reporting, improving client visibility and reducing support response times.',
      'Provided remote and on-site support for hardware, software, and networking issues, ensuring system reliability for small business clients.'
    ]
  },
  {
    title: 'CX Intern',
    company: 'SiteOne Landscape Supply',
    period: 'May 2024 – Aug 2024',
    location: 'Alpharetta, GA',
    icon: HiBriefcase,
    description: [
      'Automated lead management processes in Salesforce by designing optimized workflows and data validation rules.',
      'Collaborated with e-commerce dev teams on platform enhancements, improving user engagement and online ordering efficiency.'
    ]
  },
  {
    title: 'Drive Thru Leader',
    company: 'McDonalds',
    period: 'May 2020 – May 2021',
    location: 'Alpharetta, GA',
    icon: HiSupport,
    description: [
      'Took customer orders and processed payments.',
      'Demonstrated multitasking abilities in a fast-paced environment.',
      'Efficiently handed out food at the drive-thru window and managed order packaging.'
    ]
  },
  {
    title: 'Counter and Server',
    company: 'Alessios',
    period: 'May 2021 – Mar 2022',
    location: 'Johns Creek, GA',
    icon: HiSupport,
    description: [
      'Managed takeout orders and addressed customer queries via phone.',
      'Ensured accuracy in order packaging and delivery.',
      'Provided attentive table service and maintained a clean dining area.',
      'Cross-trained in various roles, including salad preparation, dishwashing, expo, and hosting.'
    ]
  },
  {
    title: 'Data Entry',
    company: 'Environmental Technology Corporation Hearing Solutions',
    period: 'May 2018 – Present',
    location: 'Alpharetta, GA',
    icon: HiSupport,
    description: [
      'Entered customers\' hearing data accurately and efficiently.',
      'Managed email communication and ensured correct data entry by collaborating with other employees.',
      'Authorized checks and handled bank transactions.'
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
            Here&apos;s a timeline of my professional journey
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
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-custom-black-50">
                    {experience.title}
                  </h3>
                  <p className="text-custom-pink-500">{experience.company}</p>
                  <p className="text-custom-black-200 text-sm">{experience.period} • {experience.location}</p>
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