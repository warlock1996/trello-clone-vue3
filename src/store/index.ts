import { BoardModel } from '@/types/entities'
import { reactive } from 'vue'

export interface MyStore {
  workspace: {
    createdBoards: Array<BoardModel>
    invitedBoards: Array<BoardModel>
  }
  currentBoard: BoardModel
}

const store: MyStore = reactive({
  workspace: {
    createdBoards: [],
    invitedBoards: []
  },
  currentBoard: {
    _id: '',
    name: '',
    createdAt: '',
    updatedAt: ''
  }
})

export const useStore = (): MyStore => {
  return store
}
