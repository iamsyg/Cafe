/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FFCF9D',  
        peachLight: '#FFB26F',
      },
    },
  },
  plugins: [],
}