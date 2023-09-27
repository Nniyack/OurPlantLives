<template>
  <nav
    class="p-5 block lg:flex items-center justify-between flex-wrap bg-transparent nav-bar-animation"
  >
    <div
      class="min-w-[30%] basis-6 items-center lg:mt-0 mr-6 text-2xl text-green-design-1 font-extrabold pl-3"
    >
      <NuxtLink to="/"> OurPlantLives </NuxtLink>
    </div>
    <div
      :class="` block grow justify-evenly lg:pl-0 pl-3 lg:pt-0 pt-4 lg:flex lg:visible lg:pr-40 font-medium text-green-design-2 w-auto ${
        isShow ? 'visible' : 'hidden'
      }`"
    >
      <NuxtLink
        class="lg:mx-10 lg:block text-lg lg:inline-block mt-4 lg:mt-0 hover:text-red-salmon-design-1"
        to="/mesplantes"
      >
        MES PLANTES
      </NuxtLink>
      <NuxtLink
        class="lg:mx-10 block text-lg lg:inline-block mt-4 lg:mt-0 hover:text-red-salmon-design-1"
        to="/astuces"
      >
        ASTUCES
      </NuxtLink>
    </div>
    <div class="w-auto lg:w-80 lg:hidden">
      <button
        class="flex items-center px-3 py-2 md:mr-5 border rounded text-green-ui border-green-ui hover:text-green-kelly-ui hover:border-green-kelly-ui absolute top-4 right-11"
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
@keyframes slideInFromBottom {
  0% {
    transform: translateY(-300%);
  }
  100% {
    transform: translateY(0);
  }
}
.nav-bar-animation {
  animation: 1s ease-out 0s 1 slideInFromBottom;
}
</style>