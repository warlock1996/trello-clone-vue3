<template>
  <div class="d-flex gap-2 justify-content-start align-items-start my-1">
    <avatar :name="commenter.name" />
    <div class="comment d-flex flex-column gap-1 w-100">
      <p class="comment__name m-0 d-flex gap-1 justify-content-start align-items-end">
        {{ commenter.name }}
        <span class="comment__date" href="#">{{ new Date(comment.createdAt).toDateString() }}</span>
      </p>
      <div class="comment__text py-2 px-3 border border-1 rounded-2">{{ comment.comment }}</div>
      <div class="comment__actions d-flex gap-1">
        <a href="#" @click.stop="handleEditComment">Edit</a>
        <a href="#" @click.stop="handleDeleteComment">Delete</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Avatar from '@/components/Avatar.vue'
import { CommentType, MemberType } from '@/types/entities'
import { mapState } from 'vuex'
export default defineComponent({
  props: {
    comment: {
      type: Object as PropType<CommentType>
    }
  },
  inject: ['taskMembers'],
  components: {
    Avatar
  },
  methods: {
    handleEditComment () {
      // write code to edit comment
    },
    handleDeleteComment () {
      // write code to delete comment
    }
  },
  computed: {
    ...mapState(['currentBoard']),
    commenter () {
      return this.currentBoard.members.find((tm: MemberType) => tm._id === this.comment.creator)
    }
  }
})
</script>

<style lang="scss" scoped>
.comment {
  &__name {
    font-size: 14px;
    font-weight: 600;
    color: #172b4d;
  }
  &__date,
  &__actions {
    font-size: 12px;
    font-weight: normal;
    color: #5e6c84;
    a {
      color: #5e6c84;
    }
  }
  &__text {
    font-size: 14px;
    color: #172b4d;
    background: #ffffff;
  }
}
</style>
