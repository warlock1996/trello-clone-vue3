<template>
  <div class="avatar-group d-flex position-relative align-items-center justify-content-end">
    <avatar
      v-for="(member, index) in members"
      :key="member._id"
      :name="member.name"
      :size="size"
      class="avatar-group-item fw-bold m-0 position-absolute"
      :style="{ right: `${index * 15}px`, borderWidth: '1px' }"></avatar>
  </div>
</template>

<script lang="ts">
import { MemberType } from '@/types/entities'

import { defineComponent, PropType } from 'vue'
import Avatar from '@/components/Avatar.vue'
export default defineComponent({
  props: {
    members: {
      type: Array as PropType<MemberType[]>
    },
    size: {
      type: String,
      default: 'medium',
      validator: (v: string) => ['medium', 'small'].includes(v)
    }
  },
  components: {
    Avatar
  }
})
</script>

<style lang="scss" scoped>
.avatar-group {
  min-width: 80px;
  height: 28px;
  width: fit-content;
  &-item {
    top: 0;
    transition: top 0.3s;
    &:hover {
      top: -2px;
      z-index: 1;
    }
  }
}
</style>
