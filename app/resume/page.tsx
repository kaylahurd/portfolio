'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  const experience = [
    {
      title: 'Software Developer Intern',
      company: 'LocumTenens.com',
      period: 'May 2025 – July 2025',
      responsibilities: [
        'Engineered full-stack web applications with React, Flask, and Supabase, adding secure authentication, role-based access, and real-time data sync to modernize internal tools',
        'Developed and optimized C# APIs for a .NET platform integrated with Salesforce, Axuall, and Martech systems, enabling automated credentialing and marketing workflows',
        'Led API debugging and performance tuning using Postman, SQL, and logging tools while collaborating with Software Engineering, Martech, and Product teams to deliver scalable, production-ready solutions'
      ],
    },
    {
      title: 'Information Technology Intern',
      company: 'OTM Media & IT Solutions',
      period: 'Oct 2024 – May 2025',
      responsibilities: [
        'Developed internal web tools for asset tracking and reporting, improving client visibility and reducing support response times',
        'Provided remote and on-site support for hardware, software, and networking issues, ensuring system reliability for small business clients'
      ],
    },
    {
      title: 'CX Intern',
      company: 'SiteOne Landscape Supply',
      period: 'May 2024 – August 2024',
      responsibilities: [
        'Automated lead management processes in Salesforce by designing optimized workflows and data validation rules',
        'Collaborated with e-commerce dev teams on platform enhancements, improving user engagement and online ordering efficiency'
      ],
    },
    {
      title: 'Lead Programmer/Developer',
      company: 'FIRST Robotics Team',
      period: 'Aug 2012 - May 2022',
      responsibilities: [
        'Led Java development for autonomous and driver-controlled robotics systems, achieving 8x State Championships and multiple World Championship qualifications',
        'Contributed to the Open Wheelchair Project, developing open-source robotics solutions for mobility-impaired individuals',
        'Managed technical documentation and secured $5,500+ in sponsorships for engineering initiatives'
      ],
    },
    {
      title: 'Drive Thru Leader',
      company: 'McDonalds',
      period: 'May 2020 - May 2021',
      responsibilities: [
        'Took customer orders and processed payments',
        'Demonstrated multitasking abilities in a fast-paced environment',
        'Efficiently handed out food at the drive-thru window and managed order packaging'
      ],
    },
    {
      title: 'Counter and Server',
      company: 'Alessios',
      period: 'May 2021 - Mar 2022',
      responsibilities: [
        'Managed takeout orders and addressed customer queries via phone',
        'Ensured accuracy in order packaging and delivery',
        'Provided attentive table service and maintained a clean dining area',
        'Cross-trained in various roles, including salad preparation, dishwashing, expo, and hosting'
      ],
    },
    {
      title: 'Data Entry',
      company: 'Environmental Technology Corporation Hearing Solutions',
      period: 'May 2018 - Present',
      responsibilities: [
        'Entered customers\' hearing data accurately and efficiently',
        'Managed email communication and ensured correct data entry by collaborating with other employees',
        'Authorized checks and handled bank transactions'
      ],
    }
  ];

  const projects = [
    {
      title: 'Inventory Management System',
      description: 'Full-stack app with authentication, editable dashboards, role-based access, and historical tracking; deployed with AWS for scalability. Custom CSV export with category grouping, thresholds, and color-coded formatting for audit readiness.',
      technologies: ['React', 'Flask', 'PostgreSQL', 'AWS', 'Authentication', 'CSV Export'],
    },
    {
      title: 'Calorie Tracker iOS App',
      description: 'iOS app with persistent ingredient storage, meal creation, and real-time calorie calculations with serving-size adjustments. Implemented offline data handling using UserDefaults for fast and reliable access.',
      technologies: ['SwiftUI', 'MVVM', 'UserDefaults', 'iOS Development'],
    },
    {
      title: 'RealNest Real Estate Portal',
      description: 'Developed a full-stack property platform with authentication, role-based access, and real-time listings. Integrated a machine learning-powered price prediction model using historical market data for smarter buying decisions.',
      technologies: ['React', 'GraphQL', 'AWS', 'Machine Learning', 'Authentication'],
    },
    {
      title: 'FTC Robotics Competition Project',
      description: 'Led the development of competition robot software using Java, implementing autonomous routines and precise control systems.',
      technologies: ['Java', 'Robotics', 'Team Leadership', 'Project Management'],
    },
    {
      title: 'Open Wheelchair Project',
      description: 'Contributed to building motorized wheelchairs using PVC materials for children in need.',
      technologies: ['Hardware', 'Engineering', 'Community Service'],
    }
  ];

  return (
    <div className="min-h-screen bg-custom-black-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-4xl font-bold text-custom-black-50 mb-8">Resume</h1>
        
        {/* Contact Header */}
        <section className="mb-8">
          <div className="bg-custom-black-800 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-custom-black-50 mb-4">Kayla Hurd</h2>
            <div className="text-custom-black-200 space-y-2">
              <p>kaylahurd39@gmail.com</p>
              <p>linkedin.com/in/kayla-hurd | github.com/kaylahurd</p>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-custom-black-50 mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-custom-black-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-custom-black-50">{job.title}</h3>
                <p className="text-custom-pink-500">{job.company} • {job.period}</p>
                <ul className="mt-4 list-disc list-inside text-custom-black-200 space-y-2">
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
          <h2 className="text-2xl font-semibold text-custom-black-50 mb-6">Education</h2>
          
          <div className="bg-custom-black-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-custom-black-50">Bachelor of Science in Computer Science</h3>
            <p className="text-custom-pink-500">Georgia State University • Aug 2022 - Dec 2025</p>
            <p className="text-custom-black-200">Atlanta, GA</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-custom-black-50 mb-6">Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-custom-black-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-custom-black-50">{project.title}</h3>
                <p className="text-custom-black-200 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-custom-black-700 text-custom-pink-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-custom-black-50 mb-6">Technical Skills</h2>
          
          <div className="bg-custom-black-800 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-custom-black-50 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['C#', 'C++', 'C', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-custom-black-700 text-custom-pink-500 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-custom-black-50 mb-3">Frameworks & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['ASP.NET', 'React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'SwiftUI', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-custom-black-700 text-custom-pink-500 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-custom-black-50 mb-3">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub Actions', 'Jenkins', 'XCode', 'Postman', 'Supabase', 'VS Code', 'Visual Studio', 'IntelliJ', 'Figma', 'Pytest', 'JUnit'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-custom-black-700 text-custom-pink-500 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-custom-black-50 mb-3">Platforms & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {['Azure DevOps', 'Salesforce', 'GitHub', 'Jira', 'Confluence', 'AWS', 'Azure', 'Docker', 'Kubernetes'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-custom-black-700 text-custom-pink-500 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Resume Button */}
        <div className="text-center">
          <a 
            href="/KaylaResume.pdf" 
            download="KaylaHurd_Resume.pdf"
            className="inline-block bg-custom-pink-500 text-white px-6 py-3 rounded-md hover:bg-custom-pink-600 transition-colors shadow-md hover:shadow-lg"
          >
            Download Resume PDF
          </a>
        </div>
      </motion.div>
    </div>
  );
} 