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
      const route = useRoute();
      const store = userStore();
      console.log(route.name);
      onBeforeMount(() => {
        store.fetchUser();
      });
      return {};
    },
  });
</script>

<style scoped>
</style>

