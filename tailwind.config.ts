import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Dark mode'u class bazlı olarak aktifleştiriyoruz
  theme: {
    extend: {
      colors: {
        // Light mode renkleri
        light: {
          background: '#ffffff',
          text: '#1f2937',
          primary: '#f3f4f6',
          secondary: '#e5e7eb',
        },
        // Dark mode renkleri
        dark: {
          background: '#1f2937',
          text: '#f3f4f6',
          primary: '#374151',
          secondary: '#4b5563',
        }
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
