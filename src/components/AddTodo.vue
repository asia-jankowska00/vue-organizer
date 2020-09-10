<template>
  <div>
    <!-- <Calendar></Calendar> -->
    <v-form @submit.prevent="addTodo">
      <v-text-field v-model="title" label="Add todo" outlined></v-text-field>
      <v-btn type="submit" raised>Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
// import Calendar from "./Calendar";

export default {
  name: "AddTodo",
  components: {
    // Calendar,
  },
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
