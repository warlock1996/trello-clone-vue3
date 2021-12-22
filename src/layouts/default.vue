<template>
  <div class="default">
    <router-view class="default__view" />
    <!-- <atlassian-footer />
    <global-footer /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import AtlassianFooter from '@/components/AtlassianFooter.vue'

export default defineComponent({
  components: {
    // eslint-disable-next-line
    GlobalFooter,
    // eslint-disable-next-line
    AtlassianFooter
  }
})
</script>

<style lang="scss" scoped>
.default {
  position: relative;
  &__view {
    position: relative;
    z-index: 2;
  }
}
</style>
