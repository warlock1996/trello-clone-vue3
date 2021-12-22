<template>
  <ul class="dotted-list">
    <li class="dotted-list__item">
      <slot name="a" />
    </li>
    <li class="dotted-list__item last">
      <slot name="b" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss" scoped>
.dotted-list {
  display: block;
  list-style: none;
  padding: 0px;
  margin: 0px;
  text-align: center;
  &__item {
    display: inline;
    padding: 5px;
    font-size: 14px;
    &.last {
      position: relative;
      &::before {
        position: absolute;
        left: -2%;
        top: 50%;
        content: "";
        width: 3px;
        height: 3px;
        background: $primary;
        border: 1px solid $primary;
        border-radius: 50%;
      }
    }
  }
}
</style>
