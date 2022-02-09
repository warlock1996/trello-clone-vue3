import { instance } from '@/config/axios'
import { AllBoardsResponse, GenericResponse } from '@/types/responses'

export const allUserBoardsService = (): Promise<GenericResponse<AllBoardsResponse>> => {
  return instance.get('/board/allUserBoards')
}

export const createBoardService = (payload: unknown): Promise<GenericResponse<unknown>> => {
  return instance.post('/board/create', payload)
}
