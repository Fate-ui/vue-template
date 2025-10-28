# Vue3 + TypeScript + Vite 项目模板

一个开箱即用的 Vue3 项目模板，集成了现代化的开发工具和最佳实践。

注意：仓库没有引入任何 UI 库，如需使用，请自行引入。原因是：仓库的定位是希望不论PC端还是移动端都能用来作为基础架构，而不同场景UI库可能不同，因此不内置UI库。

## 技术栈

- **核心框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **包管理器**: pnpm

## 功能特性

### 1. 样式方案

- **[UnoCSS](https://github.com/unocss/unocss)** - 原子化 CSS 引擎
  - 支持属性化模式（Attributify）
  - 支持图标预设（Icons）
  - px单位可省略（text-14 = text-14px）
- **PostCSS** - px 转 viewport 插件（基准宽度：1920px）
- **normalize.css** - CSS 重置样式
- **自定义 reset.scss** - 全局重置样式

### 2. 代码规范

- **ESLint** - 代码质量检查
  - 基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- **Stylelint** - 样式代码检查
  - 支持 Vue/SCSS/CSS
  - SCSS 推荐配置
  - 属性排序（Recess Order）

### 3. 路由与状态管理

- **Vue Router 4.6.3** - 官方路由管理
- **Pinia 3.0.3** - 官方状态管理
  - TypeScript 完美支持
  - 轻量级、模块化

### 4. HTTP 请求

- **Axios 1.13.0**
  - 处理请求竞态问题，自动取消重复请求

### 5. 自动化导入

- **unplugin-auto-import** - 自动导入 API
  - Vue 3 Composition API
  - Vue Router API
  - Element Plus 组件（可选）
- **unplugin-vue-components** - 自动注册组件
  - Element Plus 组件按需导入

### 6. 开发体验

- **Vue DevTools** - Vue 官方开发者工具
  - 自动检测编辑器（WebStorm/VSCode）
- **vite-plugin-restart** - 配置文件修改自动重启
- **TypeScript 路径别名**
  - `@/*` → `src/*`
  - `#/*` → `types/*`

### 7. 构建优化

- **rollup-plugin-visualizer** - 打包体积分析
  - 生成 stats.html 可视化报告
- **代码分割策略**
  - Vue/Vue Router 单独打包
  - Element Plus 单独打包
  - 静态资源分类输出（js/css/img/media/fonts）
- **生产环境优化**
  - 自动删除 console.log
  - SourceMap 生成
  - 兼容 Chrome 65+

### 8. 测试支持

- **Vitest** - 单元测试框架
  - 基于 Vite 的极速测试
  - Coverage 覆盖率报告
  - Happy DOM 环境

### 9. 工具集成

- **mitt** - 事件总线
  - 轻量级事件发布/订阅

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

### 预览

```bash
pnpm preview
```

### 代码检查

```bash
# ESLint 检查
pnpm lint

# ESLint 自动修复
pnpm lint:fix

# Stylelint 检查并修复
pnpm style
```

### 测试

```bash
pnpm test
```

## 项目结构

```
vue-template/
├── src/
│   ├── assets/          # 静态资源
│   ├── router/          # 路由配置
│   ├── store/           # Pinia 状态管理
│   ├── style/           # 全局样式
│   │   ├── index.scss   # 样式入口
│   │   └── reset.scss   # 重置样式
│   ├── utils/           # 工具函数
│   │   ├── request.ts   # Axios 封装
│   │   └── event/       # 事件总线
│   ├── views/           # 页面组件
│   ├── App.vue          # 根组件
│   └── main.ts          # 应用入口
├── viteConfig/          # Vite 配置模块化
│   ├── build.ts         # 构建配置
│   └── plugins/         # 插件配置
├── .stylelintrc.js      # Stylelint 配置
├── eslint.config.ts     # ESLint 配置
├── postcss.config.js    # PostCSS 配置
├── tsconfig.json        # TypeScript 配置
├── uno.config.ts        # UnoCSS 配置
└── vite.config.ts       # Vite 配置
```

## 许可证

MIT License
