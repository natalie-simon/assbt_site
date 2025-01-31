<script setup lang="ts">
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';


</script>

<template>
  <div>
    <form>
      <div class="text-center">
        <h2>Inscription</h2>
      </div>

      <div class="mt-5">
        <div>Email</div>
        <InputText class="input-assbt-login" name="email" placeholder="Entrer votre email" />
      </div>
      <div class="mt-5">
        <div class="mt-5">Mot de passe</div>
        <IconField>
          <InputText class="input-assbt-login" name="mot_de_passe" placeholder="Entrer votre mot de passe" />
          <InputIcon>
            <span class='pi pi-eye'></span>
          </InputIcon>
        </IconField>
      </div>
      <div class="mt-5">
        <div>Confirmation mot de passe</div>
        <IconField>
          <InputText class="input-assbt-login" name="mot_de_passe" placeholder="Confirmer votre mot de passe" />
          <InputIcon>
            <span class='pi pi-eye'></span>
          </InputIcon>
        </IconField>
      </div>
      <div class="mt-5">
        <div>Clef d'inscription</div>
        <IconField>
          <InputText class="input-assbt-login" name="mot_de_passe" placeholder="Clef fournie par le club" />
          <InputIcon>
            <span class='pi pi-eye'></span>
          </InputIcon>
        </IconField>
      </div>
      <div class="mt-4 text-center">
        <button class="btn bg-assbt-primary rounded-pill col-10 text-white">Création</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.logo {
  width: 100px;
  height: 64px;
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
