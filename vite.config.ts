import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['!**/node_modules/your-package-name/**'],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '', // Use this if you need to inject global variables or mixins
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname,
          './src'),
    },
  },
})
