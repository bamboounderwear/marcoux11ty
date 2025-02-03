/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_site/**/*.{html,js}",
    "./_includes/**/*.{html,njk,js}",
    "./blog/**/*.{html,md,njk}",
    "./projects/**/*.{html,md,njk}",
    "./*.{html,md,njk}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}