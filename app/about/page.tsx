'use client';

import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiChip } from 'react-icons/hi';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'JavaScript',
  'HTML/CSS',
  'Tailwind CSS',
  'Git',
  'SQL'
];

export default function About() {
  return (
    <div className="min-h-screen bg-custom-black-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-4xl font-bold text-custom-black-50 mb-8 text-center">About Me</h1>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-custom-black-800 rounded-lg shadow-md p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-custom-black-50 mb-4">Hello! 👋</h2>
          <p className="text-custom-black-200 mb-4">
            I&apos;m a Computer Science student at Georgia State University with a passion for creating innovative solutions through technology. 
            I specialize in full-stack development and have experience with both web and mobile applications. I love to code, my family, and to workout!
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-custom-black-800 rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <HiChip className="h-6 w-6 text-custom-pink-500 mr-2" />
            <h2 className="text-2xl font-semibold text-custom-black-50">Experience</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Information Technology Intern</h3>
              <p className="text-custom-pink-500">OTM Media & IT Solutions • Oct 2024 - Present</p>
              <p className="text-custom-black-200 mt-2">
                Providing technical support and developing software solutions for clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">CX Intern</h3>
              <p className="text-custom-pink-500">SiteOne Landscape Supply • May 2024 - August 2024</p>
              <p className="text-custom-black-200 mt-2">
                Enhanced user experience and implemented customer engagement strategies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Data Entry Clerk</h3>
              <p className="text-custom-pink-500">Environmental Tech. Corporation and Health Solutions • May 2018 - Present</p>
              <p className="text-custom-black-200 mt-2">
                Managing data entry and financial processing operations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">FTC Robotics Main Programmer</h3>
              <p className="text-custom-pink-500">Alpharetta, GA • Aug 2017 - May 2022</p>
              <p className="text-custom-black-200 mt-2">
                Member of an all-girls team recognized as one of the top teams in the country. Utilized JavaScript to program the hub connected to the robot, managed budget, coordinated with sponsors, and handled financial matters. Maintained safety protocols and performed robot assembly tasks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Counter and Server</h3>
              <p className="text-custom-pink-500">Alessios, Johns Creek, GA • May 2021 - Mar 2022</p>
              <p className="text-custom-black-200 mt-2">
                Managed takeout orders, provided attentive table service, and cross-trained in various roles including salad preparation, dishwashing, expo, and hosting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Drive Thru Leader</h3>
              <p className="text-custom-pink-500">McDonalds, Alpharetta, GA • May 2020 - May 2021</p>
              <p className="text-custom-black-200 mt-2">
                Demonstrated multitasking abilities in a fast-paced environment, processed customer orders and payments, and efficiently managed drive-thru operations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">FLL Robotics Main Programmer</h3>
              <p className="text-custom-pink-500">Alpharetta, GA • Aug 2012 - May 2017</p>
              <p className="text-custom-black-200 mt-2">
                Acquired to program pre-built robot using block code to introduce programming concepts.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-custom-black-800 rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex items-center mb-4">
            <HiAcademicCap className="h-6 w-6 text-custom-pink-500 mr-2" />
            <h2 className="text-2xl font-semibold text-custom-black-50">Education</h2>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-custom-black-50">Bachelor of Science in Computer Science</h3>
            <p className="text-custom-pink-500">Georgia State University • 2022 - Fall 2025</p>
            <p className="text-custom-black-200">GPA: 3.8/4.0</p>
            <div className="mt-4">
              <h4 className="font-semibold text-custom-black-50 mb-2">Awards & Achievements</h4>
              <ul className="list-disc list-inside text-custom-black-200 mt-2">
                <li>Hooch Excellence Award - 2022</li>
                <li>Dean&apos;s List - Fall 2022- Spring 2025</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-custom-black-800 rounded-lg shadow-md p-6"
        >
          <div className="flex items-center mb-4">
            <HiCode className="h-6 w-6 text-custom-pink-500 mr-2" />
            <h2 className="text-2xl font-semibold text-custom-black-50">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-custom-black-700 text-custom-pink-500 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 