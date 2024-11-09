/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#590d22",
        secondary: "#ffb3c1",
        background: "#fff0f3",
        highlight: "#c9184a",
      },
    },
  },
  plugins: [],
};
