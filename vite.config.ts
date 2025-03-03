/// <reference types="vitest" />
import path from 'node:path'
import { defineConfig } from 'vite'
import { createVitePlugins } from './viteConfig/plugins'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const dirname = import.meta.dirname
  return {
    test: {
      // 单元测试
      environment: 'happy-dom',
    },
    resolve: {
      alias: {
        '@': path.resolve(dirname, 'src'),
        '#': path.resolve(dirname, 'types'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    esbuild: {
      pure: ['console.log'], // 删除 console.log
    },
    plugins: createVitePlugins(),
  }
})
