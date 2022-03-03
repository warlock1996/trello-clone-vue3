<template>
  <div class="accept-invite-page d-flex align-items-center justify-content-center text-center">
    <div class="container p-4">
      <h3>You have been invited to collaborate on {{ invite.board }}</h3>
      <action-button class="mx-auto btn-primary-1" :disabled="isInviting" @click="handleInvite">
        <div class="px-4 py-2 fs-6" >Accept Invite</div>
      </action-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import decode from 'jwt-decode'
import { acceptInvitationService } from '@/services/board'
import ActionButton from '@/components/ActionButton.vue'
export default defineComponent({
  data () {
    return {
      invite: '',
      isInviting: false
    }
  },
  components: {
    ActionButton
  },
  mounted () {
    try {
      this.invite = decode(this.$route.params.inviteToken)
    } catch (error) {
      this.setLayoutAlertText(error.message)
    }
  },
  inject: ['setLayoutAlertText'],
  methods: {
    async handleInvite () {
      this.isInviting = true
      const res = await acceptInvitationService(this.$route.params.inviteToken)
      if (!res.error) {
        this.setLayoutAlertText(res.message)
        this.$router.push({ name: 'kanban', params: { boardId: this.invite.boardId } })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.accept-invite-page {
  background: whitesmoke;
  height: 100vh;
}
</style>
