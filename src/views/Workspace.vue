<template>
  <div class="workspace">
    <div class="container workspace__container pt-5">
      <div class="row justify-content-start g-0">
        <div class="col-md-auto offset-md-1">
          <ul class="list-group px-2 workspace__container__list">
            <li class="list-group-item d-flex gap-2 border-0 px-2">
              <i class="bi bi-kanban" />
              <span>Boards</span>
            </li>
            <li class="list-group-item d-flex gap-2 border-0 px-2">
              <i class="bi bi-box-seam" />
              <span>Templates</span>
            </li>
            <li class="list-group-item d-flex gap-2 border-0 px-2">
              <i class="bi bi-house-door" />
              <span>Home</span>
            </li>
          </ul>
        </div>
        <div class="col">
          <section class="py-2 mb-5 workspace__container__recent">
            <div class="d-flex align-items-end gap-2 justify-content-start workspace__container__recent__title">
              <i class="bi bi-clock" />
              <span>Recently viewed</span>
            </div>
            <div class="workspace__container__recent_boards d-flex gap-2 flex-wrap justify-content-between my-2">
              <board />
              <board />
              <board />
              <board />
              <board />
            </div>
          </section>
          <section class="py-2 mb-5 workspace__container__owner">
            <div class="d-flex align-items-end gap-2 justify-content-start workspace__container__owner__title">
              <h3 class="my-2">
                YOUR WORKSPACES
              </h3>
            </div>
            <div class="row">
              <div class="col-auto">
                <div class="trello d-flex gap-2 align-items-center justify-content-between">
                  <div class="symbol">
                    T
                  </div>
                  <h3 class="m-0">
                    Trello workspaces
                  </h3>
                </div>
              </div>
              <div class="col">
                <div class="buttons d-flex gap-2 align-items-center justify-content-end">
                  <ul class="list-group flex-row gap-2">
                    <li class="list-group-item d-flex gap-1">
                      <i class="bi bi-kanban" />
                      Boards
                    </li>
                    <li class="list-group-item d-flex gap-2">
                      <i class="bi bi-table" />
                      Workspace table
                    </li>
                    <li class="list-group-item d-flex gap-2">
                      <i class="bi bi-person" />
                      Members
                    </li>
                    <li class="list-group-item d-flex gap-2">
                      <i class="bi bi-gear" />
                      Settings
                    </li>
                  </ul>
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
          <section class="py-2 mb-5  workspace__container__guest">
            <div class="d-flex align-items-center gap-2 justify-content-start workspace__container__guest__title">
              <h3 class="my-2">
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
import { defineComponent } from '@vue/runtime-core'
import Board from '@/components/Board.vue'

export default defineComponent({
  components: {
    Board
  }
})
</script>

<style lang="scss" scoped>
    .workspace {
        --page-bg: #f4f5f7;
        --base-clr: #172b4d;
        --active-clr: #0079BF;
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
            &__list {
                position: sticky;
                top: 50px;
                width: 240px;
                font-size: 14px;
                font-weight: 500;
                li {
                    background: transparent;
                    color: #172b4d;
                    font-weight: bold;
                    &:hover {
                        color: #091e42;
                        background: rgba(9, 30, 66, 0.08);
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    .active {
                        color: #0079BF;
                        background: #E4F0F6;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                }

            }
            &__recent {
              &__title {
                color: var(--base-clr);
                font-weight: 700;
                i {
                    font-size: 20px;
                }
              }
            }
            &__owner, &__guest {
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
                .buttons {
                    .list-group {
                        border: none;
                        font-size: 14px;
                        color: var(--base-clr);
                        i {
                          color: var(--base-clr)
                        }
                        li {
                        background: #091e420a;
                        border: none;
                        &:hover {
                            background: #091e4214;
                        }
                        }
                    }
                }
            }
        }

    }
</style>
