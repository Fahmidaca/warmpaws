// Vite configuration with Tailwind CSS integration
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: false, // Disable PostCSS to avoid conflicts
  },
})
