import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/views/GameView.vue'
import Login from '@/views/Login.vue'
import VueRouterMultiguard from 'vue-router-multiguard';
import OnlyUser from '@/router/middlewares/only-user';

const routes = [
  {
    path: '/game',
    name: 'game',
    component: GameView,
    beforeEnter: VueRouterMultiguard([OnlyUser]),
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
