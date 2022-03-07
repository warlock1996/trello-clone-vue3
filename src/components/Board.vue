<template>
  <div class="card border-0" role="button" @mouseover="bookmark = true" @mouseleave="bookmark = false" :style="styles">
    <div class="card-body border-0 p-2">
      <div class="card-title" v-if="showName">{{ name }}</div>
      <div v-if="bookmark || starred" class="bookmark" :class="{ 'invisible': hideStar }">
        <i :class="{ 'bi bi-star-fill text-warning': starred, 'bi bi-star': !starred }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    starred: {
      type: Boolean,
      required: true
    },
    showName: {
      type: Boolean,
      default: true
    },
    hideStar: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      bookmark: false
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  width: 190px;
  height: 100px;
  border-radius: 3px;
  &-title {
    font-size: var(--fs-xs);
    font-weight: var(--fw-heavy);
    color: var(--light-clr-1);
  }
  &-body {
    border-radius: 3px;
    background: #838c91;
    &:hover {
      background: #97a0af;
    }
    position: relative;
    .bookmark {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: var(--light-clr-1);
      cursor: pointer;
      animation: bookmark-anim 0.2s;
      animation-iteration-count: 1;
    }
  }
}

@keyframes bookmark-anim {
  0% {
    right: -100px;
  }
  100% {
    right: 10px;
  }
}
</style>
