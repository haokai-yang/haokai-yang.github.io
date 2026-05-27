import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/haokai-yang.github.io/',  
  server: {
    host: '127.0.0.1',
  },
})
