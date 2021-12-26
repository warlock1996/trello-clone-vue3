<template>
  <div class="workspace">
    <div class="container workspace__container pt-5">
      <div class="row justify-content-start g-0">
        <div class="col-md-auto offset-md-1">
          <workspace-side-menu />
        </div>
        <div class="col">
          <section class="py-2 mb-4 workspace__container__recent">
            <div
              class="d-flex align-items-end gap-2 justify-content-start mb-3 workspace__container__recent__title"
            >
              <i class="bi bi-clock" />
              <span>Recently viewed</span>
            </div>
            <div
              class="workspace__container__recent_boards d-flex gap-2 flex-wrap justify-content-between my-2"
            >
              <board />
              <board />
              <board />
              <board />
              <board />
            </div>
          </section>
          <section class="py-2 mb-5 workspace__container__owner">
            <div
              class="d-flex align-items-end gap-2 justify-content-start my-4 workspace__container__owner__title"
            >
              <h3>
                YOUR WORKSPACES
              </h3>
            </div>
            <div class="row">
              <div class="col-auto">
                <div
                  class="trello d-flex gap-2 align-items-center justify-content-between"
                >
                  <div class="symbol">
                    T
                  </div>
                  <h3 class="m-0">
                    Trello workspaces
                  </h3>
                </div>
              </div>
              <div class="col">
                <div
                  class="d-flex gap-2 align-items-center justify-content-end"
                >
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
            <div class="d-flex gap-2 flex-wrap justify-content-between my-2">
              <board />
              <board />
              <board />
              <board />
              <board />
            </div>
          </section>
          <section class="py-2 mb-5 workspace__container__guest">
            <div
              class="d-flex align-items-center gap-2 justify-content-start my-4 workspace__container__guest__title"
            >
              <h3>
                GUEST WORKSPACES
              </h3>
              <i class="bi bi-info-circle" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Board from '@/components/Board.vue'
import WorkspaceSideMenu from '@/components/WorkspaceSideMenu.vue'
import ActionButton from '@/components/ActionButton.vue'

export default defineComponent({
  components: {
    Board,
    WorkspaceSideMenu,
    ActionButton
  }
})
</script>

<style lang="scss" scoped>
.workspace {
  --page-bg: #f4f5f7;
  --base-clr: #172b4d;
  --active-clr: #0079bf;
  --list-item-clr: #091e42;
  --list-item-bg-hover: rgba(9, 30, 66, 0.08);
  --workspaces-title-clr: #5e6c84;
  --workspaces-link-bg: #091e420a;

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
