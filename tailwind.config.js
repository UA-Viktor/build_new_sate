/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "1120px", xl: "1200px" },
    },
    extend: {
      colors: {
        graphite: "#0E0F12",
        violet: "#8A5CF6",
        aqua: "#22D3EE",
        light: "#F5F7FB",
        brand: {
          primary: "#8A5CF6",
          secondary: "#22D3EE",
          dark: "#0E0F12",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Clash Display", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2, 8, 23, 0.08)",
        glass: "0 6px 20px rgba(2, 8, 23, 0.06)",
      },
    },
  },
  plugins: [],
};
