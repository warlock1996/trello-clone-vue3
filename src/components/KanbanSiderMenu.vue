<template>
  <div
    class="card h-100 w-100 kanban-menu rounded-0"
  >
    <div class="card-body p-0">
      <div class="d-flex p-2 justify-content-between">
        <workspace-title
          class="align-items-start p-2"
          :title="'Trello workspace'"
        />
        <img
          src="@/assets/svgs/chevron-left.svg"
          alt="chevron-left"
        >
      </div>
      <hr class="my-2">
      <ul class="list-group">
        <li
          class="list-group-item px-3 d-flex gap-2 align-items-center justify-content-start"
        >
          <i class="bi bi-kanban" />
          Boards
        </li>
        <li
          class="list-group-item px-3 d-flex gap-2 align-items-center justify-content-start"
        >
          <i class="bi bi-person" />
          Members
        </li>
        <li
          class="list-group-item px-3 d-flex gap-2 align-items-center justify-content-start"
        >
          <i class="bi bi-gear" />
          Settings
        </li>
      </ul>
      <div class="workspace-views my-3 ps-3">
        Workpace views
      </div>
      <div class="your-boards p-2 d-flex justify-content-between align-items-center my-3 ps-3">
        <span>
          Your boards
        </span>
        <i class="bi bi-plus" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceTitle from '@/components/WorkspaceTitle.vue'
export default defineComponent({
  components: {
    WorkspaceTitle
  }
})
</script>

<style lang="scss" scoped>
.kanban-menu {
  .card-body {
    width: 270px;
  }
  .list-group {
    &-item {
      border: none;
      font-size: 14px;
      color: #172b4d;
      &:hover {
        background: rgba(9, 30, 66, 0.08);
      }
      &:active {
        background: #e4f0f6;
      }
    }
  }
  .workspace-views, .your-boards {
    font-size: 14px;
    font-weight: 600;
    color: #5e6c84;
    i {
        font-size: 24px;
    }
  }
}
</style>
