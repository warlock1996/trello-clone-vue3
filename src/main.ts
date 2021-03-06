import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import toast from './plugins/toast'
import store from './store'
import '@/config/rules'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.config.unwrapInjectedRef = true
app.config.globalProperties.$API_URL = process.env.VUE_APP_API_URL
app.config.globalProperties.$STATIC_URL = process.env.VUE_APP_STATIC_URL

app.use(store).use(router).use(axios).use(toast).mount('#app')
