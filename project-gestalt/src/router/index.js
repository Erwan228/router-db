import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Documents from '../views/Documents/Documents.vue'
import Specimens from '../views/Documents/Specimens.vue'
import Weapons from '../views/Documents/Weapons.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents,
  },
  {
    path: '/documents/:id',
    name: 'Specimens',
    component: Specimens
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
