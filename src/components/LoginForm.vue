<template>
  <div class="login-form">
    <Form @submit="handleLogin" v-slot="{ meta: { valid }, errors }">
      <Field
        v-model="user.email"
        rules="required"
        class="form-control"
        type="email"
        name="email"
        placeholder="Enter email" />
      <div class="error text-danger mb-3 mt-1">{{ errors['email'] }}</div>
      <Field
        v-model="user.password"
        rules="required"
        class="form-control"
        type="password"
        autocomplete="new-password"
        name="password"
        placeholder="Enter password" />
      <div class="error text-danger mb-3 mt-1">{{ errors['password'] }}</div>

      <div class="d-grid d-block mb-3">
        <button type="submit" class="btn btn-success btn-sm text-white" :disabled="!valid">Log In</button>
      </div>
    </Form>
    <div class="login-form__methods mb-3">
      <div class="mb-3">OR</div>
      <a class="mb-3" href="#">Log in with SSO</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loginService } from '@/services/auth'
import { Form, Field, FormActions } from 'vee-validate'
import Cookies from 'js-cookie'

export default defineComponent({
  data () {
    return {
      user: {
        email: 'post.arslan@outlook.com',
        password: 'ArslanAli123$'
      }
    }
  },
  components: {
    Form,
    Field
  },
  mounted () {
    if (this.$route.params.email) {
      this.user.email = this.$route.params.email
    }
  },
  methods: {
    async handleLogin (values: unknown, actions: FormActions<Record<string, unknown>>) {
      try {
        const res = await loginService(this.user)
        if (!res.error) {
          Cookies.set('token', res.token)
          this.$router.push({ name: 'workspace' })
        }
      } catch (error: any) {
        this.$setErrors(error, actions)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form__methods {
  font-size: var(--fs-xss);
  text-align: center;
}
</style>
