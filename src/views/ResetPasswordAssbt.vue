<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import UserDataService from '@/services/UserDataService';

import { UserResetPassword } from '@/types/User';
import * as z from "zod";


const route = useRoute()
const token = route.query.token;

const toast = useToast();
const show_password = ref(true);

const form = ref({
  'nouveau_mdp': '',
  'confirmation': '',
} as UserResetPassword);

const formSchema = z.object({
  nouveau_mdp: z.string().min(10, { message: "Le mot de passe doit contenir au moins 10 caractères" }),
  confirmation: z.string().min(10, { message: "Le mot de passe doit contenir au moins 10 caractères" }).trim()
    .refine((value) => value === form.value.nouveau_mdp, { message: "Les mots de passe ne correspondent pas" }),
});

type formSchemaType = z.infer<typeof formSchema>
const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null);

const onSubmit = () => {
  const validSchema = formSchema.safeParse(form.value);
  if (!validSchema.success) {
    errors.value = validSchema.error.format();
  } else {
    errors.value = null;
    resetPassword();
  }
}

function resetPassword() {
  UserDataService.resetPassword(form.value as UserResetPasswordForm, token)
    .then((response) => {
      toast.add({ severity: 'success', summary: 'Succès', detail: response.data.message });
      router.push({ name: 'home' });
    })
    .catch((error) => {
      toast.add({ severity: 'error', summary: 'Erreur', detail: error.response.data.message });
    });
}

</script>

<template>
  <div>
    <div class="col-12 text-center">
      <h1 class="bold-48 text-assbt-light">Réinitialisation de votre mot de passe</h1>
    </div>
    <Toast />
    <div class="offset-3 col-6 bg-assbt-dark opacity80 p-4 text-assbt-light">
      <div class="center-logo-x2">
        <img src="@/assets/images/logo.png" alt="logo" class="logo-x2" />
      </div>
      <form @submit.prevent="onSubmit">
        <div class="offset-3 col-6 mt-5">
          <div>Mot de passe</div>
          <IconField>
            <InputText class="input-assbt-login" name="nouveau_mdp" v-model="form.nouveau_mdp"
              :type="show_password ? 'text' : 'password'" placeholder="Nouveau mot de passe" />
            <InputIcon>
              <span :class="!show_password ? 'pi pi-eye' : 'pi pi-eye-slash'"
                @click="show_password = !show_password"></span>
            </InputIcon>
          </IconField>
          <div v-if="errors?.nouveau_mdp">
            <Message severity="error" size="small" v-for="(error, index) in errors?.nouveau_mdp?._errors" :key="index">
              {{
                error
              }}</Message>
          </div>
        </div>
        <div class="offset-3 col-6 mt-5">
          <div>Confirmation du mot de passe</div>
          <InputText class="input-assbt-login" name="confirmation" v-model="form.confirmation"
            :type="show_password ? 'text' : 'password'" placeholder="Confirmation" />
          <div v-if="errors?.confirmation">
            <Message severity="error" size="small" v-for="(error, index) in errors?.confirmation?._errors" :key="index">
              {{ error
              }}</Message>
          </div>
        </div>
        <div class="text-center mt-5 offset-4 col-4">
          <button class="btn bg-assbt-primary rounded-pill col-10 text-white">Validation</button>
        </div>
      </form>
    </div>
  </div>
</template>