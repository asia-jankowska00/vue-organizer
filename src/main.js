import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyB6wyqH1Et4rjTmVYvX3D4w5AmDqErg4gA",
  authDomain: "vue-organizer-c4a2b.firebaseapp.com",
  databaseURL: "https://vue-organizer-c4a2b.firebaseio.com",
  projectId: "vue-organizer-c4a2b",
  storageBucket: "vue-organizer-c4a2b.appspot.com",
  messagingSenderId: "403824225628",
  appId: "1:403824225628:web:41363af9e1e38c4ae0a599",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
