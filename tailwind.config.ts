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
        "spin-shadow": "spin-shadow 1.4s linear infinite",
        "vroom-yellow": "vroom-yellow 10s linear infinite",
        "jello-horizontal" : "jello-horizontal 0.9s both",
        "push-on": "transform 0.3s ease"
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
          "push-on": { transform: "translateX(10px)"}
        },
        "vroom-yellow": {
          "0%": { right: "0%" },
          "100%": { right: "120%" }
        },
        "jello-horizontal": {
          "0%": { transform: "scale3d(1, 1, 1)"},
          "30%": { transform: "scale3d(1.25, 0.75, 1)"},
          "40%": { transform: "scale3d(0.75, 1.25, 1)"},
          "50%": { transform: "scale3d(1.15, 0.85, 1)"},
          "65%": { transform: "scale3d(0.95, 1.05, 1)"},
          "75%": { transform : "scale3d(1.05, 0.95, 1)"},
          "100%": { transform: "scale3d(1, 1, 1)"},
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
