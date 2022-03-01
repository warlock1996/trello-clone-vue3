<template>
  <div class="kanban-task-attachment d-flex gap-2 justify-content-start align-items-start rounded-1 py-1">
    <img class="kanban-task-attachment__img" :src="`http://localhost:5000/static/${attachment.name}`" alt="board" />
    <div class="kanban-task-attachment__details d-flex flex-column">
      <div class="kanban-task-attachment__details__title">{{ attachment.name }}</div>
      <div class="kanban-task-attachment__details__links d-flex gap-1">
        <span>{{ attachment.createdAt }}</span>
        <span> - </span>
        <a href="#">Comment</a>
        <span> - </span>
        <a href="#">Delete</a>
        <span> - </span>
        <a href="#">Edit</a>
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
