import { BoardType } from '@/types/entities'
import { createStore } from 'vuex'

interface MyStore {
  workspace: {
    createdBoards: Array<BoardType>
    invitedBoards: Array<BoardType>
  }
  currentBoard: BoardType
}

const store = createStore({
  state (): MyStore {
    return {
      workspace: {
        createdBoards: [],
        invitedBoards: []
      },
      currentBoard: { _id: '', name: ' ', createdAt: '', updatedAt: '' }
    }
  },
  mutations: {
    SET_ALL_BOARDS: (state: MyStore, payload) => {
      state.workspace = payload
    },
    SET_CURRENT_BOARD: (state: MyStore, board) => {
      state.currentBoard = board
    },
    ADD_CREATED_BOARD: (state: MyStore, board) => {
      state.workspace.createdBoards.push(board)
    },
    UPDATE_CURRENTBOARD_LIST: (state: MyStore, payload) => {
      state.currentBoard.lists[payload.listId] = payload.data
    },
    DELETE_CURRENTBOARD_LIST: (state: MyStore, listId) => {
      state.currentBoard.lists = state.currentBoard.lists.filter((l) => l._id !== listId)
    },
    ADD_CURRENTBOARD_LIST: (state: MyStore, list) => {
      state.currentBoard.lists.push(list)
    }
  },
  actions: {}
})

export default store
