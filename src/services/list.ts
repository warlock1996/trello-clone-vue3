import { instance } from '@/config/axios'
import { ListModel } from '@/types/entities'
import { GenericResponse } from '@/types/responses'

export const getListsByBoard = (boardId: string): Promise<GenericResponse<Array<ListModel>>> => {
  return instance.get(`/list/index/${boardId}`)
}

export const createListService = (boardId: string, payload: unknown): Promise<GenericResponse<ListModel>> => {
  return instance.post('/list/create/' + boardId, payload)
}

export const updateListService = (
  boardId: string,
  listId: string,
  payload: unknown
): Promise<GenericResponse<ListModel>> => {
  return instance.post(`/list/edit/${boardId}/${listId}`, payload)
}

export const deleteListService = (boardId: string, listId: string): Promise<GenericResponse<ListModel>> => {
  return instance.delete(`/list/delete/${boardId}/${listId}`)
}
