<template>
  <section
    class="h-[600px] lg:h-[800px] lg:bg-fixed bg-center bg-cover custom-img items-center justify-center h-screen"
  >
    <div class="container-full">
      <div
        class="text-green-950/[.7] font-bold left-[6%] sm:top-0 lg:top-[300px] flex flex-col w-full lg:absolute delay-200"
      >
        <div class="mt-40 px-7 pb-4 lg:pb-0 lg:mt-0 lg:px-0 flex flex-col">
          <span class="text-lg sm:text-2xl lg:text-6xl lg:pb-[20px]"
            >Une gestion de chaque plante,</span
          >
          <span class="text-lg sm:text-2xl lg:text-6xl lg:pl-20"
            >avec un paramétrage de notifications</span
          >
        </div>

        <div
          class="block lg:flex w-full lg:mt-[100px] sm:mt-[40px] lg:justify-around text-center px-[5%] lg:px-[25%]"
        >
          <button
            id="show-modal"
            @click="openModal(true, 'subscribe')"
            class="rounded-full bg-white min-w-[250px] my-2 mx-2 lg:my-0 lg:mx-0 py-2 hover:bg-green-lime-ui hover:text-white transition duration-700 ease-in-out"
          >
            Inscription</button
          ><button
            @click="openModal(true, 'connexion')"
            class="rounded-full bg-white min-w-[250px] py-2 mx-2 lg:my-0 lg:mx-0 hover:bg-green-lime-ui hover:text-white transition duration-700 ease-in-out"
          >
            Connexion
          </button>
        </div>
        <!-- <HomeModalAuthentification :show="showModal" /> -->
        <Teleport to="body">
          <!-- use the modal component, pass in the prop -->
          <HomeModalAuthentification
            :show="showModal"
            :typeAuth="typeAuth"
            @close="showModal = false"
          >
            <template #header>
              <h3>custom header</h3>
            </template>
          </HomeModalAuthentification>
        </Teleport>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import type { Ref } from "vue";

  import type { TypeAuth } from "../../types/forms";

  export default defineComponent({
    setup() {
      const showModal: Ref<Boolean> = ref(false);
      const typeAuth: Ref<TypeAuth> = ref(null);
      const openModal = (show: any, type: any) => {
        showModal.value = show;
        typeAuth.value = type;
      };
      return { showModal, typeAuth, openModal };
    },
  });
</script>

<style scoped>
.custom-img {
  background-image: url("@/assets/Images/image-header-home.jpg");
}
</style>