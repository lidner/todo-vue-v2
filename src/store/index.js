import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://meeting.prodev.kz/auth/'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    filter: 'all',
    todos: [
      {
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
  getters: {
    loggedIn(state) {
      return state.token != null
    },
    remaining(state) {
      return state.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0;
    },
    todosFiltered(state) {
      if (state.filter == 'all') {
        return state.todos
      } else if (state.filter == 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter == 'completed') {
        return state.todos.filter(todo => todo.completed)
      }
      return state.todos
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false
      })
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex((item) => item.id == todo.id)
      state.todos.splice(index, 1, {
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
        'editing': todo.editing,
        // 'beforeEditCache': this.beforeEditCache
      })
    },
    deleteTodo(state, id) {
      const index =  state.todos.findIndex((item) => item.id == id)
      state.todos.splice(index, 1)
    },
    checkAll(state, checked) {
      // state.todos.forEach(todo => (todo.completed = event.target.checked))
      state.todos.forEach(todo => (todo.completed = checked))
    },
    updateFilter(state, filter) {
      state.filter = filter
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    },
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    addTodo(context, todo) {
      setTimeout(() => {
        context.commit('addTodo', todo);
      }, 1000)
    },
    updateTodo(context, todo) {
      context.commit('updateTodo', todo);
    },
    deleteTodo(context, id) {
      context.commit('deleteTodo', id);
    },
    checkAll(context, checked) {
      context.commit('checkAll', checked);
    },
    updateFilter(context, filter) {
      context.commit('updateFilter', filter);
    },
    clearCompleted(context) {
      context.commit('clearCompleted');
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login_iin/', {
          username: credentials.username,
          password: credentials.password
        })
        .then(response => {
          const token = response.data.token
          localStorage.setItem('token', token)
          context.commit('retrieveToken', token)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    destroyToken(context) {
      localStorage.removeItem('token')
      context.commit('destroyToken')
    }
  },
  modules: {
  }
});
