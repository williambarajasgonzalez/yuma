/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        custom:"32rem",
        custom2:"40rem",
      }
    },
  },
  plugins: [],
}

