<template>
  <div class="task-list-container d-flex align-items-start justify-content-start gap-2 px-3 py-2">
    <kanban-task-list v-for="(list, index) in currentBoard.lists" :key="index" :list="list" />
    <div class="task-list-container__form p-1 rounded-1" :class="{ bg: showAddForm }">
      <action-button
        v-if="!showAddForm"
        @click="showAddForm = true"
        class="task-list__form__btn p-2 w-100 justify-content-start">
        <template #prefix>
          <i class="bi bi-plus"></i>
        </template>
        Add another list
      </action-button>
      <kanban-add-form
        v-else
        :input-type="'input'"
        :button-text="'Add list'"
        :show-sub-menu="false"
        @close="showAddForm = false"
        @submit="handleCreateList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KanbanTaskList from '@/components/KanbanTaskList.vue'
import KanbanAddForm from '@/components/KanbanAddForm.vue'
import ActionButton from './ActionButton.vue'
import { createListService } from '@/services/list'
import { mapState } from 'vuex'
export default defineComponent({
  components: {
    KanbanTaskList,
    KanbanAddForm,
    ActionButton
  },
  data () {
    return {
      showAddForm: false
    }
  },
  methods: {
    async handleCreateList (name: string) {
      this.showAddForm = false
      const res = await createListService(this.$route.params.boardId, { name: name })
      if (!res.error) {
        this.$store.commit('ADD_CURRENTBOARD_LIST', res.data)
        this.$store.commit('UPDATE_WORKSPACE_BOARDS')
      }
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
.task-list-container {
  width: fit-content;
  height: 100%;
  &__form {
    width: 280px;
    background: #ffffff3d;
    &.bg {
      background: #ebecf0 !important;
    }
    &:hover {
      background: #ffffff52;
    }
    &__btn {
      font-size: 14px;
      color: #ffffff;
      &:hover {
        background: transparent;
      }
    }
  }
}
</style>
