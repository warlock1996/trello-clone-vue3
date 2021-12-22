<template>
  <div class="login">
    <div class="container login__page__container">
      <div class="login__page__container__logo">
        <img
          class="login__page__container__logo__img"
          src="@/assets/images/trello-logo-blue.svg"
          alt="trello-logo-blue"
        >
      </div>
      <auth-card>
        <template #title>
          Log In to Trello
        </template>
        <template #body>
          <login-form />
        </template>
        <template #footer>
          <dotted-inline-list>
            <template #a>
              <a href="#">
                Can't log in?</a>
            </template>
            <template #b>
              <a href="#">
                Sign up for an account
              </a>
            </template>
          </dotted-inline-list>
        </template>
      </auth-card>
      <div class="login__page__container__links">
        <dotted-inline-list class="mt-3">
          <template #a>
            <a href="#">Privacy Policy</a>
          </template>
          <template #b>
            <a href="#">
              Terms of Service
            </a>
          </template>
        </dotted-inline-list>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dottedInlineList from '@/components/dottedInlineList.vue'
import AuthCard from '@/components/AuthCard.vue'
import LoginForm from '@/components/LoginForm.vue'
export default defineComponent({
  components: {
    dottedInlineList,
    AuthCard,
    LoginForm
  },
  data () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.login {
  &__page__container {
    color: #5e6c84;
    &__logo__img {
      display: block;
      width: 200px;
      margin: 40px auto;
    }
  }
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
