<template>
  <div class="list-input-form d-flex flex-column gap-2">
    <textarea
      v-if="inputType === 'textarea'"
      v-model="value"
      type="text"
      ref="textarea"
      :style="textAreaStyles"
      :placeholder="textAreaPlaceholder"
      class="list-input-form__textarea shadow-0 w-100 rounded-1 p-2"
    />
    <input
      v-else
      v-model="value"
      ref="input"
      type="text"
      @keydown.enter="$emit('submit', value)"
      class="form-control"
      placeholder="Enter list title"
    />
    <div class="list-input-form__actions d-flex gap-2 align-items-center">
      <button
        @click="$emit('submit', value)"
        class="list-input-form__actions__btn btn-primary-1"
        :class="buttonClasses"
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
      default: 'textarea',
      validator: (v) => ['textarea', 'input'].includes(v)
    },
    defaultValue: {
      type: String,
      default: ''
    },
    showSubMenu: {
      type: Boolean,
      default: true
    },
    buttonText: {
      type: String,
      default: 'Add card'
    },
    buttonClasses: {
      type: String,
      default: ''
    },
    textAreaPlaceholder: {
      type: String,
      default: 'Enter a title for this card'
    },
    textAreaStyles: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.value = this.defaultValue
    this.$refs[this.inputType].focus()
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
