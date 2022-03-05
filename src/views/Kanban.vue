<template>
  <div class="container-fluid kanban p-0">
    <div class="row kanban__row g-0">
      <div class="col-auto kanban__row__sidebar">
        <kanban-sider :show="siderState" @toggle-sider="toggleSider">
          <kanban-sider-menu :show="siderState" @toggle-sider="toggleSider" />
        </kanban-sider>
      </div>
      <div class="col kanban__row__view">
        <div class="row g-0 flex-column kanban__row__view__row">
          <div class="col kanban__row__view__row__nav">
            <kanban-navigation />
          </div>
          <div class="col kanban__row__view__row__container">
            <kanban-task-list-container />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KanbanNavigation from '@/components/KanbanNavigation.vue'
import KanbanSider from '@/components/KanbanSider.vue'
import KanbanSiderMenu from '@/components/KanbanSiderMenu.vue'
import KanbanTaskListContainer from '@/components/KanbanTaskListContainer.vue'
import { getBoardByIdService } from '@/services/board'
import { BoardType } from '@/types/entities'
import { LocalUserDataType } from '@/types/misc'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'
export default defineComponent({
  components: {
    KanbanNavigation,
    KanbanSider,
    KanbanSiderMenu,
    KanbanTaskListContainer
  },
  data () {
    return {
      siderState: false
    }
  },
  provide () {
    return {
      getBoardById: this.getBoardById
    }
  },
  inject: ['getRecentBoards'],
  mounted () {
    this.siderState = localStorage.getItem('kanbanSiderMenuState') === 'true'
  },
  beforeUnmount () {
    this.$store.commit('RESET_CURRENT_BOARD')
  },
  watch: {
    '$route.params.boardId': {
      handler: function (id) {
        if (id) {
          this.getBoardById(id)
        }
      },
      immediate: true
    }
  },
  methods: {
    setRecentBoard (board: BoardType) {
      try {
        const user = jwtDecode(Cookies.get('token')) as Record<string, string>
        const localUserData: Array<LocalUserDataType> = JSON.parse(localStorage.getItem('localUserData'))
        if (!localUserData) {
          localStorage.setItem(
            'localUserData',
            JSON.stringify([
              {
                user: user.email,
                recentBoards: [board]
              }
            ])
          )
          return
        }
        const userIndex = localUserData.findIndex((data) => data.user === user.email)
        if (userIndex === -1) {
          localStorage.setItem(
            'localUserData',
            JSON.stringify([
              ...localUserData,
              {
                user: user.email,
                recentBoards: [board]
              }
            ])
          )
          return
        }
        const currentUserRecentBoards = localUserData[userIndex].recentBoards

        if (currentUserRecentBoards.find((cb) => cb._id === board._id)) return

        if (currentUserRecentBoards.length === 4) currentUserRecentBoards.pop()
        currentUserRecentBoards.unshift(board)

        localUserData[userIndex].recentBoards = currentUserRecentBoards

        localStorage.setItem('localUserData', JSON.stringify(localUserData))
      } catch (error) {
        console.error(error)
      } finally {
      }
    },
    async getBoardById (id: string) {
      const res = await getBoardByIdService(id)
      if (!res.error) {
        this.$store.commit('SET_CURRENT_BOARD', res.data)
        if (!res.data.starred) {
          this.setRecentBoard({ _id: id, name: res.data.name, starred: res.data.starred })
          this.getRecentBoards()
        }
      }
    },
    toggleSider () {
      this.siderState = !this.siderState
      localStorage.setItem('kanbanSiderMenuState', this.siderState)
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban {
  background: #6a8ea2;
  height: calc(100vh - 45px);
  overflow: auto;
  &__row {
    &__sidebar {
      max-height: 100%;
    }
    height: 100%;
    &__view {
      width: fit-content;
      overflow: auto;
      &__row {
        height: calc(100vh - 45px);
        &__nav {
          flex-grow: 0;
        }
        &__container {
          width: fit-content;
          overflow-x: auto;
          flex-grow: 1;
          &::-webkit-scrollbar {
            border-radius: 5px;
            background: #091e4214;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background: gray;
          }
        }
      }
    }
  }
}
</style>
