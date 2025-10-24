import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://login-backend-2-eq1g.onrender.com",
        // https://login-backend-2-eq1g.onrender.com
        changeOrigin: true,
        secure: true, // your backend is HTTPS
      },
    },
  },
});