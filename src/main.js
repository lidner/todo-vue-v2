// Entry point for JavaScript
import Vue from 'vue'
// import App from './App.vue'
import Master from '@/components/layouts/Master.vue'
import router from './router'
import store from './store'

// window.eventBus = new Vue()
// export const eventBus = new Vue();
Vue.prototype.$eventBus = new Vue(); // Global event bus

Vue.config.productionTip = false

// Vue Instance
new Vue({
  router,
  store,
  render: h => h(Master)
}).$mount('#app')
