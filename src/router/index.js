import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/views/GameView.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
