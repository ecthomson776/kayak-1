import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Custom from './views/custom.vue'
import Custom2 from './views/custom2.vue'
import Custom3 from './views/custom3.vue'
import Thanks from './views/Thanks.vue'
import Order from './views/order.vue'
import OrderComplete from './views/ordercomplete.vue'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
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
      component: Custom3,
      meta: {
        requiresAuth: true }
      
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        requiresAuth: true }
      
    },
    {
      path: '/ordercomplete',
      name: 'ordercomplete',
      component: OrderComplete,
      meta: {
        requiresAuth: true }
      
    },
    {
      path: '/Thanks',
      name: 'Thanks',
      component: Thanks
      
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //user signed in, proceed to route
      next()
    } else {
      // no user signed in, redirect to login
      next({ name: 'Login'})
    }
  } else {
    next()
  }
})

export default router

