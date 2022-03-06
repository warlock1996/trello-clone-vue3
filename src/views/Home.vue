<template>
  <div class="home">
    <nav class="home__nav navbar navbar-expand-md p-3" :class="{ 'bg-white': scrollPos > 200 }">
      <div class="home__nav__container container-fluid p-0">
        <trello-logo class="home__nav__container__logo navbar-brand" />
        <button
          class="home__nav__container__collapser navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon shadow-0">
            <i class="bi bi-three-dots" />
          </span>
        </button>
        <div id="navbarNav" class="home__nav__container__navbar__nav collapse navbar-collapse justify-content-end">
          <ul class="home__nav__container__navbar__nav__list navbar-nav">
            <li class="home__nav__container__navbar__nav__list__item nav-item">
              <a class="nav-link active" aria-current="page" href="#" @click.prevent="$router.push({ name: 'login' })"
                >Log in</a
              >
            </li>
            <li class="home__nav__container__navbar__nav__list__item nav-item">
              <button class="btn btn-primary fw-bold" @click.prevent="$router.push({ name: 'signup' })">Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="home__herosection">
      <div class="container home__herosection__container">
        <div class="row align-items-center home__herosection__container__row">
          <div class="col-lg-7 col-md-12 home__herosection__container__row__col">
            <h1 class="text-center text-md-start">Trello helps teams move work forward.</h1>
            <p class="text-center text-md-start">
              Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the
              way your team works is unique—accomplish it all with Trello.
            </p>
            <form class="d-flex gap-2">
              <input class="form-control form-control-lg w-50 d-none d-md-block" type="email" placeholder="Email" />
              <button
                @click.prevent="$router.push({ name: 'signup' })"
                class="btn btn-primary form-control-lg flex-grow-1 p-0">
                Sign up—it’s free!
              </button>
            </form>
          </div>
          <div class="col-lg-4 d-none d-lg-block offset-lg-1 home__herosection__container__row__col">
            <img
              class="img-fluid home__herosection__container__row__col__img"
              src="@/assets/images/hero.png"
              alt="hero" />
          </div>
        </div>
      </div>
    </section>
    <section class="home__centeredsection">
      <div class="container home__centeredsection__container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <h2>It’s more than work. It’s a way of working together.</h2>
            <p class="home__centeredsection__container__description">
              Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork
              grows. Manage projects, organize tasks, and build team spirit—all in one place.
            </p>
            <button
              @click.prevent="$router.push({ name: 'signup' })"
              class="btn btn-outline-primary btn-lg mb-3 home__centeredsection__btn">
              Start doing
              <i class="bi bi-arrow-right" />
            </button>
            <img class="img-fluid home__centeredsection__container__img" src="@/assets/images/board.png" alt="board" />
            <p class="home__centeredsection__container__description">
              Join over 1,000,000 teams worldwide that are using Trello to get more done.
            </p>
            <div class="d-flex gap-5 flex-wrap justify-content-center home__centeredsection__container__logos">
              <img src="@/assets/svgs/google.svg" alt="google" />
              <img src="@/assets/svgs/tender.svg" alt="tender" />
              <img src="@/assets/svgs/squarespace.svg" alt="sqaurespace" />
              <img src="@/assets/svgs/costco.svg" alt="costco" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home__featuresection">
      <div class="container home__featuresection__container">
        <div class="row home__featuresection__container__row home__featuresection__container__row--padhalf">
          <div class="col-md-12 col-lg-7 home__featuresection__container__row__col">
            <h2>Features to help your team succeed</h2>
            <p class="home__featuresection__container__row__col__description">
              Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects
              to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and
              customize workflows for just about anything.
            </p>
          </div>
          <div class="col home__featuresection__container__row__col" />
        </div>
        <div class="row home__featuresection__container__row">
          <div class="col-md-5 home__featuresection__container__row__col">
            <img src="@/assets/images/view.svg" alt="view" class="img-fluid" />
          </div>
          <div class="col-md-7 home__featuresection__container__row__col">
            <h6 class="home__featuresection__container__row__col__view">CHOOSE A VIEW</h6>
            <h2 class="home__featuresection__container__row__col__heading">The board is just the beginning</h2>
            <p class="home__featuresection__container__row__col__description">
              Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task
              assignments, timelines, productivity metrics, calendars, and more.
            </p>
            <button
              class="btn btn-transparent border-0 shadow-none p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#boardCollpase"
              aria-expanded="false"
              aria-controls="boardCollpase">
              + Learn More
            </button>
            <div id="boardCollpase" class="collapse">
              <p>
                You and your team can start up a Trello board in seconds. With the ability to view board data from many
                different angles, the entire team stays up-to-date in the way that suits them best:
              </p>
              <ul>
                <li>Use a Timeline view for project planning</li>
                <li>Calendar helps with time management</li>
                <li>Table view connects work across boards</li>
                <li>See board stats with Dashboard, and more!</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row home__featuresection__container__row">
          <div class="col-md-7 home__featuresection__container__row__col">
            <h6 class="home__featuresection__container__row__col__view">DIVE INTO THE DETAILS</h6>
            <h2 class="home__featuresection__container__row__col__heading">Cards contain everything you need</h2>
            <p class="home__featuresection__container__row__col__description">
              Trello cards are your portal to more organized work—where every single part of your task can be managed,
              tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates,
              attachments, conversations, and more.
            </p>
            <button
              class="btn btn-transparent border-0 shadow-none p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cardCollapse"
              aria-expanded="false"
              aria-controls="cardCollapse">
              + Learn More
            </button>
            <div id="cardCollapse" class="collapse">
              <p>
                Spin up a Trello card with a click, then uncover everything it can hold. Break down bigger card tasks
                into steps with file attachment previews, reminders, checklists and comments—emoji reactions included!
                Plus, gain powerful perspective by seeing all cards by list and status at the board level.
              </p>
              <p>Your team can:</p>
              <ul>
                <li>Manage deadlines</li>
                <li>Provide and track feedback</li>
                <li>Assign tasks and hand off work</li>
                <li>Connect work across apps</li>
              </ul>
            </div>
          </div>
          <div class="col-md-5 home__featuresection__container__row__col">
            <img src="@/assets/images/card-back.svg" alt="view" class="img-fluid" />
          </div>
        </div>
        <div class="row home__featuresection__container__row">
          <div class="col-md-5 home__featuresection__container__row__col">
            <img src="@/assets/images/automation.png" alt="view" class="img-fluid" />
          </div>
          <div class="col-md-7 home__featuresection__container__row__col">
            <h6 class="home__featuresection__container__row__col__view">MEET YOUR NEW BUTLER</h6>
            <h2 class="home__featuresection__container__row__col__heading">No-code automation</h2>
            <p class="home__featuresection__container__row__col__description">
              Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation,
              Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of
              automation across your entire team.
            </p>
            <button
              class="btn btn-transparent border-0 shadow-none p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#automationCollapse"
              aria-expanded="false"
              aria-controls="automationCollapse">
              + Learn More
            </button>
            <div id="automationCollapse" class="collapse">
              <p>Butler uses natural language commands to automate just about any task in Trello:</p>
              <ul>
                <li>Automate common actions like moving lists</li>
                <li>Create custom buttons to build process quickly</li>
                <li>Surface upcoming deadlines to the team</li>
                <li>Schedule teammate assignments, and more!</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row home__featuresection__container__row">
          <div class="col-md-7 home__featuresection__container__row__col-md-7">
            <h6 class="home__featuresection__container__row__col__view">POWER-UPS</h6>
            <h2 class="home__featuresection__container__row__col__heading">Integrate top work tools</h2>
            <p class="home__featuresection__container__row__col__description">
              Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps
              fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are
              covered.
            </p>
            <button
              class="btn btn-transparent border-0 shadow-none p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#integrationCollapse"
              aria-expanded="false"
              aria-controls="integrationCollapse">
              + Learn More
            </button>
            <div id="integrationCollapse" class="collapse">
              <p>
                From Reporting to Custom Fields to your beloved software integrations—we’ve got functionalities, your
                favorites, and more!
              </p>
              <ul>
                <li>Confluence</li>
                <li>Slack</li>
                <li>Dropbox</li>
                <li>Google Drive</li>
                <li>Evernote</li>
              </ul>
            </div>
          </div>
          <div class="col-md-5 home__featuresection__container__row__col">
            <img src="@/assets/images/power-ups.png" alt="view" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section class="home__pricesection">
      <div class="container py-5 home__pricesection__container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="d-flex gap-5 mb-2">
              <img class="d-none d-lg-block" src="@/assets/images/tag.svg" alt="tag" />
              <div>
                <h3>See our pricing</h3>
                <p>Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made for your organization.</p>
                <button class="btn btn-outline-primary">Trello pricing</button>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="d-flex gap-5 mb-2">
              <img class="d-none d-lg-block" src="@/assets/images/compass.svg" alt="tag" />
              <div>
                <h3>Take a Trello tour</h3>
                <p>Explore the world of boards and beyond in Trello. Dive deeper into our most popular features.</p>
                <button class="btn btn-outline-primary">Tour Trello</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home__signupsection">
      <div class="container py-5 home__signupsection__container">
        <div class="row">
          <div class="col">
            <div class="card py-5 px-3 py-lg-6 home__signupsection__container__card">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6">
                  <h3 class="m-0 mb-5">
                    Sign up and get started with Trello today. A world of productive teamwork awaits!
                  </h3>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-6">
                  <form class="d-flex gap-2">
                    <input
                      class="form-control d-none d-md-block form-control-lg w-75"
                      type="email"
                      placeholder="Email" />
                    <button
                      @click.prevent="$router.push({ name: 'signup' })"
                      class="btn btn-info text-white form-control-lg flex-grow-1">
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home__sectionribbon">
      <div class="container home__sectionribbon__container">
        <div class="row align-items-center justify-content-end">
          <div class="col-xl-5 offset-xl-2">
            <p class="mb-0 text-xl-end text-center">Trello also works great on your smaller screen.</p>
          </div>
          <div class="col-xl-5">
            <div class="row justify-content-end py-2">
              <div class="col">
                <img src="@/assets/images/apple.svg" alt="apple" width="250px" class="img-fluid w-100" />
              </div>
              <div class="col">
                <img src="@/assets/images/google.svg" alt="google" width="250px" class="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <atlassian-footer class="flex-column-reverse" divider="d-none" root="my-5">
      <template #logo-slot>
        <img src="@/assets/images/atlassian-logo-gray-small.svg" alt="atlassion-logo-gray-small" />
      </template>
      <template #extra> © Copyright 2021. All rights reserved. </template>
    </atlassian-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrelloLogo from '@/components/TrelloLogo.vue'
import AtlassianFooter from '@/components/AtlassianFooter.vue'

export default defineComponent({
  components: {
    TrelloLogo,
    AtlassianFooter
  },
  data () {
    return {
      scrollPos: 0
    }
  },
  mounted () {
    document.addEventListener('scroll', () => {
      this.scrollPos = window.scrollY
    })
  }
})
</script>

<style lang="scss" scoped>
.home {
  @media screen and (max-width: 768px) {
    --fs-xxxl: 32px;
  }
  h1 {
    font-family: CharlieDisplay-Semibold;
    font-size: var(--fs-xxxl);
  }
  h2 {
    font-family: CharlieDisplay-Semibold;
    font-size: var(--fs-xxl);
  }
  h3 {
    font-size: var(--fs-xl);
  }
  p {
    font-family: CharlieText-Regular;
    font-size: var(--fs-lg);
  }
  button[data-bs-toggle='collapse'] {
    font-size: var(--fs-xl);
    font-family: CharlieDisplay-Semibold;
  }
  .collapse p {
    font-size: var(--fs-sm);
  }
  ul li {
    font-family: CharlieText-Regular;
    font-size: var(--fs-sm);
  }
  position: relative;
  &__nav {
    position: fixed;
    top: 0;
    width: 100%;
    &__container {
      &__logo {
        width: 125px;
      }
    }
    transition: background 0.4s;
    &.bg-white {
      background: var(--light-clr-1);
      box-shadow: 0 0 10px rgb(0 0 0 / 30%);
    }
  }
  &__herosection {
    padding-top: 100px;
    padding-bottom: 100px;
    background: linear-gradient(0deg, #fff, #eae6ff 100%);
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
  &__centeredsection {
    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;
    &__container__img {
      display: block;
      margin: auto;
    }
  }
  &__featuresection {
    &__container {
      &__row {
        padding-top: 48px;
        padding-bottom: 48px;
        &--padhalf {
          padding-top: 24px;
          padding-bottom: 24px;
        }
      }
    }
  }
  &__signupsection {
    &__container {
      &__card {
        text-align: center;
        background-image: url('/assets/images/background.svg'),
          linear-gradient(0deg, var(--primary-clr-3), #403294 100%);
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
        color: #fff;
      }
    }
  }
  &__pricesection {
    &__container {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  }
}
</style>
