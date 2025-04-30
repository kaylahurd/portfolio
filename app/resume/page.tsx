'use client';

import { motion } from 'framer-motion';
import { HiDownload, HiAcademicCap, HiBriefcase, HiCode, HiArrowRight } from 'react-icons/hi';

export default function Resume() {
  const experience = [
    {
      title: 'Information Technology Intern',
      company: 'OTM Media & IT Solutions',
      period: 'Oct 2024 – Present',
      responsibilities: [
        'Provided technical support and troubleshooting, ensuring system reliability and user satisfaction',
        'Collaborated with clients on small-scale programming projects, contributing to solutions that enhance business operations',
        'Assisted in building small business inventory management systems, contributing to full software lifecycle from development to testing',
        'Collaborated with IT specialists and clients to analyze technical requirements and deliver custom solutions',
        'Assisted in the development and debugging of client-side software solutions using Python and Java'
      ],
    },
    {
      title: 'CX Intern',
      company: 'SiteOne Landscape Supply',
      period: 'May 2024 – August 2024',
      responsibilities: [
        'Developed strategies to boost online engagement and drive customer sign-ups for pricing and inventory access',
        'Implemented the Partner Program for online orders, enhancing user experience and incentivizing customer interaction',
        'Contributed to software optimization efforts aimed at improving platform accessibility and user satisfaction',
        'Gained valuable insights into software development, UI/UX design, and data analysis'
      ],
    },
    {
      title: 'Data Entry Clerk',
      company: 'Environmental Tech. Corporation and Health Solutions',
      period: 'May 2018 – Present',
      responsibilities: [
        'Entered customers\' hearing data accurately and efficiently',
        'Managed email communication and ensured correct data entry by collaborating with other employees',
        'Authorized checks and handled bank deposits'
      ],
    },
    {
      title: 'Main Programmer - FTC Robotics',
      company: 'Alpharetta, GA',
      period: 'Aug 2017 - May 2022',
      responsibilities: [
        'Led programming for an all-girls robotics team recognized as one of the top teams in the country',
        'Utilized JavaScript to program the robot hub for autonomous actions and controller-driven movements',
        'Managed team budget, coordinated with sponsors, and handled financial matters',
        'Maintained safety protocols during competitions and meetings',
        'Performed robot assembly tasks using various tools and machinery'
      ],
    },
    {
      title: 'Counter and Server',
      company: 'Alessios, Johns Creek, GA',
      period: 'May 2021 - Mar 2022',
      responsibilities: [
        'Managed takeout orders and addressed customer queries via phone',
        'Ensured accuracy in order packaging and delivery',
        'Provided attentive table service and maintained a clean dining area',
        'Cross-trained in various roles including salad preparation, dishwashing, expo, and hosting'
      ],
    },
    {
      title: 'Drive Thru Leader',
      company: 'McDonalds, Alpharetta, GA',
      period: 'May 2020 - May 2021',
      responsibilities: [
        'Took customer orders and processed payments',
        'Demonstrated multitasking abilities in a fast-paced environment',
        'Efficiently handled food at the drive-thru window and managed order packaging'
      ],
    },
    {
      title: 'Main Programmer - FLL Robotics',
      company: 'Alpharetta, GA',
      period: 'Aug 2012 - May 2017',
      responsibilities: [
        'Programmed pre-built robots using block-based coding',
        'Learned fundamental programming concepts through hands-on robotics experience',
        'Participated in team competitions and collaborative problem-solving'
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2014 - 2018',
      achievements: [
        'Dean\'s List',
        'Computer Science Club President',
        'Research Assistant',
      ],
    },
  ];

  const skills = {
    technical: [
      'React', 'Next.js', 'TypeScript', 'Node.js',
      'Python', 'SQL', 'Git', 'AWS',
    ],
    soft: [
      'Leadership', 'Communication', 'Problem Solving',
      'Team Collaboration', 'Project Management',
    ],
  };

  const projects = [
    {
      title: 'FTC Robotics Competition Project',
      description: 'Led the development of competition robot software using JavaScript, implementing autonomous routines and precise control systems.',
      technologies: ['JavaScript', 'Robotics', 'Team Leadership', 'Project Management'],
    },
    {
      title: 'SMS Task Reminder App',
      description: 'Developed a productivity app using Swift that sends SMS reminders for scheduled tasks, featuring task categorization and persistent storage.',
      technologies: ['Swift', 'SwiftUI', 'Twilio API', 'iOS Development'],
    },
    {
      title: 'Calorie Tracker App',
      description: 'Created an iOS app for tracking calories and monitoring nutrition goals using Swift and XCode.',
      technologies: ['Swift', 'XCode', 'iOS Development'],
    },
    {
      title: 'Student Management System',
      description: 'Developed a MySQL database system for managing student information, course enrollment, and grades.',
      technologies: ['MySQL', 'DBeaver', 'SQL'],
    },
    {
      title: 'Open Wheelchair Project',
      description: 'Contributed to building motorized wheelchairs using PVC materials for children in need.',
      technologies: ['Hardware', 'Engineering', 'Community Service'],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-pink-900 dark:text-pink-100 mb-8">Resume</h1>
        
        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-200 mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-pink-800/80 p-6 rounded-lg shadow-md backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">{job.title}</h3>
                <p className="text-pink-700 dark:text-pink-300">{job.company} • {job.period}</p>
                <ul className="mt-4 list-disc list-inside text-pink-800 dark:text-pink-200 space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-200 mb-6">Education</h2>
          
          <div className="bg-white/80 dark:bg-pink-800/80 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">Computer Science, B.S.</h3>
            <p className="text-pink-700 dark:text-pink-300">Georgia State University • 2022 - Fall 2025</p>
            <p className="mt-2 text-pink-800 dark:text-pink-200">GPA: 3.8/4.0</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-200 mb-6">Skills</h2>
          
          <div className="bg-white/80 dark:bg-pink-800/80 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Programming</h4>
                <ul className="text-pink-800 dark:text-pink-200 space-y-1">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>HTML/CSS/JavaScript</li>
                  <li>Swift/SwiftUI</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Development</h4>
                <ul className="text-pink-800 dark:text-pink-200 space-y-1">
                  <li>iOS Development</li>
                  <li>SQL</li>
                  <li>Power BI</li>
                  <li>Microsoft Office</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-200 mb-6">Awards</h2>
          
          <div className="bg-white/80 dark:bg-pink-800/80 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <ul className="text-pink-800 dark:text-pink-200 space-y-2">
              <li>Hooch Excellence Award - 2022</li>
              <li>Dean&apos;s List - Fall 2022-Fall 2024</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-200 mb-6">Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-pink-800/80 p-6 rounded-lg shadow-md backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100">{project.title}</h3>
                <p className="text-pink-800 dark:text-pink-200 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-700 text-pink-800 dark:text-pink-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Download Resume Button */}
        <div className="text-center">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg">
            Download Resume PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
} 