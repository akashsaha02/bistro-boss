/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yolo: '#D99904',
        dark: {
          1: '#151515',
          2: '#1F2937',
          3:'#737373'
        },
        offwhite: '#F3F3F3',
        beige:'#D1A054'
      },
    },
  },
  plugins: [daisyui],
}