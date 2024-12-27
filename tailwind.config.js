/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: 'white', // text-white
        secondary: 'gray', // secondary color
        blackBackground: 'black', // background color
        hoverUnderlineColor: '#c62638', // Hover underline color
      },
      screens: {
        xs: '360px',  // Ultra-small devices
        sm: '480px',  // Small devices
        md: '640px',  // Medium devices
        lg: '768px',  // Large devices
        xl: '1024px', // Extra-large devices
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
