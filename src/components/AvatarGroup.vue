<template>
  <div class="avatar-group d-flex flex-wrap position-relative align-items-center justify-content-end">
    <avatar
      v-for="member in memberAvatars"
      :key="member._id"
      :name="member.name"
      :size="size"
      class="avatar-group-item fw-bold m-0"></avatar>
    <action-button
      v-if="limited > 0"
      class="rounded-pill p-0 text-white fw-bold dropdown dropdown-toggle"
      data-bs-toggle="dropdown"
      @click="showMoreMembers = true">
      +{{ limited }}
    </action-button>
    <workspace-dropdown title="Members" :show="showMoreMembers" @close="showMoreMembers = false">
      <ul class="list-group">
        <li
          class="list-group-item px-0 d-flex gap-2 justify-content-start align-items-center"
          v-for="member in members"
          :key="member._id">
          <avatar :name="member.name" :size="size"></avatar>
          <span>({{ member.email }})</span>
        </li>
      </ul>
    </workspace-dropdown>
  </div>
</template>

<script lang="ts">
import { MemberType } from '@/types/entities'

import { defineComponent, PropType } from 'vue'
import Avatar from '@/components/Avatar.vue'
import ActionButton from './ActionButton.vue'
import WorkspaceDropdown from './WorkspaceDropdown.vue'
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
    ActionButton,
    WorkspaceDropdown
  },
  data () {
    return {
      showMoreMembers: false
    }
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
  .list-group-item {
      cursor: pointer;
      &:hover {
        background: var(--dark-clr-5);
      }
  }
}
</style>
