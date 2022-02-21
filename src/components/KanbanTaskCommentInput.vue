<template>
  <div class="d-flex gap-2 justify-content-start align-items-start my-2" @click.stop="null">
    <avatar :name="'Arslan Ali'" />
    <div
      class="comment-input__wrapper d-flex flex-column gap-0 py-2 px-3 border border-1 rounded-2 w-100"
      :class="{ 'focus-shadow': isFocused || value.length }">
      <textarea
        v-model="value"
        :rows="lines"
        @focus="isFocused = true"
        @blur="isFocused = false"
        placeholder="Write a comment..."
        class="comment-input__wrapper__textarea form-control border-0 shadow-none p-0" />
      <div
        v-if="isFocused || value.length"
        class="comment-input__wrapper__actions d-flex justify-content-between align-items-center pt-3">
        <button
          :disabled="value.length === 0"
          class="comment-input__wrapper__actions__btn btn shadow-none border-0 rounded-1">
          Save
        </button>
        <div class="comment-input__wrapper__actions__icons d-flex gap-2">
          <i class="px-2 py-1 rounded-2 bi bi-paperclip"></i>
          <i class="px-2 py-1 rounded-2 bi bi-at"></i>
          <i class="px-2 py-1 rounded-2 bi bi-emoji-smile"></i>
          <i class="px-2 py-1 rounded-2 bi bi-credit-card-fill"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Avatar from '@/components/Avatar.vue'

export default defineComponent({
  data () {
    return {
      isFocused: false,
      value: '',
      MAX_LINES: 8
    }
  },
  components: {
    Avatar
  },
  computed: {
    lines () {
      const ln = Math.ceil(this.value.split(' ').length / 12)
      return ln < this.MAX_LINES ? ln : this.MAX_LINES
    }
  }
})
</script>

<style lang="scss" scoped>
.comment-input__wrapper {
  position: relative;
  font-size: 14px;
  background: #ffffff;
  height: 40px;
  transition: height 0.1s;
  &__textarea {
    background: #ffffff;
    color: #172b4d;
    resize: none;
    &:hover {
      cursor: pointer;
    }
    &.form-control {
      min-height: 22px;
      height: fit-content;
    }
  }
  &__actions {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    &__btn {
      padding: 6px 12px;
      font-size: 14px;
      background: #0079bf;
      color: #ffffff;
      &:hover {
        background: #026aa7;
        color: #ffffff;
      }
      &:disabled {
        background: #091e420a;
        color: #a5adba;
      }
    }
    &__icons {
      i {
        &:before {
          font-size: 16px;
          color: #42526e;
        }
        &:hover {
          cursor: pointer;
          background: #091e4214;
        }
      }
    }
  }

  &.focus-shadow {
    height: 90px;
    box-shadow: 0 4px 8px -2px #091e4240;
  }
}
</style>
