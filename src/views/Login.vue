<template>
  <div class="login">
    <div class="container login__page__container">
      <div class="login__page__container__logo">
        <trello-logo @click="$router.push({ name: 'home' })" />
      </div>
      <auth-card>
        <template #title> Log In to Trello </template>
        <template #body>
          <login-form />
        </template>
        <template #footer>
          <dotted-inline-list>
            <template #a>
              <a href="#"> Can't log in?</a>
            </template>
            <template #b>
              <a href="#" @click.prevent="$router.push({ name: 'signup' })"> Sign up for an account </a>
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
            <a href="#"> Terms of Service </a>
          </template>
        </dotted-inline-list>
      </div>
    </div>
    <atlassian-footer>
      <template #logo-slot>
        <img src="@/assets/images/atlassian-logo-blue-small.svg" alt="atlassion-logo-blue-small" />
      </template>
    </atlassian-footer>
    <global-footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import DottedInlineList from '@/components/DottedInlineList.vue'
import AuthCard from '@/components/AuthCard.vue'
import LoginForm from '@/components/LoginForm.vue'
import TrelloLogo from '@/components/TrelloLogo.vue'
import AtlassianFooter from '@/components/AtlassianFooter.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'

export default defineComponent({
  components: {
    DottedInlineList,
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
  &__page__container {
    position: relative;
    z-index: 2;
    color: var(--gray-clr-3);
    &__logo {
      display: block;
      padding-top: 40px;
      padding-bottom: 40px;
      margin: auto;
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
