import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a56db',
          dark: '#1e429f',
          light: '#60a5fa',
          50: '#f0f9ff',
          100: '#dbeafe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Holiday color theme
        holiday: {
          DEFAULT: '#ff6b35', // Burnt orange - primary color
          dark: '#e85d2c',
          light: '#ff8b60',
          teal: '#2ec4b6', // Secondary color - teal
          tealDark: '#00a896',
          yellow: '#ffce00', // Accent color - bright yellow
          yellowLight: '#ffe16b',
          sand: '#f8f1e0', // Background color
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};
