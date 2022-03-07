<template>
  <div class="d-flex flex-column gap-2 label-dropdown-content">
    <input
      v-model="searchText"
      class="form-control label-dropdown-content__input"
      type="text"
      name="label"
      placeholder="Search labels" />
    <div class="label-dropdown-content__title">Labels</div>
    <ul class="label-dropdown-content__list p-0 m-0">
      <li
        v-for="label in boardLabels"
        :key="label._id"
        @click="handleLabelClick(label)"
        :class="`label-dropdown-content__list__item d-flex gap-2 p-1 mb-1 rounded-1 align-items-center justify-content-start bg-${label.color}`">
        <p class="m-0 flex-grow-1">{{ label.text }}</p>
        <i v-if="isTaskLabel(label._id)" class="bi bi-check text-white"></i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { LabelType } from '@/types/entities'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    boardLabels: {
      type: Array as () => Array<LabelType>,
      required: true
    },
    taskLabels: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    handleLabelClick (label: LabelType) {
      if (this.isTaskLabel(label._id)) this.$emit('removeLabel', label)
      else this.$emit('addLabel', label)
    },
    isTaskLabel (id: string): boolean {
      return this.taskLabels.includes(id)
    }
  }
})
</script>

<style lang="scss" scoped>
.label-dropdown-content {
  &__title {
    font-size: var(--fs-xsss);
    color: var(--gray-clr-3);
    font-weight: var(--fw-bolder);
  }
  &__list {
    &__item {
      cursor: pointer;
      position: relative;
      width: 100%;
      height: 32px;
      // filter: brightness(0.80);
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 12px;
        transition: left 0.1s ease-in;
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
</style>
