/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        boxBg: "0 5px 60px -12px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
