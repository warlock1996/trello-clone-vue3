<template>
  <component :is="layout" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import defaultLayout from '@/layouts/default.vue'
export default defineComponent({
  components: {
    defaultLayout
  },
  data () {
    return {
      layout: defaultLayout
    }
  }
})

</script>
