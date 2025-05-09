'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight, HiCode, HiUser, HiMail } from 'react-icons/hi';
import ProfileImage from './components/ProfileImage';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-custom-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <ProfileImage priority className="mb-8" />
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-custom-black-50">
              Hi! My name is Kayla Hurd.
            </h1>
            <p className="text-xl sm:text-2xl text-custom-black-200 mb-8">
              Senior Computer Science Student at Georgia State University
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-custom-black-900 bg-custom-pink-500 hover:bg-custom-pink-600 transition-colors"
              >
                View My Work
                <HiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-custom-black-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-custom-black-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-custom-pink-500 mb-4">
                <HiCode size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom-black-50">Projects</h3>
              <p className="text-custom-black-200 mb-4">
                Explore my latest work and personal projects
              </p>
              <Link
                href="/projects"
                className="text-custom-pink-500 hover:text-custom-pink-400 inline-flex items-center"
              >
                Learn More <HiArrowRight className="ml-1" />
              </Link>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-custom-black-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-custom-pink-500 mb-4">
                <HiUser size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom-black-50">Experience</h3>
              <p className="text-custom-black-200 mb-4">
                Learn more about me and my expertise!
              </p>
              <Link
                href="/experience"
                className="text-custom-pink-500 hover:text-custom-pink-400 inline-flex items-center"
              >
                Learn More <HiArrowRight className="ml-1" />
              </Link>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-custom-black-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-custom-pink-500 mb-4">
                <HiMail size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom-black-50">Contact</h3>
              <p className="text-custom-black-200 mb-4">
                Get in touch with me!
              </p>
              <Link
                href="/contact"
                className="text-custom-pink-500 hover:text-custom-pink-400 inline-flex items-center"
              >
                Learn More <HiArrowRight className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
