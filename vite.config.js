import { fileURLToPath, URL } from 'node:url'
import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: process.env.APP_PORT,
    proxy: {
      '/api': {
        target: process.env.API_GATEWAY,
        changeOrigin: true,
      },
    },
  },
  define: {
    meta: {
      env: {
        API_GATEWAY: process.env.API_GATEWAY
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
