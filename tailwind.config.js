/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whiteDark: '#E9E9E9',
        blueLight:'#AFD8F2',
        blueMedium: '#5289B5',
        blueDark: '#1F3541'
      },
      fontFamily: {
        nico: ['Nico', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
