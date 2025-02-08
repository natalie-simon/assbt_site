import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

/**
 * Gestion des routes de l'application
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AccueilView
    },
    {
      path: '/accueil_membres',
      name: 'accueil_membres',
      component: () => import('../views/AccueilMembreAssbt.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactAssbt.vue')
    }
  ]
})

export default router
