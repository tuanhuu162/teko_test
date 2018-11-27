import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import show_table from '@/components/show_table'
import signup from '@/components/signUp'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: "*",
      redirect: '/login'
    },
    {
      path: "/",
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/table',
      name: 'Table',
      component: show_table,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: signup
    }

  ]
})

Router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('table')
  else next()
})

