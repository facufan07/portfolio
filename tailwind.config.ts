import type { Config } from "tailwindcss";

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
        nSuave: "#1E1E1E",
        vMusgo: "#184E36",
        bSuave: "#F8F9FA",
        vSalvia: "#A3B18A",
        vPino: "#12372A",
        bHueso: "#F5F5DC",
        aOscuro: "#2C3E50",
        nCarbon: "#33322E",
        vFluor: "#39FF14",
        mNeon: "#7D1FA0",
        mOscuro: "#2E1B0F",
        vMedio: "#157A6E",
      },
    },
  },
  plugins: [],
} satisfies Config;
