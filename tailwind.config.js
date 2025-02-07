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
    extend: {
      maxWidth: {
        'content': '896px',
        'wide': '1280px',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}