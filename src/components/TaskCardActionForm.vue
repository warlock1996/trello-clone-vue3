<template>
  <form class="taskcard-action-form d-flex flex-column gap-2">
    <p class="taskcard-action-form__title m-0 mb-0 fw-bold">{{ title }}</p>
    <div class="labelled-select rounded-2">
      <span class="label">Board</span>
      <select
        class="board form-select border-0 shadow-none"
        aria-label="select board"
      >
        <option value="1" selected>Board #1</option>
        <option value="2">Board #2</option>
        <option value="3">Board #3</option>
      </select>
    </div>
    <div class="d-flex gap-2">
      <div class="labelled-select rounded-2">
        <span class="label">List</span>
        <select
          class="form-select list border-0 shadow-none"
          aria-label="select list"
        >
          <span class="label">List</span>
          <option value="1" selected>List #1</option>
          <option value="2">List #2</option>
          <option value="3">List #3</option>
        </select>
      </div>
      <div class="labelled-select rounded-2 w-75">
        <span class="label">Position</span>
        <select
          class="form-select border-0 shadow-none"
          aria-label="select position"
        >
          <span class="label">Position</span>
          <option value="1" selected>Position #1</option>
          <option value="2">Position #2</option>
          <option value="3">Position #3</option>
        </select>
      </div>
    </div>
    <button
      type="submit"
      @click="null"
      class="taskcard-action-form__submit btn-primary-1"
    >
      {{ submitText }}
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'title'
    },
    submitText: {
      type: String,
      default: 'submit'
    }
  }
})
</script>

<style lang="scss" scoped>
.taskcard-action-form {
  &__title {
    font-size: 12px;
  }
  &__submit {
    width: fit-content;
  }
  .labelled-select {
    width: 100%;
    position: relative;
    .label {
      content: "";
      z-index: 1;
      position: absolute;
      top: 2px;
      padding-left: 7px;
      font-size: 12px;
      color: #5e6c84;
    }
  }
  select {
    position: relative;
    font-size: 14px;
    height: 42px;
    line-height: 2.8;
    background: #091e420a;
    &:hover {
      background: #091e4214;
    }
    &:active {
      background: #e4f0f6;
      color: #0079bf;
    }
  }
}
</style>
