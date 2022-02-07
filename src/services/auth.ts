import axios from '@/config/axios'
import { LoginResponse, SignUpResponse } from '@/types/responses'

export const loginService = (payload: unknown) : Promise<LoginResponse> => {
  return axios.post('/account/login', payload).then(response => response.data)
}

export const signUpService = (payload: unknown) : Promise<SignUpResponse> => {
  return axios.post('/account/signup', payload).then(response => response.data)
}
