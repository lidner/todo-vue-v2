<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="Задачи"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <todo-item v-for="(todo, index) in todosFiltered" 
        :key="todo.id" 
        :todo="todo" 
        :index="index" 
        :checkAll="!anyRemaining" >
        </todo-item>
    </transition-group>

    <div class="extra-container">
    <check-all></check-all>
      <todo-items-remaining></todo-items-remaining>
    </div>

    <div class="extra-container">
      <todo-filtered></todo-filtered>

      <div>
          <transition name="fade">
              <todo-clear-completed></todo-clear-completed>
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CheckAll from './CheckAll.vue';
import TodoClearCompleted from './TodoClearCompleted.vue';
import TodoFiltered from './TodoFiltered.vue';
import TodoItem from './TodoItem.vue'
import TodoItemsRemaining from './TodoItemsRemaining.vue';
export default {
  name: "todo-list",
  components: {
    TodoItem,
    TodoItemsRemaining,
    CheckAll,
    TodoFiltered,
    TodoClearCompleted
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      beforeEditCache: "",
    };
  },
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining
    },
    todosFiltered() {
        return this.$store.getters.todosFiltered
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return (this.newTodo = "");
      }

      this.$store.dispatch('addTodo', {
        id: this.idForTodo,
        title: this.newTodo
      })

      this.newTodo = "";
      this.idForTodo++;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}

.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: red;
  }
}

.todo-item-left {
  display: flex;
}

.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}

.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  widows: 100%;
  padding: 10px;
  border: 1px solic #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  &:focus {
    outline: none;
  }
}

.completed {
  text-decoration: line-through;
  color: grey;
}

.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}

button {
  font-size: 14px;
  background-color: white;
  appearance: none;
  padding: 4px;
  &:hover {
    background: lightgreen;
  }
  &:focus {
    outline: none;
  }
}
.activeFilter {
  background: lightgreen;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
