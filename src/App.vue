<template>
  <div class="layout-wrap">
    <component :is="layout" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import defaultLayout from '@/layouts/default.vue'
import workspaceLayout from '@/layouts/workspace.vue'

export default defineComponent({
  components: {
    defaultLayout,
    workspaceLayout
  },
  data () {
    return {
      layout: workspaceLayout
    }
  }
})
</script>

<style lang="scss">
.layout-wrap {
  position: relative;
  z-index: 1000;
}

@font-face {
  font-family: CharlieDisplay-Regular;
  src: url("./assets/fonts/CharlieDisplay-Regular.ttf") format("truetype");
}

@font-face {
  font-family: CharlieDisplay-Bold;
  src: url("./assets/fonts/CharlieDisplay-Bold.ttf") format("truetype");
}

@font-face {
  font-family: CharlieDisplay-Semibold;
  src: url("./assets/fonts/CharlieDisplay-Semibold.ttf") format("truetype");
}

@font-face {
  font-family: CharlieText-Regular;
  src: url("./assets/fonts/CharlieText-Regular.ttf") format("truetype");
}
</style>
