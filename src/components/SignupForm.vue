<template>
  <div class="signup-form">
    <form>
      <input
        v-model="user.name"
        class="form-control mb-3"
        type="text"
        name="name"
        placeholder="Enter full name" />
      <input
        v-model="user.email"
        class="form-control mb-3"
        type="email"
        name="email"
        placeholder="Enter email" />
      <input
        v-model="user.password"
        class="form-control mb-3"
        type="password"
        name="password"
        placeholder="Enter password" />
      <input
        v-model="user.confirmPassword"
        class="form-control mb-3"
        type="password"
        name="password"
        placeholder="Re-enter password" />
      <div class="signup-form__note">
        <p>
          By signing up, you confirm that you've read and accepted our
          <a href="#">Terms of Service</a>
          and
          <a href="#"> Privacy Policy. </a>
        </p>
      </div>
      <div class="d-grid d-block mb-3">
        <button
          class="btn btn-success btn-sm text-white"
          @click.prevent="handleSignUp"
          :disabled="signupButtonState">
          Continue
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { signUpService } from '@/services/auth'
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      user: {
        name: 'Some User',
        email: 'someuser@gmail.com',
        password: 'ArslanAli123$',
        confirmPassword: 'ArslanAli123$'
      },
      signupButtonState: false
    }
  },
  inject: ['setLayoutAlertText'],
  methods: {
    async handleSignUp () {
      this.signupButtonState = true
      const res = await signUpService(this.user)
      if (!res.error) {
        this.setLayoutAlertText(res.message)
        this.signupButtonState = false
        this.$router.push({
          name: 'Login',
          params: {
            email: this.user.email
          }
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.signup-form {
  &__note {
    font-size: 12px;
    color: #5e6c84;
  }
  &__methods {
    font-size: 14px;
    text-align: center;
  }
}
</style>
