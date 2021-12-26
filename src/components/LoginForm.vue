<template>
  <div class="login-form">
    <form>
      <input
        class="form-control mb-3"
        type="email"
        name="email"
        placeholder="Enter email"
      >
      <input
        class="form-control mb-3"
        type="password"
        name="password"
        placeholder="Enter password"
      >
      <div class="d-grid d-block mb-3">
        <button class="btn btn-success btn-sm text-white">
          Log In
        </button>
      </div>
    </form>
    <div class="login-form__methods mb-3">
      <div class="mb-3">
        OR
      </div>
      <a
        class="mb-3"
        href="#"
      >Log in with SSO</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.login-form__methods {
  font-size: 14px;
  text-align: center;
}
</style>
