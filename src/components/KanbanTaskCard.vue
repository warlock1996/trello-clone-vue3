<template>
  <div>
    <div
      class="task-card card rounded-2"
      role="button"
      data-bs-toggle="modal"
      :data-bs-target="`#${task.task[0] + task._id}`">
      <div
        class="task-card__body card-body rounded-2 p-0"
        @mouseover="showEditIcon = true"
        @mouseout="showEditIcon = false">
        <div class="task-card__body__cover">
          <!-- <img src="@/assets/images/board.png" class="img-fluid" alt="board" /> -->
        </div>
        <i v-show="showEditIcon" @click.stop="() => {}" class="bi bi-pencil task-card__body__editicon"></i>
        <div v-if="taskLabels.length" class="d-flex gap-1 px-2 py-1 justify-content-start align-items-center">
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
        <div class="task-card__body__title card-title d-flex justify-content-between align-items-center mb-1 py-1 px-2">
          <span> {{ task.task }} </span>
        </div>
        <div class="task-card__body__actions d-flex flex-wrap gap-3 justify-content-start mb-1 py-1 px-2">
          <div
            v-if="task.date.dueDate"
            class="task-card__body__actions__date bg-warning p-1 rounded-1 text-white d-flex gap-1 justify-content-start align-items-center">
            <i class="bi bi-clock"></i>
            {{ new Date(task.date.dueDate).toDateString() }}
          </div>
          <div
            v-if="task.description.length"
            class="task-card__body__actions__description d-flex gap-1 justify-content-start align-items-center">
            <i class="bi bi-justify-left"></i>
          </div>
          <div
            v-if="task.comments.length"
            class="task-card__body__actions__comments d-flex gap-1 justify-content-start align-items-center">
            <i class="bi bi-chat"></i>
            <span>{{ task.comments.length }}</span>
          </div>
          <div
            v-if="task.attachments.length"
            class="task-card__body__actions__attachments d-flex gap-1 justify-content-start align-items-center flex-grow-1">
            <i class="bi bi-paperclip"></i>
            <span>
              {{ task.attachments.length }}
            </span>
          </div>
          <div
            v-if="task.members.length"
            class="task-card__body__actions__members d-flex gap-1 ms-auto justify-content-start align-items-center">
            <avatar v-for="member in taskMembers" size="small" :key="member._id" :name="member.name" class="p-0">
            </avatar>
          </div>
        </div>
      </div>
    </div>
    <kanban-task-modal> </kanban-task-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { mapState } from 'vuex'
import { LabelType, MemberModel } from '@/types/entities'
import KanbanTaskModal from '@/components/KanbanTaskModal.vue'
import KanbanTaskLabel from '@/components/KanbanTaskLabel.vue'
import Avatar from '@/components/Avatar.vue'

export default defineComponent({
  components: {
    KanbanTaskLabel,
    KanbanTaskModal,
    Avatar
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
      taskMembers: computed(() => this.taskMembers),
      taskLabels: computed(() => this.taskLabels)
    }
  },
  computed: {
    ...mapState({
      currentBoard: 'currentBoard'
    }),
    taskMembers () {
      return this.currentBoard.members.filter((mem: MemberModel) => this.task.members.includes(mem._id))
    },
    taskLabels () {
      return this.currentBoard.labels.filter((label: LabelType) => this.task.labels.includes(label._id))
    }
  },
  data () {
    return {
      showEditIcon: false,
      squeezeLbls: false
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
    &__actions {
      font-size: 14px;
      color: #6b778c;
      i {
        font-size: 14px;
        font-weight: 700;
      }
      &__date {
        font-size: 12px;
      }
    }
  }
}
</style>
