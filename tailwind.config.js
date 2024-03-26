/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //line box
        'LimeGreen': 'hsl(163, 72%, 41%)',
        'BrightRed': 'hsl(356, 69%, 56%)',
      
        // Toggle
          // dark
        "Toggle1":"hsl(210, 78%, 56%)",
        "Toggle2":"hsl(146, 68%, 55%)",
          // light
        "Toggle": "hsl(230, 22%, 74%)",

        //dark theme
        //  (BG)
        'VeryDarkBlue': 'hsl(230, 17%, 14%)',
        // (Top BG Pattern)
        'VeryDarkBlue': 'hsl(232, 19%, 15%)',
        // (Card BG)
        'DarkDesaturatedBlue': 'hsl(228, 28%, 20%)',
        //  (Text)
        'DesaturatedBlue': 'hsl(228, 34%, 66%)',
        'White': 'hsl(0, 0%, 100%)',

        // Light theme
        //  (Top BG Pattern)
        'VeryPaleBlue': 'hsl(225, 100%, 98%)',
        //hover  (Card BG)
        'LightGrayishBlue': 'hsl(227, 47%, 96%)',
        //  (Text)
        'DarkGrayishBlue': ' hsl(228, 12%, 44%)',
        'VeryDarkBlue': 'hsl(230, 17%, 14%)'

      }
    },
  },
  plugins: [],
}