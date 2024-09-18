import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy: {
      // string shorthand
      // with options
      '/text': {
        target: 'https://dev.evwrit.ugent.be',
        changeOrigin: true,
      }
    }
  }
})
