<template>
  <div class="d-flex justify-content-start align-items-center gap-2">
    <div class="letter rounded-1">
      {{ title[0] }}
    </div>
    <div class="title flex-grow-1">
      <div class="d-flex flex-column">
        <div :style="titleStyles">
          {{ title }}
        </div>
        <div v-if="subtitle.length">
          {{ subtitle }}
        </div>
      </div>
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
    },
    titleStyles: {
      type: Object,
      default: () => ({})
    },
    subtitle: {
      required: false,
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.letter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
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
