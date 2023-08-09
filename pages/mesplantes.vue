<template>
  <div class="h-full min-h-screen container mx-auto py-20">
    <div class="grid grid-cols-5 gap-3 p-4 bg-green-kelly-ui">
      <label class="block"
        ><select
          name="filterBy"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1"
          @change="selectFilters($event, 'order')"
        >
          <option
            class="bg-green-500"
            v-for="item in fakeFilter"
            :key="uuidv4()"
            :value="item.slug"
          >
            {{ item.label }}
          </option>
        </select></label
      >
      <CoreAutocomplete
        class="mt-1 col-span-3"
        :dataLoad="fakeDataCards"
        name="searchYourPlant"
        keyLabelShowed="namePlant"
        @returnObject="selectResultLiveSearchData"
      />
      <label class="block"
        ><select
          name="numPerPage"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1"
          @change="selectFilters($event, 'numPerPage')"
        >
          <option v-for="item in numPerPage" :key="uuidv4()">{{ item }}</option>
        </select></label
      >
    </div>
    <div
      v-show="loadingAllData"
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
      const fakeFilter = [
        { label: "de A à Z", slug: "order_by_asc" },
        { label: "de Z à A", slug: "order_by_desc" },
        { label: "les plus récents", slug: "order_by_time" },
        { label: "les favoris", slug: "order_by_favoris" },
      ];
      const loadingAllData = ref(false);
      const dataListPlant = ref(fakeDataCards);
      const dataFilterBy = ref(fakeFilter);
      const numPerPage = ref([] as Number[]);

      onMounted(() => {
        dataListPlant.value = fakeDataCards;
        console.log(fakeDataCards);
        const nbPage = Math.ceil(fakeDataCards.length / 11);
        let arrayPage: Array<number> = [];
        for (let i = 0; i < nbPage; i++) {
          arrayPage.push(i + 1);
        }

        numPerPage.value = arrayPage;
      });

      const selectResultLiveSearchData = (values: any) => {
        loadingAllData.value = true;

        if (values === null) {
          dataListPlant.value = [];
          loadingAllData.value = true;
        }
        // if null or empty reload all data plants
        else if (values.length === 0) dataListPlant.value = fakeDataCards;
        // if it's an ID
        else dataListPlant.value = values;

        setTimeout(() => {
          loadingAllData.value = false;
        }, 1000);
      };

      const selectFilters = ($event: any, field: String) => {
        loadingAllData.value = true;
        if (field === "order") console.log($event.target.value);
        if (field === "numPerPage") console.log($event.target.value);
        setTimeout(() => {
          loadingAllData.value = false;
        }, 1000);
      };
      return {
        fakeDataCards,
        fakeFilter,
        uuidv4,
        selectResultLiveSearchData,
        dataListPlant,
        numPerPage,
        loadingAllData,
        selectFilters,
      };
    },
  });
</script>

<style scoped>
</style>