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
export default defineComponent({
  props: {
    listId: {
      type: String,
      required: true
    }
  },
  inject: ['addTaskToList'],
  data () {
    return {
      showInput: false
    }
  },
  components: {
    KanbanAddForm
  },
  methods: {
    async handleAddTask (payload: string) {
      this.showInput = false
      const res = await createTaskService(this.$route.params.boardId, this.listId, { task: payload })
      if (!res.error) {
        this.addTaskToList(res.data)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.list-input-btn {
  &__btn,
  &__addicon {
    font-size: 14px;
    color: #5e6c84;
  }
  &__btn {
    &:hover {
      background: #091e4214;
      color: #172b4d;
    }
  }
}
</style>
