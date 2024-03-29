/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '14px',
        'md': '16px', // This is the default
        'lg': '18px',
        'lgxx':'40px'
      },
    },
  },
  plugins: [],
}
