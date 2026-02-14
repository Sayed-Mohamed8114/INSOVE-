// just a description in the code to tell the js file what is this file
/** @type {import {'tailwindcss'}.Config} */

module.exports = {
  // from this tailwind will go to find the classes from it 
  content: ["./index.html", "./src/**/*.{js}"],
  // here you can add fonts spacing color or any customize like this in your code to use it later
  theme: {
    // mean add to the already setting without remove it 
    extend: {}
  },
  plugins: []
};