// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true    // ensures it binds to 127.0.0.1 as well as localhost
  }
})
