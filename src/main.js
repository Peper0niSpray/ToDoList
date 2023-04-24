import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import store from './store/store'
import router from './router/index'

import './scss/main.scss';
import './scss/print.css';

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

