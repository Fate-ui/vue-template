import { defineConfig } from 'vite'
import { createVitePlugins } from './config/vitePlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins()
})
