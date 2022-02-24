<template>
  <div class="container-fluid kanban p-0">
    <div class="row kanban__row g-0">
      <div class="col-auto kanban__row__col-menu">
        <kanban-sider :show="siderState" @toggle-sider="toggleSider">
          <kanban-sider-menu :show="siderState" @toggle-sider="toggleSider" />
        </kanban-sider>
      </div>
      <div class="col kanban__row__col-view">
        <kanban-navigation />
        <kanban-task-list-container />
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
export default defineComponent({
  components: {
    KanbanNavigation,
    KanbanSider,
    KanbanSiderMenu,
    KanbanTaskListContainer
  },
  data () {
    return {
      board: null,
      siderState: true
    }
  },
  provide () {
    return {
      getBoardById: this.getBoardById
    }
  },
  mounted () {
    this.siderState = Boolean(localStorage.getItem('kanbanSiderMenuState'))
  },
  watch: {
    '$route.params.boardId': {
      handler: function (id) {
        this.getBoardById(id)
      },
      immediate: true,
      flush: 'post'
    }
  },
  methods: {
    async getBoardById (id: string) {
      const res = await getBoardByIdService(id)
      if (!res.error) {
        this.$store.commit('SET_CURRENT_BOARD', res.data)
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
  overflow-y: scroll;
  &__row {
    position: relative;
    height: 100%;
    &__col-menu {
      height: 100%;
    }
  }
}
</style>
