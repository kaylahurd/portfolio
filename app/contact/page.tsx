'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-pink-900 dark:text-pink-100 mb-8 text-center">Contact Me</h1>
        
        <div className="bg-white/80 dark:bg-pink-800/80 rounded-lg shadow-md backdrop-blur-sm p-8">
          <div className="space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="text-pink-600 dark:text-pink-300">
                <HiMail size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-pink-900 dark:text-pink-100">Email</h2>
                <a
                  href="mailto:kaylahurd39@gmail.com"
                  className="text-pink-700 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-300"
                >
                  kaylahurd39@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-4"
            >
              <div className="text-pink-600 dark:text-pink-300">
                <HiPhone size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-pink-900 dark:text-pink-100">Phone</h2>
                <a
                  href="tel:404-713-6295"
                  className="text-pink-700 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-300"
                >
                  404-713-6295
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div className="text-pink-600 dark:text-pink-300">
                <HiLocationMarker size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-pink-900 dark:text-pink-100">Location</h2>
                <p className="text-pink-700 dark:text-pink-200">
                  125 Ted Turner Drive SW, Atlanta GA, 30303
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-pink-900 dark:text-pink-100 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-md border border-pink-200 dark:border-pink-700 bg-white/50 dark:bg-pink-900/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-pink-900 dark:text-pink-100 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md border border-pink-200 dark:border-pink-700 bg-white/50 dark:bg-pink-900/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-pink-900 dark:text-pink-100 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-pink-200 dark:border-pink-700 bg-white/50 dark:bg-pink-900/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Your message..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
} 