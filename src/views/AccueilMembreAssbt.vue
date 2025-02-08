<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore()

onBeforeMount(() => {
  console.log('onBeforeMount : ', authStore.isAuth);
  if (!authStore.isAuth) {
    router.push({ name: 'home' })
  }
})

</script>

<template>
  <div>
    <h1>Page d'accueil membre (à venir)</h1>
  </div>
</template>