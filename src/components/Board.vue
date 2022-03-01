<template>
  <div class="card border-0" role="button" @mouseover="bookmark = true" @mouseleave="bookmark = false">
    <div class="card-body border-0 p-2">
      <div class="card-title">{{ name }}</div>
      <div v-if="bookmark || starred" class="bookmark">
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
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  &-body {
    border-radius: 3px;
    background: rgb(131, 140, 145);
    &:hover {
      background: #97a0af;
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
