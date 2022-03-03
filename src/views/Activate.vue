<template>
  <div class="activate-account-page d-flex align-items-center justify-content-center text-center">
    <div class="container p-4">
      <h3>Please verify your email address ({{ activationEmail.email }})</h3>
      <action-button class="mx-auto btn-primary-1" :disabled="isActivating" @click="handleActivate">
        <div class="px-4 py-1 fs-6">Verify</div>
      </action-button>
    </div>
  </div>
</template>

<script lang="ts">
import { activationService } from '@/services/auth'
import { defineComponent } from 'vue'
import decode from 'jwt-decode'
import ActionButton from '@/components/ActionButton.vue'

export default defineComponent({
  data () {
    return {
      activationEmail: '',
      isActivating: false
    }
  },
  components: {
    ActionButton
  },
  mounted () {
    try {
      this.activationEmail = decode(this.$route.params.hash)
    } catch (error) {
      this.setLayoutAlertText(error.message)
    }
  },
  inject: ['setLayoutAlertText'],
  methods: {
    async handleActivate () {
      this.isActivating = true
      const res = await activationService(this.$route.params.hash)
      if (!res.error) {
        this.setLayoutAlertText(res.message)
        this.$router.push({ name: 'login', params: { email: this.activationEmail.email } })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.activate-account-page {
  background: whitesmoke;
  height: 100vh;
}
</style>
