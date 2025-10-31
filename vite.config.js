import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Set `base` for GitHub Pages so assets resolve under /susara-electronics/
export default defineConfig({
  base: '/susara-electronics/',
  plugins: [react(), tailwindcss()],
})
