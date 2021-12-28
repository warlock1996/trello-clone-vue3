<template>
  <div class="list-input-form d-flex flex-column gap-2">
    <textarea
      v-if="inputType === 'textarea'"
      type="text"
      autofocus
      placeholder="Enter a title for this card"
      class="list-input-form__textarea shadow-0 w-100 rounded-1 p-2"
    />
    <input
      v-else
      type="text"
      class="form-control"
      placeholder="Enter list title"
    />
    <div class="list-input-form__actions d-flex gap-2 align-items-center">
      <button
        class="list-input-form__actions__btn btn btn-primary shadow-none border-0"
      >
        {{ buttonText }}
      </button>
      <i
        class="b bi-x flex-grow-1 list-input-form__actions__icon"
        @click="$emit('close')"
        role="button"
      />
      <i
        v-if="showSubMenu"
        class="bi bi-three-dots rounded-1 px-1 list-input-form__actions__icon submenu"
        role="button"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    inputType: {
      type: String,
      default: 'textarea'
    },
    showSubMenu: {
      type: Boolean,
      default: true
    },
    buttonText: {
      type: String,
      default: 'Add card'
    }
  }
})
</script>

<style lang="scss" scoped>
.list-input-form {
  &__textarea {
    height: 54px;
    resize: none;
    border: none;
    box-shadow: none;
    background: none;
    outline: none;
    font-size: 14px;
    background: #ffffff;
    border: none !important;
    outline: none;
    box-shadow: 0 1px 0 #091e4240;
  }
  &__actions {
    &__btn {
      background: #0079bf;
      font-size: 14px;
      padding: 6px 12px;
      &:hover {
        background: #026aa7;
      }
    }
    &__icon {
      font-size: 20px;
      color: #6b778c;
    }
    &__icon.submenu {
      &:hover {
        background: #091e4214;
        color: #172b4d;
      }
    }
  }
}
</style>
