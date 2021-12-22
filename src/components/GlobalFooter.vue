<template>
  <footer class="global__footer">
    <div class="row justify-content-between g-0">
      <div class="col">
        <img
          class="global__footer__img"
          src="@/assets/svgs/loginBottomLeft.svg"
          alt="loginBottomLeft"
        >
      </div>
      <div class="col">
        <img
          class="global__footer__img right"
          src="@/assets/svgs/loginBottomRight.svg"
          alt="loginBottomRight"
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
 .global__footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &__img {
      max-width: 400px;
      &.right {
        display: block;
        margin-left: auto;
      }
    }
  }

</style>
