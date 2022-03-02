<template>
  <div class="kanban-nav row py-2 px-3 g-0 align-items-stretch justify-content-start">
    <div class="col-md-7">
      <div class="d-flex gap-2 flex-wrap justify-content-start align-items-center">
        <action-button class="ab">
          <template #prefix>
            <img src="@/assets/svgs/kanban.svg" alt="kanban" />
            <!-- <i class="bi bi-kanban" /> -->
          </template>
          Board
          <template #suffix>
            <img src="@/assets/svgs/caret-down.svg" alt="caret-down" />
          </template>
        </action-button>
        <action-button class="ab">
          <input
            type="text"
            v-model="currentBoard.name"
            @keyup.enter="handleBoardNameChange"
            class="form-control form-control-sm bg-transparent border-0 shadow-0" />
        </action-button>
        <action-button class="ab" @click="handleBoardStarredChange">
          <i v-if="currentBoard.starred" class="bi bi-star-fill text-warning" />
          <i v-else class="bi bi-star" />
        </action-button>
        <action-button class="ab flex-grow-sm-1"> Trello workspace </action-button>
        <action-button class="ab">
          <i class="bi bi-lock" />
          Private
        </action-button>
        <avatar-group :members="currentBoard.members"></avatar-group>
        <invite-drop-down></invite-drop-down>
      </div>
    </div>
    <div class="col-md-5">
      <div class="d-flex gap-2 flex-wrap justify-content-end align-items-center">
        <action-button class="ab">
          <i class="bi bi-lightning-fill" />
          Automation
        </action-button>
        <action-button class="ab">
          <i class="bi bi-filter" />
          Filter
        </action-button>
        <action-button class="ab">
          <i class="bi bi-three-dots" />
          Show Menu
        </action-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ActionButton from '@/components/ActionButton.vue'
import { updateBoardService } from '@/services/board'
import InviteDropDown from '@/components/InviteDropDown.vue'
import AvatarGroup from '@/components/AvatarGroup.vue'
import { mapState } from 'vuex'

export default defineComponent({
  components: {
    ActionButton,
    InviteDropDown,
    AvatarGroup
  },
  methods: {
    async handleBoardNameChange () {
      const res = await updateBoardService(this.currentBoard._id, { name: this.currentBoard.name })
      if (!res.error) {
        this.$store.commit('SET_CURRENT_BOARD', res.data)
        this.$store.commit('UPDATE_WORKSPACE_BOARDS')
      }
    },
    async handleBoardStarredChange () {
      const res = await updateBoardService(this.currentBoard._id, { starred: !this.currentBoard.starred })
      if (!res.error) {
        this.$store.commit('SET_CURRENT_BOARD', res.data)
        this.$store.commit('UPDATE_WORKSPACE_BOARDS')
      }
    }
  },
  computed: {
    ...mapState({
      currentBoard: 'currentBoard'
    })
  }
})
</script>

<style lang="scss" scoped>
.kanban-nav {
  .ab {
    .form-control {
      min-height: 0;
      font-size: 16px;
      height: 100%;
      color: #ffffff;
      font-weight: 700;
      min-width: 50px;
      width: 100px;
    }
    color: #ffffff;
    background: #ffffff3d;
    &:hover {
      background: #ffffff52;
    }
  }
}
</style>
