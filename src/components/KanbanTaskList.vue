<template>
  <div
    class="task-list card rounded-2 shadow-1 border-0 dropdown"
    :id="list._id"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    @dragover="handleDragOver"
    @drop="handleDrop"
    @dragend="handleDragEnd">
    <div class="task-list__body card-body rounded-2 p-2">
      <div class="task-list__body__title card-title d-flex justify-content-between align-items-center">
        <div class="task-list__title">
          <input
            type="text"
            class="form-control form-control-sm"
            :value="list.name"
            ref="listNameInput"
            @keyup.enter="handleListNameChange" />
        </div>
        <div class="task-list__menu">
          <i
            class="bi bi-three-dots dropdown-toggle btn-icon"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside" />
          <workspace-dropdown title="List actions" :show="showListActions" @click="showListActions = false">
            <workspace-list>
              <workspace-list-item v-for="(item, index) in listOptionItems" :key="index" @click="handleDeleteList">
                <i class="bi bi-trash"></i>
                <span>{{ item.value }}</span>
              </workspace-list-item>
            </workspace-list>
          </workspace-dropdown>
        </div>
      </div>
      <div v-if="marker" ref="task-marker" class="d-flex w-100 bg-secondary border-2 px-2 py-4"></div>
      <div class="task-list__tasks mb-2" v-if="listTasks.length">
        <kanban-task-card class="mb-1" v-for="task in listTasks" :key="task._id" :task="task" />
      </div>
      <div class="task-list__add">
        <kanban-add-task-form :listId="list._id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import KanbanAddTaskForm from '@/components/KanbanAddTaskForm.vue'
import { updateListService, deleteListService } from '@/services/list'
import { indexTasksByListService, moveTaskService } from '@/services/task'
import WorkspaceDropdown from './WorkspaceDropdown.vue'
import WorkspaceList from './WorkspaceList.vue'
import WorkspaceListItem from './WorkspaceListItem.vue'
import { TaskType } from '@/types/entities'

export default defineComponent({
  props: {
    list: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  components: {
    KanbanAddTaskForm,
    WorkspaceDropdown,
    WorkspaceList,
    WorkspaceListItem,
    KanbanTaskCard: defineAsyncComponent(() => import('@/components/KanbanTaskCard.vue'))
  },
  data () {
    return {
      listTasks: [],
      marker: false,
      showListActions: false,
      listOptionItems: [
        {
          value: 'delete list',
          slot: 'delete'
        }
      ]
    }
  },
  provide () {
    return {
      list: this.list,
      indexTasksByList: this.indexTasksByList,
      addTaskToList: this.addTaskToList,
      updateListTask: this.updateListTask
    }
  },
  methods: {
    addTaskToList (task: TaskType) {
      this.listTasks.push(task)
    },
    updateListTask (task: TaskType) {
      const taskIndex = this.listTasks.findIndex((lt: TaskType) => lt._id === task._id)
      if (taskIndex >= 0) this.listTasks[taskIndex] = task
    },
    async indexTasksByList () {
      const res = await indexTasksByListService(this.$route.params.boardId, this.list._id)
      if (!res.error) {
        this.listTasks = res.data
      }
    },
    async handleListNameChange (event: Event) {
      const target = event.target as HTMLInputElement
      const res = await updateListService(this.$route.params.boardId, this.list._id, {
        name: target.value
      })
      if (!res.error) {
        this.$refs.listNameInput.blur()
        this.$store.commit('UPDATE_CURRENTBOARD_LIST', { listId: this.list._id, data: res.data })
        this.$store.commit('UPDATE_WORKSPACE_BOARDS')
      }
    },
    async handleDeleteList () {
      const res = await deleteListService(this.$route.params.boardId, this.list._id)
      if (!res.error) {
        this.showListActions = false
        this.$store.commit('DELETE_CURRENTBOARD_LIST', this.list._id)
        this.$store.commit('UPDATE_WORKSPACE_BOARDS')
      }
    },
    handleDragEnter (e: DragEvent) {
      e.preventDefault()
    },
    handleDragOver (e: DragEvent) {
      e.preventDefault()
    },
    handleDrop (e: DragEvent) {
      e.preventDefault()
      const data = JSON.parse(e.dataTransfer.getData('text/plain'))
      this.moveTaskOnDrop(data)
    },
    handleDragEnd (e: DragEvent) {
      e.preventDefault()
    },
    async moveTaskOnDrop (data: Record<string, string>) {
      const res = await moveTaskService(
        this.$route.params.boardId,
        this.$route.params.boardId,
        data.listId,
        this.list._id,
        data.taskId
      )
      if (!res.error) {
        this.$store.commit('MOVE_CURRENTBOARD_LIST_TASK', {
          fromListId: data.listId,
          toListId: this.list._id,
          taskId: data.taskId
        })
      }
    }
  },
  watch: {
    'list.tasks': {
      handler () {
        this.indexTasksByList()
      },
      immediate: true
    }
  }
})
</script>

<style lang="scss" scoped>
.task-list {
  max-height: 100%;
  background: #ebecf0;
  &__body {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 280px;
    overflow: auto;
    background: #ebecf0;
    &__title {
      input {
        font-weight: var(--fw-bold);
        background: transparent;
        border: none;
        &:focus {
          box-shadow: inset 0 0 0 2px var(--primary-clr-5);
        }
      }
    }
  }
  &__tasks {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 8px !important;
      border-radius: 5px;
      background: var(--bg-dynamic);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--bg-dynamic);
    }
  }
}
</style>
