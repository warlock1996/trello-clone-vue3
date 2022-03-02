<template>
  <workspace-nav />
  <router-view class="router-view" />
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import WorkspaceNav from '@/components/WorkspaceNavigation.vue'
import { mapState } from 'vuex'
import { BoardType } from '@/types/entities'
export default defineComponent({
  components: {
    WorkspaceNav
  },
  computed: {
    ...mapState({
      workspace: 'workspace'
    }),
    starredBoards () {
      return this.workspace.createdBoards.filter((board: BoardType) => board.starred)
    }
  },
  data () {
    return {
      recentBoards: []
    }
  },
  mounted () {
    this.getRecentBoards()
  },
  methods: {
    getRecentBoards () {
      this.recentBoards = JSON.parse(localStorage.recentBoards)
    }
  },
  provide () {
    return {
      starredBoards: computed(() => this.starredBoards),
      recentBoards: computed(() => this.recentBoards),
      workspace: computed(() => this.workspace),
      getRecentBoards: this.getRecentBoards
    }
  }
})
</script>

<style lang="scss" scoped></style>
