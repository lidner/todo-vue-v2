import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import App from '../App.vue'
import Home from '../components/marketing/Home.vue'
import About from '../components/marketing/About.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import Logout from '../components/auth/Logout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: App,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import( /* webpackChunkName: "about" */ '@/components/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
