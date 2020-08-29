<template>
  <h1 v-bind:class="{ 'is-complete': todo.completed }" @click="markComplete">
    <input type="checkbox" v-on:change="markComplete" />
    {{ todo.title }}
    <button @click="$emit('del-todo', todo.id)">x</button>
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
