<template>
  <div class="d-flex gap-2 justify-content-start align-items-start mb-3" @click.stop="null">
    <avatar class="fw-bold" :name="'Arslan Ali'" />
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
          class="comment-input__wrapper__actions__btn btn shadow-none border-0 rounded-1"
          :disabled="value.length === 0"
          @click="handleCommentEmit">
          Save
        </button>
        <div class="comment-input__wrapper__actions__icons d-flex gap-2" disabled>
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
  methods: {
    handleCommentEmit () {
      this.isFocused = false
      this.$emit('comment', this.value)
      this.value = ''
    }
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
  font-size: var(--fs-xss);
  background: var(--light-clr-1);
  height: 40px;
  transition: height 0.1s;
  &__textarea {
    background: var(--light-clr-1);
    color: var(--dark-clr-1);
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
      font-size: var(--fs-xss);
      background: var(--primary-clr-5);
      color: var(--light-clr-1);
      &:hover {
        background: var(--primary-clr-4);
        color: var(--light-clr-1);
      }
      &:disabled {
        background: #091e420a;
        color: #a5adba;
      }
    }
    &__icons {
      i {
        &:before {
          font-size: var(--fs-xs);
          color: #42526e;
        }
        &:hover {
          cursor: pointer;
          background: var(--dark-clr-3);
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
