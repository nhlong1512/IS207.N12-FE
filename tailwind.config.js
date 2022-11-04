/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        cus: "10px 10px 24px -1px rgba(123, 123, 123, 0.75)",
      },
    },
    fontFamily: {
      Jose: ["Josefin Sans", "sans-serif"],
    },
  },
  important: true,
  plugins: [],
};
