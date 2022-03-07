<template>
  <nav class="workspacenav navbar navbar-expand-md py-1">
    <div class="workspacenav__container container-fluid justify-content-end">
      <button
        class="workspacenav__container__collapser navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon shadow-0">
          <i class="bi bi-three-dots text-white" />
        </span>
      </button>
      <div id="navbarNav" class="workspacenav__container__navbar__nav collapse navbar-collapse">
        <ul class="workspacenav__container__navbar__nav__list navbar-nav align-items-center flex-grow-1 gap-2">
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start">
            <a class="nav-link text-white p-0" aria-current="page" href="#">
              <img src="@/assets/svgs/switch.svg" alt="switch" width="20" height="20" />
            </a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start">
            <a class="nav-link text-white" aria-current="page" href="#">
              <img class="workspacenav__container__img" src="@/assets/images/workspace-logo.gif" alt="workspace-logo" />
            </a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              data-bs-offset="20,20"
              data-bs-auto-close="false"
              @click="showWorkspaceDD = true"
              >Workspaces
              <img class="caret-down" src="@/assets/svgs/caret-down.svg" alt="caret-down" />
            </a>
            <workspace-dropdown :title="'Workspaces'" :show="showWorkspaceDD" @close="showWorkspaceDD = false">
              <div class="dropdown-header">
                <div class="my-1">Current workspace</div>
              </div>
              <div class="ws px-2 dropdown-item" role="button">
                <workspace-title :title="'Trello workspace'" />
              </div>
              <div class="dropdown-header my-1">Your Workspaces</div>
              <div class="yws px-2 dropdown-item" role="button">
                <workspace-title :title="'Trello workspace'" />
              </div>
              <div class="dropdown-header my-1">Guest Workspaces</div>
              <div class="yws px-2 dropdown-item" role="button">
                <workspace-title :title="'Guest workspace'" />
              </div>
            </workspace-dropdown>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              @click.prevent="showRecentDropDown = true">
              Recent
              <img class="caret-down" src="@/assets/svgs/caret-down.svg" alt="caret-down" />
            </a>
            <workspace-dropdown :title="'Recent boards'" :show="showRecentDropDown" @close="showRecentDropDown = false">
              <recent-drop-down-content :recent-boards="recentBoards"> </recent-drop-down-content>
            </workspace-dropdown>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              @click.prevent="showStarredDropDown = true">
              Starred
              <img class="caret-down" src="@/assets/svgs/caret-down.svg" alt="caret-down" />
            </a>
            <workspace-dropdown :title="'Starred'" :show="showStarredDropDown" @close="showStarredDropDown = false">
              <recent-drop-down-content v-if="starredBoards.length" :recent-boards="starredBoards">
              </recent-drop-down-content>
              <div class="d-flex flex-column" v-else>
                <img src="@/assets/images/starred.svg" alt="starred " />
                <p class="text-center">Star important boards to access them quickly and easily.</p>
              </div>
            </workspace-dropdown>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false">
              Templates
              <img class="caret-down" src="@/assets/svgs/caret-down.svg" alt="caret-down" />
            </a>
            <workspace-dropdown :title="'Templates'" :show="false" />
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start active">
            <a class="nav-link text-white" aria-current="page" href="#"> Create </a>
          </li>
        </ul>
        <ul class="workspacenav__container__navbar__nav__list navbar-nav align-items-center gap-1">
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start">
            <div class="input-wrapper">
              <i class="bi bi-search" />
              <input type="text" class="form-control form-control-sm" placeholder="Search" />
            </div>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              role="button"
              aria-expanded="false"
              @click="showInformationDD = true">
              <i class="bi bi-info-circle" />
            </a>
            <workspace-dropdown
              :title="'Information'"
              :show="showInformationDD"
              @close="showInformationDD = false"
              class="dropdown-menu-end">
              <div class="d-flex flex-column">
                <img src="@/assets/images/info.png" alt="starred" class="img-fluid" />
                <p class="text-center">It’s easy to get your team up and running with Trello playbooks</p>
                <a class="text-center" href="#">Get a new tip.</a>
              </div>
            </workspace-dropdown>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              role="button"
              aria-expanded="false"
              @click="showNotificationDD = true">
              <i class="bi bi-bell" />
            </a>
            <workspace-dropdown
              :title="'Notifications'"
              :show="showNotificationDD"
              @close="showNotificationDD = false"
              class="dropdown-menu-end">
            <p class="m-0 mx-auto text-center"> No new notifications </p>
            </workspace-dropdown>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start last dropdown">
            <a
              class="nav-link dropdown-toggle p-0"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              role="button"
              aria-expanded="false"
              @click="showAccountDD = true">
             <avatar :name="user.name"></avatar>
            </a>
            <workspace-dropdown
              :title="'Account'"
              :show="showAccountDD"
              @close="showAccountDD = false"
              class="dropdown-menu-end p-0"
              :header-classes="'py-1 px-3'">
              <ul class="list-group">
                <li
                  class="dropdown-item bg-transparent px-3 py-2 d-flex gap-2 justify-content-start align-items-start"
                  role="button">
                  <avatar :name="user.name" class="p-4 fw-bold"></avatar>
                  <div class="d-flex flex-column">
                    <p class="mb-0">{{ user.name }}</p>
                    <p class="mb-0">{{ user.email }}</p>
                  </div>
                </li>
                <hr class="dropdown-divider mx-2" />
                <li class="dropdown-item px-3 py-2" disabled>Profile and visibility</li>
                <li class="dropdown-item px-3 py-2" role="button" disabled>Activity</li>
                <li class="dropdown-item px-3 py-2" role="button" disabled>Cards</li>
                <li class="dropdown-item px-3 py-2" role="button" disabled>Settings</li>
                <hr class="dropdown-divider mx-2" />
                <li class="dropdown-item px-3 py-2" role="button" disabled>Settings</li>
                <li class="dropdown-item px-3 py-2" role="button" disabled>Help</li>
                <li class="dropdown-item px-3 py-2" role="button" disabled>Shortcuts</li>
                <hr class="dropdown-divider mx-2" />
                <li class="dropdown-item px-3 py-2" role="button" @click.stop="handleLogOut">Log out</li>
              </ul>
            </workspace-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WorkspaceDropdown from '@/components/WorkspaceDropdown.vue'
import RecentDropDownContent from '@/components/RecentDropDownContent.vue'
import WorkspaceTitle from '@/components/WorkspaceTitle.vue'
import Avatar from '@/components/Avatar.vue'
import { logOutService } from '@/services/auth'
import Cookies from 'js-cookie'
import { allUserBoardsService } from '@/services/board'
import { mapState } from 'vuex'
import decode from 'jwt-decode'

export default defineComponent({
  components: { WorkspaceDropdown, WorkspaceTitle, Avatar, RecentDropDownContent },
  data () {
    return {
      showWorkspaceDD: false,
      showInformationDD: false,
      showNotificationDD: false,
      showAccountDD: false,
      showRecentDropDown: false,
      showStarredDropDown: false,
      user: {
        email: '',
        name: ''
      }
    }
  },
  mounted () {
    this.decodeUserInfo()
    this.getAllUserBoards()
  },
  inject: ['recentBoards', 'starredBoards'],
  computed: {
    ...mapState({
      workspace: 'workspace'
    })
  },
  methods: {
    decodeUserInfo () {
      try {
        const decoded = decode(Cookies.get('token')) as Record<string, string>
        this.user = decoded
      } catch (error) {
        console.error(error)
      }
    },
    async getAllUserBoards () {
      const res = await allUserBoardsService()
      if (!res.error) {
        this.$store.commit('SET_ALL_BOARDS', res.data)
      }
    },
    async handleLogOut () {
      const res = await logOutService()
      if (!res.error) {
        Cookies.remove('token')
        this.$router.push({ name: 'login' })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.workspacenav {
  position: sticky;
  top: 0;
  z-index: 999;
  background: var(--bg-dynamic);
  font-size: var(--fs-xss);

  &__container {
    &__img {
      width: 75px;
    }
    &__navbar__nav {
      &__list {
        &__item {
          a {
            padding: 6px 10px 6px 12px;
          }
          border-radius: 3px;
          &:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          .input-wrapper {
            position: relative;
            color: white;
            border-radius: 3px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            background-color: rgba(255, 255, 255, 0.3);
            &:focus {
              background: #fff;
            }
            i {
              position: absolute;
              top: 50%;
              left: 12px;
              transform: translate(-50%, -50%);
            }
            input {
              padding-left: 24px;
              border-radius: none;
              border: none;
              color: white;
              background-color: transparent;
              &::placeholder {
                color: white;
              }
              &:focus {
                color: gray;
                background: #fff;
              }
            }
          }
          &.active {
            background: rgba(255, 255, 255, 0.3);
          }
          &.last:hover {
            background: none;
          }
        }
      }
    }
  }
}
</style>
