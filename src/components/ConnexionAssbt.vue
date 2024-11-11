<script setup lang="ts">
import Drawer from 'primevue/drawer';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import { ref } from "vue";

const visible = ref(false);
const show_password = ref(false);
const password = ref('');


</script>

<template>
  <Drawer v-model:visible="visible" class="assbt-connexion bg-assbt-dark opacity80" position="right"
    :showCloseIcon="false">
    <div class="center-logo-x2">
      <img src="@/assets/images/logo.png" alt="logo" class="logo-x2" />
    </div>
    <div class="bold-24 text-assbt-shine mt100">
      CONNEXION
    </div>

    <div class="mt-5">
      <div>Email</div>
      <InputText class="input-assbt-login" name="email" placeholder="Entrer votre email" />
    </div>
    <div class="mt-5">
      <div>Mot de passe</div>
      <IconField>
        <InputText class="input-assbt-login" name="password" :type="show_password ? 'text' : 'password'"
          v-model="password" placeholder="Entrer votre mot de passe" />
        <InputIcon>
          <span :class="!show_password ? 'pi pi-eye' : 'pi pi-eye-slash'"
            @click="show_password = !show_password"></span>
        </InputIcon>
      </IconField>
    </div>
    <div class="mt-4 text-center">
      <button class="btn bg-assbt-primary rounded-pill col-10 text-white">Connexion</button>
    </div>
    <div class="col-12 mt-3 text-center">
      Mot de passe oublié ?
    </div>
    <template #footer>
      <div class="text-center mb-5">Créer son compte</div>
    </template>
  </Drawer>
</template>

<style scoped>
.logo-x2 {
  width: 200px;
  height: 128px;
}

.center-logo-x2 {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.input-assbt-login {
  background-color: inherit;
  border-color: white;
  border-bottom-style: solid;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-radius: inherit;
  width: 90%;
}
</style>