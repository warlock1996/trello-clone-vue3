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
        <ul class="workspacenav__container__navbar__nav__list navbar-nav align-items-center flex-grow-1 gap-2">
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start">
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
          </li><li class="workspacenav__container__navbar__nav__list__item nav-item text-start">
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
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
            >Workspaces</a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
            >
              Recent
            </a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
            >
              Starred
            </a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              aria-current="page"
              href="#"
            >
              Templates
            </a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start active">
            <a
              class="nav-link text-white"
              aria-current="page"
              href="#"
            >
              Create
            </a>
          </li>
        </ul>
        <ul class="workspacenav__container__navbar__nav__list navbar-nav align-items-center gap-1">
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start ">
            <div class="input-wrapper">
              <i class="bi bi-search" />
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search"
              >
            </div>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start">
            <a
              class="nav-link text-white"
              aria-current="page"
              href="#"
            >
              <i class="bi bi-info-circle" />
            </a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start">
            <a
              class="nav-link text-white"
              aria-current="page"
              href="#"
            >
              <i class="bi bi-bell" />
            </a>
          </li>
          <li class="workspacenav__container__navbar__nav__list__item nav-item text-start last">
            <a
              class="nav-link"
              aria-current="page"
              href="#"
            >
              AA
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
     .workspacenav {
            position: sticky;
            top: 0;
            z-index: 999;
            background: #026AA7;
            font-size: 14px;
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
                              background-color: #DFE1E6;
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
