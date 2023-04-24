/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Lato': [ 'Lato','Helvetica Neue','helvetica', 'sans-serif'],
      'Crunchy': ['Segoe UI','Helvetica Neue', 'helvetica', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

