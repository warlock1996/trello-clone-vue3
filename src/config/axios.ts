import router from '@/router'
import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

export const instance: Axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

export const auth: Axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL
  // validateStatus: function (status) {
  //   // return (status >= 200 && status < 300) || status === 422
  // }
})

export const errorHandler = (error: AxiosError): Promise<PromiseRejectedResult> => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        Cookies.remove('token')
        router.push({ name: 'login' })
        console.log(new Error('UNAUTHORIZED ACCESS !'))
        break
      case 500:
        console.error(new Error('SERVER ERROR !'))
        break
      case 404:
        console.error(new Error('NOT FOUND ERROR !'))
        break
      case 422:
        console.error('INVALID PAYLOAD')
        return Promise.reject(error.response.data)
    }
  } else if (error.request) {
    return Promise.reject(new Error('NO RESPONSE RECEIVED'))
  }
}
