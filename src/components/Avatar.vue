<template>
  <div class="avatar d-flex justify-content-center align-items-center p-1 rounded-circle">
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
    }
  },
  computed: {
    abbr () {
      const str = this.name.split(' ')
      return str[0].charAt(0) + str[1].charAt(0)
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
        width: 32px;
        height: 32px;
        &:hover {
            background: #c1c7d0;
        }
    }
</style>
