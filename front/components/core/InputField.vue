<template>
  <label class="relative block text-sm text-slate-500">
    <span>Prénom *</span>
    <input
      type="text"
      name="first"
      class="pr-9 px-3 py-2 mt-1 bg-white placeholder-black-400 outline outline-slate-300 hover:outline-green-300 block rounded-md sm:text-sm w-full"
      tabindex="1"
  /></label>
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