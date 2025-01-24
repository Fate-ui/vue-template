/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import { createVitePlugins } from './viteConfig/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    //单元测试
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': path.resolve(__dirname, 'types'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  esbuild: {
    pure: ['console.log'], // 删除 console.log
  },
  plugins: createVitePlugins(),
})
