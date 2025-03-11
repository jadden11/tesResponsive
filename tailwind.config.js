/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        afacad: ["Afacad Flux", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
