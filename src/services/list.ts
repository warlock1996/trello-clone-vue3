import { instance } from '@/config/axios'
import { ListType } from '@/types/entities'
import { GenericResponse } from '@/types/responses'

export const getListsByBoard = (boardId: string): Promise<GenericResponse<Array<ListType>>> => {
  return instance.get(`/list/index/${boardId}`)
}

export const createListService = (boardId: string, payload: unknown): Promise<GenericResponse<ListType>> => {
  return instance.post('/list/create/' + boardId, payload)
}

export const updateListService = (
  boardId: string,
  listId: string,
  payload: unknown
): Promise<GenericResponse<ListType>> => {
  return instance.post(`/list/edit/${boardId}/${listId}`, payload)
}

export const deleteListService = (boardId: string, listId: string): Promise<GenericResponse<ListType>> => {
  return instance.delete(`/list/delete/${boardId}/${listId}`)
}
