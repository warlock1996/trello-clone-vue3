<template>
  <div class="login-form">
    <form>
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
        autocomplete="new-password"
        name="password"
        placeholder="Enter password" />
      <div class="d-grid d-block mb-3">
        <button
          class="btn btn-success btn-sm text-white"
          :disabled="loginButtonState"
          @click.prevent="handleLogin">
          Log In
        </button>
      </div>
    </form>
    <div class="login-form__methods mb-3">
      <div class="mb-3">OR</div>
      <a class="mb-3" href="#">Log in with SSO</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loginService } from '@/services/auth'
import Cookies from 'js-cookie'

export default defineComponent({
  data () {
    return {
      user: {
        email: 'post.arslan@outlook.com',
        password: 'ArslanAli123$'
      },
      loginButtonState: false
    }
  },
  mounted () {
    this.user.email = this.$route.params.email
  },
  methods: {
    async handleLogin () {
      this.loginButtonState = true
      const res = await loginService(this.user)
      if (!res.error) {
        Cookies.set('token', res.token)
        this.loginButtonState = false
        this.$router.push('/workspace')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form__methods {
  font-size: 14px;
  text-align: center;
}
</style>
