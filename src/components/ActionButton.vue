<template>
  <button class="action-button px-2 py-1">
    <div class="d-flex gap-2 align-items-center justify-content-between">
      <slot name="prefix" />
      <slot />
      <slot name="suffix" />
    </div>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})

</script>

<style lang="scss" scoped>
.action-button {
  background: #091e420a;
  border: none;
  box-shadow: none;
  color: #172b4d;
  border-radius: 3px;
  font-size: 14px;
  &:hover {
      background: #091e4214;
  }
}
</style>
