<template>
  <div class="dropdown-menu shadow pt-1" :class="{ show: show }" style="width: 300px" :style="rootStyles">
    <div class="dropdown-menu-header d-flex align-items-center" :class="headerClasses">
      <div class="title text-center flex-grow-1" :class="titleClasses">
        {{ title }}
      </div>
      <div class="icon" @click="$emit('close')">
        <i class="bi bi-x fs-5" />
      </div>
    </div>
    <hr class="dropdown-divider" :class="dividerClasses" />
    <slot class="dropdown-menu-content px-3 pb-3" />
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
  font-size: 14px;
  font-weight: normal;
  .icon {
    cursor: pointer;
  }
}
</style>
