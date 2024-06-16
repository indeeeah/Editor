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
      background: {
        beige: '#F2EDE7',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
