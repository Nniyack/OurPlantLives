<template>
  <div class="h-full container mx-auto py-20">
    <div class="flex justify-between mb-6">
      <label class="block">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <!-- ... -->
          </svg>
        </span>
        <input
          type="email"
          name="email"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Recherche ..."
        />
      </label>
      <CoreAutocomplete :dataField="fakeDataCards" label="namePlant" />
      <label class="block"
        ><select
          name="filter"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        >
          <option name="3">3</option>
        </select></label
      >
    </div>
    <section class="max-w-7xl mx-auto px-4 py-10">
      <div
        class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <MyplantsCard :createPlant="true" />
        <MyplantsCard
          v-for="item in fakeDataCards"
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
  import { defineComponent } from "vue";
  import { v4 as uuidv4 } from "uuid";

  export default defineComponent({
    setup() {
      const fakeDataCards = [
        {
          namePlant: "Plantatus regulus 1",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          namePlant: "Plantatus regulus notarius elegatus rogos moultivaz",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          namePlant: "Plantatus regulus 3",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          namePlant: "Plantatus regulus 4",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          namePlant: "Plantatus regulus 5",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          namePlant: "Plantatus regulus 6",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          namePlant: "Plantatus regulus 7",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
        {
          namePlant: "Plantatus regulus 8",
          image: { src: "../../assets/Images/rempotage.jpg", alt: "plantes" },
          createPlant: false,
        },
      ];
      return { fakeDataCards, uuidv4 };
    },
  });
</script>

<style scoped>
</style>