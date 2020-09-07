import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "../views/Login.vue"
import Home from "../views/Home.vue"
import Player from '../components/Player';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/table",
      name: "table",
      component: Player
    }
  ]
})