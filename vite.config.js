import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './' // Serve assets with relative paths (fixes blank page on Vercel for some setups)
})
