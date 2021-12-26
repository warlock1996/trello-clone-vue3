<template>
  <div class="d-flex justify-content-start align-items-center gap-2">
    <div class="letter">
      {{ title[0] }}
    </div>
    <div class="title flex-grow-1">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
      default: 'workspaces'
    }
  }
})
</script>

<style lang="scss" scoped>
    .letter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        font-size: 20px;
        background: linear-gradient(#b22865, #cd5a91);
        font-weight: bold;
        color: #ffffff;
    }
    .title {
        font-size: 14px;
        color: #172b4d;
        font-weight: 600;
    }
</style>
