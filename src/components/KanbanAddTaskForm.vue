<template>
  <div v-if="!showInput" class="list-input-btn d-flex gap-2 align-items-center justify-content-between">
    <button
      class="btn list-input-btn__btn d-flex gap-1 justify-content-between px-2 py-1 text-start shadow-none w-100"
      @click="showInput = true">
      <i class="bi bi-plus list-input-btn__addicon" />
      <span class="flex-grow-1"> Add a Card </span>
    </button>
    <i class="bi bi-card-image rounded-1 list-input-btn__template btn-icon" role="button" />
  </div>
  <kanban-add-form @close="showInput = false" v-else @submit="handleAddTask" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KanbanAddForm from '@/components/KanbanAddForm.vue'
import { createTaskService } from '@/services/task'
import { FormActions } from 'vee-validate'
export default defineComponent({
  props: {
    listId: {
      type: String,
      required: true
    }
  },
  inject: ['addTaskToList', 'setToast'],
  data () {
    return {
      showInput: false
    }
  },
  components: {
    KanbanAddForm
  },
  methods: {
    async handleAddTask (value: string, values: unknown, actions: FormActions<Record<string, unknown>>) {
      try {
        const res = await createTaskService(this.$route.params.boardId, this.listId, { task: value })
        if (!res.error) {
          this.showInput = false
          this.addTaskToList(res.data)
        }
      } catch (error) {
        actions.setFieldError('input', error.task.msg)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.list-input-btn {
  &__btn,
  &__addicon {
    font-size: var(--fs-xss);
    color: var(--gray-clr-3);
  }
  &__btn {
    &:hover {
      background: var(--dark-clr-3);
      color: var(--dark-clr-1);
    }
  }
}
</style>
