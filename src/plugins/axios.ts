import { App } from 'vue'
import config from '@/config/axios'

export default {
  install: (app: App): void => {
    app.config.globalProperties.$axios = config
  }
}
