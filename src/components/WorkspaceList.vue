<template>
  <ul class="datalist p-0 m-0">
    <li
      class="datalist__item d-flex gap-2 p-1 rounded-1 align-items-center justify-content-start"
      v-for="(i, index) in items"
      :key="index"
      @click.stop="$emit('dataItemClick', i)">
      <slot v-if="i.slot" :name="i.slot" v-bind="i"></slot>
      <div v-else>{{ i.value }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
      default: (): Array<[]> => []
    }
  }
})
</script>

<style lang="scss" scoped>
.datalist {
  &__item {
    cursor: pointer;
    &:hover {
      background: #091e420a;
    }
  }
}
</style>
