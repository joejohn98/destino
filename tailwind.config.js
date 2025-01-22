/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1a365d",
        },
        secondary: "#64748b",
        accent: "#0d9488",
      },
    },
  },
  plugins: [],
};
