<template>
  <div class="dropdown-menu shadow pt-1" :class="{ show: show }" style="min-width: 300px" :style="rootStyles">
    <div class="dropdown-menu-header" :class="headerClasses">
      <div class="d-flex gap-2 align-items-center justify-content-between">
        <div class="title text-center flex-grow-1" :class="titleClasses">
          {{ title }}
        </div>
        <div class="icon" @click="$emit('close')">
          <i class="bi bi-x fs-5" />
        </div>
      </div>
      <hr class="dropdown-divider" :class="dividerClasses" />
    </div>
    <div class="dropdown-menu-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Workspaces'
    },
    rootStyles: {
      required: false,
      type: Object
    },
    headerClasses: {
      required: false,
      type: String,
      default: ''
    },
    dividerClasses: {
      required: false,
      type: String,
      default: ''
    },
    titleClasses: {
      required: false,
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.dropdown-menu {
  font-size: var(--fs-xss);
  font-weight: normal;
  &-content {
    max-height: 450px;
    overflow: auto;
  }
  .icon {
    cursor: pointer;
  }
}
</style>
