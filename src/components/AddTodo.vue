<template>
  <v-form @submit.prevent="addTodo">
    <v-text-field v-model="title" label="Add todo" outlined></v-text-field>
    <v-btn type="submit" raised>Submit</v-btn>
  </v-form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  data: () => ({
    title: "",
  }),
  methods: {
    addTodo(e) {
      // e.preventDefault();
      const newTodo = {
        id: uuidv4(),
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    },
  },
};
</script>

<style></style>
