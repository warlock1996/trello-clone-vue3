<template>
  <div class="card h-100 w-100 kanban-menu rounded-0 border-0">
    <div class="card-body p-0 border-0">
      <div class="d-flex p-2 justify-content-between">
        <workspace-title
          class="p-0 title"
          :title-styles="{ color: 'var(--light-clr-1)' }"
          :title="'Trello workspace'"
          subtitle="Free" />
        <img
          class="kanban-menu-close rounded-1"
          @click.stop="$emit('toggleSider')"
          src="@/assets/svgs/chevron-left.svg"
          alt="chevron-left" />
      </div>
      <hr class="my-2" />
      <kanban-list :items="menuItems" />
      <div class="your-boards my-3">
        <div class="d-flex justify-content-between align-items-center ps-3 p-2">
          <span> Your boards </span>
          <i class="bi bi-plus add-board" />
        </div>
        <div class="your-boards__list">
          <kanban-boards-list
            :items="workspace.createdBoards"
            :show-bookmark="true"
            :show-sub-menu="true"
            :board-bg-color="'rgb(131, 140, 145)'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceTitle from '@/components/WorkspaceTitle.vue'
import KanbanList from '@/components/KanbanList.vue'
import KanbanBoardsList from '@/components/KanbanBoardsList.vue'
import { mapState } from 'vuex'

export default defineComponent({
  components: {
    WorkspaceTitle,
    KanbanList,
    KanbanBoardsList
  },
  data () {
    return {
      menuItems: [
        {
          icon: 'kanban',
          text: 'Boards',
          route: '/workspace'
        },
        {
          icon: 'person',
          text: 'Members',
          route: '/workspace'
        },
        {
          icon: 'gear',
          text: 'Settings',
          route: '/workspace'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      workspace: 'workspace'
    })
  }
})
</script>

<style lang="scss" scoped>
.kanban-menu {
  &.card {
    background: transparent;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    width: 270px;
    background: transparent;
    color: var(--light-clr-1);
  }
  &-close {
    color: var(--light-clr-1);
    &:hover {
      background: var(--dark-clr-3);
    }
  }
  .workspace-views,
  .your-boards {
    font-size: var(--fs-xss);
    font-weight: var(--fw-bolder);
    color: var(--light-clr-1);
    max-height: 100%;
    overflow: hidden;
    &__list {
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 8px !important;
        border-radius: 5px;
        background: var(--bg-dynamic);
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: var(--bg-dynamic);
      }
    }
    .add-board {
      font-size: var(--fs-xl);
    }
  }
}
</style>
