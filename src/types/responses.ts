export type GenericResponse<T> = {
  message: string
  error?: boolean
  token?: string
  data?: T
}

export type AllBoardsResponse = {
  createdBoards: Record<string, unknown>
  invitedBoards: Record<string, unknown>
}
