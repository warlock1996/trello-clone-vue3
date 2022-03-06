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
  color: var(--dark-clr-1);
  border-radius: 3px;
  font-size: var(--fs-xss);
  &:disabled {
    background: var(--dark-clr-3);
    pointer-events: none;
  }
  &:hover {
    background: var(--dark-clr-3);
  }
  &:active {
    background-color: #e4f0f6;
    color: var(--primary-clr-5);
    outline: 0;
  }
}
</style>
