<template>
  <nav class="p-5 block lg:flex items-center justify-between flex-wrap">
    <div
      class="min-w-[30%] basis-6 items-center lg:mt-0 mr-6 text-xl text-green-ui font-medium"
    >
      <NuxtLink to="/"> OurPlantLives </NuxtLink>
    </div>
    <div
      :class="` block grow justify-evenly lg:flex lg:visible lg:pr-40  w-auto ${
        isShow ? 'visible' : 'hidden'
      }`"
    >
      <NuxtLink
        class="lg:mx-10 block text-lg lg:inline-block mt-4 lg:mt-0 text-spearmint hover:text-green-kelly-ui"
        to="/mesplantes"
      >
        Mes plantes
      </NuxtLink>
      <NuxtLink
        class="lg:mx-10 block text-lg lg:inline-block mt-4 lg:mt-0 text-spearmint hover:text-green-kelly-ui"
        to="/astuces"
      >
        Astuces
      </NuxtLink>
    </div>
    <div class="w-auto lg:w-80 lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-green-ui border-green-ui hover:text-green-kelly-ui hover:border-green-kelly-ui absolute top-4 right-11"
        @click="openMenu"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const isShow = ref(false);
      const openMenu = (): void => {
        isShow.value = !isShow.value;
      };
      return { openMenu, isShow };
    },
  });
</script>

<style  scoped>
</style>