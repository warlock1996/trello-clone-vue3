<template>
  <div class="login">
    <div class="container login__page__container">
      <div class="login__page__container__logo">
        <trello-logo />
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
              <a
                href="#"
                @click.prevent="$router.push('/signup')"
              >
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
    <atlassian-footer>
      <template #logo-slot>
        <img
          src="@/assets/images/atlassian-logo-blue-small.svg"
          alt="atlassion-logo-blue-small"
        >
      </template>
    </atlassian-footer>
    <global-footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dottedInlineList from '@/components/dottedInlineList.vue'
import AuthCard from '@/components/AuthCard.vue'
import LoginForm from '@/components/LoginForm.vue'
import TrelloLogo from '@/components/TrelloLogo.vue'
import AtlassianFooter from '@/components/AtlassianFooter.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default defineComponent({
  components: {
    dottedInlineList,
    AuthCard,
    LoginForm,
    TrelloLogo,
    AtlassianFooter,
    GlobalFooter

  },
  data () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  &__page__container {
    color: #5e6c84;
    &__logo {
      display: block;
      margin: 40px auto;
      width: 200px;
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
