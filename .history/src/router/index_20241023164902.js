import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/labs',
      name: 'labs',
      component: () => import('../views/LabView.vue'),
    },
    {
      path: '/lab3bai1',
      name: 'lab3',
      component: () => import('../Labs/Lab3/Bai1.vue'),
    },
  ],
})

export default router
