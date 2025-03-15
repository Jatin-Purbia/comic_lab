/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
    },
  },
  plugins: [],
};
