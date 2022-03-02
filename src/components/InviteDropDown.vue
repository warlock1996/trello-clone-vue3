<template>
  <div class="invitedd dropdown">
    <action-button
      id="invite-ab"
      class="invitedd__toggle bg-white dropdown-toggle"
      data-bs-toggle="dropdown"
      data-bs-auto-close="false"
      @click="inviteDD = !inviteDD">
      <i class="bi bi-person-plus" />
      Invite
    </action-button>
    <workspace-dropdown :show="inviteDD" @close="inviteDD = false" title="Invite to board" class="invitedd__dropdown">
      <div class="invitedd__dropdown__content d-flex flex-column justify-content-between">
        <form class="dropdown">
          <input
            v-model="search"
            type="search"
            class="form-control"
            placeholder="Email address or name"
            @input="handleSearch" />

          <workspace-dropdown
            v-if="search.length"
            ref="dl_dropdown"
            header-classes="d-none"
            divider-classes="d-none"
            class="pt-3 border"
            :show="searchedMembers.length ? true : false"
            :root-styles="{
              width: '100%',
              minWidth: '100%',
              maxHeight: '200px',
              overflowY: 'scroll'
            }">
            <workspace-list>
              <workspace-list-item v-for="mem in searchedMembers" :key="mem._id" @click="handleChooseMember(mem)">
                <avatar :name="mem.name" />
                <span>{{ mem.email }}</span>
              </workspace-list-item>
            </workspace-list>
          </workspace-dropdown>
        </form>
        <!-- selected members for invite max 5 -->
        <workspace-list class="mt-2 flex-grow-1" style="height: 200px; overflow-y: scroll">
          <workspace-list-item v-for="mem in chosenMembers" :key="mem._id">
            <avatar :name="mem.name" />
            <span class="flex-grow-1"> ({{ mem.email }}) </span>
            <i class="bi bi-x" @click.stop="handleRemoveChosen(mem)"></i>
          </workspace-list-item>
        </workspace-list>
        <action-button
          @click="handleSendInvitation"
          :disabled="chosenMembers.length < 1 || disabledSendInvite"
          class="btn-primary-1 justify-content-center border-0 px-3 py-2"
          >Send invitation</action-button
        >
      </div>
    </workspace-dropdown>
  </div>
</template>

<script lang="ts">
import ActionButton from '@/components/ActionButton.vue'
import WorkspaceDropdown from '@/components/WorkspaceDropdown.vue'
import Avatar from '@/components/Avatar.vue'
import WorkspaceList from '@/components/WorkspaceList.vue'
import WorkspaceListItem from '@/components/WorkspaceListItem.vue'
import { defineComponent } from '@vue/runtime-core'
import { inviteMemberService, searchMemberService } from '@/services/board'
import { MemberType } from '@/types/entities'
export default defineComponent({
  components: {
    ActionButton,
    WorkspaceDropdown,
    WorkspaceList,
    WorkspaceListItem,
    Avatar
  },
  data () {
    return {
      search: '',
      chosenMembers: [],
      searchedMembers: [],
      inviteDD: false,
      disabledSendInvite: true
    }
  },
  methods: {
    async handleSearch () {
      if (!this.search.length) return
      const res = await searchMemberService(this.$route.params.boardId, this.search)
      if (!res.error) {
        this.searchedMembers = res.data
      }
    },
    async handleSendInvitation () {
      this.disabledSendInvite = true
      const res = await inviteMemberService(
        this.$route.params.boardId,
        this.chosenMembers.map((mem: MemberType) => mem.email)
      )
      if (!res.error) {
        this.search = ''
        this.chosenMembers = []
        this.inviteDD = false
      }
    },
    handleChooseMember (payload: MemberType) {
      this.searchedMembers = this.searchedMembers.filter((i: MemberType) => i.email !== payload.email)
      if (this.chosenMembers.findIndex((cm: MemberType) => cm.email === payload.email) === -1) {
        this.chosenMembers.push(payload)
        this.disabledSendInvite = false
      }
    },
    handleRemoveChosen (payload: MemberType) {
      this.chosenMembers = this.chosenMembers.filter((cm: MemberType) => cm.email !== payload.email)
      if (this.searchedMembers.findIndex((cm: MemberType) => cm.email === payload.email) === -1) {
        this.searchedMembers.push(payload)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.invitedd {
  &__dropdown {
    &__content {
      height: 300px;
    }
  }
}
</style>
