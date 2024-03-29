<template>
  <form class="taskcard-action-form d-flex flex-column gap-2">
    <p class="taskcard-action-form__title m-0 mb-0 fw-bold">{{ title }}</p>
    <div class="labelled-select rounded-2">
      <span class="label">Board</span>
      <select @change="handleBoardChange" class="board form-select border-0 shadow-none" aria-label="select board">
        <option
          v-for="board in allBoards"
          :key="board._id"
          :value="board._id"
          :selected="board._id === $route.params.boardId">
          {{ board.name }}
        </option>
      </select>
    </div>
    <div class="d-flex gap-2">
      <div class="labelled-select rounded-2">
        <span class="label">List</span>
        <select @change="handleListChange" class="form-select list border-0 shadow-none" aria-label="select list">
          <span class="label">List</span>
          <option
            v-for="boardList in selectedBoard.lists"
            :key="boardList._id"
            :value="boardList._id"
            :selected="boardList._id === list._id">
            {{ boardList.name }}
          </option>
        </select>
      </div>
      <div class="labelled-select rounded-2 w-75">
        <span class="label">Position</span>
        <select disabled class="form-select border-0 shadow-none" aria-label="select position">
          <span class="label">Position</span>
          <option value="1" selected>Position #1</option>
          <option value="2">Position #2</option>
          <option value="3">Position #3</option>
        </select>
      </div>
    </div>
    <button :disabled="disable" type="submit" @click.prevent="$emit('submit', form)" class="taskcard-action-form__submit btn-primary-1">
      {{ submitText }}
    </button>
  </form>
</template>

<script lang="ts">
import { BoardType } from '@/types/entities'
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'title'
    },
    submitText: {
      type: String,
      default: 'submit'
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  inject: ['list'],
  data () {
    return {
      form: {
        toListId: '',
        toBoardId: this.$route.params.boardId
      }
    }
  },
  mounted () {
    this.form.toListId = this.list._id
  },
  methods: {
    handleBoardChange (e: Event) {
      const target = e.target as HTMLInputElement
      this.form.toBoardId = target.value
      if (this.selectedBoard.lists.length) {
        this.form.toListId = this.selectedBoard.lists[0]._id
      }
    },
    handleListChange (e: Event) {
      const target = e.target as HTMLInputElement
      console.log(target.value)
      this.form.toListId = target.value
    }
  },
  computed: {
    ...mapState({
      workspace: 'workspace'
    }),
    allBoards () {
      return this.workspace.createdBoards.concat(this.workspace.invitedBoards)
    },
    selectedBoard () {
      return this.allBoards.find((board: BoardType) => board._id === this.form.toBoardId)
    }
  }
})
</script>

<style lang="scss" scoped>
.taskcard-action-form {
  &__title {
    font-size: var(--fs-xsss);
  }
  &__submit {
    width: fit-content;
  }
  .labelled-select {
    width: 100%;
    position: relative;
    .label {
      content: '';
      z-index: 1;
      position: absolute;
      top: 2px;
      padding-left: 7px;
      font-size: var(--fs-xsss);
      color: var(--gray-clr-3);
    }
  }
  select {
    position: relative;
    font-size: var(--fs-xss);
    height: 42px;
    line-height: 2.8;
    background: var(--dark-clr-5);
    &:hover {
      background: var(--dark-clr-3);
    }
    &:active {
      background: #e4f0f6;
      color: var(--primary-clr-5);
    }
  }
}
</style>
