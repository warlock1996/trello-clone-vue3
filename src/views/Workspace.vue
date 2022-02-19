<template>
  <div class="workspace">
    <div class="container workspace__container pt-5">
      <div class="row justify-content-start">
        <div class="col-md-auto offset-md-1">
          <workspace-side-menu class="d-none d-lg-block" />
        </div>
        <div class="col-md-8">
          <section class="py-2 mb-4 workspace__container__recent">
            <div class="d-flex align-items-end gap-2 justify-content-start mb-3 workspace__container__recent__title">
              <i class="bi bi-clock" />
              <span>Recently viewed</span>
            </div>
            <div class="workspace__container__recent_boards d-flex gap-3 flex-wrap justify-content-start my-2">
              <!-- <board />
              <board />
              <board />
              <board /> -->
            </div>
          </section>
          <section class="py-2 mb-4 workspace__container__owner">
            <div class="d-flex align-items-end gap-2 justify-content-start my-4 workspace__container__owner__title">
              <h3 class="mb-0">YOUR WORKSPACES</h3>
            </div>
            <div class="row">
              <div class="col-auto">
                <workspace-title title="Trello workspaces" :title-styles="{ fontSize: '16px' }"></workspace-title>
              </div>
              <div class="col">
                <div class="d-flex gap-2 align-items-center justify-content-end">
                  <action-button>
                    <template #prefix>
                      <i class="bi bi-kanban" />
                    </template>
                    Boards
                  </action-button>
                  <action-button>
                    <template #prefix>
                      <i class="bi bi-table" />
                    </template>
                    Workspace table
                  </action-button>
                  <action-button>
                    <template #prefix>
                      <i class="bi bi-person" />
                    </template>
                    Members
                  </action-button>
                  <action-button>
                    <template #prefix>
                      <i class="bi bi-gear" />
                    </template>
                    Settings
                  </action-button>
                </div>
              </div>
            </div>
            <div class="workspace__container__owner__boardsgrid my-2">
              <board
                v-for="b in workspaceBoards.createdBoards"
                :key="b._id"
                :name="b.name"
                @click="$router.push({ name: 'kanban', params: { boardId: b._id } })" />
            </div>
            <div class="d-flex gap-3 mt-3 flex-wrap justify-content-start my-2">
              <create-new-board />
            </div>
          </section>
          <section class="py-2 mb-4 workspace__container__guest">
            <div class="d-flex align-items-center gap-2 justify-content-start my-4 workspace__container__guest__title">
              <h3 class="mb-0">GUEST WORKSPACES</h3>
              <i class="bi bi-info-circle" />
            </div>
            <div class="d-flex flex-wrap gap-3 justify-content-start my-2">
              <board v-for="b in workspaceBoards.invitedBoards" :key="b._id" :name="b.name" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from '@/components/Board.vue'
import WorkspaceSideMenu from '@/components/WorkspaceSideMenu.vue'
import CreateNewBoard from '@/components/CreateNewBoard.vue'
import ActionButton from '@/components/ActionButton.vue'
import WorkspaceTitle from '@/components/WorkspaceTitle.vue'
import { useStore } from '@/store'
const store = useStore()
export default defineComponent({
  components: {
    Board,
    WorkspaceTitle,
    WorkspaceSideMenu,
    CreateNewBoard,
    ActionButton
  },
  computed: {
    workspaceBoards () {
      return store.workspace
    }
  }
})
</script>

<style lang="scss" scoped>
.workspace {
  min-height: 100vh;

  background: var(--page-bg);

  // page reset styles
  h3 {
    font-size: 16px;
  }
  &__container {
    position: relative;

    &__recent {
      &__title {
        color: var(--base-clr);
        font-weight: 700;
        i {
          font-size: 20px;
        }
      }
    }
    &__owner,
    &__guest {
      h3 {
        color: var(--workspaces-title-clr);
        font-weight: 700;
      }
    }
    &__owner {
      &__boardsgrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        grid-gap: 12px;
      }
      .trello {
        .symbol {
          border-radius: 3px;
          height: 32px;
          width: 32px;
          background: linear-gradient(#b22865, #cd5a91);
          font-size: 20px;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
}
</style>
