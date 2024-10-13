<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Drawer from 'primevue/drawer';
import Menu from 'primevue/menu';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import { ref } from "vue";

const visible = ref(false);
const value = ref(null);
const menu = ref();
const items = ref([
  {
    items: [

      {
        label: 'Accueil',
      },
      {
        label: 'Inscription',
      },
      {
        label: 'Contact',
      }
    ]
  }
]);

const toggle = (event: any) => {
  menu.value.toggle(event);
};

</script>

<template>
  <div>
    <div class="col-12 opacity80">
      <Toolbar class="bg-assbt-primary">
        <template #start>
          <div class="d-block d-sm-none">
            <div class="text-left">
              <span @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"><i class="pi pi-bars"
                  style="font-size: 1rem"></i></span>
              <Menu class="bg-assbt-dark opacity80" ref="menu" id="overlay_menu" :model="items" :popup="true" />
            </div>
          </div>
          <div class="d-none d-sm-block">
            <img src="../assets/images/logo.png" alt="logo" class="logo" />
          </div>
        </template>
        <template #center>
          <div class="d-none d-sm-block">
            <router-link class="bandeau-link text-white bold-24" to="/">Accueil</router-link>
            <router-link class="bandeau-link text-white bold-24" to="/inscription">Inscription</router-link>
            <router-link class="bandeau-link text-white bold-24" to="/contact">Contact</router-link>
          </div>
        </template>
        <template #end>
          <span class="pi pi-user" style="font-size: 2.5rem" @click="visible = true"></span>
        </template>
      </Toolbar>
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
          <InputText class="input-assbt-login" id="email" v-model="value" placeholder="Entrer votre email" />
        </div>
        <div class="mt-5">
          <div>Mot de passe</div>
          <IconField>
            <InputText class="input-assbt-login" id="password" v-model="value"
              placeholder="Entrer votre mot de passe" />
            <InputIcon>
              <span class="pi pi-eye"></span>
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
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100px;
  height: 64px;
}

.logo-x2 {
  width: 200px;
  height: 128px;
}

.bandeau-link {
  padding-left: 17px;
  padding-right: 17px;
  text-decoration: none !important;
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