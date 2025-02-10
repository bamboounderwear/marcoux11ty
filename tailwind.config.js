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
        'wide': '1440px',
      },
      spacing: {
        'section': '6rem', // 96px
        'content': '4rem', // 64px
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}