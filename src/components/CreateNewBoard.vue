<template>
  <action-button
    class="create-board d-flex flex-column justify-content-center align-items-center p-2 dropdown position-relative">
    <div
      class="dropdown-toggle"
      data-bs-toggle="dropdown"
      @click="showCreateBoardDD = true"
      data-bs-auto-close="false">
      <p class="mb-0">Create new board</p>
      <p class="mb-0">remaining</p>
    </div>
    <workspace-dropdown title="Create board" :show="showCreateBoardDD" @close="showCreateBoardDD = false">
        <label for="board">Board title</label>
        <input id="board" type="text" v-model="board.name" class="form-control mb-3" />
        <action-button @click.prevent="handleCreateBoard">Create</action-button>
    </workspace-dropdown>
    <i class="bi bi-question-circle position-absolute"></i>
  </action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceDropdown from '@/components/WorkspaceDropdown.vue'
import ActionButton from '@/components/ActionButton.vue'
import { createBoardService } from '@/services/board'

export default defineComponent({
  components: {
    WorkspaceDropdown,
    ActionButton
  },
  data () {
    return {
      showCreateBoardDD: false,
      board: {
        name: ''
      }
    }
  },
  methods: {
    async handleCreateBoard () {
      const res = await createBoardService(this.board)
      if (!res.error) {
        this.showCreateBoardDD = false
        this.$store.commit('ADD_CREATED_BOARD', res.data)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.create-board {
  width: 190px;
  height: 100px;

  .dropdown-toggle {
    &::after {
      display: none;
    }
  }
  i {
    right: 10px;
    bottom: 10px;
  }
}
</style>
