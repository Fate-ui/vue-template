import { createApp } from 'vue'
import '@/style/index.scss'
import { createPinia } from 'pinia'
// https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from '@/router'
import 'normalize.css'
//原子化css
import 'uno.css'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
