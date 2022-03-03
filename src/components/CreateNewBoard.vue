<template>
  <action-button
    class="create-board d-flex flex-column justify-content-center align-items-center p-2 dropdown position-relative">
    <div class="dropdown-toggle" data-bs-toggle="dropdown" @click="showCreateBoardDD = true" data-bs-auto-close="false">
      <p class="mb-0">Create new board</p>
      <p class="mb-0">remaining</p>
    </div>
    <workspace-dropdown title="Create board" :show="showCreateBoardDD" @close="showCreateBoardDD = false">
      <Form @submit="handleCreateBoard" v-slot="{ meta: { valid }, errors }">
        <label for="board">Board title</label>
        <Field type="text" v-model="name" autofocus name="name" rules="required" class="form-control" />
        <div class="error text-danger mb-3 mt-1">{{ errors['name'] }}</div>
        <action-button type="submit" :disabled="!valid">Create</action-button>
      </Form>
    </workspace-dropdown>
    <i class="bi bi-question-circle position-absolute"></i>
  </action-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceDropdown from '@/components/WorkspaceDropdown.vue'
import ActionButton from '@/components/ActionButton.vue'
import { createBoardService } from '@/services/board'
import { Form, Field, FormActions } from 'vee-validate'

export default defineComponent({
  components: {
    WorkspaceDropdown,
    ActionButton,
    Form,
    Field
  },
  data () {
    return {
      name: undefined,
      showCreateBoardDD: false
    }
  },
  methods: {
    async handleCreateBoard (values: unknown, actions: FormActions<Record<string, unknown>>) {
      try {
        const res = await createBoardService({ name: this.name })
        if (!res.error) {
          this.name = undefined
          this.showCreateBoardDD = false
          this.$store.commit('ADD_CREATED_BOARD', res.data)
        }
      } catch (error) {
        this.$setErrors(error, actions)
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
