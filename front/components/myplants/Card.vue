<template>
  <div v-if="!loading" class="shadow-lg rounded-md mx-4 mb-4 z-1 min-h-[336px]">
    <div v-if="!createPlant">
      <img
        :src="imageSrc.src"
        :alt="imageSrc.alt"
        class="h-40 w-full object-cover rounded-t-md"
      />
      <div class="p-4 grid justify-items-center">
        <div class="flex justify-evenly py-4 w-full">
          <p class="text-green-lime-ui mt-2 line-clamp-2">
            {{ namePlant }}
          </p>
          <div class="text-gray-500 hover:text-emerald-400 cursor-pointer">
            <EllipsisHorizontalCircleIcon class="h-6 w-6 mt-2" />
          </div>
        </div>
        <div class="flex justify-around w-full">
          <button
            class="flex items-center px-4 py-2 mt-5 font-semibold text-white text-sm bg-gradient-to-r from-green-300 to-spearmint hover:from-spearmint hover:to-green-300 rounded-sm drop-shadow-md"
          >
            <span> Consulter </span>
          </button>
        </div>
      </div>
    </div>
    <div v-if="createPlant" class="bg-green-kelly-ui">
      <div
        class="p-10 grid justify-items-center cursor-pointer text-white hover:text-spearmint"
      >
        <p class="py-9 font-bold">AJOUTER UNE PLANTE</p>
        <PlusCircleIcon class="h-20 w-20" />
      </div>
    </div>
  </div>
  <div v-if="loading" class="animate-pulse shadow-lg rounded-md mx-4 mb-4 z-1">
    <div class="h-[336px]">
      <div class="w-full h-[200px] bg-slate-200"></div>
      <div class="p-4 grid justify-items-center space-y-10">
        <div class="flex justify-evenly w-full h-3 bg-slate-200 rounded"></div>
        <div class="flex justify-around w-[100px] bg-slate-200 h-10"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import type { PropType } from "vue";

  import {
    PlusCircleIcon,
    EllipsisHorizontalCircleIcon,
  } from "@heroicons/vue/24/outline";

  interface ImageSrc {
    src?: string;
    alt?: string;
  }

  export default defineComponent({
    components: {
      PlusCircleIcon,
      EllipsisHorizontalCircleIcon,
    },
    props: {
      createPlant: Boolean,
      imageSrc: Object as PropType<ImageSrc>,
      namePlant: String,
      loading: Boolean,
    },
    setup(props: any) {
      const { imageSrc, namePlant, loading } = props;

      return { imageSrc, namePlant, loading };
    },
  });
</script>

<style scoped>
</style>