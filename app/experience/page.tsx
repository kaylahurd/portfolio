'use client';

import { motion } from 'framer-motion';
import { HiBriefcase, HiOfficeBuilding, HiDatabase, HiCode } from 'react-icons/hi';

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

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  <p className="text-custom-pink-500 mb-2">{experience.company}</p>
                  <p className="text-custom-black-200 mb-4">{experience.period}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.description.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm bg-custom-black-700 text-custom-pink-500 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 