/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
           'proxima': ['proxima-regular'],
           'proximathin': ['proxima-thin'],
           'proximabold': ['proxima-bold'],
           'proximaxbold': ['proxima-xbold'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
   
  ],
}

