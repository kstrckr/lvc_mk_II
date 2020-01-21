import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about_vipassana',
    name: 'aboutVipassana',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "aboutVipassana" */ '../views/AboutVipassana.vue')
  },
  {
    path: '/cdl_led',
    name: 'cdlLed',
    component: () => import('../views/CDLLed.vue')
  },
  {
    path: '/retreats',
    name: 'retreats',
    component: () => import('../views/Retreats.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
