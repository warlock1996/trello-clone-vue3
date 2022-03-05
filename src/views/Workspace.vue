<template>
  <div class="workspace">
    <div class="container-fluid workspace__container pt-5">
      <div class="row justify-content-start">
        <div class="col-md-12 col-lg-auto offset-0 offset-xxl-2">
          <workspace-side-menu class="d-none d-xl-block" />
        </div>
        <div class="col-md-12 col-lg-6">
          <section v-if="starredBoards.length" class="py-2 mb-2 workspace__container__recent">
            <div class="d-flex align-items-end gap-2 justify-content-start mb-3 workspace__container__recent__title">
              <i class="bi bi-star" />
              <span>Starred boards</span>
            </div>
            <div class="workspace__container__recent_boards d-flex gap-2 flex-wrap justify-content-start my-2">
              <board
                v-for="b in starredBoards"
                :key="b._id"
                :name="b.name"
                :starred="b.starred"
                @click="$router.push({ name: 'kanban', params: { boardId: b._id } })" />
            </div>
          </section>
          <section class="py-2 mb-2 workspace__container__recent">
            <div class="d-flex align-items-end gap-2 justify-content-start mb-3 workspace__container__recent__title">
              <i class="bi bi-clock" />
              <span>Recently viewed</span>
            </div>
            <div class="workspace__container__recent_boards d-flex gap-2 flex-wrap justify-content-start my-2">
              <board
                v-for="b in recentBoards"
                :key="b._id"
                :name="b.name"
                :starred="b.starred"
                @click="$router.push({ name: 'kanban', params: { boardId: b._id } })" />
            </div>
          </section>
          <section class="py-2 mb-4 workspace__container__owner">
            <div class="d-flex align-items-end gap-2 justify-content-start my-4 workspace__container__owner__title">
              <h3 class="mb-0">YOUR WORKSPACES</h3>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-3 align-items-center justify-content-start">
              <div class="flex-grow-1 w-sm-100">
                <workspace-title title="Trello workspaces" :title-styles="{ fontSize: '16px' }"></workspace-title>
              </div>
              <div>
                <action-button>
                  <template #prefix>
                    <i class="bi bi-kanban" />
                  </template>
                  Boards ({{ workspace.createdBoards.length }})
                </action-button>
              </div>
              <div>
                <action-button>
                  <template #prefix>
                    <i class="bi bi-table" />
                  </template>
                  Workspace table
                </action-button>
              </div>
              <div>
                <action-button>
                  <template #prefix>
                    <i class="bi bi-person" />
                  </template>
                  Members
                </action-button>
              </div>
              <div>
                <action-button>
                  <template #prefix>
                    <i class="bi bi-gear" />
                  </template>
                  Settings
                </action-button>
              </div>
            </div>
            <div class="workspace__container__owner__boardsgrid my-2">
              <board
                v-for="b in workspace.createdBoards"
                :key="b._id"
                :name="b.name"
                :starred="b.starred"
                @click="$router.push({ name: 'kanban', params: { boardId: b._id } })" />
            </div>
            <div class="d-flex gap-2 mt-3 flex-wrap justify-content-start my-2">
              <create-new-board />
            </div>
          </section>
          <section class="py-2 mb-4 workspace__container__guest">
            <div class="d-flex align-items-center gap-2 justify-content-start my-4 workspace__container__guest__title">
              <h3 class="mb-0">GUEST WORKSPACES</h3>
              <i class="bi bi-info-circle" />
            </div>
            <div class="d-flex flex-wrap gap-3 justify-content-start my-2">
              <board
                v-for="b in workspace.invitedBoards"
                :key="b._id"
                :name="b.name"
                :starred="b.starred"
                @click="$router.push({ name: 'kanban', params: { boardId: b._id } })" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Board from '@/components/Board.vue'
import WorkspaceSideMenu from '@/components/WorkspaceSideMenu.vue'
import CreateNewBoard from '@/components/CreateNewBoard.vue'
import ActionButton from '@/components/ActionButton.vue'
import WorkspaceTitle from '@/components/WorkspaceTitle.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Board,
    WorkspaceTitle,
    WorkspaceSideMenu,
    CreateNewBoard,
    ActionButton
  },
  inject: ['starredBoards', 'recentBoards', 'workspace']
})
</script>

<style lang="scss" scoped>
.workspace {
  height: calc(100vh - 45px);
  overflow-y: auto;
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
        grid-template-columns: repeat(auto-fill, 190px);
        row-gap: 12px;
        justify-content: space-between;
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
