<template>
  <div class="wrapper" role="button">
    <div
      :id="task._id"
      class="task-card card"
      draggable="true"
      data-bs-toggle="modal"
      :data-bs-target="`#${task.task[0]}${task._id}`"
      @dragstart="handleDragStart"
      @click="showModal = true">
      <div
        class="task-card__body card-body rounded-2 p-0"
        @mouseover="showEditIcon = true"
        @mouseout="showEditIcon = false">
        <div v-if="cover" class="task-card__body__cover">
          <img
            draggable="false"
            :src="`${$STATIC_URL}/${cover.name}`"
            class="img-fluid rounded-top"
            alt="board" />
        </div>
        <i v-show="showEditIcon" class="bi bi-pencil task-card__body__editicon"></i>
        <div class="task-card__body__details d-flex flex-column gap-1 px-2 py-1">
          <div v-if="taskLabels.length" class="d-flex flex-wrap gap-1 justify-content-start align-items-center">
            <kanban-task-label
              v-for="label in taskLabels"
              :key="label._id"
              :text="label.text"
              :color="label.color"
              :custom-styles="{
                height: '8px',
                minWidth: '40px'
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
import { computed, defineAsyncComponent, defineComponent } from 'vue'
import { mapState } from 'vuex'
import { AttachmentType, LabelType, MemberType } from '@/types/entities'
import KanbanTaskLabel from '@/components/KanbanTaskLabel.vue'
import AvatarGroup from '@/components/AvatarGroup.vue'

export default defineComponent({
  components: {
    KanbanTaskLabel,
    AvatarGroup,
    KanbanTaskModal: defineAsyncComponent(
      () => import(/* webpackChunkName: "TaskModal" */ '@/components/KanbanTaskModal.vue')
    )
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
    background: var(--light-clr-1);
    box-shadow: 0 1px 0 #091e4240;
    font-weight: var(--fw-bold);
    &:hover {
      background: #f4f5f7;
    }
    &__title {
      font-size: var(--fs-xss);
      color: var(--dark-clr-1);
    }
    &__editicon {
      position: absolute;
      right: 8px;
      top: 8px;
      font-size: var(--fs-xss);
      color: var(--gray-clr-4);
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
      font-size: var(--fs-xss);
      color: var(--gray-clr-4);
      i {
        font-size: var(--fs-xss);
        font-weight: var(--fw-heavy);;
      }
      &__date {
        font-size: var(--fs-xsss);
        padding: 0px 5px;
      }
    }
  }
}
</style>
