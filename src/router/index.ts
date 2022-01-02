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
      layout: 'default'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "Signup" */ '../views/Signup.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: () => import(/* webpackChunkName: "Workspace" */ '../views/Workspace.vue'),
    meta: {
      layout: 'workspace'
    }
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: () => import(/* webpackChunkName: "Kanban" */ '../views/Kanban.vue'),
    meta: {
      layout: 'workspace'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
