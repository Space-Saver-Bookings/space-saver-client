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
        // not in use, was an experiment
        7: 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
