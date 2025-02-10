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
        'section': '6rem',
        'content': '4rem',
      },
      fontSize: {
        // Fluid typography using clamp()
        'h1': ['clamp(2.5rem, 8vw, 5rem)', { 
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }],
        'h2': ['clamp(2rem, 5vw, 3.15rem)', { 
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '700'
        }],
        'h3': ['clamp(1.5rem, 3vw, 2rem)', { 
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '700'
        }],
        'body': ['clamp(1rem, 1.25vw, 1.25rem)', { 
          lineHeight: '1.7'
        }],
        'small': ['clamp(0.75rem, 1vw, 0.875rem)', { 
          lineHeight: '1.5'
        }],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}