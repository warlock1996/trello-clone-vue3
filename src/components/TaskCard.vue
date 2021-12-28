<template>
  <div class="task-card card rounded-2" role="button">
    <div class="task-card__cover">
      <img src="@/assets/images/board.png" class="img-fluid" alt="board" />
    </div>
    <div
      class="task-card__body card-body rounded-2 py-1 px-2"
      @mouseover="showEditIcon = true"
      @mouseout="showEditIcon = false"
    >
      <i
        v-show="showEditIcon"
        class="bi bi-pencil task-card__body__editicon"
      ></i>
      <div
        class="task-card__body__labels d-flex flex-wrap gap-2 justify-content-start align-items-center mb-1"
      >
        <span class="bg-primary px-4 py-2 rounded-2"></span>
        <span class="bg-danger px-4 py-2 rounded-2"></span>
        <span class="bg-warning px-4 py-2 rounded-2"></span>
        <span class="bg-warning px-4 py-2 rounded-2"></span>
        <span class="bg-warning px-4 py-2 rounded-2"></span>
      </div>
      <div
        class="task-card__body__title card-title d-flex justify-content-between align-items-center mb-1"
      >
        <span> {{ task.title }} </span>
      </div>
      <div
        class="task-card__body__actions d-flex flex-wrap gap-3 justify-content-start mb-1"
      >
        <div
          class="task-card__body__actions__subscribe d-flex gap-1 justify-content-start align-items-center"
        >
          <i class="bi bi-eye"></i>
        </div>
        <div
          class="task-card__body__actions__description d-flex gap-1 justify-content-start align-items-center"
        >
          <i class="bi bi-justify-left"></i>
        </div>
        <div
          class="task-card__body__actions__comments d-flex gap-1 justify-content-start align-items-center"
        >
          <i class="bi bi-chat"></i>
        </div>
        <div
          class="task-card__body__actions__attachments d-flex gap-1 justify-content-start align-items-center flex-grow-1"
        >
          <i class="bi bi-paperclip"></i>
          <span>
            {{ task.attachments }}
          </span>
        </div>
        <div
          class="task-card__body__actions__members d-flex gap-1 justify-content-start align-items-center"
        >
          <!-- members avatars -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showEditIcon: false
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
      &:hover {
        background: #091e4214;
      }
    }
    &__actions {
      font-size: 14px;
      color: #6b778c;
      i {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
</style>
