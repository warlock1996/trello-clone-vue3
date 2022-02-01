<template>
  <div class="signup-form">
    <form>
      <input
        class="form-control mb-3"
        type="text"
        name="name"
        placeholder="Enter full name"
      />
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
      <input
        class="form-control mb-3"
        type="password"
        name="password"
        placeholder="Re-enter password"
      >
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
          disabled
        >
          Continue
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
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
