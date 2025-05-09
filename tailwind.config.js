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
        'custom-black': {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
} 