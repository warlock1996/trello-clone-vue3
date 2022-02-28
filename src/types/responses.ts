import { BoardType } from './entities'

export type GenericResponse<T> = {
  error: boolean
  message?: string
  token?: string
  data?: T
}

export type AllBoardsResponse = {
  createdBoards: Array<BoardType>
  invitedBoards: Array<BoardType>
}
