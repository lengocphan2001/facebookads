/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Optimistic Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

