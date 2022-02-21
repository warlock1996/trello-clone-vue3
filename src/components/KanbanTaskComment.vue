<template>
  <div class="d-flex gap-2 justify-content-start align-items-start my-3">
    <avatar :name="'Arslan Ali'" />
    <div class="comment d-flex flex-column gap-1 w-100">
      <p class="comment__name m-0 d-flex gap-1 justify-content-start align-items-center">
        Arslan Ali <a class="comment__date" href="#">Dec 28 at 8:50 PM</a>
      </p>
      <div class="comment__text py-2 px-3 border border-1 rounded-2">some comment</div>
      <div class="comment__actions d-flex gap-1">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Avatar from '@/components/Avatar.vue'
export default defineComponent({
  props: {
    comment: {
      type: String,
      default: ''
    }
  },
  components: {
    Avatar
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
