import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bSuave: "#D4C9C7",
        vSalvia: "#AA7452",
        vPino: "#D2B37C",
        bHueso: "#FFFFD8",
        aOscuro: "#2C3E50",
        nCarbon: "#051822",
        vFluor: "#7C5841",
        mNeon: "#7D1FA0",
        mOscuro: "#2E1B0F",
        vMedio: "#157A6E",
        vMusgo: "#B08145",
        nSuave: "#192233",
        vSuave: "9F6496",
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
