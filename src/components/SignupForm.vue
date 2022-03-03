<template>
  <div class="signup-form">
    <Form @submit="handleSignUp" v-slot="{ meta: { valid }, errors }">
      <Field
        v-model="user.name"
        class="form-control mb-1"
        rules="required"
        type="text"
        name="name"
        placeholder="Enter full name" />
      <div class="error text-danger mb-3">{{ errors['name'] }}</div>
      <Field
        v-model="user.email"
        rules="required|email"
        class="form-control mb-1"
        type="email"
        name="email"
        placeholder="Enter email" />
      <div class="error text-danger mb-3">{{ errors['email'] }}</div>
      <Field
        v-model="user.password"
        class="form-control mb-1"
        type="password"
        name="password"
        rules="required"
        placeholder="Enter password" />
      <div class="error text-danger mb-3">{{ errors['password'] }}</div>

      <Field
        v-model="user.confirmPassword"
        class="form-control mb-1"
        type="password"
        rules="required"
        name="confirmPassword"
        placeholder="Re-enter password" />
      <div class="error text-danger mb-3">{{ errors['confirmPassword'] }}</div>

      <div class="signup-form__note">
        <p>
          By signing up, you confirm that you've read and accepted our
          <a href="#">Terms of Service</a>
          and
          <a href="#"> Privacy Policy. </a>
        </p>
      </div>
      <div class="d-grid d-block mb-3">
        <button type="submit" class="btn btn-success btn-sm text-white" :disabled="!valid">Continue</button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import { signUpService } from '@/services/auth'
import { Form, Field, FormActions } from 'vee-validate'
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      user: {
        name: 'Some User',
        email: 'someuser@gmail.com',
        password: 'ArslanAli123$',
        confirmPassword: 'ArslanAli123$'
      }
    }
  },
  components: {
    Form,
    Field
  },
  inject: ['setLayoutAlertText'],
  methods: {
    async handleSignUp (values: unknown, actions: FormActions<Record<string, unknown>>) {
      try {
        const res = await signUpService(this.user)
        if (!res.error) {
          this.setLayoutAlertText(res.message)
          this.$router.push({
            name: 'login',
            params: {
              email: this.user.email
            }
          })
        }
      } catch (error) {
        this.$setErrors(error, actions)
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
