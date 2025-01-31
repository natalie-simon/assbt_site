<script setup lang="ts">
import Drawer from 'primevue/drawer';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import { ref } from "vue";
import * as z from "zod";
import UserDataService from '@/services/UserDataService';
import type { UserLogin } from '@/types/User';
import { useAuthStore } from '@/store/auth';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const store = useAuthStore();
const show_password = ref(false);
const emit = defineEmits(["close-drawer"]);

const form = ref({
  'email': '',
  'mot_de_passe': ''
} as UserLogin);
const toast = useToast();

const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  mot_de_passe: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

type formSchemaType = z.infer<typeof formSchema>
const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null);

const onSubmit = () => {
  const validSchema = formSchema.safeParse(form.value);
  if (!validSchema.success) {
    errors.value = validSchema.error.format();
  } else {
    errors.value = null;
    connexion();
    emit("close-drawer");
  }
}

function connexion() {
  UserDataService.login(form.value as UserLogin)
    .then((response: any) => {
      store.setJwt(response.data.accessToken);
    })
    .catch(error => {
      // Handle login error
      toast.add({ severity: 'warn', summary: 'Erreur de connexion', detail: error.response.data.message, life: 3000 });

    });
}


</script>

<template>
  <Drawer class="assbt-connexion bg-assbt-dark opacity80" position="right" :showCloseIcon="false">

    <div class="center-logo-x2">
      <img src="@/assets/images/logo.png" alt="logo" class="logo-x2" />
    </div>
    <div class="bold-24 text-assbt-shine mt100">
      <Toast />
      CONNEXION
    </div>
    <span v-if="store.jwt !== null">Connecté</span>
    <form v-else @submit.prevent="onSubmit">
      <div class="mt-5">
        <div>Email</div>
        <InputText class="input-assbt-login" name="email" v-model="form.email" placeholder="Entrer votre email" />
        <div v-if="errors?.email">
          <Message severity="error" size="small" v-for="(error, index) in errors?.email?._errors" :key="index"> {{ error
            }}</Message>
        </div>
      </div>
      <div class="mt-5">
        <div>Mot de passe</div>
        <IconField>
          <InputText class="input-assbt-login" name="mot_de_passe" v-model="form.mot_de_passe"
            :type="show_password ? 'text' : 'password'" placeholder="Entrer votre mot de passe" />
          <InputIcon>
            <span :class="!show_password ? 'pi pi-eye' : 'pi pi-eye-slash'"
              @click="show_password = !show_password"></span>
          </InputIcon>
        </IconField>
        <div v-if="errors?.mot_de_passe">
          <Message severity="error" size="small" v-for="(error, index) in errors?.mot_de_passe?._errors" :key="index">
            {{
              error
            }}</Message>
        </div>
      </div>
      <div class="mt-4 text-center">
        <button class="btn bg-assbt-primary rounded-pill col-10 text-white">Connexion</button>
      </div>
    </form>
    <template #footer>
      <div v-if="store.jwt === null" class="text-center mb-5">Créer son compte</div>
      <div v-else>
        <button class="btn bg-assbt-primary rounded-pill col-10 text-white">Déconnexion</button>
      </div>
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