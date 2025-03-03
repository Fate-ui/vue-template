import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import VueDevTools from 'vite-plugin-vue-devtools'
import { AutoImportDeps } from './autoImport'
import { AutoRegistryComponents } from './component'
import { ConfigRestartPlugin } from './restart'
import { unocssPlugin } from './unocss'

const isWebStorm = !!process.env.WebStorm
export function createVitePlugins(): PluginOption[] {
  return [
    VueDevTools({ launchEditor: isWebStorm ? 'webstorm' : 'code' }),
    vue(),
    /* 原子化CSS插件 */
    unocssPlugin(),
    /* 打包分析 */
    visualizer(),
    // 自动按需引入组件
    AutoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
    /* 监听配置文件改动重启 */
    ConfigRestartPlugin(),
  ]
}
