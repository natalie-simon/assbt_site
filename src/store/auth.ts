import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const jwt = ref(null)

  return {
    jwt
  }
})
