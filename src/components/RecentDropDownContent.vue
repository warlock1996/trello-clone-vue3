<template>
  <div class="recent-dropdown">
    <ul class="list-group-item recent-dropdown-list p-0 border-0">
      <li
        class="recent-dropdown-list-item dropdown-item d-flex gap-2 p-0 my-1 justify-content-start align-items-center"
        v-for="board in recentBoards"
        :key="board._id"
        @click="$router.push({ name: 'kanban', params: { boardId: board._id } })">
        <board
          :name="board.name"
          :starred="board.starred"
          :show-name="false"
          :hide-star="true"
          :styles="{ width: '40px', height: '31px' }"></board>
        <div class="flex-grow-1 recent-dropdown-list-item-text">
          <div class="recent-dropdown-list-item-text-boardname">
            {{ board.name }}
          </div>
          <div class="recent-dropdown-list-item-text-workspace">Trello Workspace</div>
        </div>
        <i v-if="board.starred" class="bi bi-star-fill text-warning"></i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Board from '@/components/Board.vue'
import { BoardType } from '@/types/entities'

export default defineComponent({
  props: {
    recentBoards: {
      type: Array as PropType<BoardType[]>,
      required: true
    }
  },
  components: {
    Board
  }
})
</script>

<style lang="scss" scoped>
.recent-dropdown {
  &-list {
    &-item {
      cursor: pointer;
      &-text {
        &-boardname {
          font-size: var(--fs-xss);
          font-weight: var(--fw-bold);
          color: var(--dark-clr-2);
          line-height: 18px;
        }
        &-workspace {
          font-size: var(--fs-xsss);
          color: var(--gray-clr-3);
          line-height: 16px;
        }
      }
    }
  }
}
</style>
