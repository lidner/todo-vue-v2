<template>
  <div id="app" class="container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <todo-list></todo-list>

  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
export default {
  name: 'App',
  components: {
    TodoList

  }
}
</script>

<style>
/* 
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

.container {
  max-width: 600px;
  margin: 0 auto;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
