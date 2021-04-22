// Entry point for JavaScript
import Vue from 'vue'
// import App from './App.vue'
import Master from '@/components/layouts/Master.vue'
import LandingLayout from '@/components/layouts/LandingLayout.vue'
import SideNavLayout from '@/components/layouts/SideNavLayout.vue'
import router from './router'
import store from './store'

// window.eventBus = new Vue()
// export const eventBus = new Vue();
Vue.prototype.$eventBus = new Vue(); // Global event bus

Vue.config.productionTip = false


Vue.component('landing-layout', LandingLayout);
Vue.component('default-layout', SideNavLayout);



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        name: 'todo',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


// Vue Instance
new Vue({
  router,
  store,
  render: h => h(Master)
}).$mount('#app')
