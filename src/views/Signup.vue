<template>
  <div class="signup">
    <div class="container signup__container">
      <div class="signup__container__logo">
        <trello-logo />
      </div>
      <auth-card>
        <template #title>
          Sign up for your account
        </template>
        <template #body>
          <signup-form />
        </template>
        <template #footer>
          <dotted-inline-list>
            <template #a>
              <a href="#">
                Already have an account?
              </a>
            </template>
            <template #b>
              <a
                href="#"
                @click.prevent="$router.push('/login')"
              >
                Log In
              </a>
            </template>
          </dotted-inline-list>
        </template>
      </auth-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dottedInlineList from '@/components/dottedInlineList.vue'
import TrelloLogo from '@/components/TrelloLogo.vue'
import AuthCard from '@/components/AuthCard.vue'
import SignupForm from '@/components/SignupForm.vue'
export default defineComponent({
  components: {
    dottedInlineList,
    AuthCard,
    SignupForm,
    TrelloLogo
  },
  data () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.signup {
  &__container {
    &__logo {
      display: block;
      margin: 40px auto;
      width: 200px;
    }
  }
}
</style>
