'use client';

import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiChip } from 'react-icons/hi';

const skills = [
  // Languages
  'Java', 'Python', 'SQL', 'JavaScript', 'HTML/CSS',
  // Frameworks
  'React', 'Node.js', 'Flask', 'SwiftUI', 'FastAPI', 'Material-UI', 'Tailwind CSS',
  // Developer Tools
  'Git', 'XCode', 'Postman', 'Supabase', 'VS Code', 'Visual Studio', 'IntelliJ', 'Eclipse',
  // Technologies
  'Docker', 'REST API', 'OAuth', 'PostgreSQL',
  // Tools and Platforms
  'Salesforce', 'GitHub', 'Azure DevOps'
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
          <h2 className="text-2xl font-semibold text-custom-black-50 mb-4">Hello!</h2>
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
              <h3 className="text-xl font-semibold text-custom-black-50">Technology Intern</h3>
              <p className="text-custom-pink-500">LocumTenens.com • May 2025 - Present</p>
              <p className="text-custom-black-200 mt-2">
                Engineering and deploying full-stack applications, providing technical support to telehealth providers, and creating system documentation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Information Technology Intern</h3>
              <p className="text-custom-pink-500">OTM Media and IT Solutions • Oct 2024 - May 2025</p>
              <p className="text-custom-black-200 mt-2">
                Providing technical support and troubleshooting, collaborating with IT specialists to deliver custom solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">CX Intern</h3>
              <p className="text-custom-pink-500">SiteOne Landscape Supply • May 2024 - Aug 2024</p>
              <p className="text-custom-black-200 mt-2">
                Streamlined prospect management using Salesforce, collaborated on e-commerce improvements, and supported Partner Program launch.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">FTC Robotics Main Programmer</h3>
              <p className="text-custom-pink-500">Alpharetta, GA • Aug 2017 - May 2022</p>
              <p className="text-custom-black-200 mt-2">
                Member of an all-girls team recognized as one of the top teams in the country. Utilized JavaScript to program the hub connected to the robot, managed budget, coordinated with sponsors, and handled financial matters. Maintained safety protocols and performed robot assembly tasks.
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
            <p className="text-custom-pink-500">Georgia State University • Aug 2022 - Dec 2025</p>
            <p className="text-custom-black-200">Atlanta, GA</p>
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
            <h2 className="text-2xl font-semibold text-custom-black-50">Technical Skills</h2>
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