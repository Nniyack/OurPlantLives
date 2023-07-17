<template>
  <div id="description" class="h-screen">
    <HomeDescriptionCard imageSrc="">
      <template v-slot:title> title </template>
      <template v-slot:text> text </template>
    </HomeDescriptionCard>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<style scoped>
</style>