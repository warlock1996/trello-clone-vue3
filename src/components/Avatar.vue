<template>
  <div
    class="avatar d-flex justify-content-center align-items-center rounded-circle"
    :class="dynamicClasses"
    :style="styles">
    {{ abbr }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: (v) => ['medium', 'small'].includes(v)
    }
  },
  computed: {
    abbr () {
      const str = this.name.split(' ')
      return str[0].charAt(0) + str[1].charAt(0)
    },
    dynamicClasses () {
      return { 'p-1': this.size === 'medium', 'p-0': this.size === 'small' }
    },
    styles () {
      if (this.size === 'small') {
        return {
          width: '28px',
          height: '28px'
        }
      }
      return {
        width: '32px',
        height: '32px'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  background: #dfe1e6;
  cursor: pointer;
  color: #172b4d;
  font-size: 12px;
  &:hover {
    background: #c1c7d0;
  }
}
</style>
