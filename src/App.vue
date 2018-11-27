<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import login from '@/components/login.vue'
import show_table from '@/components/show_table.vue'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBfebo3lPIg8g82w7Zl_YNYYXDGw3unqpw",
        authDomain: "teko-449de.firebaseapp.com",
        databaseURL: "https://teko-449de.firebaseio.com",
        projectId: "teko-449de",
        storageBucket: "teko-449de.appspot.com",
        messagingSenderId: "257324425236"
      });

export default {
  name: 'app',
  components: { login,show_table },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
