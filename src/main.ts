import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
//原子化css
import 'uno.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
