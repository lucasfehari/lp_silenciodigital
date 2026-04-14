import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3C4C3B", // Verde Militar
        "secondary": "#D8C9A9", // Bege
        "marrom": "#4E342E",
        "grafite": "#3A3A3A",
        "preto": "#000000",
        "surface": "#0F0F0F",
        "surface-variant": "#1A1A1A",
        "on-surface": "#E5E2E1",
        "on-surface-variant": "#A0A0A0",
        "outline": "#2A2A2A"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
        "cursive": ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
  content: []
} satisfies Partial<Config>

