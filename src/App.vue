<template>
  <div class="layout-wrap">
    <div
      v-if="showLayoutAlert"
      class="layout-alert fw-bold text-center px-3 py-2">
      {{ layoutAlertText }}
    </div>
    <component :is="$route.meta.layout"></component>
    <div class="toast-container position-fixed top-0 end-0">
      <toast v-for="(n, index) in toasts" :key="index" :text="n.text" :variant="n.variant"></toast>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import defaultLayout from '@/layouts/default.vue'
import workspaceLayout from '@/layouts/workspace.vue'

export default defineComponent({
  components: {
    default: defaultLayout,
    workspace: workspaceLayout
  },
  data () {
    return {
      showLayoutAlert: false,
      layoutAlertText: '',
      resetTimeOut: null,
      setToastTimeout: null,
      toasts: []
    }
  },
  provide () {
    return {
      setLayoutAlertText: this.setLayoutAlertText,
      setToast: this.setToast
    }
  },
  methods: {
    setLayoutAlertText (text: string) {
      this.layoutAlertText = text
      this.showLayoutAlert = true
      this.resetTimeOut = setTimeout(() => {
        this.layoutAlertText = ''
        this.showLayoutAlert = false
      }, 1000 * 10)
    },
    setToast (text: string) {
      this.toasts.push(text)
      this.setToastTimeout = setTimeout(() => {
        this.toasts.pop()
      }, 4000)
    }
  },
  beforeUnmount () {
    clearTimeout(this.resetTimeOut)
    clearTimeout(this.setToastTimeout)
  }
})
</script>

<style lang="scss">
.layout-wrap {
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.layout-alert {
  font-size: 14px;
  position: sticky;
  top: 0;
  background: #faf3c0;
  border-bottom: 1px solid #e6c60d;
  color: #172b4d;
  z-index: 1001;
}

// .toast-container {
//   z-index: 1200;
// }
// temp
// .modal-backdrop {
//   display: none;
// }

@font-face {
  font-family: CharlieDisplay-Regular;
  src: url('./assets/fonts/CharlieDisplay-Regular.ttf') format('truetype');
}

@font-face {
  font-family: CharlieDisplay-Bold;
  src: url('./assets/fonts/CharlieDisplay-Bold.ttf') format('truetype');
}

@font-face {
  font-family: CharlieDisplay-Semibold;
  src: url('./assets/fonts/CharlieDisplay-Semibold.ttf') format('truetype');
}

@font-face {
  font-family: CharlieText-Regular;
  src: url('./assets/fonts/CharlieText-Regular.ttf') format('truetype');
}
</style>
