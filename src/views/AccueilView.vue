<script setup lang="ts">
import Carousel from 'primevue/carousel';

const Accueils = [
  {
    accueil_id: 1,
    titre: 'Notre objectif :',
    description: "<p>Rendre la plongée sous-marine accessible à tous </p>" +
      "<p></p>Nous nous engageons à démocratiser la plongée sous-marine" +
      " en proposant des tarifs' attractifs, une sécurité optimale, et des créneaux en piscine au Pin d'Alep et au Port Marchand," +
      " afin de permettre à tous de découvrir cette discipline. </p><p>Durant les vacances scolaires, nous offrons des baptêmes de plongée" +
      " aux jeunes des centres aérés de Toulon, sous la supervision d'instructeurs qualifiés. De plus, certains de nos encadrants sont" +
      "formés pour initier à la plongée des personnes en situation de handicap, garantissant une approche adaptée et inclusive.</p>" +
      "<p>Nous proposons également des séances dédiées à ceux qui souffrent de phobie aquatique, leur permettant de reprendre confiance" +
      " en douceur, dans un environnement sécurisé et bienveillant.</p><p>Que vous soyez débutant ou que vous souhaitiez surmonter vos peurs," +
      " notre équipe vous accompagne tout au long de votre aventure aquatique.</p>",
    image: 'https://www.neozone.org/blog/wp-content/uploads/2022/12/invention-innovation-bouteille-plongee-avelo-001.jpg'
  },
  {
    accueil_id: 2,
    titre: 'Notre Association',
    description: "<p>Notre équipe et nos services</p>" +
      "Notre équipe se compose de 7 encadrants qualifiés, capables de proposer une large gamme de formations de plongée, y compris pour les Plongeurs en Situation de Handicap(PESH).Nos compétences incluent</p>" +
      "<ul>" +
      "<li>Baptême de plongée</li>" +
      "<li>Formation et encadrement en mer jusqu'au niveau 3 (plongée autonome jusqu'à 60 mètres)</li>" +
      "<li>Formation des enseignants(formation des formateurs)</li>" +
      "<li>Secourisme général et secourisme en mer</li>" +
      "<li>Contrôle de matériel sous pression(vérification de l'état des blocs)</li>" +
      "<li>Initiation à l'apnée (en piscine)</li>"
      + "</ul>" +
      "Notre mission: Démocratiser la plongée sous- marine en la rendant accessible à tous grâce à des tarifs attractifs, une sécurité optimale, et des créneaux piscine adaptés.",
    image: 'https://image.over-blog.com/O1chlSo4u_D7uD0qC9z-9lzHTHg=/filters:no_upscale()/image%2F1438473%2F20201007%2Fob_f4e04f_diver.jpg'
  }
];

</script>
<template>
  <div>
    <div class="col-12 text-center">
      <h1 class="bold-48 text-assbt-light">Les Bulleurs Toulonnais</h1>
      <div class="bold-20 text-assbt-light">Association sportive de plongée sous-marine affiliée à la FFESSM</div>
      <div class="bold-20 text-assbt-light mt-4 mb-4">N°F.F.E.S.S.M. 3383.0422 - SIREN 829 412 733</div>
    </div>
    <Carousel :value="Accueils" :numVisible="1" :numScroll="1" circular autoplay :autoplayInterval="10000">
      <template #item="slotProps">
        <div class="col-12 bg-assbt-primary opacity80" style="width: 100%; min-height=75vh;">
          <div class="row">
            <div class="d-none d-sm-block col-5">
              <img class="col-12 p-4" :src="slotProps.data.image" alt="accueil">
            </div>
            <div class="col-xs-12 col-sm-7 text-assbt-light">
              <div class="col-12 pt-1">
                <span class="bold-20">{{ slotProps.data.titre }}</span>
              </div>
              <div class="col-12 font-20 pt-4 text-justify">
                <span v-html="slotProps.data.description"></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>