/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)',
        'dark-primary': 'var(--color-dark-primary)',
        'dark-secondary': 'var(--color-dark-secondary)',
        'gray-light': 'var(--color-gray-light)',
        'new-item': 'var(--color-new-item)',
      },
      fontFamily: {
        'font': 'var(--font-font)',
      },
    },
  },
  plugins: [],
} 