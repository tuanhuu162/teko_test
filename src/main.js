// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import VueFirestore from 'vue-firestore'

Vue.use(VueFire)
Vue.use(Vuetify)
Vue.use(VueFirestore);

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyBfebo3lPIg8g82w7Zl_YNYYXDGw3unqpw",
  authDomain: "teko-449de.firebaseapp.com",
  databaseURL: "https://teko-449de.firebaseio.com",
  projectId: "teko-449de",
  storageBucket: "teko-449de.appspot.com",
  messagingSenderId: "257324425236"
};

const firebaseApp = firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if(!app){
    app = new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })
  }
})
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
