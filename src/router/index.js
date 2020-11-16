import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '/model',
        name: 'Model',
        component: () => import('@/views/Model.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
