import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        downy: {
          50: "#f2fbf9",
          100: "#d2f5ee",
          200: "#a6e9dd",
          300: "#6dd6c7",
          400: "#44bdb0",
          500: "#2aa297",
          600: "#1f827a",
          700: "#1d6863",
          800: "#1b5451",
          900: "#1b4644",
          950: "#0a2928",
        },
      },
    },
  },
});
