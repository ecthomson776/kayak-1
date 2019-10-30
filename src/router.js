import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Custom from './views/custom.vue'
import Custom2 from './views/custom2.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/custom',
      name: 'custom',
      component: Custom
      
    },
    {
      path: '/custom2',
      name: 'custom2',
      component: Custom2
      
    }
  ]
})
