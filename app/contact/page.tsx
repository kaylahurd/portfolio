'use client';

import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiCode, HiUser } from 'react-icons/hi';

export default function Contact() {
  return (
    <div className="min-h-screen bg-custom-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-custom-black-50 mb-4">Contact Me</h1>
          <p className="text-lg text-custom-black-200">
            Feel free to reach out to me through any of these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-custom-black-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-custom-black-50 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <HiMail className="h-6 w-6 text-custom-pink-500 mr-3" />
                <a
                  href="mailto:khurd1@student.gsu.edu"
                  className="text-custom-black-200 hover:text-custom-pink-500 transition-colors"
                >
                  khurd1@student.gsu.edu
                </a>
              </div>
              <div className="flex items-center">
                <HiLocationMarker className="h-6 w-6 text-custom-pink-500 mr-3" />
                <span className="text-custom-black-200">Atlanta, GA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-custom-black-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-custom-black-50 mb-6">Connect with Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-black-200 hover:text-custom-pink-500 transition-colors"
              >
                <HiCode className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-black-200 hover:text-custom-pink-500 transition-colors"
              >
                <HiUser className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 