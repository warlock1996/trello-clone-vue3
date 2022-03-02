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
    setRecentBoard (board: Record<string, string>) {
      const boardIds = JSON.parse(localStorage.getItem('recentBoards'))
      if (boardIds) {
        if (boardIds.find((b: BoardType) => b._id === board._id)) return
        if (boardIds.length < 4) boardIds.unshift(board)
        else {
          boardIds.pop()
          boardIds.unshift(board)
        }
        localStorage.setItem('recentBoards', JSON.stringify(boardIds))
        return
      }
      localStorage.setItem('recentBoards', JSON.stringify([board]))
    },
    async getBoardById (id: string) {
      const res = await getBoardByIdService(id)
      if (!res.error) {
        this.$store.commit('SET_CURRENT_BOARD', res.data)
        if (!res.data.starred) {
          this.setRecentBoard({ _id: id, name: res.data.name, starred: res.data.starred })
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
  height: calc(100% - 45px);
  overflow: auto;
  &__row {
    position: relative;
    height: 100%;
    &__view {
      width: fit-content;
      height: 100%;
      overflow: auto;
      &__row {
        height: 100%;
        &__nav {
          flex-grow: 0;
        }
        &__container {
          height: 100%;
          width: fit-content;
          overflow: auto;
        }
      }
    }
  }
}
</style>
