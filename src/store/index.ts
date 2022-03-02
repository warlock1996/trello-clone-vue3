import { BoardType, ListType } from '@/types/entities'
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
      const lIndex = state.currentBoard.lists.findIndex((list: ListType) => list._id === payload.listId)
      if (lIndex >= 0) {
        state.currentBoard.lists[lIndex] = payload.data
      }
    },
    UPDATE_WORKSPACE_BOARDS: (state: MyStore) => {
      const cbIndex = state.workspace.createdBoards.findIndex(
        (board: BoardType) => board._id === state.currentBoard._id
      )
      if (cbIndex >= 0) {
        state.workspace.createdBoards[cbIndex] = state.currentBoard
        return
      }

      const inIndex = state.workspace.invitedBoards.findIndex(
        (board: BoardType) => board._id === state.currentBoard._id
      )
      if (inIndex >= 0) {
        state.workspace.invitedBoards[cbIndex] = state.currentBoard
      }
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
      if (fromListIdIndex >= 0) {
        state.currentBoard.lists[fromListIdIndex].tasks = state.currentBoard.lists[fromListIdIndex].tasks.filter(
          (t) => t !== taskId
        )
      }
      const toListIdIndex = state.currentBoard.lists.findIndex((l) => l._id === toListId)
      if (toListIdIndex >= 0) {
        state.currentBoard.lists[toListIdIndex].tasks = [...state.currentBoard.lists[toListIdIndex].tasks, taskId]
      }
    }
  },
  actions: {}
})

export default store
