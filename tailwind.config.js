/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        steelBlue: {
          DEFAULT: "#4682B4",
          600: "#3A76A8",
          700: "#326A9C",
        },
        indianRed: {
          DEFAULT: "#CD5C5C",
          600: "#B55252",
          700: "#9C4747",
        },
        Teal: {
          DEFAULT: "#008080",
          600: "#006767",
          700: "#005555",
        },
      },
    },
  },
  plugins: [],
};
