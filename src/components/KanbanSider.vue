<template>
  <div
    class="kanban-sider h-100 w-100"
    role="button"
    @click="show = !show"
  >
    <div
      v-if="!show"
      class="kanban-sider__caret"
    >
      <img
        src="@/assets/svgs/caret-round-right.svg"
        alt="caret-round-right"
      >
    </div>
    <slot
      v-if="show"
      class="kanban-sider__content"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      show: true
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-sider {
  background: rgba(193, 199, 208, 0.2);
  border-right: 1px solid rgba(54, 58, 64, 0.24);
  &:hover {
    background: #ffffff52;
  }
  &__content {
      background: #FAFBFC;
      width: 300px;
  }
  &__caret {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
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
