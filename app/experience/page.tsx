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
    title: 'Technology Intern',
    company: 'LocumTenens.com',
    period: 'May 2025 – Present',
    location: 'Alpharetta, GA',
    icon: HiCode,
    description: [
      'Engineered and deployed a full-stack inventory management web application with React, Flask, and Supabase, significantly streamlining asset tracking and reducing manual data entry by 70%.',
      'Provided advanced technical support to over 300 telehealth providers, leveraging Salesforce for case management and Bomgar for remote troubleshooting, resolving complex software and access issues efficiently.',
      'Created detailed documentation and instructional guides for internal systems including LT Telehealth and LTOE, enhancing user proficiency and reducing repeat support requests by 25%.'
    ]
  },
  {
    title: 'Information Technology Intern',
    company: 'OTM Media and IT Solutions',
    period: 'Oct 2024 – May 2025',
    location: 'Smyrna, GA',
    icon: HiSupport,
    description: [
      'Provided technical support and troubleshooting, ensuring system reliability and user satisfaction.',
      'Collaborated with IT specialists and clients to analyze technical requirements and deliver custom solutions.',
      'Assisted in building small business inventory management systems, contributing to full software lifecycle.'
    ]
  },
  {
    title: 'CX Intern',
    company: 'SiteOne Landscape Supply',
    period: 'May 2024 – Aug 2024',
    location: 'Alpharetta, GA',
    icon: HiBriefcase,
    description: [
      'Utilized Salesforce to streamline prospect management and customer data analysis, enhancing lead processing and customer engagement.',
      'Collaborated on cross-functional teams to identify process improvements in the e-commerce workflow, proposing solutions implemented in subsequent project updates.',
      'Supported the launch of the Partner Program for online orders, improving customer engagement and site usage.',
      'Collaborated with the digital product team to improve customer experience on the e-commerce platform.'
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