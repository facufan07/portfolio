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
        // Tema Oscuro Moderno
        darkBg: "#0A0E27",
        darkBgSecondary: "#151B3D",
        darkBgTertiary: "#1E2749",
        darkAccent: "#6366F1",
        darkAccentHover: "#4F46E5",
        darkText: "#F1F5F9",
        darkTextSecondary: "#CBD5E1",

        // Tema Claro Moderno
        lightBg: "#FAFBFC",
        lightBgSecondary: "#FFFFFF",
        lightBgTertiary: "#F1F5F9",
        lightAccent: "#6366F1",
        lightAccentHover: "#4F46E5",
        lightText: "#0F172A",
        lightTextSecondary: "#475569",

        // Colores de acento modernos
        accentCyan: "#06B6D4",
        accentPurple: "#A855F7",
        accentPink: "#EC4899",
        accentEmerald: "#10B981",
        accentAmber: "#F59E0B",

        // Gradientes
        gradientStart: "#6366F1",
        gradientEnd: "#A855F7",

        // Legacy colors (mantener compatibilidad)
        bSuave: "#F1F5F9",
        vSalvia: "#6366F1",
        vPino: "#A855F7",
        bHueso: "#FAFBFC",
        aOscuro: "#1E2749",
        nCarbon: "#0A0E27",
        vFluor: "#4F46E5",
        mNeon: "#A855F7",
        mOscuro: "#151B3D",
        vMedio: "#06B6D4",
        vMusgo: "#10B981",
        nSuave: "#1E2749",
        vSuave: "#EC4899",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 30px rgba(99, 102, 241, 0.6)',
        'modern': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'modern-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-modern': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
