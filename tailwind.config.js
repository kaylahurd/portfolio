/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': {
          50: '#FDF5FC',
          100: '#FBEAF9',
          200: '#F7D5F3',
          300: '#F3C0ED',
          400: '#EFABE7',
          500: '#EBCBE6',
          600: '#E7B6E0',
          700: '#E3A1DA',
          800: '#DF8CD4',
          900: '#DB77CE',
        },
      },
    },
  },
  plugins: [],
} 