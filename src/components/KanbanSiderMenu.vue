<template>
  <div
    class="card h-100 w-100 kanban-menu rounded-0"
  >
    <div class="card-body p-0">
      <div class="d-flex p-2 justify-content-between">
        <workspace-title
          class="p-0"
          :title="'Trello workspace'"
        />
        <img
          class="kanban-menu-close rounded-1"
          src="@/assets/svgs/chevron-left.svg"
          alt="chevron-left"
        >
      </div>
      <hr class="my-2">
      <kanban-list :items="menuItems" />
      <div class="workspace-views my-3 ps-3">
        Workpace views
      </div>
      <div class="your-boards  my-3">
        <div class="d-flex justify-content-between align-items-center  ps-3 p-2">
          <span>
            Your boards
          </span>
          <i class="bi bi-plus add-board" />
        </div>
        <div class="your-boards__list">
          <kanban-list
            :items="boards"
            :show-bookmark="true"
            :show-sub-menu="true"
            :board-bg-color="'rgb(131, 140, 145)'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceTitle from '@/components/WorkspaceTitle.vue'
import KanbanList from '@/components/KanbanList.vue'
export default defineComponent({
  components: {
    WorkspaceTitle,
    KanbanList
  },
  data () {
    return {
      menuItems: [
        {
          icon: 'kanban',
          text: 'Boards',
          route: '/'
        },
        {
          icon: 'person',
          text: 'Members',
          route: '/'
        },
        {
          icon: 'gear',
          text: 'Settings',
          route: '/'
        }
      ],
      boards: [
        {
          text: 'Board A',
          route: '/',
          classes: {
            prefix: '',
            text: 'flex-grow-1',
            icon: '',
            suffix: ''
          }
        },
        {
          text: 'Board B',
          route: '/'
        },
        {
          text: 'Board C',
          route: '/'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-menu {
  .card-body {
    width: 270px;
  }
  &-close {
    &:hover {
        background: #091e4214;
      }
  }
  .workspace-views, .your-boards {
    font-size: 14px;
    font-weight: 600;
    color: #5e6c84;
     .add-board {
      font-size: 24px;
    }
  }
}
</style>
