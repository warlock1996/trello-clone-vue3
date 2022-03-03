import { App } from 'vue'
import router from '@/router'
import { AxiosRequestConfig } from 'axios'
import { instance, errorHandler, auth } from '@/config/axios'
import Cookies from 'js-cookie'

export default {
  install: (app: App): void => {
    app.config.globalProperties.$axios = instance
    app.config.globalProperties.$axios_auth = auth

    app.config.globalProperties.$setErrors = (errors: any, actions: any) => {
      Object.keys(errors).forEach((key: string) => {
        actions.setFieldError(key, errors[key].msg)
      })
    }

    instance.defaults.headers.common.Authorization = `Bearer ${Cookies.get('token')}`

    instance.interceptors.response.use((value) => {
      console.log(value.data)
      return value.data
    }, errorHandler)
    auth.interceptors.response.use((value) => {
      console.log(value.data)
      return value.data
    }, errorHandler)

    instance.interceptors.request.use((req: AxiosRequestConfig): AxiosRequestConfig => {
      const controller = new AbortController()
      req.signal = controller.signal
      const token = Cookies.get('token')
      if (!token) {
        controller.abort()
        router.push({ name: 'login' })
        return req
      }

      req.headers.Authorization = `Bearer ${token}`
      return req
    })
  }
}
