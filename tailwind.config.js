/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // not in use, was an experiment
        '7': 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
