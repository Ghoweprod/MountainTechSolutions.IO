import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for custom domain, or '/repo-name/' for github.io
  build: {
    outDir: 'dist',
  },
})
