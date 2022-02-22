<template>
  <div class="d-flex flex-column gap-2 members-dropdown-content">
    <form>
      <input
        class="form-control members-dropdown-content__input"
        type="text"
        name="members"
        placeholder="Search members" />
    </form>
    <div class="members-dropdown-content__members">Board members</div>
    <ul class="members-dropdown-content__list p-0 m-0">
      <li
        v-for="mem in boardMembers"
        :key="mem._id"
        @click="handleMemberClick(mem)"
        class="members-dropdown-content__list__item d-flex gap-2 p-1 rounded-1 align-items-center justify-content-start">
        <avatar :name="mem.name"></avatar>
        <p class="m-0 flex-grow-1">{{ mem.name }}({{ sliceMail(mem.email) }})</p>
        <i v-if="isTaskMember(mem._id)" class="bi bi-check"></i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from '@/components/Avatar.vue'
import { MemberModel } from '@/types/entities'

export default defineComponent({
  props: {
    boardMembers: {
      type: Array as () => Array<MemberModel>,
      required: true
    },
    taskMembers: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleMemberClick (member: MemberModel) {
      if (this.isTaskMember(member._id)) this.$emit('removeMember', member)
      else this.$emit('addMember', member)
    },
    isTaskMember (id: string): boolean {
      return this.taskMembers.includes(id)
    },
    sliceMail (email: string): string {
      return email.slice(0, email.indexOf('@'))
    }
  },
  components: {
    Avatar
  }
})
</script>

<style lang="scss" scoped>
.members-dropdown-content {
  &__members {
    color: #5e6c84;
    font-size: 12px;
    font-weight: 600;
  }
  &__list {
    &__item {
      cursor: pointer;
      &:hover {
        background: #091e420a;
      }
    }
  }
}
</style>
