/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstly: "#ffffff",
        secondly: "#000000",
        thirdly: "#9ca3af",
        fourthly: "#6068fa",
        fifthly: "#22c55e",
        sixthly: "#f9fafb",
      },
    },
  },
  plugins: [],
};
