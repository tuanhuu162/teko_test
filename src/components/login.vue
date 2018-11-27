<template>
  <div class="login">
    <v-app>
     <main>
       <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="pt-5 blue darken-4">
                <v-toolbar-title class="white--text"><h4>Welcome Back</h4></v-toolbar-title>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form v-model="valid" ref="form">
                        <v-text-field
                          label="E-mail"
                          v-model="auth.email"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                          v-model="auth.password"
                          :append-icon="e1 ? 'visibility' : 'visibility_off'"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'"
                          :rules="passwordRules"
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="login" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Login</v-btn>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
       <span> You don't have an account? You can <router-link to="/sign-up">create one</router-link></span>
     </main>
   </v-app>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
<script>
import firebase,{ functions } from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      valid: true,
      e1: true,
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8) || 'Password must have more 8 character'
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      auth:{
        email:'',
        password:''
      }
    }
  },

  methods: {
    login: function() {
        firebase.auth().signInWithEmailAndPassword(this.auth.email, this.auth.password).then(
          (user) => {
            this.$router.replace('table')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  background-size: cover;
  overflow:hidden;
}
.loginOverlay {
  background:rgba(33,150,243,0.3);
}
span {
    display: block;
    margin-top: 20px;
    font-size: 22px;
  }
</style>
