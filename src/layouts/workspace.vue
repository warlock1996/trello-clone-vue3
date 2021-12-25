<template>
  <workspace-nav />
  <router-view class="router-view" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceNav from '@/components/WorkspaceNavigation.vue'
export default defineComponent({
  components: {
    WorkspaceNav
  }
})
</script>

<style lang="scss" scoped>

</style>
