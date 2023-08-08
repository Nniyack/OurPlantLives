<template>
  <div class="h-full min-h-screen container mx-auto py-20">
    <div class="flex justify-between mb-6">
      <label class="block">
        <input
          type="email"
          name="email"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Recherche ..."
        />
      </label>
      <CoreAutocomplete
        :dataField="fakeDataCards"
        name="searchYourPlant"
        keyLabelShowed="namePlant"
        @returnLiveObject="selectResultLiveSearchData"
        @returnObject="selectResultLiveSearchData"
      />
      <label class="block"
        ><select
          name="numPerPage"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        >
          <option name="3">3</option>
        </select></label
      >
    </div>
    <div
      v-if="loadingAllData"
      class="flex w-full h-screen justify-center items-center"
    >
      <div
        class="animate-spin w-16 h-16 border-[5px] rounded-full border-slate-200 border-r-spearmint mt-10"
      ></div>
    </div>

    <section v-show="!loadingAllData" class="max-w-7xl mx-auto px-4 py-10">
      <div
        class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <MyplantsCard :createPlant="true" />
        <MyplantsCard
          v-for="item in dataListPlant"
          :key="uuidv4()"
          :namePlant="item.namePlant"
          :imageSrc="item.image"
          :createPlant="false"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import { v4 as uuidv4 } from "uuid";

  export default defineComponent({
    setup() {
      const fakeDataCards = [
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 1",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus notarius elegatus rogos moultivaz",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 3",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 4",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 5",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 6",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 7",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 8",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus notarius elegatus rogos moultivaz",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 10",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 11",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 12",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 13",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 14",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          id: uuidv4(),
          namePlant: "Plantatus regulus 15",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
      ];
      const loadingAllData = ref(false);
      const dataListPlant = ref(fakeDataCards);
      const numPerPage = ref([]);
      onMounted(() => {
        dataListPlant.value = fakeDataCards;
        console.log(fakeDataCards);
        // numPerPage.value = fakeDataCards.length
      });
      const selectResultLiveSearchData = (value: any) => {
        loadingAllData.value = true;
        // if null or empty reload all data plants
        if ([null, ""].includes(value)) dataListPlant.value = fakeDataCards;
        // if it's an ID
        else if (typeof value === "string")
          dataListPlant.value = fakeDataCards.filter(
            (item: any): any => item.id === value
          );
        else dataListPlant.value = value;
        setTimeout(() => {
          loadingAllData.value = false;
        }, 1000);
      };

      return {
        fakeDataCards,
        uuidv4,
        selectResultLiveSearchData,
        dataListPlant,
        loadingAllData,
      };
    },
  });
</script>

<style scoped>
</style>