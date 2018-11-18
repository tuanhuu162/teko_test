<template>
  <div id="app" class="container">
    <div class="pagepheader">
      <h1> Vue.js2 </h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Books list</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thread>
            <tr>
              <th>
                Title
              </th>
              <th>
                Author
              </th>
            </tr>
          </thread>

          <tbody>
            <tr v-for="book in books">
              <td>
                <a v-bind:href="book.url">{{book.title}}</a>
              </td>
              <td>
                {{book.author}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import { db } from './static/firebase'

export default {
  name: 'app',
  data() {
    return{
      
    }
  }
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
