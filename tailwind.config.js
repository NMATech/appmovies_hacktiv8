/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          primary: "#41B3A2",
          second: "#39998B",
          third: "#0D7C66",
          bg_primary: "#222",
          bg_secondary: "#333",
        },
      },
    },
  },
  plugins: [],
};
