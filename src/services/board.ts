import { instance } from '@/config/axios'
import { BoardType, MemberType } from '@/types/entities'
import { AllBoardsResponse, GenericResponse } from '@/types/responses'

export const searchMemberService = (boardId: string, search: string): Promise<GenericResponse<MemberType>> => {
  return instance.get(`/board/${boardId}/search-members?search=${search}`)
}

export const inviteMemberService = (boardId: string, emails: Array<string>): Promise<GenericResponse<undefined>> => {
  return instance.post(`/board/invite/${boardId}`, {
    emails
  })
}

export const allUserBoardsService = (): Promise<GenericResponse<AllBoardsResponse>> => {
  return instance.get('/board/allUserBoards')
}

export const createBoardService = (payload: unknown): Promise<GenericResponse<BoardType>> => {
  return instance.post('/board/create', payload)
}

export const getBoardByIdService = (boardId: string): Promise<GenericResponse<BoardType>> => {
  return instance.get('/board/' + boardId)
}

export const updateBoardService = (boardId: string, payload: unknown): Promise<GenericResponse<BoardType>> => {
  return instance.post('/board/edit/' + boardId, payload)
}
