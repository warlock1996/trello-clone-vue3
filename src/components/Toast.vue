<template>
  <div
    class="toast show position-fixed top-0 end-0 m-3"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-bs-animation="true"
    data-bs-autohide="true">
    <div
      class="toast-body d-flex align-items-center justify-content-between gap-2">
      <span>
        {{ text }}
      </span>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped></style>
