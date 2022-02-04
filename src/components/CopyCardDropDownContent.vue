<template>
  <div class="copycard-dropdown-content d-flex flex-column gap-2">
    <div class="copycard-dropdown-content__textarea">
      <p class="label mb-1">Title</p>
      <textarea cols="30" class="form-control mb-2" autofocus></textarea>
      <p class="label mb-1">Keep...</p>
      <ul class="p-0 m-0">
        <li class="d-flex gap-2">
          <input
            class="form-check-input"
            v-model="keep.attachments"
            type="checkbox"
          />
          Attachments (5)
        </li>
        <li class="d-flex gap-2">
          <input
            class="form-check-input"
            v-model="keep.comments"
            type="checkbox"
          />
          Comments (5)
        </li>
        <li class="d-flex gap-2">
          <input
            class="form-check-input"
            v-model="keep.members"
            type="checkbox"
          />
          Members (5)
        </li>
        <li class="d-flex gap-2">
          <input
            class="form-check-input"
            v-model="keep.labels"
            type="checkbox"
          />
          Labels (5)
        </li>
      </ul>
    </div>
    <task-card-action-form
      title="Copy to..."
      submit-text="Create card"
    ></task-card-action-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskCardActionForm from '@/components/TaskCardActionForm.vue'
export default defineComponent({
  components: {
    TaskCardActionForm
  },
  data () {
    return {
      keep: {
        attachments: true,
        comments: true,
        members: true,
        labels: true
      }
    }
  }
})
</script>

<style lang="scss" scoped>
p.label {
  font-size: 12px;
  font-weight: 700;
}
</style>
