<template>
  <div
    class="taskmodal modal fade"
    id="taskCardModal"
    aria-labelledby="taskCardModal"
    aria-hidden="true"
  >
    <div class="taskmodal__dialog modal-dialog">
      <div class="taskmodal__dialog__content modal-content border-0 rounded-1">
        <div
          class="taskmodal__dialog__content__header modal-header d-flex justify-content-center"
          role="button"
        >
          <img
            src="@/assets/images/google.svg"
            class="img-fluid w-50"
            alt="board"
          />
          <i
            class="bi bi-x taskmodal__dialog__content__header__close rounded-circle"
            role="button"
            data-bs-dismiss="modal"
          ></i>
        </div>
        <div class="taskmodal__dialog__content__body modal-body">
          <div class="row mb-1">
            <div class="col">
              <section
                class="d-flex gap-2 justify-content-start align-items-start"
              >
                <i
                  class="taskmodal__dialog__content__body__icon bi bi-card-heading"
                ></i>
                <div
                  class="taskmodal__dialog__content__body__title flex-grow-1"
                >
                  <input
                    value="some title"
                    type="text"
                    class="form-control form-control-sm py-0 d-block w-100 mb-1 shadow-none"
                  />
                  <div class="quiet px-2">
                    in list <u>Some list</u> <i class="bi bi-eye"></i>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <section
                class="taskmodal__dialog__content__body__members__labels d-flex flex-wrap gap-2 justify-content-start align-items-start my-4 ps-4 px-2"
              >
                <div class="taskmodal__dialog__content__body__title__members">
                  <p class="mb-1">Members</p>
                  <div class="d-flex flex-wrap gap-1 align-items-center">
                    <avatar
                      v-for="n in fakeMembers"
                      :key="n"
                      :name="n"
                    ></avatar>
                    <action-button
                      class="taskmodal__dialog__content__body__title__members__add rounded-circle dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i class="bi bi-plus"></i>
                    </action-button>
                    <workspace-dropdown title="Members">
                      <members-drop-down-content></members-drop-down-content>
                    </workspace-dropdown>
                  </div>
                  <!-- member avatars and add icon -->
                </div>
                <div class="taskmodal__dialog__content__body__title__labels">
                  <p class="mb-1">Labels</p>
                  <div class="d-flex flex-wrap gap-1 align-items-center">
                    <kanban-task-label
                      v-for="n in fakeLabels"
                      :key="n"
                      :bg-color="n"
                    />
                    <action-button
                      class="taskmodal__dialog__content__body__title__labels__add dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i class="bi bi-plus"></i>
                    </action-button>
                    <workspace-dropdown title="Labels">
                      <label-drop-down-content></label-drop-down-content>
                    </workspace-dropdown>
                  </div>
                  <!-- labels and add icon -->
                </div>
              </section>
              <section
                class="taskmodal__dialog__content__body__desc d-flex gap-2 justify-content-start align-items-start my-3"
              >
                <i class="bi bi-justify-left"></i>
                <div class="w-100">
                  <p class="taskmodal__dialog__content__body__desc__title">
                    Description
                  </p>
                  <div class="w-100">
                    <p
                      class="taskmodal__dialog__content__body__desc__text px-3 py-2 rounded-1"
                      role="button"
                      v-if="!showDescriptionBox"
                      @click="showDescriptionBox = true"
                    >
                      Add a more detailed description...
                    </p>
                    <kanban-add-form
                      v-else
                      input-type="textarea"
                      button-text="Save"
                      button-classes="btn-primary-2"
                      text-area-placeholder="Add a more detailed description..."
                      :show-sub-menu="true"
                      :text-area-styles="{
                        padding: '10px',
                        boxShadow: 'inset 0 0 0 2px #0079bf',
                        height: '120px',
                      }"
                      @close="showDescriptionBox = false"
                      @submit="showDescriptionBox = false"
                    ></kanban-add-form>
                  </div>
                </div>
              </section>
              <section
                class="taskmodal__dialog__content__body__attachments d-flex gap-2 justify-content-start align-items-start my-3"
              >
                <i
                  class="taskmodal__dialog__content__body__attachments__icon bi bi-paperclip"
                ></i>
                <div class="w-100">
                  <p
                    class="taskmodal__dialog__content__body__attachments__title"
                  >
                    Attachments
                  </p>
                  <div class="w-100">
                    <kanban-task-attachment></kanban-task-attachment>
                  </div>
                </div>
              </section>
              <section class="taskmodal__dialog__content__body__activity my-3">
                <div
                  class="d-flex gap-2 justify-content-start align-items-start"
                >
                  <i class="bi bi-list-ul"></i>
                  <div class="w-100 flex-grow-1">
                    <p
                      class="taskmodal__dialog__content__body__activity__title"
                    >
                      Activity
                    </p>
                  </div>
                </div>
                <div
                  class="d-flex gap-2 justify-content-start align-items-start"
                >
                  <avatar :name="'Arslan Ali'" />
                  <kanban-task-comment-input></kanban-task-comment-input>
                </div>
                <div
                  class="d-flex gap-2 justify-content-start align-items-start my-3"
                >
                  <avatar :name="'Arslan Ali'" />
                  <kanban-task-comment></kanban-task-comment>
                </div>
              </section>
            </div>
            <div class="col-md-3">
              <div
                class="taskmodal__dialog__content__body__actions d-flex flex-column gap-4 justify-content-between"
              >
                <div class="taskmodal__dialog__content__body__actions__title">
                  Add to card
                  <div
                    class="d-flex flex-column gap-2 justify-content-start align-items-start"
                  >
                    <action-button
                      class="w-100 py-2 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <template #prefix>
                        <i class="bi bi-person"></i>
                        Members
                      </template>
                    </action-button>
                    <workspace-dropdown :title="'Members'">
                      <members-drop-down-content />
                    </workspace-dropdown>
                    <action-button
                      class="w-100 py-2 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <template #prefix>
                        <i class="bi bi-tag"></i>
                        Labels
                      </template>
                    </action-button>
                    <workspace-dropdown :title="'Labels'">
                      <label-drop-down-content />
                    </workspace-dropdown>
                    <action-button class="w-100 py-2">
                      <template #prefix>
                        <i class="bi bi-check2-square"></i>
                      </template>
                      Checklist
                    </action-button>
                    <action-button
                      class="w-100 py-2 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <template #prefix>
                        <i class="bi bi-clock"></i>
                      </template>
                      Dates
                    </action-button>
                    <workspace-dropdown :title="'Dates'">
                      <dates-drop-down-content />
                    </workspace-dropdown>
                    <action-button
                      class="w-100 py-2 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <template #prefix>
                        <i class="bi bi-paperclip"></i>
                      </template>
                      Attachment
                    </action-button>
                    <workspace-dropdown
                      :title="'Attach from...'"
                      class="p-0 mb-2"
                    >
                      <attachment-drop-down-content />
                    </workspace-dropdown>
                  </div>
                </div>
                <div class="taskmodal__dialog__content__body__actions__title">
                  Actions
                  <div
                    class="d-flex flex-column gap-2 justify-content-start align-items-start"
                  >
                    <action-button
                      class="w-100 py-2 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <template #prefix>
                        <i class="bi bi-arrow-right"></i>
                      </template>
                      Move
                    </action-button>
                    <workspace-dropdown :title="'Move card'">
                      <task-card-action-form
                        title="Select destination"
                        submit-text="Move"
                      ></task-card-action-form>
                    </workspace-dropdown>
                    <action-button
                      class="w-100 py-2 dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <template #prefix>
                        <i class="bi bi-clipboard"></i>
                      </template>
                      Copy
                    </action-button>
                    <workspace-dropdown :title="'Copy card'">
                      <copy-card-drop-down-content></copy-card-drop-down-content>
                    </workspace-dropdown>
                    <action-button class="w-100 py-2">
                      <template #prefix>
                        <i class="bi bi-card-image"></i>
                      </template>
                      Make template
                    </action-button>
                    <action-button class="w-100 py-2">
                      <template #prefix>
                        <i class="bi bi-eye"></i>
                      </template>
                      Watch
                    </action-button>
                    <action-button class="w-100 py-2">
                      <template #prefix>
                        <i class="bi bi-archive"></i>
                      </template>
                      Archive
                    </action-button>
                    <action-button class="w-100 py-2">
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
import WorkspaceDropdown from '@/components/WorkspaceDropown.vue'
import MembersDropDownContent from '@/components/MembersDropDownContent.vue'
import LabelDropDownContent from '@/components/LabelDropDownContent.vue'
import AttachmentDropDownContent from '@/components/AttachmentDropDownContent.vue'
import TaskCardActionForm from '@/components/TaskCardActionForm.vue'
import CopyCardDropDownContent from '@/components/CopyCardDropDownContent.vue'
import DatesDropDownContent from '@/components/DatesDropDownContent.vue'

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
  data () {
    return {
      showDescriptionBox: false,
      fakeMembers: [
        'Arslan Ali',
        'Usman Ahmed',
        'Ali Raza',
        'Jamal Sabir',
        'Taufeeq Zia',
        'Noman Aijaz',
        'Ahraf Aijaz',
        'Arslan Ali',
        'Usman Ahmed',
        'Ali Raza',
        'Jamal Sabir',
        'Taufeeq Zia',
        'Noman Aijaz',
        'Ahraf Aijaz',
        'Arslan Ali',
        'Usman Ahmed',
        'Ali Raza',
        'Jamal Sabir',
        'Taufeeq Zia',
        'Noman Aijaz',
        'Ahraf Aijaz'
      ],
      fakeLabels: ['bg-primary', 'bg-secondary', 'bg-info', 'bg-dark']
    }
  }
})
</script>

<style lang="scss" scoped>
.taskmodal {
  &.show {
    background: #000000a3;
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
      &__header {
        position: relative;
        background: rgb(216, 224, 233) !important;
        height: 150px !important;
        overflow: hidden !important;
        &__close {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          right: 10px;
          top: 10px;
          font-size: 24px;
          height: 40px;
          width: 40px;
          background: #00000014;
          color: #42526e;
          &:hover {
            background-color: #00000029;
          }
        }
      }
      &__body {
        &__actions {
          &__title {
            color: #5e6c84;
            font-size: 12px;
            font-weight: 600;
          }
        }
        &__icon {
          font-size: 23px;
          color: #42526e;
          font-weight: 600;
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
              font-size: 20px;
              font-weight: bolder;
            }
          }
          input {
            background: #0000;
            font-size: 20px;
            font-weight: 600;
            border-color: transparent;
            &:focus {
              box-shadow: inset 0 0 0 2px #0079bf;
            }
          }
          .quiet {
            color: #5e6c84;
            font-size: 14px;
          }
          &__members,
          &__labels {
            color: #5e6c84;
            font-size: 12px;
            font-weight: 600;
          }
        }
        &__desc,
        &__attachments,
        &__activity {
          i {
            font-size: 23px;
            color: #42526e;
            position: relative;
            top: -5px;
          }
          &__title {
            font-size: 16px;
            color: #172b4d;
            font-weight: 600;
          }
        }
        &__desc {
          &__text {
            font-size: 14px;
            color: #172b4d;
            background: #091e420a;
            height: 60px;
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
