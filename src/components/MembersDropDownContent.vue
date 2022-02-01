<template>
  <div class="d-flex flex-column gap-2 members-dropdown-content">
      <form>
          <input class="form-control members-dropdown-content__input" type="text" name="members"  placeholder="Search members" />
      </form>
      <div class="members-dropdown-content__members">
          Board members
      </div>
      <ul class="members-dropdown-content__list p-0 m-0">
          <li class="members-dropdown-content__list__item d-flex gap-2 p-1 rounded-1 align-items-center justify-content-start">
            <avatar :name="'J D'"></avatar>
            <p class="m-0">username (email)</p>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from '@/components/Avatar.vue'

export default defineComponent({
  props: {
    members: {
      type: Array,
      required: true,
      default: ():[] => ([])
    }
  },
  data () {
    return {

    }
  },
  components: {
    Avatar
  }
})
</script>

<style lang="scss" scoped>
  .members-dropdown-content {
    &__members {
      color: #5e6c84;
      font-size: 12px;
      font-weight: 600;
    }
    &__list {
      &__item {
        cursor: pointer;
        &:hover {
          background: #091e420a;
        }
      }
    }
  }
</style>
