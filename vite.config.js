import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config — dev server binds to 0.0.0.0 so the site can be
// previewed over the network / through a proxy.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
})
