<template>
  <div class="h-screen container mx-auto py-20">
    <div class="flex justify-between mb-6">
      <label class="block">
        <input
          type="email"
          name="email"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Recherche ..."
        />
      </label>
      <label class="block"
        ><select
          name="filter"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        >
          <option name="3">3</option>
        </select></label
      >
    </div>
    <section class="max-w-7xl mx-auto px-4 py-10">
      <div
        class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <MyplantsCard :createPlant="true" />
        <MyplantsCard :createPlant="false" />
      </div>
    </section>
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