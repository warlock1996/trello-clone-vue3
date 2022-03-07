<template>
  <ul class="list-group">
    <li
      v-for="i in items"
      :key="i._id"
      class="list-group-item px-3 py-0 d-flex gap-2 align-items-center justify-content-start"
      :class="{ active: $route.params.boardId === i._id }"
      @click.stop="$router.push({ name: 'kanban', params: { boardId: i._id } })">
      <div v-if="boardBgColor" class="board-bg rounded-1" :style="{ background: boardBgColor }" />
      <div class="flex-grow-1">
        {{ i.name }}
      </div>
      <i v-if="showSubMenu" class="bi bi-three-dots p-1 px-2 rounded-2 sub-menu" @click.stop="() => {}" />
      <i
        class="p-1 px-2 rounded-1 bookmark"
        :class="{ 'bi bi-star-fill starred d-block': i.starred, 'bi bi-star': !i.starred }"
        @click.stop="() => {}" />
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
      &.starred {
        color: darkgoldenrod;
        font-weight: var(--fw-heavy);
      }
      &:hover {
        color: darkgoldenrod;
        font-weight: var(--fw-heavy);
      }
    }
    &:hover {
      background: var(--bg-dynamic);
      .bookmark,
      .sub-menu {
        display: block;
      }
    }
    &:active,
    &.active {
      background: var(--bg-dynamic);
      color: var(--light-clr-1);
    }
    i {
      font-size: 15px;
    }
  }
}
</style>
