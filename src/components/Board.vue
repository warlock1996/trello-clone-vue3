<template>
  <div class="card">
    <div class="card-body p-2">
      <div class="card-title">
        Project 1
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

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
        }
    }
</style>
