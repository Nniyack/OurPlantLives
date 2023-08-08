<template>
  <div ref="autocompleteField" class="w-full">
    <!-- <label class="relative block">
      <span
        v-if="![null, ''].includes(fieldValue)"
        class="absolute inset-y-0 right-2 flex items-center pl-2"
      >
        <XMarkIcon
          class="h-5 w-5 cursor-pointer remove-icon"
          @click="removeValueField"
        />
      </span>
      <input
        type="text"
        :name="nameProps"
        class="mt-1 pr-9 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[300px] rounded-md sm:text-sm focus:ring-1"
        placeholder="Recherche ..."
        :value="fieldValue"
        @input="inputField"
        tabindex="1"
      />
    </label> -->
    <div
      class="bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1"
    >
      <label class="relative block">
        <span
          v-if="![null, ''].includes(fieldValue)"
          class="absolute inset-y-0 right-2 flex items-center pl-2"
        >
          <XMarkIcon
            class="h-5 w-5 cursor-pointer remove-icon"
            @click="removeValueField"
          />
        </span>
        <input
          type="text"
          :name="nameProps"
          class="pr-9 px-3 py-2 bg-white placeholder-slate-400 focus:outline-none block w-[300px] rounded-md sm:text-sm w-full"
          placeholder="Recherche ..."
          :value="searchedValue"
          @input="inputField"
          tabindex="1"
        />
      </label>
      <div class="px-3 sm:text-sm flex flex-wrap">
        <div
          class="flex items-center p-1 rounded-md border border-slate-300 w-fit m-1"
          v-for="item in fieldValue"
          :key="uuidv4()"
        >
          {{ item[keyLabelShowed] }}
          <XMarkIcon
            class="h-4 w-4 ml-1 cursor-pointer remove-icon text-spearmint"
            @click="removePills(item.id)"
          />
        </div>
      </div>
    </div>
    <div v-on:focusout="outsideClick">
      <ul
        v-if="openListResultsSearch"
        class="list-none text-sm mt-2 border absolute z-10 drop-shadow-lg max-h-[300px] w-[300px] overflow-auto field-search-content"
      >
        <li
          v-for="item in resultDataFiltered"
          :key="uuidv4()"
          class="p-3 cursor-pointer bg-white hover:bg-green-kelly-ui hover:text-white li-list"
          @click="handleCLick(item)"
        >
          {{ item[keyLabelShowed] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { v4 as uuidv4 } from "uuid";
  import { XMarkIcon } from "@heroicons/vue/24/outline";

  export default defineComponent({
    props: {
      name: { type: String, required: true },
      dataLoad: { type: Array, required: true },
      keyLabelShowed: { type: String, required: true },
      multiple: Boolean,
    },
    components: {
      XMarkIcon,
    },
    setup(props: any, context: any) {
      const { name: nameProps, multiple: multipleSelect } = props;
      const autocompleteField = ref(null);
      const openListResultsSearch = ref(false);
      const loadedData = ref(props.dataLoad);
      const resultDataFiltered = ref([]);
      const fieldValue: any = ref([]);
      const searchedValue: any = ref(null);

      const inputField = ($event: any) => {
        if ($event.target.value === "") removeValueField();

        searchedValue.value = $event.target.value;

        const dataFiltered = loadedData.value.filter((item: any) => {
          const searchInItem = Object.keys(item).filter((keyItem: any) => {
            if (
              typeof item[keyItem] === "string" &&
              item[keyItem]
                .toLowerCase()
                .includes($event.target.value.toLowerCase()) &&
              keyItem !== "id"
            )
              return true;
            return false;
          });
          if (searchInItem.length > 0) return item[props.keyLabelShowed];
          return false;
        });
        console.log(dataFiltered);
        resultDataFiltered.value = dataFiltered;
        context.emit("returnLiveObject", dataFiltered);

        openListResultsSearch.value = dataFiltered.length > 0;
      };

      const handleCLick = (objectItem: any) => {
        searchedValue.value = null;
        openListResultsSearch.value = false;
        fieldValue.value.push(objectItem);
        loadedData.value = loadedData.value.filter(
          (item: any) => item.id !== objectItem.id
        );
        console.log(resultDataFiltered.value);
        context.emit("returnObject", objectItem.id);
      };

      const removeValueField = () => {
        fieldValue.value = [];
        resultDataFiltered.value = [];
        searchedValue.value = null;
        openListResultsSearch.value = false;
        context.emit("returnObject", null);
      };

      const removePills = (id: Number) => {
        fieldValue.value = fieldValue.value.filter((pill: any) => pill.id !== id);
        const removedPill = props.dataLoad.find((item: any) => item.id === id);
        loadedData.value.push(removedPill);
      };

      const outsideClick = () => {
        openListResultsSearch.value = false;
      };

      return {
        props,
        nameProps,
        inputField,
        searchedValue,
        resultDataFiltered,
        uuidv4,
        handleCLick,
        openListResultsSearch,
        fieldValue,
        removeValueField,
        outsideClick,
        autocompleteField,
        removePills,
      };
    },
  });
</script>

<style scoped>
</style>