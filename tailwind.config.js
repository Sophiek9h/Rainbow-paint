/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primaryBrown: "#272121",
        secondaryOrange: "#E16428",
        GeryColor: "#363333",
        NightColor: "#F6E9E9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        custom: ['PaintDrops', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
