<template>
  <div
    :class="`kanban-task-label d-flex justify-content-center align-items-center badge px-3 text-truncate bg-${color}`"
    :style="customStyles">
    <span v-if="size == 'medium'">
      {{ text }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    customStyles: {
      type: Object
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-task-label {
  min-width: 40px;
  height: 32px;
  font-size: 8px;
}
</style>
