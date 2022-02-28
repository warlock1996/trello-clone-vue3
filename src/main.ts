import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import toast from './plugins/toast'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

// eslint-disable-next-line
// @ts-ignore
import { Dropdown } from 'bootstrap/dist/js/bootstrap.esm'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.config.globalProperties.$dropdown = Dropdown
app.use(store).use(router).use(axios).use(toast).mount('#app')
