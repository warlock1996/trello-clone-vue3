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
  font-size: 14px;
  font-weight: 500;
  li {
    background: transparent;
    color: #172b4d;
    font-weight: bold;
    &:hover {
      color: #091e42;
      background: rgba(9, 30, 66, 0.08);
      border-radius: 4px;
      cursor: pointer;
    }
    &.active {
      background-color: #e4f0f6;
      color: #0079bf;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
