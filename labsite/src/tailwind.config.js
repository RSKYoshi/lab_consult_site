/** @type {DefaultColors} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "../index.html”, “/src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      white: colors.slate[50],
      dark: colors.slate[700]
    },
    extend: {
      backgroundImage: {
        image1: "Users/ryanyoshimura/IdeaProjects/lab_consult_site/labsite/src/img/waikiki_beach.jpeg",
      },
    },
  },
  plugins: [],
}

