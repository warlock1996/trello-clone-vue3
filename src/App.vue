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

<style lang="scss">

@font-face {
    font-family: CharlieDisplay-Regular;
    src: url('./assets/fonts/CharlieDisplay-Regular.ttf') format("truetype");
}

@font-face {
    font-family: CharlieDisplay-Bold;
    src: url('./assets/fonts/CharlieDisplay-Bold.ttf') format("truetype");
}

@font-face {
    font-family: CharlieDisplay-Semibold;
    src: url('./assets/fonts/CharlieDisplay-Semibold.ttf') format("truetype");
}

@font-face {
    font-family: CharlieText-Regular;
    src: url('./assets/fonts/CharlieText-Regular.ttf') format("truetype");
}

</style>
