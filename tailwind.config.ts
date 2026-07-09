import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        navy2: "#1a2942",
        gold: "#D4AF37",
        gold2: "#F0CC5A",
        sky: "#38bdf8",
        sky2: "#7dd3fc",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-share-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
