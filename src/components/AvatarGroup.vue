<template>
  <div class="avatar-group d-flex flex-wrap position-relative align-items-center justify-content-end">
    <avatar
      v-for="member in memberAvatars"
      :key="member._id"
      :name="member.name"
      :size="size"
      class="avatar-group-item fw-bold m-0 border-1"></avatar>
    <action-button v-if="limited > 0" class="rounded-pill p-0 text-white fw-bold"> +{{ limited }} </action-button>
  </div>
</template>

<script lang="ts">
import { MemberType } from '@/types/entities'

import { defineComponent, PropType } from 'vue'
import Avatar from '@/components/Avatar.vue'
import ActionButton from './ActionButton.vue'
export default defineComponent({
  props: {
    members: {
      type: Array as PropType<MemberType[]>,
      default: (): Array<[]> => []
    },
    size: {
      type: String,
      default: 'small',
      validator: (v: string) => ['medium', 'small'].includes(v)
    },
    limit: {
      type: Number,
      default: 20
    }
  },
  components: {
    Avatar,
    ActionButton
  },
  computed: {
    memberAvatars () {
      return this.members.slice(0, this.limit)
    },
    limited () {
      return this.members.length - this.limit
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar-group {
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
