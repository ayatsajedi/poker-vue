import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import 'bulma/css/bulma.css';

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
