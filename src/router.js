import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Custom from './views/custom.vue'
import Custom2 from './views/custom2.vue'
import Custom3 from './views/custom3.vue'
import Thanks from './views/Thanks.vue'
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
      
    },
    {
      path: '/custom3',
      name: 'custom3',
      component: Custom3
      
    },
    {
      path: '/Thanks',
      name: 'Thanks',
      component: Thanks
      
    }
  ]
})
