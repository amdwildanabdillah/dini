import { createRouter, createWebHistory } from 'vue-router'
import DiniView from '../views/DiniView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DiniView
    }
  ]
})

export default router