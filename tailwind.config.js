/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        primary: '#34d0b2',
        info: '#008aff',
        warning: '#ffc933',
        danger: '#f75652',
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[class="dark"]'],
};
