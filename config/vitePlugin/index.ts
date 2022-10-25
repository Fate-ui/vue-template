import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { unocssPlugin } from './unocss'

export function createVitePlugins(): PluginOption[] {
  return [
    vue(),
    /*原子化CSS插件*/
    unocssPlugin()
  ]
}
