<template>
   <component :is="layout"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import defaultLayout from '@/layouts/default.vue'
export default defineComponent({
  data () {
    return {
      layout: defaultLayout
    }
  },
  components: {
    defaultLayout
  }
})

</script>

<style lang="scss">

</style>
