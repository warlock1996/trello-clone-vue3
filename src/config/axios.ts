import router from '@/router'
import axios, { Axios, AxiosError } from 'axios'
import Cookies from 'js-cookie'

export const instance: Axios = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const auth: Axios = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const errorHandler = (error: AxiosError): Promise<PromiseRejectedResult> => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        Cookies.remove('token')
        router.push({ name: 'Login' })
        return Promise.reject(new Error('UNAUTHORIZED ACCESS !'))
      case 500:
        return Promise.reject(new Error('SERVER ERROR !'))
      case 404:
        return Promise.reject(new Error('NOT FOUND ERROR !'))
    }
  } else if (error.request) {
    return Promise.reject(new Error('NO RESPONSE RECEIVED'))
  }
  // for any unknown errors
  return Promise.reject(new Error('UNKNOWN ERROR !'))
}
