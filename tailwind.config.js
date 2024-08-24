/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      beige: '#F2EDE7',
      white: '#FFFFFF',
      brightBlue: {
        50: '#ecf4ff',
        100: '#dbeafe',
        400: '#5b8ee2',
        500: '#3b82f6',
        600: '#2563eb',
        800: '#1e40af',
      },
      blue: '#2B2B2B',
      gray: {
        primary: '#e5e7eb',
        secondary: '#f3f4f6',
        50: '#f9fafb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
