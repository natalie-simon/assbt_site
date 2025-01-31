import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Store pour la gestion de l'authentication
 */
export const useAuthStore = defineStore('auth', () => {
  const jwt = ref(localStorage.getItem('jwt') || null)

  /**
   * Mets à jour le Jwt
   * @param token
   */
  function setJwt(token: string) {
    jwt.value = token
    localStorage.setItem('jwt', token)
  }

  /**
   * Supprime le Jwt
   */
  function removeJwt() {
    jwt.value = null
    localStorage.removeItem('jwt')
  }

  return {
    jwt,
    setJwt,
    removeJwt
  }
})
