import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3C4C3B", // Military Green
        "secondary": "#D8C9A9", // Beige Highlight
        "surface": "#0F0F0F",
        "surface-variant": "#1A1A1A",
        "on-surface": "#E5E2E1",
        "on-surface-variant": "#A0A0A0",
        "outline": "#2A2A2A"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
  content: []
} satisfies Partial<Config>

