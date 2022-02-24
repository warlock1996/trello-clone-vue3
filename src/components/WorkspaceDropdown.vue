<template>
  <div class="dropdown-menu shadow pt-1" style="width: 300px" :style="rootStyles">
    <div class="dropdown-menu-header d-flex align-items-center" :class="headerClasses">
      <div class="title text-center flex-grow-1" :class="titleClasses">
        {{ title }}
      </div>
      <div class="icon" @click="handleDropDownClose">
        <i class="bi bi-x fs-5" />
      </div>
    </div>
    <hr class="dropdown-divider" :class="dividerClasses" />
    <slot class="dropdown-menu-content px-3 pb-3" />
  </div>
</template>

<script lang="ts">

// eslint-disable-next-line
// @ts-ignore
// import { Dropdown } from 'bootstrap/dist/js/bootstrap'

import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      required: true,
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
    }
  },
  data () {
    return {
      show: true,
      dds: []
    }
  },
  methods: {
    handleDropDownClose () {
      // const dd = new Dropdown(document.getElementById(this.$attrs.id))
      // console.log(this.$attrs, dd)
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
