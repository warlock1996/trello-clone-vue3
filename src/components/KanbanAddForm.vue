<template>
  <div class="list-input-form d-flex flex-column gap-2">
    <Form v-slot="{ errors }" @submit="(values, actions) => $emit('submit', value, values, actions)">
      <Field
        v-if="inputType === 'textarea'"
        v-model="value"
        id="textarea"
        as="textarea"
        name="input"
        ref="textarea"
        rules="required"
        :style="textAreaStyles"
        :placeholder="textAreaPlaceholder"
        class="list-input-form__textarea shadow-0 w-100 rounded-1 p-2" />
      <Field
        v-else
        v-model="value"
        id="input"
        ref="input"
        name="input"
        rules="required"
        type="text"
        @keydown.enter="$emit('submit', value)"
        class="form-control mb-1"
        placeholder="Enter list title" />
      <div class="error text-danger mb-1">{{ errors['input'] }}</div>
      <div class="list-input-form__actions d-flex gap-2 align-items-center">
        <button type="submit" class="list-input-form__actions__btn btn-primary-1" :class="buttonClasses">
          {{ buttonText }}
        </button>
        <i class="b bi-x flex-grow-1 list-input-form__actions__icon" @click="$emit('close')" role="button" />
        <i
          v-if="showSubMenu"
          class="bi bi-three-dots rounded-1 px-1 list-input-form__actions__icon submenu"
          role="button" />
      </div>
    </Form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Form, Field } from 'vee-validate'
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
  components: {
    Form,
    Field
  },
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.value = this.defaultValue
    // focus is not working due to wrapping them inside Form validate component
    // this.$refs[this.inputType].focus()
    document.getElementById(this.inputType).focus()
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
