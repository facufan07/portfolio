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
        nSuave: "#121212",
        vMusgo: "#1B4D3E",
        bSuave: "#F8F9FA",
        vSalvia: "#A3B18A",
        vPino: "#12372A",
        bHueso: "#F5F5DC",
        nCarbon: "#33322E"
      },
    },
  },
  plugins: [],
} satisfies Config;
