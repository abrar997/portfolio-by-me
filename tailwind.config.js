/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "public/index.html"],
  content: [],
  theme: {
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        sidebar: "#F1F0F5",
        main: "#45567A",
      },
    },
  },
  plugins: [],
};
