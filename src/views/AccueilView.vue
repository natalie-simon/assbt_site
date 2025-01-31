<script setup lang="ts">
import Carousel from 'primevue/carousel';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const articles = ref([]);

async function fetchAccueilsCarousel() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const listeArticles = await axios.get<[]>(
    `${apiUrl}/articles/categorie/1`
  );
  articles.value = listeArticles.data;
}

onMounted(async () => {
  await fetchAccueilsCarousel();
});

</script>
<template>
  <div>
    <div class="col-12 text-center">
      <h1 class="bold-48 text-assbt-light">Les Bulleurs Toulonnais</h1>
      <div class="bold-20 text-assbt-light">Association sportive de plongée sous-marine affiliée à la FFESSM</div>
      <div class="bold-20 text-assbt-light mt-4 mb-4">N°F.F.E.S.S.M. 3383.0422 - SIREN 829 412 733</div>
    </div>
    <Carousel :value="articles" :numVisible="1" :numScroll="1" circular autoplay :autoplayInterval="10000">
      <template #item="slotProps">
        <div class="col-12 bg-assbt-primary opacity80" style="width: 100%; min-height:75vh;">
          <div class="row">
            <div class="d-none d-sm-block col-5">
              <img class="col-12 m-1 p-4 opacity100" :src="slotProps.data.image" alt="accueil">
            </div>
            <div class="col-xs-12 col-sm-7 text-assbt-light">
              <div class="col-12 pt-1">
                <span class="bold-20">{{ slotProps.data.titre }}</span>
              </div>
              <div class="col-12 font-20 pt-4 text-justify" >
                <span v-html="slotProps.data.contenu"></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>