import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        sand: "#F7F2E9",
        clay: "#C96F4A",
        saffron: "#D6A247",
        emerald: "#1F7A63",
        cobalt: "#1F4FA3",
        ink: "#151515"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(21,21,21,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
