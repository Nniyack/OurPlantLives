<template>
  <div v-if="imageSrc" class="shadow-lg rounded-md mx-4 mb-4 z-1">
    <div v-if="!createPlant">
      <img
        :src="imageSrc.src"
        :alt="imageSrc.alt"
        class="h-40 w-full object-cover rounded-t-md"
      />
      <div class="p-4 grid justify-items-center">
        <div class="flex justify-evenly py-4 w-full">
          <p class="text-green-lime-ui mt-2">
            {{ namePlant }}
          </p>
          <div class="text-emerald-500 hover:text-emerald-400 cursor-pointer">
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
    <div v-if="createPlant">
      <div
        class="p-10 grid justify-items-center cursor-pointer text-green-kelly-ui hover:text-spearmint"
      >
        <p class="py-9 font-bold">AJOUTER UNE PLANTE</p>
        <PlusCircleIcon class="h-20 w-20" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
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
    },
    setup(props: any) {
      const { imageSrc, namePlant } = props;

      return { imageSrc, namePlant };
    },
  });
</script>

<style scoped>
</style>