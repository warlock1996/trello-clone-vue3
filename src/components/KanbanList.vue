<template>
  <ul class="list-group">
    <li
      v-for="i in items"
      :key="i.text"
      class="list-group-item px-3 py-0 d-flex gap-2 align-items-center justify-content-start"
      @click.stop="$router.push(i.route)">
      <div v-if="boardBgColor" class="board-bg rounded-1" :style="{ background: boardBgColor }" />
      <i v-if="i.icon" :class="`bi bi-${i.icon}`" />
      <div class="flex-grow-1">
        {{ i.text }}
      </div>
      <i v-if="showSubMenu" class="bi bi-three-dots p-1 px-2 rounded-2 sub-menu" @click.stop="() => {}" />
      <i v-if="showBookmark" class="bi bi-star p-1 px-2 rounded-1 bookmark" @click.stop="() => {}" />
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    showBookmark: {
      type: Boolean,
      default: false
    },
    showSubMenu: {
      type: Boolean,
      default: false
    },
    boardBgColor: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.list-group {
  &-item {
    border: none;
    font-size: var(--fs-xss);
    color: var(--list-item-clr);
    font-weight: var(--fw-semibold);
    height: 32px;
    .bookmark,
    .sub-menu {
      display: none;
      font-size: 15px;
    }
    .board-bg {
      width: 25px;
      height: 20px;
    }
    .sub-menu {
      &:hover {
        background: var(--dark-clr-3);
      }
    }
    .bookmark {
      &:hover {
        color: darkgoldenrod;
        font-weight: var(--fw-heavy);
      }
    }
    &:hover {
      background: var(--dark-clr-3);
      .bookmark,
      .sub-menu {
        display: block;
      }
    }
    &:active {
      background: var(--dark-clr-3);
    }
    i {
      font-size: 15px;
    }
  }
}
</style>
