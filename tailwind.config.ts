import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3eb",
        ink: "#1f1f1d",
        accent: "#7B1587"
      },
      fontFamily: {
        sans: [
          "Avenir Next Condensed Custom",
          "Avenir Next Condensed",
          "AvenirNextCondensed",
          "Avenir Next",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "Avenir Next Condensed Custom",
          "Avenir Next Condensed",
          "AvenirNextCondensed",
          "Avenir Next",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      letterSpacing: {
        editorial: "0.08em"
      }
    }
  },
  plugins: []
};

export default config;
