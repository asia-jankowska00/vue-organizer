<template>
  <!-- <div id="app"> -->
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs>
        <v-tab to="todo">todo </v-tab>
        <v-tab to="calendar">
          calendar
        </v-tab>
        <v-tab to="kanban">kanban </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <!-- </div> -->
</template>

<style lang="scss"></style>
