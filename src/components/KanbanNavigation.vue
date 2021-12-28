<template>
  <div class="kanban-nav row py-2 px-3 g-0 align-items-stretch justify-content-start">
    <div class="col-md-6">
      <div
        class="d-flex gap-2 flex-wrap justify-content-start align-items-center"
      >
        <action-button class="ab">
          <template #prefix>
            <img
              src="@/assets/svgs/kanban.svg"
              alt="kanban"
            >
            <!-- <i class="bi bi-kanban" /> -->
          </template>
          Board
          <template #suffix>
            <img
              src="@/assets/svgs/caret-down.svg"
              alt="caret-down"
            >
          </template>
        </action-button>
        <action-button class="ab">
          <input
            type="text"
            class="form-control form-control-sm bg-transparent border-0 shadow-0"
          >
        </action-button>
        <action-button class="ab">
          <i class="bi bi-star" />
        </action-button>
        <action-button class="ab flex-grow-sm-1">
          Trello workspace
        </action-button>
        <action-button class="ab">
          <i class="bi bi-lock" />
          Private
        </action-button>
        <action-button class="bg-white">
          <i class="bi bi-person-plus" />
          Invite
        </action-button>
      </div>
    </div>
    <div class="col-md-6">
      <div
        class="d-flex gap-2 flex-wrap justify-content-end align-items-center"
      >
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

export default defineComponent({
  components: {
    ActionButton
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
