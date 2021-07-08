const colors = require('tailwindcss/colors')


module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        blue: colors.lightBlue
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: "class"
}
