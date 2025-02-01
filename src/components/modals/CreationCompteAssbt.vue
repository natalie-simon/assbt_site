<script setup lang="ts">
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import { ref } from "vue";
import * as z from "zod";
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import type { UserCreation } from '@/types/User';
import UserDataService from '@/services/UserDataService';
import { useAuthStore } from '@/store/auth';


const toast = useToast();
const store = useAuthStore();
const show_password = ref(false);

/**
 * @description Formulaire de création de compte
 */
const form = ref({
  'email': '',
  'mot_de_passe': '',
  'confirmation': '',
  'clef': ''
} as UserCreation);

/**
 * @description Schéma de validation du formulaire
 */
const formSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  mot_de_passe: z.string().min(10, { message: "Le mot de passe doit contenir au moins 10 caractères" }),
  confirmation: z.string().min(10, { message: "Le mot de passe doit contenir au moins 10 caractères" }).trim()
    .refine((value) => value === form.value.mot_de_passe, { message: "Les mots de passe ne correspondent pas" }),
  clef: z.string().min(6, { message: "La clef doit contenir au moins 6 caractères" }).trim(),
});

type formSchemaType = z.infer<typeof formSchema>
const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null);

/**
 * @description Fonction appelée lors de la soumission du formulaire
 */
const onSubmit = () => {
  const validSchema = formSchema.safeParse(form.value);
  if (!validSchema.success) {
    errors.value = validSchema.error.format();
  } else {
    errors.value = null;
    creationCompte();
  }
}

/**
 * @description Fonction de création de compte
 */
function creationCompte() {
  UserDataService.create(form.value as UserCreation)
    .then((response: any) => {
      toast.add({ severity: 'success', summary: 'Compte créé', detail: 'Votre compte a été créé avec succès', life: 3000 });
      store.setJwt(response.data.accessToken);
    })
    .catch(error => {
      toast.add({ severity: 'warn', summary: 'Erreur lors de la création de votre compte', detail: error?.response.data.message, life: 3000 });
    });
}

</script>

<template>
  <div>
    <Toast />
    <form @submit.prevent="onSubmit">
      <div class="text-center">
        <h2>Inscription</h2>
      </div>
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
      <div class="mt-5">
        <div>Confirmation du mot de passe</div>
        <InputText class="input-assbt-login" name="mot_de_passe" v-model="form.confirmation"
          :type="show_password ? 'text' : 'password'" placeholder="Entrer votre mot de passe" />
        <div v-if="errors?.confirmation">
          <Message severity="error" size="small" v-for="(error, index) in errors?.confirmation?._errors" :key="index">
            {{ error
            }}</Message>
        </div>
      </div>
      <div class="mt-5">
        <div>Clef</div>
        <InputText class="input-assbt-login" name="clef" v-model="form.clef"
          placeholder="Clef d'inscription fournie par le club" />
        <div v-if="errors?.clef">
          <Message severity="error" size="small" v-for="(error, index) in errors?.clef?._errors" :key="index"> {{ error
            }}</Message>
        </div>
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
