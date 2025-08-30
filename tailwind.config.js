/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "3rem", xl: "4rem" },
      screens: { lg: "1120px", xl: "1200px", "2xl": "1360px" },
    },
    extend: {
      colors: {
        brand: { primary: "#8A5CF6", secondary: "#22D3EE", dark: "#0E0F12" },
      },
    },
  },
  plugins: [],
};
