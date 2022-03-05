import { BoardType } from './entities'

export interface LocalUserDataType {
  user: string
  recentBoards: Array<BoardType>
}
