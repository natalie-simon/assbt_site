<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

defineProps<{ header?: string }>();

const name = ref("");
const email = ref("");
</script>

<template>
  <div class="p-5">
    <h2 class="text-xl font-bold mb-4">{{ header || "Création de compte" }}</h2>
    
    <div class="mb-3">
      <label for="name" class="block font-semibold">Nom</label>
      <InputText id="name" v-model="name" class="w-full" placeholder="Entrez votre nom" />
    </div>

    <div class="mb-3">
      <label for="email" class="block font-semibold">Email</label>
      <InputText id="email" v-model="email" class="w-full" placeholder="Entrez votre email" />
    </div>

    <div class="flex justify-end mt-4">
      <Button label="Créer un compte" icon="pi pi-check" class="p-button-success" />
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #333;
}
</style>
