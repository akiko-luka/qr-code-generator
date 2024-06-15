/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#222222",
        light: "#f9f9f9",
      },
      fontFamily: {
        "main-font": ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
