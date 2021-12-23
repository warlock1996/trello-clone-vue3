<template>
  <footer
    class="footer"
    :class="$attrs.root"
  >
    <hr
      class="footer__divider"
      :class="$attrs.divider"
    >
    <div
      class="d-flex flex-column"
      :class="$attrs.class"
    >
      <div class="footer__atlassian_logo mb-3">
        <slot name="logo-slot" />
      </div>
      <div class="footer__links mb-3">
        <ul class="footer__links__list">
          <div class="footer__links__list--item">
            <a href="#">Templates</a>
          </div>
          <div class="footer__links__list--item">
            <a href="#">Pricing</a>
          </div> <div class="footer__links__list--item">
            <a href="#">Apps</a>
          </div> <div class="footer__links__list--item">
            <a href="#">Jobs</a>
          </div> <div class="footer__links__list--item">
            <a href="#">Blog</a>
          </div> <div class="footer__links__list--item">
            <a href="#">Developers</a>
          </div> <div class="footer__links__list--item">
            <a href="#">About</a>
          </div> <div class="footer__links__list--item">
            <a href="#">Help</a>
          </div> <div class="footer__links__list--item">
            <a href="#">Cookie</a>
          </div> <div class="footer__links__list--item">
            <a href="#">Settings</a>
          </div>
        </ul>
      </div>
    </div>
    <div class="footer__extra">
      <slot name="extra" />
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  inheritAttrs: false
})
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  position: relative;
  z-index: 2;
  &__divider {
    width: 400px;
    max-width: 400px;
    margin: 40px auto;
    color: #5e6c84;
  }
  &__atlassian_logo {
      display: block;
      margin: auto;
      width: 150px;
  }
  &__links {
    &__list {
      list-style: none;
      padding: 0px;
      margin: 0px;
      display: inline-block;
      &--item {
        display: inline;
        margin: auto 5px;
        a {
            color: #5e6c84;
            font-size: 14px;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
