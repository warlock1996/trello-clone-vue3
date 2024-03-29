<template>
  <div class="taskmodal modal fade" :id="`${task.task[0]}${task._id}`" :class="{ show: show }">
    <div class="taskmodal__dialog modal-dialog">
      <div v-if="show" class="taskmodal__dialog__content modal-content border-0 rounded-1">
        <i
          class="bi bi-x taskmodal__dialog__content__close rounded-circle"
          data-bs-dismiss="modal"
          @click="$emit('close')"
          role="button"></i>
        <div
          v-if="cover"
          class="taskmodal__dialog__content__header modal-header d-flex justify-content-center"
          role="button">
          <img :src="`${$STATIC_URL}/${cover.name}`" class="img-fluid w-50" alt="board" />
        </div>
        <div class="taskmodal__dialog__content__body modal-body">
          <div class="row mb-1">
            <div class="col">
              <section class="d-flex gap-2 justify-content-start align-items-start">
                <i class="taskmodal__dialog__content__body__icon bi bi-card-heading"></i>
                <div class="taskmodal__dialog__content__body__title flex-grow-1">
                  <input
                    ref="taskNameInput"
                    :value="task.task"
                    type="text"
                    @keyup.enter="handleTaskNameChange"
                    class="form-control form-control-sm ps-0 py-0 d-block w-75 mb-1 shadow-none"
                    style="min-height: auto" />
                  <div class="quiet ps-0">
                    in list <u>{{ list.name }}</u>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <section
                class="taskmodal__dialog__content__body__members__labels d-flex flex-wrap gap-2 justify-content-start align-items-start my-4 ps-4">
                <div v-if="taskMembers.length" class="taskmodal__dialog__content__body__title__members">
                  <p class="mb-1">Members</p>
                  <div class="d-flex flex-wrap gap-1 align-items-center">
                    <avatar v-for="mem in taskMembers" :key="mem._id" :name="mem.name"></avatar>
                    <action-button
                      class="taskmodal__dialog__content__body__title__members__add rounded-circle justify-content-center dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showAddMemberDD = !showAddMemberDD">
                      <i class="bi bi-plus"></i>
                    </action-button>
                    <workspace-dropdown title="Members" :show="showAddMemberDD" @close="showAddMemberDD = false">
                      <members-drop-down-content
                        :board-members="currentBoard.members"
                        :task-members="task.members"
                        @addMember="handleAddMemberToTask"
                        @removeMember="handleRemoveMemberFromTask">
                      </members-drop-down-content>
                    </workspace-dropdown>
                  </div>
                </div>
                <div v-if="taskLabels.length" class="taskmodal__dialog__content__body__title__labels">
                  <p class="mb-1">Labels</p>
                  <div class="d-flex flex-wrap gap-1 align-items-center">
                    <kanban-task-label
                      v-for="label in taskLabels"
                      :key="label._id"
                      :text="label.text"
                      :color="label.color" />
                    <action-button
                      class="taskmodal__dialog__content__body__title__labels__add justify-content-center dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showAddLabelDD = !showAddLabelDD">
                      <i class="bi bi-plus"></i>
                    </action-button>
                    <workspace-dropdown title="Labels" :show="showAddLabelDD" @close="showAddLabelDD = false">
                      <label-drop-down-content
                        :board-labels="currentBoard.labels"
                        :task-labels="task.labels"
                        @addLabel="handleAddLabelToTask"
                        @removeLabel="handleRemoveLabelFromTask"></label-drop-down-content>
                    </workspace-dropdown>
                  </div>
                </div>
              </section>
              <section
                class="taskmodal__dialog__content__body__desc d-flex gap-2 justify-content-start align-items-start my-3">
                <i class="bi bi-justify-left"></i>
                <div class="w-100">
                  <p class="taskmodal__dialog__content__body__desc__title">Description</p>
                  <div class="w-100">
                    <action-button
                      class="taskmodal__dialog__content__body__desc__text p-2 w-100 pb-5 rounded-1"
                      role="button"
                      :class="{ 'bg-transparent': task.description }"
                      v-if="!showDescriptionBox"
                      @click="showDescriptionBox = true">
                      {{ task.description || 'Add a more detailed description...' }}
                    </action-button>
                    <kanban-add-form
                      v-else
                      :default-value="task.description"
                      input-type="textarea"
                      button-text="Save"
                      button-classes="btn-primary-2"
                      text-area-placeholder="Add a more detailed description..."
                      :show-sub-menu="true"
                      :text-area-styles="{
                        padding: '10px',
                        boxShadow: 'inset 0 0 0 2px var(--primary-clr-5)',
                        height: '120px'
                      }"
                      @close="showDescriptionBox = false"
                      @submit="handleDescriptionChange"></kanban-add-form>
                  </div>
                </div>
              </section>
              <section
                class="taskmodal__dialog__content__body__attachments d-flex gap-2 justify-content-start align-items-start my-3">
                <i class="taskmodal__dialog__content__body__attachments__icon bi bi-paperclip"></i>
                <div class="w-100">
                  <p class="taskmodal__dialog__content__body__attachments__title">Attachments</p>
                  <kanban-task-attachment
                    class="my-2"
                    v-for="attachment in task.attachments"
                    :attachment="attachment"
                    :key="attachment._id"></kanban-task-attachment>
                </div>
              </section>
              <section class="taskmodal__dialog__content__body__activity my-3">
                <div class="d-flex gap-2 justify-content-start align-items-start">
                  <i class="bi bi-list-ul"></i>
                  <div class="w-100 flex-grow-1">
                    <p class="taskmodal__dialog__content__body__activity__title">Activity</p>
                  </div>
                </div>
                <div class="taskmodal__dialog__content__body__activity__comments__wrapper">
                  <kanban-task-comment-input @comment="handleTaskComment"></kanban-task-comment-input>
                  <kanban-task-comment
                    v-for="comment in task.comments"
                    :comment="comment"
                    :key="comment._id"></kanban-task-comment>
                </div>
              </section>
            </div>
            <div class="col-md-3">
              <div class="taskmodal__dialog__content__body__actions d-flex flex-column gap-4 justify-content-between">
                <div class="taskmodal__dialog__content__body__actions__title">
                  Add to card
                  <div class="d-flex flex-column gap-2 justify-content-start align-items-start">
                    <action-button
                      class="w-100 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showMembersDD = !showMembersDD">
                      <template #prefix>
                        <i class="bi bi-person"></i>
                        Members
                      </template>
                    </action-button>
                    <workspace-dropdown :title="'Members'" :show="showMembersDD" @close="showMembersDD = false">
                      <members-drop-down-content
                        :board-members="currentBoard.members"
                        :task-members="task.members"
                        @addMember="handleAddMemberToTask"
                        @removeMember="handleRemoveMemberFromTask" />
                    </workspace-dropdown>
                    <action-button
                      class="w-100 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showLabelsDD = !showLabelsDD">
                      <template #prefix>
                        <i class="bi bi-tag"></i>
                        Labels
                      </template>
                    </action-button>
                    <workspace-dropdown :title="'Labels'" :show="showLabelsDD" @close="showLabelsDD = false">
                      <label-drop-down-content
                        :board-labels="currentBoard.labels"
                        :task-labels="task.labels"
                        @addLabel="handleAddLabelToTask"
                        @removeLabel="handleRemoveLabelFromTask" />
                    </workspace-dropdown>
                    <action-button class="w-100" disabled>
                      <template #prefix>
                        <i class="bi bi-check2-square"></i>
                      </template>
                      Checklist
                    </action-button>
                    <action-button
                      class="w-100 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showDateDD = !showDateDD">
                      <template #prefix>
                        <i class="bi bi-clock"></i>
                      </template>
                      Dates
                    </action-button>
                    <workspace-dropdown :title="'Dates'" :show="showDateDD" @close="showDateDD = false">
                      <dates-drop-down-content :date="task.date" @dateChange="handleDateChange" />
                    </workspace-dropdown>
                    <action-button
                      class="w-100 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showAttachmentDD = !showAttachmentDD">
                      <template #prefix>
                        <i class="bi bi-paperclip"></i>
                      </template>
                      Attachment
                    </action-button>
                    <workspace-dropdown
                      id="attachment-dropdown"
                      :title="'Attach from...'"
                      class="p-0 mb-2"
                      header-classes="px-2"
                      divider-classes="mx-2"
                      :show="showAttachmentDD"
                      @close="showAttachmentDD = false">
                      <attachment-drop-down-content @close="showAttachmentDD = false" />
                    </workspace-dropdown>
                  </div>
                </div>
                <div class="taskmodal__dialog__content__body__actions__title">
                  Actions
                  <div class="d-flex flex-column gap-2 justify-content-start align-items-start">
                    <action-button
                      class="w-100 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showMoveDD = !showMoveDD">
                      <template #prefix>
                        <i class="bi bi-arrow-right"></i>
                      </template>
                      Move
                    </action-button>
                    <workspace-dropdown :title="'Move card'" :show="showMoveDD" @close="showMoveDD = false">
                      <task-card-action-form
                        title="Select destination"
                        submit-text="Move"
                        @submit="handleMoveTask"></task-card-action-form>
                    </workspace-dropdown>
                    <action-button
                      class="w-100 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      @click="showCopyDD = !showCopyDD">
                      <template #prefix>
                        <i class="bi bi-clipboard"></i>
                      </template>
                      Copy
                    </action-button>
                    <workspace-dropdown :title="'Copy card'" :show="showCopyDD" @close="showCopyDD = false">
                      <copy-card-drop-down-content
                        @close=";(showCopyDD = false), $emit('close')"></copy-card-drop-down-content>
                    </workspace-dropdown>
                    <action-button class="w-100" disabled>
                      <template #prefix>
                        <i class="bi bi-card-image"></i>
                      </template>
                      Make template
                    </action-button>
                    <action-button class="w-100" disabled>
                      <template #prefix>
                        <i class="bi bi-eye"></i>
                      </template>
                      Watch
                    </action-button>
                    <action-button class="w-100" disabled>
                      <template #prefix>
                        <i class="bi bi-archive"></i>
                      </template>
                      Archive
                    </action-button>
                    <action-button class="w-100" disabled>
                      <template #prefix>
                        <i class="bi bi-share"></i>
                      </template>
                      Share
                    </action-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ActionButton from '@/components/ActionButton.vue'
import KanbanAddForm from '@/components/KanbanAddForm.vue'
import Avatar from '@/components/Avatar.vue'
import KanbanTaskLabel from '@/components/KanbanTaskLabel.vue'
import KanbanTaskAttachment from '@/components/KanbanTaskAttachment.vue'
import KanbanTaskCommentInput from '@/components/KanbanTaskCommentInput.vue'
import KanbanTaskComment from '@/components/KanbanTaskComment.vue'
import WorkspaceDropdown from '@/components/WorkspaceDropdown.vue'
import MembersDropDownContent from '@/components/MembersDropDownContent.vue'
import LabelDropDownContent from '@/components/LabelDropDownContent.vue'
import AttachmentDropDownContent from '@/components/AttachmentDropDownContent.vue'
import TaskCardActionForm from '@/components/TaskCardActionForm.vue'
import CopyCardDropDownContent from '@/components/CopyCardDropDownContent.vue'
import DatesDropDownContent from '@/components/DatesDropDownContent.vue'
import { mapState } from 'vuex'
import { createTaskCommentService, editTaskService, moveTaskService } from '@/services/task'
import { LabelType, MemberType } from '@/types/entities'

export default defineComponent({
  components: {
    ActionButton,
    KanbanAddForm,
    Avatar,
    KanbanTaskLabel,
    KanbanTaskAttachment,
    KanbanTaskCommentInput,
    KanbanTaskComment,
    WorkspaceDropdown,
    MembersDropDownContent,
    LabelDropDownContent,
    AttachmentDropDownContent,
    TaskCardActionForm,
    CopyCardDropDownContent,
    DatesDropDownContent
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  inject: ['getBoardById', 'updateListTask', 'indexTasksByList', 'list', 'task', 'taskMembers', 'taskLabels', 'cover'],
  data () {
    return {
      showAddMemberDD: false,
      showAddLabelDD: false,
      showMembersDD: false,
      showLabelsDD: false,
      showDateDD: false,
      showAttachmentDD: false,
      showMoveDD: false,
      showCopyDD: false,
      showDescriptionBox: false
    }
  },
  methods: {
    async handleDescriptionChange (v: string) {
      const res = await editTaskService(this.$route.params.boardId, this.list._id, this.task._id, {
        description: v
      })
      if (!res.error) {
        this.showDescriptionBox = false
        this.updateListTask(res.data)
      }
    },
    async handleTaskNameChange (event: Event) {
      const target = event.target as HTMLInputElement
      const res = await editTaskService(this.$route.params.boardId, this.list._id, this.task._id, {
        task: target.value
      })
      if (!res.error) {
        this.$refs.taskNameInput.blur()
        this.updateListTask(res.data)
      }
    },
    async handleAddMemberToTask (member: MemberType) {
      const res = await editTaskService(this.$route.params.boardId, this.list._id, this.task._id, {
        members: [...this.task.members, member._id]
      })
      if (!res.error) {
        this.updateListTask(res.data)
      }
    },
    async handleRemoveMemberFromTask (member: MemberType) {
      const res = await editTaskService(this.$route.params.boardId, this.list._id, this.task._id, {
        members: this.task.members.filter((mem: string) => mem !== member._id)
      })
      if (!res.error) {
        this.updateListTask(res.data)
      }
    },
    async handleAddLabelToTask (label: LabelType) {
      const res = await editTaskService(this.$route.params.boardId, this.list._id, this.task._id, {
        labels: [...this.task.labels, label._id]
      })
      if (!res.error) {
        this.updateListTask(res.data)
      }
    },
    async handleRemoveLabelFromTask (label: LabelType) {
      const res = await editTaskService(this.$route.params.boardId, this.list._id, this.task._id, {
        labels: this.task.labels.filter((lab: string) => lab !== label._id)
      })
      if (!res.error) {
        this.updateListTask(res.data)
      }
    },
    async handleTaskComment (comment: string) {
      const res = await createTaskCommentService(this.$route.params.boardId, this.list._id, this.task._id, { comment })
      if (!res.error) {
        this.updateListTask(res.data)
      }
    },
    async handleDateChange (payload: Record<string, string>) {
      const res = await editTaskService(this.$route.params.boardId, this.list._id, this.task._id, payload)
      if (!res.error) {
        this.showDateDD = false
        this.updateListTask(res.data)
      }
    },
    async handleMoveTask (payload: Record<string, string>) {
      console.log(this.list._id, payload)
      const res = await moveTaskService(
        this.$route.params.boardId,
        payload.toBoardId,
        this.list._id,
        payload.toListId,
        this.task._id
      )
      if (!res.error) {
        this.$emit('close')
        this.showMoveDD = false
        this.$nextTick(() => {
          this.$store.commit('MOVE_CURRENTBOARD_LIST_TASK', {
            fromListId: this.list._id,
            toListId: payload.toListId,
            taskId: this.task._id
          })
        })
      }
    }
  },
  watch: {
    taskMembers (v) {
      if (!v.length) this.showAddMemberDD = false
    },
    taskLabels (v) {
      if (!v.length) this.showAddLabelDD = false
    }
  },
  computed: {
    ...mapState({
      currentBoard: 'currentBoard'
    })
  }
})
</script>

<style lang="scss" scoped>
.taskmodal {
  &.show {
    background: #000000a3;
    display: block;
  }
  .dropdown-toggle {
    &::after {
      border: 0;
      margin: 0;
      display: none;
    }
    .caret-down {
      width: 15px;
      height: 15px;
    }
  }
  &__dialog {
    &__content {
      background: #f4f5f7;
      position: relative;
      &__close {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 10px;
        top: 10px;
        font-size: var(--fs-xl);
        height: 40px;
        width: 40px;
        background: #00000014;
        color: var(--gray-clr-6);
        cursor: pointer;
        &:hover {
          background-color: #00000029;
        }
      }
      &__header {
        background: rgb(216, 224, 233) !important;
        height: 160px !important;
        overflow: hidden !important;
      }
      &__body {
        &__actions {
          &__title {
            color: var(--gray-clr-3);
            font-size: var(--fs-xsss);
            font-weight: var(--fw-bolder);
          }
          .action-button {
            padding-top: 6px !important;
            padding-bottom: 6px !important;
            padding-right: 12px !important;
            padding-left: 12px !important;
          }
        }
        &__icon {
          font-size: 23px;
          color: var(--gray-clr-6);
          font-weight: var(--fw-bolder);
        }
        &__title {
          &__labels,
          &__members {
            &__add {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 32px;
              height: 32px;
              font-size: var(--fs-lg);
              font-weight: var(--fw-bolder);
            }
          }
          input {
            background: #0000;
            font-size: var(--fs-lg);
            font-weight: var(--fw-bolder);
            border-color: transparent;
            &:focus {
              box-shadow: inset 0 0 0 2px var(--primary-clr-5);
            }
          }
          .quiet {
            color: var(--gray-clr-3);
            font-size: var(--fs-xss);
          }
          &__members,
          &__labels {
            color: var(--gray-clr-3);
            font-size: var(--fs-xsss);
            font-weight: var(--fw-bolder);
          }
        }
        &__desc,
        &__attachments,
        &__activity {
          i {
            font-size: 23px;
            color: var(--gray-clr-6);
            position: relative;
            top: -5px;
          }
          &__title {
            font-size: var(--fs-xs);
            color: var(--dark-clr-1);
            font-weight: var(--fw-bolder);
          }
        }
        &__desc {
          &__text {
            font-size: var(--fs-xss);
            color: var(--dark-clr-1);
            background: var(--dark-clr-5);
            min-height: 60px;
            max-height: 500px;
            word-break: break-all;
            text-align: left;
            overflow-y: auto;
          }
        }
        &__attachments {
          &__icon {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
