'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-custom-pink-50 to-custom-pink-100 dark:from-custom-pink-900 dark:to-custom-pink-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-custom-pink-900 dark:text-custom-pink-50 mb-8 text-center">Contact Me</h1>
        
        <div className="bg-white/80 dark:bg-custom-pink-800/80 rounded-lg shadow-md backdrop-blur-sm p-8">
          <div className="space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="text-custom-pink-500 dark:text-custom-pink-300">
                <HiMail size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-custom-pink-900 dark:text-custom-pink-50">Email</h2>
                <a
                  href="mailto:kaylahurd39@gmail.com"
                  className="text-custom-pink-700 dark:text-custom-pink-200 hover:text-custom-pink-600 dark:hover:text-custom-pink-300"
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
              <div className="text-custom-pink-500 dark:text-custom-pink-300">
                <HiPhone size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-custom-pink-900 dark:text-custom-pink-50">Phone</h2>
                <a
                  href="tel:404-713-6295"
                  className="text-custom-pink-700 dark:text-custom-pink-200 hover:text-custom-pink-600 dark:hover:text-custom-pink-300"
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
              <div className="text-custom-pink-500 dark:text-custom-pink-300">
                <HiLocationMarker size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-custom-pink-900 dark:text-custom-pink-50">Location</h2>
                <p className="text-custom-pink-700 dark:text-custom-pink-200">
                  Atlanta, GA
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
              <label htmlFor="name" className="block text-custom-pink-900 dark:text-custom-pink-50 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-md border border-custom-pink-200 dark:border-custom-pink-700 bg-white/50 dark:bg-custom-pink-900/50 focus:outline-none focus:ring-2 focus:ring-custom-pink-500 focus:border-custom-pink-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-custom-pink-900 dark:text-custom-pink-50 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md border border-custom-pink-200 dark:border-custom-pink-700 bg-white/50 dark:bg-custom-pink-900/50 focus:outline-none focus:ring-2 focus:ring-custom-pink-500 focus:border-custom-pink-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-custom-pink-900 dark:text-custom-pink-50 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-custom-pink-200 dark:border-custom-pink-700 bg-white/50 dark:bg-custom-pink-900/50 focus:outline-none focus:ring-2 focus:ring-custom-pink-500 focus:border-custom-pink-500"
                placeholder="Your message..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-custom-pink-500 text-white py-3 px-6 rounded-md hover:bg-custom-pink-600 transition-colors shadow-md hover:shadow-lg"
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