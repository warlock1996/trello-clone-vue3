<template>
  <div>
    <div
      :id="task._id"
      @click="showModal = true"
      data-bs-toggle="modal"
      :data-bs-target="`#${task.task[0] + task._id}`"
      draggable="true"
      @dragstart="handleDragStart"
      class="task-card card"
      role="button"
      >
      <div
        class="task-card__body card-body rounded-2 p-0"
        @mouseover="showEditIcon = true"
        @mouseout="showEditIcon = false">
        <div v-if="cover" class="task-card__body__cover">
          <img
            draggable="false"
            :src="`http://localhost:5000/static/${cover.name}`"
            class="img-fluid rounded-top"
            alt="board" />
        </div>
        <i v-show="showEditIcon" @click.stop="() => {}" class="bi bi-pencil task-card__body__editicon"></i>

        <div class="task-card__body__details d-flex flex-column gap-1 px-2 py-1">
          <div v-if="taskLabels.length" class="d-flex flex-wrap gap-1 justify-content-start align-items-center">
            <kanban-task-label
              v-for="label in taskLabels"
              :key="label._id"
              :text="label.text"
              :color="label.color"
              :custom-styles="{
                height: '10px',
                minWidth: '10px'
              }"></kanban-task-label>
          </div>
          <div class="task-card__body__title card-title d-flex justify-content-between align-items-center text-break">
            {{ task.task }}
          </div>
          <div class="task-card__body__details d-flex flex-wrap gap-2 justify-content-start align-items-center">
            <div
              v-if="task.date.dueDate"
              class="task-card__body__details__date bg-warning rounded-1 text-white d-flex gap-1 justify-content-start align-items-center">
              <i class="bi bi-clock"></i>
              {{ formatDate(task.date.dueDate) }}
            </div>
            <div
              v-if="task.description.length"
              class="task-card__body__details__description d-flex gap-1 justify-content-start align-items-center">
              <i class="bi bi-justify-left"></i>
            </div>
            <div
              v-if="task.comments.length"
              class="task-card__body__details__comments d-flex gap-1 justify-content-start align-items-center">
              <i class="bi bi-chat"></i>
              <span>{{ task.comments.length }}</span>
            </div>
            <div
              v-if="task.attachments.length"
              class="task-card__body__details__attachments d-flex gap-1 justify-content-start align-items-center">
              <i class="bi bi-paperclip"></i>
              <span>
                {{ task.attachments.length }}
              </span>
            </div>
            <div
              v-if="task.members.length"
              class="task-card__body__details__members d-flex ms-auto gap-1 justify-content-start align-items-center">
              <avatar-group :members="taskMembers" size="small"> </avatar-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <kanban-task-modal :show="showModal" @close="showModal = false"> </kanban-task-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { mapState } from 'vuex'
import { AttachmentType, LabelType, MemberType } from '@/types/entities'
import KanbanTaskModal from '@/components/KanbanTaskModal.vue'
import KanbanTaskLabel from '@/components/KanbanTaskLabel.vue'
import AvatarGroup from '@/components/AvatarGroup.vue'

export default defineComponent({
  components: {
    KanbanTaskLabel,
    KanbanTaskModal,
    AvatarGroup
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  provide () {
    return {
      task: computed(() => this.task),
      cover: computed(() => this.cover),
      taskMembers: computed(() => this.taskMembers),
      taskLabels: computed(() => this.taskLabels)
    }
  },
  inject: ['list'],
  computed: {
    ...mapState({
      currentBoard: 'currentBoard'
    }),
    taskMembers () {
      return this.currentBoard.members.filter((mem: MemberType) => this.task.members.includes(mem._id))
    },
    taskLabels () {
      return this.currentBoard.labels.filter((label: LabelType) => this.task.labels.includes(label._id))
    },
    cover () {
      return this.task.attachments.find((att: AttachmentType) => att.isCover)
    }
  },
  data () {
    return {
      showModal: false,
      showEditIcon: false,
      squeezeLbls: false
    }
  },
  methods: {
    handleDragStart (e: DragEvent) {
      console.log('[handleDragStart]', e.target)
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', JSON.stringify({ listId: this.list._id, taskId: this.task._id }))
    },
    formatDate (date: string) {
      return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(date))
    }
  }
})
</script>

<style lang="scss" scoped>
.task-card {
  &__body {
    position: relative;
    background: #ffffff;
    box-shadow: 0 1px 0 #091e4240;
    font-weight: 500;
    &:hover {
      background: #f4f5f7;
    }
    &__title {
      font-size: 14px;
      color: #172b4d;
    }
    &__editicon {
      position: absolute;
      right: 8px;
      top: 8px;
      font-size: 14px;
      color: #6b778c;
      z-index: 1;
      padding-left: 6px;
      padding-right: 6px;
      padding-top: 2px;
      padding-bottom: 2px;
      border-radius: 3px;
      background: #f4f5f7;
      &:hover {
        background: #ebecf0;
      }
    }
    &__details {
      font-size: 14px;
      color: #6b778c;
      i {
        font-size: 14px;
        font-weight: 700;
      }
      &__date {
        font-size: 12px;
        padding: 0px 5px;
      }
    }
  }
}
</style>
