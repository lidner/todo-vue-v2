import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
        "id": 1,
        "title": 'Finish Vue',
        "completed": false,
        "editing": false
      },
      {
        "id": 2,
        "title": 'Go home',
        "completed": false,
        "editing": false
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
