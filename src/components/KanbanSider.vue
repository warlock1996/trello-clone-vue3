<template>
  <div class="kanban-sider h-100" :class="{ 'w-100 show': show }" role="button" @click="$emit('toggleSider')">
    <div v-if="!show" class="kanban-sider__caret">
      <img src="@/assets/svgs/caret-round-right.svg" alt="caret-round-right" />
    </div>
    <slot v-if="show" class="kanban-sider__content" :show="show" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-sider {
  border-top: 1px solid var(--bg-dynamic);
  border-right: 1px solid var(--bg-dynamic);
  width: 16px;
  transition: width 0.1s ease-in-out;
  background: rgba(255, 255, 255, 0.16);
  color: var(--light-clr-1);
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  &__content {
    width: fit-content;
  }
  &.show {
    background: var(--bg-dynamic);
  }
  &__caret {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    height: 24px;
    width: 24px;
    position: relative;
    top: 10px;
    right: -25%;
    img svg {
      color: gray;
    }
  }
}
</style>
