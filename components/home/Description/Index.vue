<template>
  <div class="h-[1240px] md:h-[680px] lg:h-screen bg-green-dark pt-20 lg:pt-40">
    <div id="description" class="h-screen container mx-auto">
      <div
        class="text-center text-white text-xl pb-[65px] lg:text-3xl lg:pb-[160px]"
      >
        " Créer et renseigner les fiches de vos plantes "
      </div>
      <div class="">
        <HomeDescriptionCard
          v-for="(item, index) in fakeData"
          :key="index"
          :direction="item.direction"
          :imageSrc="item.image"
        >
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:text>
            {{ item.text }}
          </template>
        </HomeDescriptionCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const fakeData = [
        {
          direction: "left",
          title: "GESTIONS DE NOTIFICATIONS",
          text: "Créer vos rappels de l'arrosage et du rempotage, en paramétrant des notifications sur mesure à n'importe qu'elle heure",
          image: {
            src: "../../../assets/Images/arrosage.jpg",
            alt: "plante",
          },
        },
        {
          direction: "right",
          title: "CONSULTER VOTRE CALENDRIER",
          text: "Consulter votre calendrier pour vous organiser et revoir les actions passées",
          image: {
            src: "../../../assets/Images/rempotage.jpg",
            alt: "plante",
          },
        },
      ];
      return { fakeData };
    },
  });
</script>

<style scoped>
</style>