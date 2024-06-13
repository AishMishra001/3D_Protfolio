/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#39035C',
        'custom-black': '#000505',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #60039e 0%, #000505 100%)',
      },
    },
  },
  plugins: [],
}

