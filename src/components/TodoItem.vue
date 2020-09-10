<template>
  <h1 v-bind:class="{ 'is-complete': todo.completed }" @click="markComplete">
    <v-checkbox :label="todo.title" type="checkbox" @change="markComplete" />

    <v-btn icon @click="$emit('del-todo', todo.id)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <!-- <v-button @click="$emit('del-todo', todo.id)">x</v-button> -->
  </h1>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style>
.is-complete {
  text-decoration: line-through;
}
</style>
