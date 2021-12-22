<template>
  <div class="card">
    <div class="card-body p-0 card__body">
      <div class="card-title card__body__title mb-4">
        <slot name="title" />
      </div>
      <slot name="body" />
    </div>
    <div class="card-footer card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  components: {

  }
})
</script>

<style lang="scss" scoped>
 .card {
      display: block;
      max-width: 400px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 3px;
      padding: 25px 40px;
      box-shadow: rgb(0 0 0 / 10%) 0 0 10px;

      @media screen and (max-width: 768px) {
        box-shadow: none;
        border: none !important;
      }
      &__body {
        max-width: 400px;
        &__title {
            color: #5E6C84;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
        }
      }
      &__footer {
        background: transparent;
        text-align: center;
        border-top-color: #cccccc;
      }
    }

</style>
