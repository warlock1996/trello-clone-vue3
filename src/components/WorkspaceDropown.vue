<template>
  <div
    class="dropdown-menu shadow pt-1"
    style="width: 300px"
  >
    <div class="dropdown-menu-header d-flex align-items-baseline px-3" :class="headerClasses">
      <div class="title text-center flex-grow-1" :class="titleClasses">
        {{ title }}
      </div>
      <div class="icon">
        <i class="bi bi-x fs-5" />
      </div>
    </div>
    <hr class="dropdown-divider mx-2">
    <slot name="content" class="dropdown-menu-content px-3 pb-3" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
      default: 'Workspaces'
    },
    headerClasses: {
      required: false,
      type: String,
      default: ''
    },
    titleClasses: {
      required: false,
      type: String,
      default: ''
    },
    dividerClasses: {
      required: false,
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
  .dropdown-menu {
    font-size: 14px;
    font-weight: normal;
    .icon {
      cursor: pointer;
    }
  }
</style>
