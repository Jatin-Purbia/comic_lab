/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/Fonts.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Olive Green Shades
        olive: "#556B2F", // Primary olive
        "olive-dark": "#3E4D28", // Dark olive
        "olive-light": "#6B8E23", // Lighter olive
        "olive-muted": "#4A5E1D", // Muted olive

        // Cream Shades
        cream: "#F5F5DC", // Standard cream
        "cream-light": "#FAF3E0", // Light cream
        "cream-dark": "#EAE0C8", // Darker cream
        "cream-muted": "#DED5B4", // Muted cream
      },
      fontFamily: {
        // Copper fonts
        copper: ['"CopperBold"', 'Copper-Bold'], // Bold style
        copperSemiBold: ['"CopperSemiBold"', 'Copper-SemiBold'], // SemiBold style
        copperRegular: ['"CopperRegular"', 'Copper-Regular'], // Regular style

        // Open Sauce fonts
        openSauce: ['"OpenSauceBold"', 'OpenSauce-Bold'], // Bold style
        openSauceSemiBold: ['"OpenSauceSemiBold"', 'OpenSauce-SemiBold'], // SemiBold style
        openSauceRegular: ['"OpenSauceRegular"', 'OpenSauce-Regular'], // Regular style
        gladione: ['Gladione', 'serif'],

        // New Fonts
        hobo : ['hobo_bt'], 
        gladiora: ['gladiora', 'serif'],
        abhayalibre: ['Abhaya Libre', 'serif'],
    },
      
    },
  },

  
  plugins: [],
};