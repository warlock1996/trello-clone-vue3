<template>
  <ul class="list-group px-2 workspace-sidemenu">
    <li class="list-group-item d-flex gap-2 border-0 px-2 active">
      <i class="bi bi-kanban" />
      <span>Boards</span>
    </li>
    <li class="list-group-item d-flex gap-2 border-0 px-2">
      <i class="bi bi-box-seam" />
      <span>Templates</span>
    </li>
    <li class="list-group-item d-flex gap-2 border-0 px-2">
      <i class="bi bi-house-door" />
      <span>Home</span>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.workspace-sidemenu {
  position: sticky;
  top: 60px;
  width: 240px;
  font-size: var(--fs-xss);
  font-weight: 500;
  li {
    background: transparent;
    color: var(--dark-clr-1);
    font-weight: bold;
    &:hover {
      color: var(--dark-clr-2);
      background: rgba(9, 30, 66, 0.08);
      border-radius: 4px;
      cursor: pointer;
    }
    &.active {
      background-color: #e4f0f6;
      color: var(--primary-clr-5);
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
