<template>
  <div>
    <!-- <h1 > -->
    <TodoItem
      v-bind:key="todo.id"
      v-for="todo in todos"
      v-bind:todo="todo"
      v-on:del-todo="$emit('del-todo', todo.id)"
    />
    <!-- </h1> -->
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  props: ["todos"],
};
</script>

<style></style>
