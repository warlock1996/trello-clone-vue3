<template>
  <div class="invitedd dropdown">
    <action-button
      class="invitedd__toggle bg-white dropdown-toggle"
      data-bs-toggle="dropdown"
      data-bs-auto-close="inside">
      <i class="bi bi-person-plus" />
      Invite
    </action-button>
    <workspace-dropdown title="Invite to board" class="invitedd__dropdown">
      <div class="invitedd__dropdown__content d-flex flex-column justify-content-between">
        <form class="dropdown">
          <input v-model="search" type="search" class="form-control" placeholder="Email address or name" />

          <workspace-dropdown
            v-if="search.length"
            ref="dl_dropdown"
            header-classes="d-none"
            divider-classes="d-none"
            class="pt-3 border"
            :class="{ show: searchedItems.length }"
            :root-styles="{
              width: '100%',
              minWidth: '100%',
              height: '200px',
              overflowY: 'scroll'
            }">
            <data-list :items="searchedItems" @dataItemClick="handleChooseMember">
              <template #email="item">
                <div class="d-flex gap-2">
                  <avatar :name="'Arslan Ali'" />
                  <span>
                    {{ item.email }}
                  </span>
                </div>
              </template>
            </data-list>
          </workspace-dropdown>
        </form>
        <!-- selected members for invite max 5 -->
        <data-list
          class="mt-2 flex-grow-1"
          style="height: 200px; overflow-y: scroll"
          :items="chosenMembers"
          @dataItemClick="handleChooseMember">
          <template #email="item">
            <div class="d-flex gap-2 align-items-center justify-content-start">
              <avatar :name="'Arslan Ali'" />
              <span class="flex-grow-1">
                {{ item.email }}
              </span>
              <i class="bi bi-x" @click.stop="handleRemoveChosen(item)">X</i>
            </div>
          </template>
        </data-list>
        <action-button class="btn-primary-1 justify-content-center border-0 px-3 py-2">Send invitation</action-button>
      </div>
    </workspace-dropdown>
  </div>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import WorkspaceDropdown from '@/components/WorkspaceDropdown.vue'
import Avatar from '@/components/Avatar.vue'
import DataList from '@/components/WorkspaceList.vue'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: {
    ActionButton,
    WorkspaceDropdown,
    DataList,
    Avatar
  },
  data () {
    return {
      search: '',
      chosenMembers: [],
      items: [
        { email: 'post.arslan@outlook.com', slot: 'email' },
        { email: 'post.arslan@gmail.com', slot: 'email' },
        { email: 'post.arslan@hotmail.com', slot: 'email' },
        { email: 'post.arslan@yahoo.com', slot: 'email' },
        { email: 'post.arslan@msx.com', slot: 'email' },
        { email: 'post.arslan@asd.com', slot: 'email' }
      ]
    }
  },
  methods: {
    handleChooseMember (payload) {
      this.items = this.items.filter((i) => i.email !== payload.email)
      if (this.chosenMembers.findIndex((cm) => cm.email === payload.email) === -1) {
        this.chosenMembers.push(payload)
      }
    },
    handleRemoveChosen (payload) {
      this.chosenMembers = this.chosenMembers.filter(cm => cm.email !== payload.email)
      if (this.items.findIndex((cm) => cm.email === payload.email) === -1) {
        this.items.push(payload)
      }
    }
  },
  computed: {
    searchedItems () {
      if (this.search.length) return this.items.filter((i) => i.email.indexOf(this.search) !== -1)
      return []
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
