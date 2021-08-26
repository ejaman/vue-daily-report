import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Intro.vue')
  },  {
    path: '/day/:date',
    name: 'Day',
    component: () => import(/* webpackChunkName: "about" */ '../views/Day.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/Setting.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
