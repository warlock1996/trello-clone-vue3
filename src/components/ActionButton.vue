<template>
  <button class="action-button d-flex gap-2 align-items-center justify-content-start px-2 py-1">
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {}
  },
  components: {},
  directives: {}
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
  &:disabled {
    background: #091e4214;
    pointer-events: none;
  }
  &:hover {
    background: #091e4214;
  }
  &:active {
    background-color: #e4f0f6;
    color: #0079bf;
    outline: 0;
  }
}
</style>
