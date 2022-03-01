import { instance } from '@/config/axios'
import { TaskType } from '@/types/entities'
import { GenericResponse } from '@/types/responses'

export const indexTaskService = (
  boardId: string,
  listId: string,
  taskId: string
): Promise<GenericResponse<TaskType>> => {
  return instance.get(`/task/index/${boardId}/${listId}/${taskId}`)
}

export const indexTasksByListService = (boardId: string, listId: string): Promise<GenericResponse<Array<TaskType>>> => {
  return instance.get(`/task/indexTasksByList/${boardId}/${listId}`)
}

export const createTaskService = (
  boardId: string,
  listId: string,
  payload: unknown,
  taskId?: string
): Promise<GenericResponse<TaskType>> => {
  return instance.post(`/task/create/${boardId}/${listId}/${taskId || ''}`, payload)
}

export const editTaskService = (
  boardId: string,
  listId: string,
  taskId: string,
  payload: unknown,
  subtaskId?: string
): Promise<GenericResponse<TaskType>> => {
  return instance.post(`/task/edit/${boardId}/${listId}/${taskId}/${subtaskId || ''}`, payload)
}

export const deleteTaskService = (
  boardId: string,
  listId: string,
  taskId: string,
  subtaskId?: string
): Promise<GenericResponse<TaskType>> => {
  return instance.delete(`/task/delete/${boardId}/${listId}/${taskId}/${subtaskId || ''}`)
}

export const moveTaskService = (
  fromBoardId: string,
  toBoardId: string,
  fromListId: string,
  toListId: string,
  taskId: string
): Promise<GenericResponse<undefined>> => {
  return instance.post(`/task/move/${fromBoardId}/${toBoardId}/${fromListId}/${toListId}/${taskId}`)
}

export const copyTaskService = (
  fromBoardId: string,
  toBoardId: string,
  fromListId: string,
  toListId: string,
  fromTaskId: string,
  payload: unknown
): Promise<GenericResponse<undefined>> => {
  return instance.post(`/task/copy/${fromBoardId}/${toBoardId}/${fromListId}/${toListId}/${fromTaskId}`, payload)
}

export const uploadTaskAttachmentService = (
  boardId: string,
  listId: string,
  taskId: string,
  payload: FormData
): Promise<GenericResponse<TaskType>> => {
  return instance.post(`/task/upload/${boardId}/${listId}/${taskId}`, payload)
}

export const makeCoverTaskAttachmentService = (
  boardId: string,
  listId: string,
  taskId: string,
  attachmentId: string,
  isCover: boolean
): Promise<GenericResponse<TaskType>> => {
  return instance.post(`/task/attachment/makecover/${boardId}/${listId}/${taskId}/${attachmentId}`, {
    isCover
  })
}

export const createTaskCommentService = (
  boardId: string,
  listId: string,
  taskId: string,
  payload: unknown
): Promise<GenericResponse<TaskType>> => {
  return instance.post(`/task/comment/${boardId}/${listId}/${taskId}`, payload)
}
