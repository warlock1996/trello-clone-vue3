import { BoardModel } from '@/types/entities'
import { reactive } from 'vue'

export interface MyStore {
  workspace: {
    createdBoards: Array<BoardModel>
    invitedBoards: Array<BoardModel>
  }
}

const store: MyStore = reactive({
  workspace: {
    createdBoards: [],
    invitedBoards: []
  }
})

export const useStore = (): MyStore => {
  return store
}
