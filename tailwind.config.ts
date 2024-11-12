import type { Config } from "tailwindcss";


import generated from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
          roughLove: ['rough-love', 'sans-serif'],
          modernLoveRough: ['modern-love-rough', 'sans-serif'],
          modernLoveGrunge: ['modern-love-grunge', 'sans-serif'],
          modernLoveCaps: ['modern-love-caps', 'sans-serif'],
          modernLoveRegular: ['modern-love', 'sans-serif']
      }
    },
  },
  plugins: [
    generated
  ],
} satisfies Config;
