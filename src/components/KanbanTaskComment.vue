<template>
  <div class="d-flex gap-2 justify-content-start align-items-start mb-3">
    <avatar class="fw-bold" :name="commenter.name" />
    <div class="comment d-flex flex-column gap-1 w-100">
      <p class="comment__name m-0 d-flex gap-1 justify-content-start align-items-end">
        {{ commenter.name }}
        <span class="comment__date" href="#">{{ new Date(comment.createdAt).toDateString() }}</span>
      </p>
      <div class="comment__text py-2 px-3 border border-1 rounded-2">{{ comment.comment }}</div>
      <div class="comment__actions d-flex gap-1">
        <a href="#" @click.stop="handleEditComment" disabled>Edit</a>
        <a href="#" @click.stop="handleDeleteComment" disabled>Delete</a>
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
    font-size: var(--fs-xss);
    font-weight: var(--fw-bolder);
    color: var(--dark-clr-1);
  }
  &__date,
  &__actions {
    font-size: var(--fs-xsss);
    font-weight: var(--fw-semibold);
    color: var(--gray-clr-3);
    a {
      color: var(--gray-clr-3);
    }
  }
  &__text {
    font-size: var(--fs-xss);
    color: var(--dark-clr-1);
    background: var(--light-clr-1);
  }
}
</style>
