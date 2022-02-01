<template>
  <div class="d-flex flex-column gap-2 label-dropdown-content">
    <form>
        <input v-model="searchText" class="form-control label-dropdown-content__input" type="text" name="label"  placeholder="Search labels" />
    </form>
    <div class="label-dropdown-content__title">Labels</div>
    <ul class="label-dropdown-content__list p-0 m-0">
      <li
        v-for="l in computeLabels"
        :key="l"
        class="label-dropdown-content__list__item mb-1 d-flex justify-content-start align-items-center gap-2"
      >
        <div
          class="label-dropdown-content__list__item__color rounded-2 flex-grow-1"
          :class="`bg-${l}`"
        ></div>
        <i class="bi bi-pencil"></i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const labels = [
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'danger'
    ]
    const searchText = ref('')
    const computeLabels = computed(() => {
      if (searchText.value.length === 0) return labels
      return labels.filter(l => l.indexOf(searchText.value) !== -1)
    })
    return {
      searchText,
      computeLabels
    }
  }
})
</script>

<style lang="scss" scoped>
.label-dropdown-content {
  &__title {
    font-size: 12px;
    color: #5e6c84;
    font-weight: 600;
  }
  &__list {
    &__item {
      cursor: pointer;
      &__color {
        position: relative;
        width: 100%;
        height: 32px;
        // filter: brightness(0.80);
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 12px;
          transition: left .1s ease-in;
          background: inherit;
          height: 32px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        &:hover {
            &::before {
            filter: brightness(80%);
            left: -6px;
          }
        }
      }
    }
  }
}
</style>
