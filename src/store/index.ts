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
    RESET_CURRENT_BOARD: (state: MyStore) => {
      state.currentBoard = { _id: '', name: ' ', createdAt: '', updatedAt: '' }
    },
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
    },
    COPY_CURRENTBOARD_LIST_TASK: (state: MyStore, { toListId, taskId }) => {
      const toListIdIndex = state.currentBoard.lists.findIndex((l) => l._id === toListId)
      state.currentBoard.lists[toListIdIndex].tasks = [...state.currentBoard.lists[toListIdIndex].tasks, taskId]
    },
    MOVE_CURRENTBOARD_LIST_TASK: (state: MyStore, { fromListId, toListId, taskId }) => {
      const fromListIdIndex = state.currentBoard.lists.findIndex((l) => l._id === fromListId)
      const toListIdIndex = state.currentBoard.lists.findIndex((l) => l._id === toListId)

      state.currentBoard.lists[fromListIdIndex].tasks = state.currentBoard.lists[fromListIdIndex].tasks.filter(
        (t) => t !== taskId
      )
      state.currentBoard.lists[toListIdIndex].tasks = [...state.currentBoard.lists[toListIdIndex].tasks, taskId]
    }
  },
  actions: {}
})

export default store
