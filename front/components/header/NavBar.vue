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
    <CoreCustomMenu
      :show="userIsConnected"
      name="avatar"
      class="absolute top-2 right-4"
    >
      <template v-slot:button="{ onClick }"
        ><div
          @click="onClick"
          class="invisible sm:invisible md:invisible lg:visible bg-slate-300 border-2 border-red-salmon-design-1 h-[50px] w-[50px] rounded-full cursor-pointer"
        ></div>
      </template>
      <template v-slot:panel>
        <div
          class="p-3 border border-slate-300 rounded absolute right-1 mt-1 select-none shadow-md"
        >
          <div class="border-bottom-2 w-[150px] pb-2 pt-3 flex items-center">
            <UserCircleIcon class="h-8 w-8 text-green-design-1 mr-3" />
            <p class="text-green-design-1">Yannick</p>
          </div>
          <hr class="my-2" />
          <ul class="text-slate-600 mb-2 text-sm">
            <li
              class="py-3 pl-2 cursor-pointer hover:bg-slate-100 hover:text-slate-600"
            >
              Profil
            </li>
            <li
              class="py-3 pl-2 cursor-pointer hover:bg-slate-100 hover:text-slate-600"
            >
              Paramètres
            </li>
          </ul>
          <hr class="my-2" />
          <div
            @click="logoutUser"
            class="text-center text-red-400 underline underline-offset-1 cursor-pointer"
          >
            Déconnexion
          </div>
        </div>
      </template>
    </CoreCustomMenu>
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
  import { defineComponent, Ref, ref, computed } from "vue";
  import { UserCircleIcon } from "@heroicons/vue/24/outline";
  import { userStore } from "../../stores/authentification";

  export default defineComponent({
    name: "navBar",
    components: {
      UserCircleIcon,
    },
    setup() {
      const store = userStore();
      const isShow: Ref<boolean> = ref(false);
      const userIsConnected = computed(() => {
        return store.user !== null;
      });
      const openMenu = (): void => {
        isShow.value = !isShow.value;
      };
      const logoutUser = (): void => {
        store.signOutUser();
      };
      return {
        openMenu,
        isShow,
        logoutUser,
        userIsConnected,
      };
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