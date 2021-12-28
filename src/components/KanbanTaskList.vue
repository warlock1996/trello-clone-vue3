<template>
  <div class="task-list card rounded-2 shadow-1 border-0">
    <div class="task-list__body card-body rounded-2 p-2">
      <div
        class="task-list__body__title card-title d-flex justify-content-between align-items-center"
      >
        <div class="task-list__title">
          <input
            type="text"
            class="form-control form-control-sm"
            value="some list"
          />
        </div>
        <div class="task-list__menu">
          <i class="bi bi-three-dots" role="button" />
        </div>
      </div>
      <div class="task-list__tasks mb-2">
        <task-card
          :task="{
            title: 'some task',
            description: 2,
            comments: 2,
            subscribe: 2,
            attachments: 2,
            members: 2,
          }"
        />
      </div>
      <div class="task-list__add">
        <list-input />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ListInput from '@/components/ListInput.vue'
import TaskCard from '@/components/TaskCard.vue'
export default defineComponent({
  components: {
    ListInput,
    TaskCard
  }
})
</script>

<style lang="scss" scoped>
.task-list {
  background: #ebecf0;
  &__body {
    max-width: 280px;
    background: #ebecf0;
    &__title {
      input {
        font-weight: 500;
        background: transparent;
        border: none;
        &:focus {
          box-shadow: inset 0 0 0 2px #0079bf;
        }
      }
    }
  }
}
</style>
