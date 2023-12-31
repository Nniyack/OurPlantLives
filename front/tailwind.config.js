/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-ui': '#2F5233',
        'green-lime-ui': '#76B947',
        'spearmint': '#94C973',
        'green-kelly-ui': '#B1D8B7',
        'green-dark': '#44675c',
        'green-design-1': '#42928C',
        'green-design-2': '#8CB369',
        'red-design-1': '#BC4B51',
        'red-salmon-design-1': '#D66C5F',
      }
    },
  },
  plugins: [],
}

