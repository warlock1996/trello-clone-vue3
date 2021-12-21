<template>
    <div class="login__page">
        <div class="container login__page__container">
          <div class="login__page__container__logo">
              <img class="login__page__container__logo--img" src="@/assets/images/trello-logo-blue.svg" alt="trello-logo-blue">
          </div>
          <div class="card login__page__container__card">
              <div class="card-body p-0 login__page__container__card--body">
                  <div class="card-title login__page__container__card--body__title mb-4">
                      <h1>Log In to Trello</h1>
                  </div>
                  <form>
                      <input class="form-control mb-3" type="email" name="email" placeholder="Enter email" />
                      <input class="form-control mb-3" type="password" name="password" placeholder="Enter password" />
                      <div class="d-grid d-block mb-3">
                      <button class="btn btn-success btn-sm text-white">Log In</button>
                      </div>
                  </form>
                      <div class="login__page__container__card--body__sso mb-3">
                        <div class="mb-3"> OR </div>
                          <a class="mb-3" href="#">Log in with SSO</a>
                      </div>
                  <div class="card-footer login__page__container__card--footer">
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
                  </div>
              </div>
          </div>
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
          <TheFooter />
        </div>
        <div class="login__page__bottom">
            <div class="row justify-content-between">
                <div class="col">
                    <img class="login__page__bottom--img" src="@/assets/svgs/loginBottomLeft.svg" alt="loginBottomLeft">
                </div>
                <div class="col">
                    <img class="login__page__bottom--img right" src="@/assets/svgs/loginBottomRight.svg" alt="loginBottomRight">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dottedInlineList from '@/components/dottedInlineList.vue'
import TheFooter from '@/components/TheFooter.vue'
export default defineComponent({
  data () {
    return {}
  },
  components: {
    dottedInlineList,
    TheFooter
  }
})
</script>

<style lang="scss" scoped>
.login__page {
  &__container {
    color: #5e6c84;
    &__logo--img {
      display: block;
      width: 200px;
      margin: 40px auto;
    }
    &__card {
      display: block;
      max-width: 400px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 3px;
      padding: 25px 40px;
      box-shadow: rgb(0 0 0 / 10%) 0 0 10px;

      @media screen and (max-width: 768px) {
        box-shadow: none;
        border: none;
      }
      &--body {
        max-width: 400px;
        &__title {
          text-align: center;
          h1 {
            font-size: 16px;
          }
        }
        &__sso {
          text-align: center;
          font-size: 14px;
        }
      }
      &--footer {
        background: transparent;
        text-align: center;
        border-top-color: #cccccc;
      }
    }
    &__links {
      text-align: center;
    }
  }
  &__bottom {
    width: 100%;
    position: fixed;
    bottom: 0px;
    z-index: -1;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &--img {
      max-width: 400px;
      &.right {
        display: block;
        margin-left: auto;
      }
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
