import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface JwtPayload {
  sub: string
  email: string
  iat: number
  exp: number
}

/**
 * Store pour la gestion de l'authentication
 */
export const useAuthStore = defineStore('auth', () => {
  const jwt = ref<string | null>(null)
  const JwtPayload = ref<JwtPayload | null>(jwt.value ? jwtDecode<JwtPayload>(jwt.value) : null)

  const isAuth = computed(() => !!jwt.value)

  /**
   * Mets à jour le Jwt
   * @param token
   */
  function setJwt(token: string) {
    jwt.value = token
  }

  /**
   * Supprime le Jwt
   */
  function removeJwt() {
    jwt.value = null
  }

  return {
    jwt,
    setJwt,
    removeJwt,
    isAuth,
    JwtPayload
  }
})
