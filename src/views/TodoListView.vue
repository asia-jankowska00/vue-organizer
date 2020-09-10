<template>
  <v-container>
    <v-sheet elevation="2">
      <AddTodo v-on:add-todo="addTodo" />
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </v-sheet>
  </v-container>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";

export default {
  name: "TodoList",

  components: {
    Todos,
    AddTodo,
  },

  data: () => ({
    todos: [
      {
        id: 1,
        title: "Todo one",
        completed: false,
      },
      {
        id: 2,
        title: "Todo two",
        completed: false,
      },
      {
        id: 3,
        title: "Todo three",
        completed: false,
      },
    ],
  }),

  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
  },
};
</script>
