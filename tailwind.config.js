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
      backgroundImage: {
        'banner1': "url('images/MoriiBanner1.jpeg')",
        'banner2': "url('images/MoriiBanner2.jpg')",
        'banner3': "url('images/MoriiBanner3.jpg')",
        'banner4': "url('images/MoriiBanner4.jpeg')",
        'banner5': "url('images/MoriiBanner5.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    fontFamily: {
      Jose: ["Josefin Sans", "sans-serif"],
    },
  },
  important: true,
  plugins: [],
};
