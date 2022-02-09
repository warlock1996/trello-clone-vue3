<template>
  <action-button
    class="create-board d-flex flex-column justify-content-center align-items-center p-2 dropdown position-relative">
    <div class="dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="10, 20">
      <p class="mb-0">Create new board</p>
      <p class="mb-0">remaining</p>
    </div>
    <workspace-drop-down title="Create board">
      <form>
        <label for="board">Board title</label>
        <input id="board" type="text" v-model="board.name" class="form-control mb-3" />
        <action-button @click.prevent="handleCreateBoard">Create</action-button>
      </form>
    </workspace-drop-down>
    <i class="bi bi-question-circle position-absolute"></i>
  </action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceDropDown from '@/components/WorkspaceDropown.vue'
import ActionButton from '@/components/ActionButton.vue'
import { createBoardService } from '@/services/boards'

export default defineComponent({
  components: {
    WorkspaceDropDown,
    ActionButton
  },
  data () {
    return {
      board: {
        name: ''
      }
    }
  },
  methods: {
    async handleCreateBoard () {
      const res = await createBoardService(this.board)
      if (!res.error) {
        console.log(res.data)
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
