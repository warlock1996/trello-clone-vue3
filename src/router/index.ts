import Cookies from 'js-cookie'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layout: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {
      layout: 'default',
      protected: false
    }
  },
  {
    path: '/account/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta: {
      layout: 'default',
      protected: false
    }
  },
  {
    path: '/account/signup',
    name: 'Signup',
    component: () =>
      import(/* webpackChunkName: "Signup" */ '../views/Signup.vue'),
    meta: {
      layout: 'default',
      protected: false
    }
  },
  {
    path: '/account/activate/:hash',
    name: 'ActivateAccount',
    component: () =>
      import(/* webpackChunkName: "Activate" */ '../views/Activate.vue'),
    meta: {
      layout: 'default',
      protected: false
    }
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: () =>
      import(/* webpackChunkName: "Workspace" */ '../views/Workspace.vue'),
    meta: {
      layout: 'workspace',
      protected: true
    }
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: () =>
      import(/* webpackChunkName: "Kanban" */ '../views/Kanban.vue'),
    meta: {
      layout: 'workspace',
      protected: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.protected) {
    if (Cookies.get('token')) {
      return next('/workspace')
    }
    return next()
  } else {
    if (!Cookies.get('token')) {
      return next('/account/login')
    }
  }

  next()
})

export default router
