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

export const moveTaskService = (
  boardId: string,
  fromListId: string,
  toListId: string,
  taskId: string
): Promise<GenericResponse<undefined>> => {
  return instance.post(`/task/move/${boardId}/${fromListId}/${toListId}/${taskId}`)
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
