<template>
  <div class="activate-account-page d-flex align-items-center justify-content-center text-center">
    <div class="container p-4">
      <h1 v-if="isActivating" class="m-0">({{ activationEmail.email }})</h1>
      <h1 v-if="isActivating" class="m-0">Please wait while your account is being activated...</h1>
      <h1 v-else class="m-0">Redirecting...</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { activationService } from '@/services/auth'
import { defineComponent } from 'vue'
import decode from 'jwt-decode'
export default defineComponent({
  data () {
    return {
      activationEmail: '',
      isActivating: true
    }
  },
  mounted () {
    try {
      this.activationEmail = decode(this.$route.params.hash)
    } catch (error) {
      this.setLayoutAlertText(error.message)
    }
    this.$nextTick(() => {
      this.handleActivate()
    })
  },
  inject: ['setLayoutAlertText'],
  methods: {
    async handleActivate () {
      const res = await activationService(this.$route.params.hash)
      if (!res.error) {
        this.isActivating = false
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
