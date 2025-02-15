<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';


import AgendaActiviteAssbt from '@/components/AgendaActiviteAssbt.vue';

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
  <div class="container-fluid">
    <div class="row">
      <!-- Colonne pour AgendaActiviteAssbt -->
      <div class="col-12 col-lg-4 order-lg-2">
        <AgendaActiviteAssbt />
      </div>
      <!-- Colonne pour Tabs -->
      <div class="col-12 col-lg-8 order-lg-1">
        <Tabs value="0" class="p-4 m-4">
          <TabList>
            <Tab value="0" class="bg-assbt-dark opacity80 text-assbt-light">Actualités</Tab>
            <Tab value="1" class="bg-assbt-dark opacity80 text-assbt-light">Achats / Ventes</Tab>
          </TabList>
          <TabPanels class="bg-assbt-dark opacity80 text-assbt-light">
            <TabPanel value="0">
              <Accordion value="0">
                <AccordionPanel value="0">
                  <AccordionHeader>Assemblé générale</AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      Nous avons le plaisir de vous inviter à l’Assemblée Générale<br />
                      L’ordre du jour sera le suivant :<br />
                    <ul>
                      <li>Présentation du bilan de l’année écoulée</li>
                      <li>Rapport financier</li>
                      <li>Projets et perspectives pour l’année à venir</li>
                      <li>Élections / Renouvellement du bureau (si applicable)</li>
                      <li>Questions diverses</li>
                    </ul>
                    Votre présence est importante pour la vie et l’avenir de [Nom de l'Association / de l'Entreprise].
                    Si vous ne pouvez pas être présent(e), vous pouvez donner procuration à un autre membre.
                    Merci de confirmer votre présence avant le [Date limite de confirmation] par retour d’e-mail à
                    [Adresse e-mail] ou par téléphone au [Numéro de contact].
                    Nous comptons sur vous et espérons vous voir nombreux !
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                  <AccordionHeader>Repas de fin de saison</AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      Chers membres,<br />
                      La saison touche à sa fin, et quoi de mieux qu’un moment convivial pour la clôturer en beauté ?
                      Nous vous invitons à notre repas de fin de saison, qui aura lieu le 15/06/2025.
                      Ce sera l’occasion de partager un bon repas, d’échanger sur nos plongées de l’année et de préparer
                      les prochaines aventures sous-marines ! Merci de confirmer votre présence avant le
                      01/06/2025.<br />
                      Nous comptons sur vous pour faire de cette soirée un moment inoubliable !<br />
                      À bientôt,
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </TabPanel>
            <TabPanel value="1">
              <div class="row p-1">
                <div class="col-12 col-md-6 pb-1">
                  <Card class="col-12 p-1">
                    <template #title>Palmes carbonne</template>
                    <template #header>
                      <img src="@/assets/images/logo.png" alt="logo" class="logo-x2" />
                    </template>
                    <template #content>
                      <p>Je vends mes palmes carbonne, taille 42-43, très bon état</p>
                    </template>
                    <template #footer>
                      <Button label="Contacter" icon="pi pi-envelope" />
                    </template>
                  </Card>
                </div>
                <div class="col-12 col-md-6 pb-1">
                  <Card class=" col-12 p-1">
                    <template #title>Combinaison 5mm</template>
                    <template #header>
                      <img src="@/assets/images/logo.png" alt="logo" class="logo-x2" />
                    </template>
                    <template #content>
                      <p>Je vends ma combinaison 5mm, taille M, très bon état</p>
                    </template>
                    <template #footer>
                      <Button label="Contacter" icon="pi pi-envelope" />
                    </template>
                  </Card>
                </div>
              </div>
              <div class="row p-1">
                <div class="col-12 col-md-6 pb-1">
                  <Card class="col-12 p-1">
                    <template #title>Palmes carbonne</template>
                    <template #header>
                      <img src="@/assets/images/logo.png" alt="logo" class="logo-x2" />
                    </template>
                    <template #content>
                      <p>Je vends mes palmes carbonne, taille 42-43, très bon état</p>
                    </template>
                    <template #footer>
                      <Button label="Contacter" icon="pi pi-envelope" />
                    </template>
                  </Card>
                </div>
                <div class="col-12 col-md-6 pb-1">
                  <Card class="col-12 p-1">
                    <template #title>Combinaison 5mm</template>
                    <template #header>
                      <img src="@/assets/images/logo.png" alt="logo" class="logo-x2" />
                    </template>
                    <template #content>
                      <p>Je vends ma combinaison 5mm, taille M, très bon état</p>
                    </template>
                    <template #footer>
                      <Button label="Contacter" icon="pi pi-envelope" />
                    </template>
                  </Card>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>

</template>


<style scoped></style>