import router from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.scss'
import 'normalize.css'
// 原子化css
import 'uno.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
