<template>
  <li class="datalist__item d-flex gap-2 p-1 rounded-1 align-items-center justify-content-start">
    <slot />
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.datalist__item {
  cursor: pointer;
  &:hover {
    background: var(--dark-clr-5);
  }
}
</style>
