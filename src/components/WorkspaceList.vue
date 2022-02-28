<template>
  <ul class="datalist p-0 m-0">
    <slot />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: false,
      default: (): Array<[]> => []
    }
  }
})
</script>

<style lang="scss" scoped>
.datalist {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
