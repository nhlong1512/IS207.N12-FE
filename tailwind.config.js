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
        banner1: "url('images/banner/MoriiBanner1.jpeg')",
        banner2: "url('images/banner/MoriiBanner2.jpg')",
        banner3: "url('images/banner/MoriiBanner3.jpg')",
        banner4: "url('images/banner/MoriiBanner4.jpeg')",
        banner5: "url('images/banner/MoriiBanner5.jpg')",
        contact: "url('images/contact/Contact.jpeg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    fontFamily: {
      Jose: ["Josefin Sans", "sans-serif"],
      SignIn: ["Montserrat", "sans-serif"],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  important: true,
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
