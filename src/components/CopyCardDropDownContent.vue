<template>
  <div class="copycard-dropdown-content d-flex flex-column gap-2">
    <div class="copycard-dropdown-content__textarea">
      <p class="label mb-1">Title</p>
      <textarea v-model="keep.task" cols="30" class="form-control mb-2" autofocus></textarea>
      <div v-if="showKeeps" class="copycard-dropdown-content__textarea__keep">
        <p class="label mb-1">Keep...</p>
        <ul class="p-0 m-0">
          <li class="d-flex gap-2" v-if="keeps.attachments">
            <input class="form-check-input" v-model="keep.attachments" type="checkbox" />
            Attachments ({{ keeps.attachments }})
          </li>
          <li class="d-flex gap-2" v-if="keeps.comments">
            <input class="form-check-input" v-model="keep.comments" type="checkbox" />
            Comments ({{ keeps.comments }})
          </li>
          <li class="d-flex gap-2" v-if="keeps.members">
            <input class="form-check-input" v-model="keep.members" type="checkbox" />
            Members ({{ keeps.members }})
          </li>
          <li class="d-flex gap-2" v-if="keeps.labels">
            <input class="form-check-input" v-model="keep.labels" type="checkbox" />
            Labels ({{ keeps.labels }})
          </li>
        </ul>
      </div>
    </div>
    <task-card-action-form
      title="Copy to..."
      submit-text="Create card"
      :disable="keep.task.length < 1"
      @submit="handleCopySubmit"></task-card-action-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskCardActionForm from '@/components/TaskCardActionForm.vue'
import { copyTaskService } from '@/services/task'
export default defineComponent({
  inject: ['task', 'list'],
  components: {
    TaskCardActionForm
  },
  data () {
    return {
      keep: {
        task: '',
        attachments: true,
        comments: true,
        members: true,
        labels: true
      }
    }
  },
  methods: {
    async handleCopySubmit (payload: Record<string, string>) {
      const res = await copyTaskService(
        this.$route.params.boardId,
        payload.toBoardId,
        this.list._id,
        payload.toListId,
        this.task._id,
        this.keep
      )
      if (!res.error) {
        this.$store.commit('COPY_CURRENTBOARD_LIST_TASK', {
          toListId: payload.toListId,
          taskId: this.task._id
        })
      }
    }
  },
  computed: {
    keeps () {
      return {
        members: this.task.members.length,
        labels: this.task.labels.length,
        attachments: this.task.attachments.length,
        comments: this.task.comments.length
      }
    },
    showKeeps () {
      return Object.keys(this.keeps).some((kp) => !!this.keeps[kp])
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
