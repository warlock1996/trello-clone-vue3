<template>
  <div
    class="dropdown-menu shadow"
    style="width: 300px"
  >
    <div class="d-flex align-items-baseline">
      <div class="title text-center flex-grow-1">
        {{ title }}
      </div>
      <div class="icon">
        <i class="bi bi-x fs-5" />
      </div>
    </div>
    <hr class="dropdown-divider">
    <slot name="content" />
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
    }
  }
})
</script>

<style lang="scss" scoped></style>
