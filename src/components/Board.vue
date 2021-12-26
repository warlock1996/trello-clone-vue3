<template>
  <div
    class="card border-0"
    role="button"
    @mouseover="bookmark = true"
    @mouseleave="bookmark = false"
  >
    <div class="card-body border-0 p-2">
      <div class="card-title">
        Project 1
      </div>
      <div
        v-if="bookmark"
        class="bookmark"
      >
        <i class="bi bi-star" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      bookmark: false
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  width: 180px;
  height: 100px;
  border-radius: 3px;
  &-title {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  &-body {
    border-radius: 3px;
    background: #97a0af;
    &:hover {
      background: rgb(131, 140, 145);
    }
    position: relative;
    .bookmark {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #ffffff;
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
