import Vue from 'vue'
import Router from 'vue-router'
import TheNews from '../views/TheNews.vue';
import TheDetail from '../views/TheDetail.vue';
import TheContact from '../views/TheContact.vue';
import TheFile from '../views/TheFile.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: TheNews },
    { path: '/news', component: TheNews },
    { path: '/news/:id', component: TheDetail },
    { path: '/contact', component: TheContact },
    { path: '/json', component: TheFile },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})
