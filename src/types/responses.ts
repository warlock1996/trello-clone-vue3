import { BoardModel } from './entities'

export type GenericResponse<T> = {
  message: string
  error?: boolean
  token?: string
  data?: T
}

export type AllBoardsResponse = {
  createdBoards: Array<BoardModel>
  invitedBoards: Array<BoardModel>
}
