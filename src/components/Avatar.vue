<template>
  <div class="avatar d-flex justify-content-center align-items-center rounded-circle" :style="styles">
    {{ abbr(name) }}
  </div>
</template>

<script lang="ts">
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
      validator: (v: string): boolean => ['medium', 'small'].includes(v)
    }
  },
  methods: {
    abbr (name: string) {
      const str = name.split(' ')
      if (str.length > 1) {
        return str[0].charAt(0) + str[1].charAt(0)
      }
      return str[0].charAt(0) + str[0].charAt(1)
    }
  },
  computed: {
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
  text-transform: uppercase;
  &:hover {
    background: #c1c7d0;
  }
}
</style>
