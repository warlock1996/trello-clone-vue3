<template>
  <div class="kanban-task-attachment d-flex gap-2 justify-content-start align-items-start rounded-1 py-1">
    <img class="kanban-task-attachment__img" src="@/assets/images/board.png" alt="board" />
    <div class="kanban-task-attachment__details d-flex flex-column">
      <div class="kanban-task-attachment__details__title">Screenshot from 2021-12-29 09-18-57.png</div>
      <div class="kanban-task-attachment__details__links d-flex gap-1">
        <span>Added 40 minutes ago</span>
        <span>-</span>
        <a href="#">Comment</a>
        <span>-</span>
        <a href="#">Delete</a>
        <span>-</span>
        <a href="#">Edit</a>
      </div>
      <div class="kanban-task-attachment__details__remove">
        <i class="bi bi-card-image"></i> <a href="#"> Remove Cover </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.kanban-task-attachment {
  cursor: pointer;
  &:hover {
    background: #091e420a;
  }
  &__img {
    width: 112px;
  }
  &__details {
    font-size: 14px;
    color: #172b4d;
    &__title {
      font-weight: 600;
    }
    &__links {
      a {
        color: #5e6c84;
        &:hover {
          color: #172b4d;
        }
      }
    }
    &__remove {
      a {
        color: #5e6c84;
        &:hover {
          color: #172b4d;
        }
      }
    }
  }
}
</style>
