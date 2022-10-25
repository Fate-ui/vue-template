import { defineConfig } from 'vite'
import { createVitePlugins } from './config/vitePlugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: createVitePlugins()
})
