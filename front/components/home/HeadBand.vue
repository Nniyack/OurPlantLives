<template>
  <section ref="headBand" class="h-screen w-screen min-w-full min-h-full">
    <div class="container-full">
      <div
        class="font-bold left-[6%] sm:top-0 lg:pt-[200px] flex flex-col w-full delay-200"
      >
        <div
          class="px-7 pb-4 lg:pb-0 lg:mt-0 lg:px-0 lg:pl-[100px] flex flex-col z-10 text-green-design-1 title-text"
        >
          <span
            class="text-lg sm:text-2xl lg:text-6xl lg:pb-[20px] title-text-1"
            >Prenez SOIN de vos plantes</span
          >
          <span
            class="text-lg sm:text-2xl lg:text-6xl lg:pl-20 pb-5 title-text-2"
            >avec OurPlantsLives</span
          >
        </div>

        <div
          class="w-full lg:flex lg:mt-[100px] sm:mt-[40px] lg:justify-evenly text-center px-[5%] lg:px-[25%] bloc-btn"
        >
          <CoreCustomButton
            @click="openModal(true, 'subscribe')"
            label="Inscription"
          />
          <CoreCustomButton
            @click="openModal(true, 'connexion')"
            label="Connexion"
          />
        </div>
        <div v-if="targetIsVisible">
          <NuxtImg
            src="../../assets/animate/plant-1.png"
            class="absolute bottom-0 right-0"
            preload
            format="png"
            height="400"
            width="400"
            @load="doSomethingOnLoad"
          />
          <NuxtImg
            src="../../assets/animate/plant-2.png"
            class="absolute top-0 left-[300px] z-10"
            height="60"
            width="60"
            preload
            format="png"
          />
          <NuxtImg
            src="../../assets/animate/plant-3.png"
            class="absolute bottom-0 left-0"
            height="400"
            width="400"
            preload
            format="png"
          />
        </div>
        <div>
          <!-- <NuxtImg
            src="../../assets/animate/plant-1.png"
            class="absolute bottom-0 right-0"
            preload
            format="png"
            height="400"
            width="400"
          /> -->
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
  import { defineComponent, ref, watch } from "vue";
  import type { Ref } from "vue";
  import { useElementVisibility } from "@vueuse/core";

  import type { TypeAuth } from "../../types/forms";

  export default defineComponent({
    setup() {
      const headBand = ref(null);
      const showModal: Ref<Boolean> = ref(false);
      const typeAuth: Ref<TypeAuth> = ref(null);
      const targetIsVisible = useElementVisibility(headBand);
      // watch(targetIsVisible, () => {
      //   console.log("ok");
      // });
      const openModal = (show: any, type: any) => {
        showModal.value = show;
        typeAuth.value = type;
      };
      const doSomethingOnLoad = (event: any) => {
        console.log(event);
      };
      return {
        showModal,
        typeAuth,
        openModal,
        headBand,
        targetIsVisible,
        doSomethingOnLoad,
      };
    },
  });
</script>

<style lang=scss scoped>
$animation-text: 1s ease-out 0s 1;
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromBottom {
  0% {
    transform: translateY(300%);
  }
  100% {
    transform: translateY(0);
  }
}
.title-text-1 {
  animation: 1s ease-out 0s 1 slideInFromLeft;
}
.title-text-2 {
  animation: 1.3s ease-out 0s 1 slideInFromLeft;
}
.bloc-btn {
  animation: 1.3s ease-out 0s 1 slideInFromBottom;
}
</style>