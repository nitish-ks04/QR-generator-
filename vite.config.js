import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // allow external access (Docker)
    port: 5173,        // optional but explicit
    watch: {
      usePolling: true // fix hot reload in Docker (Windows)
    }
  }
})