<template>
  <div class="home">
    <nav class="home__nav navbar navbar-expand-md bg-transparent">
      <div class="home__nav__container container-fluid">
        <trello-logo class="home__nav__container__logo navbar-brand" />
        <button
          class="home__nav__container__collapser navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarNav"
          class="home__nav__container__navbar__nav collapse navbar-collapse justify-content-end"
        >
          <ul class="home__nav__container__navbar__nav__list navbar-nav">
            <li class="home__nav__container__navbar__nav__list__item nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Login</a>
            </li>
            <li class="home__nav__container__navbar__nav__list__item nav-item">
              <button
                class="btn btn-primary"
                @click="$router.push('/signup')"
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="home__herosection">
      <div class="container home__herosection__container">
        <div class="row align-items-center home__herosection__container__row">
          <div class="col home__herosection__container__row__col">
            <h1>Trello helps teams move work forward.</h1>
            <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
            <form class="d-flex gap-2">
              <input
                class="form-control form-control-lg w-50"
                type="email"
                placeholder="Email"
              >
              <button class="btn btn-primary form-control-lg flex-grow-1 p-0">
                Sign up—it’s free!
              </button>
            </form>
          </div>
          <div class="col home__herosection__container__row__col">
            <img
              class="home__herosection__container__row__col__img"
              src="@/assets/images/hero.png"
              alt="hero"
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrelloLogo from '@/components/TrelloLogo.vue'

export default defineComponent({
  components: {
    TrelloLogo
  }
})
</script>

<style lang="scss" scoped>
    .home {
        &__nav {
            &__container {
                &__logo {
                    width: 125px;
                }
            }
        }
        &__herosection {
            &__container {
                &__row {
                    &__col {
                        &__img {
                            width: 450px;
                        }
                    }
                }
            }
        }
    }
</style>
