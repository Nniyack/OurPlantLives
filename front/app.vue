<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount } from "vue";
  import { userStore } from "./stores/authentification";

  export default defineComponent({
    setup() {
      const router = useRouter();
      // const route = useRoute();
      // const Store = userStore();

      // console.log(route.name);
      // onBeforeMount(() => {});
      // return {};
    },
  });
</script>

<style scoped>
</style>

