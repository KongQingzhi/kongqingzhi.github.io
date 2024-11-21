/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['selector', '[class="dark"]'],
};
