import { auth, instance } from '@/config/axios'
import { GenericResponse } from '@/types/responses'

export const loginService = (payload: unknown): Promise<GenericResponse<unknown>> => {
  return auth.post('/account/login', payload)
}

export const signUpService = (payload: unknown): Promise<GenericResponse<unknown>> => {
  return auth.post('/account/signup', payload)
}

export const activationService = (payload: unknown): Promise<GenericResponse<unknown>> => {
  return auth.get('/account/activate/' + payload)
}
