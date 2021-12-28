<template>
  <div
    v-if="!showInput"
    class="list-input-btn d-flex gap-2 align-items-center justify-content-between"
  >
    <button
      class="btn list-input-btn__btn d-flex gap-1 justify-content-between px-2 py-1 text-start shadow-none w-100"
      @click="showInput = true"
    >
      <i class="bi bi-plus list-input-btn__addicon" />
      <span class="flex-grow-1"> Add a Card </span>
    </button>
    <i class="bi bi-card-image px-2 py-1 rounded-1 list-input-btn__template" role="button" />
  </div>
  <kanban-add-form @close="showInput = false" v-else />

</template>

<script>
import { defineComponent } from 'vue'
import KanbanAddForm from '@/components/KanbanAddForm.vue'
export default defineComponent({
  data () {
    return {
      showInput: false
    }
  },
  components: {
    KanbanAddForm
  }
})
</script>

<style lang="scss" scoped>
.list-input-btn {
  &__btn,
  &__addicon {
    font-size: 14px;
    color: #5e6c84;
    &:hover {
      background: #091e4214;
      color: #172b4d;
    }
  }
  &__template {
    color: #5e6c84;
    &:hover {
      background: #091e4214;
      color: #172b4d;
    }
  }
}

</style>
