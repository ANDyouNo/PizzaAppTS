/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          default: "#FE724C",
          light: "#000000",
          dark: "#df6442",
        },
        secondary: "#5B5B5E",
        separator: "#d4d6e0",
      },
    },
  },
  plugins: [],
};
