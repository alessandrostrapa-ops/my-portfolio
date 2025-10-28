// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Agregá esto para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/' // <--- exacto al nombre del repo
})
