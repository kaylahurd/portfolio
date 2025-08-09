'use client';

import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiChip } from 'react-icons/hi';

const skills = [
  // Languages
  'C#', 'C++', 'C', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS',
  // Frameworks
  'ASP.NET', 'React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'SwiftUI', 'Tailwind CSS', 'Bootstrap',
  // Developer Tools
  'Git', 'GitHub Actions', 'Jenkins', 'XCode', 'Postman', 'Supabase', 'VS Code', 'Visual Studio', 'IntelliJ', 'Figma', 'Pytest', 'JUnit',
  // Technologies
  'AI/ML', 'REST APIs', 'GraphQL', 'OAuth', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure',
  // Platforms
  'Azure DevOps', 'Salesforce', 'GitHub', 'Jira', 'Confluence'
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
              <h3 className="text-xl font-semibold text-custom-black-50">Software Developer Intern</h3>
              <p className="text-custom-pink-500">LocumTenens.com • May 2025 - July 2025</p>
              <p className="text-custom-black-200 mt-2">
                Engineered full-stack web applications with React, Flask, and Supabase, adding secure authentication, role-based access, and real-time data sync to modernize internal tools. Developed and optimized C# APIs for a .NET platform integrated with Salesforce, Axuall, and Martech systems, enabling automated credentialing and marketing workflows.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Information Technology Intern</h3>
              <p className="text-custom-pink-500">OTM Media and IT Solutions • Oct 2024 - May 2025</p>
              <p className="text-custom-black-200 mt-2">
                Developed internal web tools for asset tracking and reporting, improving client visibility and reducing support response times. Provided remote and on-site support for hardware, software, and networking issues, ensuring system reliability for small business clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">CX Intern</h3>
              <p className="text-custom-pink-500">SiteOne Landscape Supply • May 2024 - Aug 2024</p>
              <p className="text-custom-black-200 mt-2">
                Automated lead management processes in Salesforce by designing optimized workflows and data validation rules. Collaborated with e-commerce dev teams on platform enhancements, improving user engagement and online ordering efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Lead Programmer/Developer</h3>
              <p className="text-custom-pink-500">FIRST Robotics Team • Aug 2012 - May 2022</p>
              <p className="text-custom-black-200 mt-2">
                Led Java development for autonomous and driver-controlled robotics systems, achieving 8x State Championships and multiple World Championship qualifications. Contributed to the Open Wheelchair Project, developing open-source robotics solutions for mobility-impaired individuals. Managed technical documentation and secured $5,500+ in sponsorships for engineering initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Drive Thru Leader</h3>
              <p className="text-custom-pink-500">McDonalds • May 2020 - May 2021</p>
              <p className="text-custom-black-200 mt-2">
                Took customer orders and processed payments. Demonstrated multitasking abilities in a fast-paced environment. Efficiently handed out food at the drive-thru window and managed order packaging.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Counter and Server</h3>
              <p className="text-custom-pink-500">Alessios • May 2021 - Mar 2022</p>
              <p className="text-custom-black-200 mt-2">
                Managed takeout orders and addressed customer queries via phone. Ensured accuracy in order packaging and delivery. Provided attentive table service and maintained a clean dining area. Cross-trained in various roles, including salad preparation, dishwashing, expo, and hosting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-custom-black-50">Data Entry</h3>
              <p className="text-custom-pink-500">Environmental Technology Corporation Hearing Solutions • May 2018 - Present</p>
              <p className="text-custom-black-200 mt-2">
                Entered customers' hearing data accurately and efficiently. Managed email communication and ensured correct data entry by collaborating with other employees. Authorized checks and handled bank transactions.
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