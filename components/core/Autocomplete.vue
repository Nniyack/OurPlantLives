<template>
  <div>
    <label class="block">
      <input
        type="email"
        name="email"
        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[300px] rounded-md sm:text-sm focus:ring-1"
        placeholder="Recherche ..."
        @input="inputField"
      />
    </label>
    <ul
      v-if="openListResultsSearch"
      class="list-none text-sm mt-2 border absolute z-2 drop-shadow-lg max-h-[300px] w-[300px] overflow-auto"
    >
      <li
        v-for="item in resultDataFiltered"
        :key="uuidv4()"
        class="p-3 cursor-pointer bg-white hover:bg-green-kelly-ui hover:text-white"
        @click="handleCLick(item)"
      >
        {{ item[label] }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import { v4 as uuidv4 } from "uuid";

  export default defineComponent({
    props: {
      dataField: { type: Array, required: true },
      label: { type: String, required: true },
    },
    setup(props: any, ctx: any) {
      const openListResultsSearch = ref(false);
      const resultDataFiltered = ref([]);

      const inputField = ($event: any) => {
        const dataFiltered = props.dataField.filter((item: any) => {
          const searchInItem = Object.keys(item).filter((keyItem: any) => {
            if (
              typeof item[keyItem] === "string" &&
              item[keyItem]
                .toLowerCase()
                .includes($event.target.value.toLowerCase())
            )
              return true;
            return false;
          });
          if (searchInItem.length > 0) return item[props.label];
          return false;
        });

        console.log(dataFiltered);
        resultDataFiltered.value = dataFiltered;
        openListResultsSearch.value = dataFiltered.length > 0;
      };

      const handleCLick = (objectItem: Object) => {
        openListResultsSearch.value = false;
        ctx.emit("return-object", objectItem);
      };

      return {
        inputField,
        resultDataFiltered,
        uuidv4,
        handleCLick,
        openListResultsSearch,
      };
    },
  });
</script>

<style scoped>
</style>