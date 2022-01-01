<template>
  <div class="kanban-task-label d-flex justify-content-center align-items-center badge px-3" :class="bgColor">
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    bgColor: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
    .kanban-task-label {
        min-width: 40px;
        height: 32px;
    }
</style>
