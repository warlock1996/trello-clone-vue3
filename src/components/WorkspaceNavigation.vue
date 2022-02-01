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
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon shadow-0">
          <i class="bi bi-three-dots text-white" />
        </span>
      </button>
      <div
        id="navbarNav"
        class="workspacenav__container__navbar__nav collapse navbar-collapse"
      >
        <ul
          class="workspacenav__container__navbar__nav__list navbar-nav align-items-center flex-grow-1 gap-2"
        >
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start"
          >
            <a
              class="nav-link text-white p-0"
              aria-current="page"
              href="#"
            >
              <img
                src="@/assets/svgs/switch.svg"
                alt="switch"
                width="20"
                height="20"
              >
            </a>
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start"
          >
            <a
              class="nav-link text-white"
              aria-current="page"
              href="#"
            >
              <img
                class="workspacenav__container__img"
                src="@/assets/images/workspace-logo.gif"
                alt="workspace-logo"
              >
            </a>
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown"
          >
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >Workspaces
              <img
                class="caret-down"
                src="@/assets/svgs/caret-down.svg"
                alt="caret-down"
              >
            </a>
            <workspace-dropdown :title="'Workspaces'">
              <template #content>
                <div class="dropdown-header">
                  <div class="my-1">
                    Current workspace
                  </div>
                </div>
                <div
                  class="ws px-2 dropdown-item"
                  role="button"
                >
                  <workspace-title :title="'Trello workspace'" />
                </div>
                <div class="dropdown-header my-1">
                  Your Workspaces
                </div>
                <div
                  class="yws px-2 dropdown-item"
                  role="button"
                >
                  <workspace-title :title="'Trello workspace'" />
                </div>
                <div class="dropdown-header my-1">
                  Guest Workspaces
                </div>
                <div
                  class="yws px-2 dropdown-item"
                  role="button"
                >
                  <workspace-title :title="'Guest workspace'" />
                </div>
              </template>
            </workspace-dropdown>
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown"
          >
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              Recent
              <img
                class="caret-down"
                src="@/assets/svgs/caret-down.svg"
                alt="caret-down"
              >
            </a>
            <workspace-dropdown :title="'Recent boards'" />
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown"
          >
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              Starred
              <img
                class="caret-down"
                src="@/assets/svgs/caret-down.svg"
                alt="caret-down"
              >
            </a>
            <workspace-dropdown :title="'Starred'">
              <template #content>
                <div class="d-flex flex-column">
                  <img
                    src="@/assets/images/starred.svg"
                    alt="starred "
                  >
                  <p class="text-center">
                    Star important boards to access them quickly and easily.
                  </p>
                </div>
              </template>
            </workspace-dropdown>
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown"
          >
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              Templates
              <img
                class="caret-down"
                src="@/assets/svgs/caret-down.svg"
                alt="caret-down"
              >
            </a>
            <workspace-dropdown :title="'Templates'" />
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start active"
          >
            <a
              class="nav-link text-white"
              aria-current="page"
              href="#"
            >
              Create
            </a>
          </li>
        </ul>
        <ul
          class="workspacenav__container__navbar__nav__list navbar-nav align-items-center gap-1"
        >
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start"
          >
            <div class="input-wrapper">
              <i class="bi bi-search" />
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search"
              >
            </div>
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown"
          >
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              <i class="bi bi-info-circle" />
            </a>
            <workspace-dropdown
              :title="'Information'"
              class="dropdown-menu-end"
            >
              <template #content>
                <div class="d-flex flex-column">
                  <img
                    src="@/assets/images/info.png"
                    alt="starred "
                  >
                  <p class="text-center">
                    It’s easy to get your team up and running with Trello
                    playbooks
                  </p>
                  <a
                    class="text-center"
                    href="#"
                  >Get a new tip.</a>
                </div>
              </template>
            </workspace-dropdown>
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown"
          >
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              <i class="bi bi-bell" />
            </a>
            <workspace-dropdown
              :title="'Notifications'"
              class="dropdown-menu-end"
            />
          </li>
          <li
            class="workspacenav__container__navbar__nav__list__item nav-item text-start last dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              aria-current="page"
              href="#"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              AA
            </a>
            <workspace-dropdown
              :title="'Account'"
              class="dropdown-menu-end p-0"
              :header-classes="'py-1 px-3'"
            >
              <template #content>
                <ul class="list-group">
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    User name
                  </li>
                  <hr class="dropdown-divider mx-2">
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Profile and visibility
                  </li>
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Activity
                  </li>
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Cards
                  </li>
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Settings
                  </li>
                  <hr class="dropdown-divider mx-2">
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Settings
                  </li>
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Help
                  </li>
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Shortcuts
                  </li>
                  <hr class="dropdown-divider mx-2">
                  <li
                    class="dropdown-item px-3 py-2"
                    role="button"
                  >
                    Log out
                  </li>
                </ul>
              </template>
            </workspace-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import WorkspaceDropdown from '@/components/WorkspaceDropown.vue'
import WorkspaceTitle from '@/components/WorkspaceTitle.vue'

export default defineComponent({
  components: { WorkspaceDropdown, WorkspaceTitle }
})
</script>

<style lang="scss" scoped>
.workspacenav {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #026aa7;
  font-size: 14px;

  .dropdown-toggle {
    &::after {
      border: 0;
      margin: 0;
    }
    .caret-down {
      width: 15px;
      height: 15px;
    }
  }
  &__container {
    &__img {
      width: 75px;
    }
    &__navbar__nav {
      &__list {
        &__item {
          &:hover {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
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
          &.last a {
            background-color: #dfe1e6;
            color: black;
            border-radius: 50%;
            padding: 8px;
          }
        }
      }
    }
  }
}
</style>
