// Entry point for JavaScript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.eventBus = new Vue()

Vue.config.productionTip = false

// Vue Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
