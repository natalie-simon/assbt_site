import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const jwt = ref(localStorage.getItem('jwt') || null)

  function setJwt(token: string) {
    jwt.value = token
    localStorage.setItem('jwt', token)
  }

  return {
    jwt,
    setJwt
  }
})
