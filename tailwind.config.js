/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      coplette: ['Coplette', 'sans-serif'],
    },
    extend: {
      height: {
        // dynamic viewport height unit
        screen: '100dvh',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
        23: 'repeat(23, minmax(0, 1fr))',
        // 23: 'repeat(23, minmax(10px, 1fr))',
      },
      gridTemplateRows: {
        18: 'repeat(18, minmax(0, 1fr))',
        // 18: 'repeat(18, minmax(10px, 1fr))',
      },
    },
  },
  plugins: [],
};
