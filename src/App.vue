<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs>
        <v-tab>Todo List</v-tab>
        <v-tab>Calendar</v-tab>
        <v-tab>Kanban Board</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <!-- <Calendar /> -->
      <!-- <v-form @submit=''> -->
      <AddTodo v-on:add-todo="addTodo" />

      <!-- </v-form> -->
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </v-main>
  </v-app>
</template>

<script>
// import Calendar from "./components/Calendar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",

  components: {
    // Calendar,
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
