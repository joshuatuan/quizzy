/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Segoe UI",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },

    extend: {
      colors: {
        darkest: "#343a40",
        dark: "#495057",
        medium: "#ced4da",
        light: "#f1f3f5",
        theme: "#1098ad",
        accent: "#ffa94d",
      },
    },
  },
  plugins: [],
};
