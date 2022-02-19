import { instance } from '@/config/axios'
import { BoardModel } from '@/types/entities'
import { AllBoardsResponse, GenericResponse } from '@/types/responses'

export const allUserBoardsService = (): Promise<GenericResponse<AllBoardsResponse>> => {
  return instance.get('/board/allUserBoards')
}

export const createBoardService = (payload: unknown): Promise<GenericResponse<BoardModel>> => {
  return instance.post('/board/create', payload)
}

export const getBoardByIdService = (boardId: string): Promise<GenericResponse<BoardModel>> => {
  return instance.get('/board/' + boardId)
}

export const updateBoardService = (boardId: string, payload: unknown): Promise<GenericResponse<BoardModel>> => {
  return instance.post('/board/edit/' + boardId, payload)
}
