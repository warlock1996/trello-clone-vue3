<template>
  <div class="container-fluid kanban p-0">
    <div class="row kanban__row g-0">
      <div class="col-auto">
        <kanban-sider>
          <kanban-sider-menu />
        </kanban-sider>
      </div>
      <div class="col">
        <kanban-navigation />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import KanbanNavigation from '@/components/KanbanNavigation.vue'
import KanbanSider from '@/components/KanbanSider.vue'
import KanbanSiderMenu from '@/components/KanbanSiderMenu.vue'
export default defineComponent({
  components: {
    KanbanNavigation,
    KanbanSider,
    KanbanSiderMenu
  }
})
</script>

<style lang="scss" scoped>
.kanban {
  background: rgb(131, 140, 145);
  &__row {
    min-height: 100vh;

  }
}
</style>
