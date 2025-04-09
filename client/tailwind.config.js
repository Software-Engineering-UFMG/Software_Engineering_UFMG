/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your source files
    "./public/index.html",         // Include the HTML file if applicable
    "./src/components/**/*.{js,jsx,ts,tsx}" // Add this line for the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
