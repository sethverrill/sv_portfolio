import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#dcc6a0",
        deepBlue: "#375A7F",
        dark: "#111",
      },
    },
  },
  plugins: [],
} satisfies Config;
