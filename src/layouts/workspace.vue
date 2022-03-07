<template>
  <workspace-nav />
  <router-view class="router-view" />
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import WorkspaceNav from '@/components/WorkspaceNavigation.vue'
import { mapState } from 'vuex'
import { BoardType } from '@/types/entities'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'
import { LocalUserDataType } from '@/types/misc'
export default defineComponent({
  components: {
    WorkspaceNav
  },
  computed: {
    ...mapState({
      workspace: 'workspace'
    }),
    starredBoards () {
      const allBoards = this.workspace.createdBoards.concat(this.workspace.invitedBoards)
      return allBoards.filter((board: BoardType) => board.starred)
    }
  },
  data () {
    return {
      recentBoards: []
    }
  },
  mounted () {
    this.getRecentBoards()
    document.querySelector('body').style.background = 'var(--primary-clr-5)'
  },
  beforeUnmount () {
    document.querySelector('body').style.background = 'var(--bg-1)'
  },
  methods: {
    getRecentBoards () {
      try {
        if (localStorage.localUserData) {
          const decoded = jwtDecode(Cookies.get('token')) as Record<string, unknown>
          const localUserData: Array<LocalUserDataType> = JSON.parse(localStorage.localUserData)
          const currentUserData = localUserData.find((data) => data.user === decoded.email)
          if (currentUserData) {
            this.recentBoards = currentUserData.recentBoards
          }
        }
      } catch (error) {
        console.error(error)
      }
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
