<template>
  <div class="move-card-dropdown-content d-flex flex-column gap-2">
    <p class="move-card-dropdown-content__title m-0 fw-bold">
      Select destination
    </p>
    <select class="form-select border-0 shadow-none" aria-label="select board">
      <option value="1" selected>Board #1</option>
      <option value="2">Board #2</option>
      <option value="3">Board #3</option>
    </select>
    <div class="move-card-dropdown-content__boxes d-flex gap-2">
      <select class="form-select border-0 shadow-none" aria-label="select list">
        <option value="1" selected>List #1</option>
        <option value="2">List #2</option>
        <option value="3">List #3</option>
      </select>
       <select class="form-select border-0 shadow-none" aria-label="select position">
        <option value="1" selected>Position #1</option>
        <option value="2">Position #2</option>
        <option value="3">Position #3</option>
      </select>
    </div>
    <div class="move-card-dropdown-content__submit btn rounded-1 text-white py-1 px-3">
        Move
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.move-card-dropdown-content {
  &__title {
    font-size: 12px;
  }
  &__submit {
      font-size: 14px;
      width: 80px;
      background: #0079bf;
  }
  select {
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
