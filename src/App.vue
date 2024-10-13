<script setup lang="ts">
import { RouterView } from 'vue-router'
import BandeauAssbt from './components/BandeauAssbt.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <BandeauAssbt />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
