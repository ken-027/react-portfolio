/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#033628',
        tertiary: '#3BB493',
      },
      fontFamily: {
        Lato: ['Lato', 'serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
