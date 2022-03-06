<template>
  <div class="kanban-sider h-100" :class="{ 'w-100': show }" role="button" @click="$emit('toggleSider')">
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
  background: rgba(193, 199, 208, 0.2);
  border-right: 1px solid rgba(54, 58, 64, 0.24);
  width: 16px;
  transition: width 0.1s ease-in-out;
  &:hover {
    background: #ffffff52;
  }
  &__content {
    background: #fafbfc;
    width: fit-content;
  }
  &__caret {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--light-clr-1);
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
