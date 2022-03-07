<template>
  <div class="d-flex justify-content-start align-items-center gap-2">
    <div class="letter rounded-1">
      {{ title[0] }}
    </div>
    <div class="title flex-grow-1">
      <div class="d-flex flex-column" :style="titleStyles">
        <div>
          {{ title }}
        </div>
        <div v-if="subtitle">
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
  font-size: var(--fs-lg);
  background: linear-gradient(#b22865, #cd5a91);
  font-weight: var(--fw-bold);
  color: var(--light-clr-1);
}
.title {
  font-size: var(--fs-xss);
  color: var(--dark-clr-1);
  font-weight: var(--fw-bolder);
}
.subtitle {
  font-size: var(--fs-xsss);
}
</style>
