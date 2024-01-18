/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-nutmeg': 'hsl(14, 45%, 36%)',
        'neo-dark-raspberry': 'hsl(332, 51%, 32%)',
        'neo-white': 'hsl(0, 0%, 100%)',
        'neo-rose-white': 'hsl(330, 100%, 98%)',
        'neo-eggshell': 'hsl(30, 54%, 90%)',
        'neo-light-grey': 'hsl(30, 18%, 87%)',
        'neo-wenge-brown': 'hsl(30, 10%, 34%)',
        'neo-dark-charcoal': 'hsl(24, 5%, 18%)',
      },
      fontFamily: {
        'outfit': 'Outfit',
        'young-serif': 'Young Serif',
      },
      screens: {
        'sDt': '1024px',
      },
    },
  },
  plugins: [],
}