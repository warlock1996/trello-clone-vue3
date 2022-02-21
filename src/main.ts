import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import toast from './plugins/toast'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(store).use(router).use(axios).use(toast).mount('#app')
