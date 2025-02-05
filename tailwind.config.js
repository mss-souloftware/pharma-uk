/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primaryText: 'white', // text-white
        secondary: 'gray', // secondary color
        blackBackground: 'black', // background color
        hoverUnderlineColor: '#c62638', // Hover underline color
      } 
      
    },
  },
  plugins: []

};
