import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-shadow": "spin-shadow 1.5s linear infinite",
        "vroom-yellow": "vroom-yellow 10s linear infinite"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "spin-shadow": {
          "0%": { boxShadow: "0 0 10px 2px rgba(6, 182, 212, 0.8)" },
          "25%": { boxShadow: "5px 5px 10px 2px rgba(6, 182, 212, 0.8)" },
          "50%": { boxShadow: "0 10px 10px 2px rgba(6, 182, 212, 0.8)" },
          "75%": { boxShadow: "-5px 5px 10px 2px rgba(6, 182, 212, 0.8)" },
          "100%": { boxShadow: "0 0 10px 2px rgba(6, 182, 212, 0.8)" },
        },
        "vroom-yellow": {
          "0%": { right: "0%" },
          "100%": { right: "120%" }
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
