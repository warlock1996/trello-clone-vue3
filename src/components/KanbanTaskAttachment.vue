<template>
  <div class="kanban-task-attachment d-flex gap-2 justify-content-start align-items-start rounded-1 py-1">
    <img class="kanban-task-attachment__img" :src="`http://localhost:5000/static/${attachment.name}`" alt="board" />
    <div class="kanban-task-attachment__details d-flex flex-column">
      <div class="kanban-task-attachment__details__title">{{ attachment.name }}</div>
      <div class="kanban-task-attachment__details__links d-flex gap-1">
        <span>{{ attachment.createdAt }}</span>
        <span> - </span>
        <a href="#" disabled>Comment</a>
        <span> - </span>
        <a href="#" disabled>Delete</a>
        <span> - </span>
        <a href="#" disabled>Edit</a>
      </div>
      <div class="kanban-task-attachment__details__remove d-flex gap-2 mt-1">
        <i class="bi bi-card-image"></i>
        <a @click.prevent="handleMakeAttachmentCover(attachment)" class="text-underline">
          {{ attachment.isCover ? 'Remove Cover' : 'Make Cover' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { makeCoverTaskAttachmentService } from '@/services/task'
import { AttachmentType } from '@/types/entities'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    attachment: {
      type: Object as PropType<AttachmentType>,
      required: true
    }
  },
  inject: ['task', 'list', 'updateListTask'],
  methods: {
    async handleMakeAttachmentCover (attachment: AttachmentType) {
      const res = await makeCoverTaskAttachmentService(
        this.$route.params.boardId,
        this.list._id,
        this.task._id,
        attachment._id,
        !attachment.isCover
      )
      if (!res.error) {
        this.updateListTask(res.data)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.kanban-task-attachment {
  cursor: pointer;
  &:hover {
    background: var(--dark-clr-5);
  }
  &__img {
    width: 112px;
  }
  &__details {
    font-size: var(--fs-xss);
    color: var(--dark-clr-1);
    &__title {
      font-weight: var(--fw-bolder);
    }
    &__links {
      a {
        color: var(--gray-clr-3);
        &:hover {
          color: var(--dark-clr-1);
        }
      }
    }
    &__remove {
      a {
        color: var(--gray-clr-3);
        &:hover {
          color: var(--dark-clr-1);
        }
      }
    }
  }
}
</style>
