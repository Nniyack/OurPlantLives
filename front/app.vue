<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
  import { defineComponent, watch } from "vue";

  export default defineComponent({
    setup() {
      const route = useRoute();
      console.log(route.name);

      return {};
    },
  });
</script>

<style scoped>
</style>

