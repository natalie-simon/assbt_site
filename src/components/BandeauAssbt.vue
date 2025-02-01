<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Menu from 'primevue/menu';
import { ref } from "vue";
import ConnexionAssbt from './ConnexionAssbt.vue';

const visible = ref(false);
const menu = ref();
const items = ref([
  {
    items: [
      { label: 'Accueil' },
      { label: 'Inscription' },
      { label: 'Contact' }
    ]
  }
]);

const closeDrawer = () => {
  visible.value = false;
};



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
              <span @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"><i
                  class="pi pi-bars text-assbt-shine" style="font-size: 1rem"></i></span>
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
          <span class="pi pi-user text-assbt-shine" style="font-size: 2.5rem" @click="visible = true"></span>
        </template>
      </Toolbar>
      <ConnexionAssbt v-model:visible="visible" @close-drawer="closeDrawer" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100px;
  height: 64px;
}

.bandeau-link {
  padding-left: 17px;
  padding-right: 17px;
  text-decoration: none !important;
}
</style>