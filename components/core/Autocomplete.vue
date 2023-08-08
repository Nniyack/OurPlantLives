<template>
  <div ref="autocompleteField">
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
        class="mt-1 pr-9 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[300px] rounded-md sm:text-sm focus:ring-1"
        placeholder="Recherche ..."
        :value="fieldValue"
        @input="inputField"
        tabindex="1"
      />
    </label>
    <!-- <select
      v-if="openListResultsSearch"
      :size="resultDataFiltered.length > 6 ? 6 : resultDataFiltered.length"
      class="absolute z-10 drop-shadow-lg max-h-[300px] w-[300px] mt-1"
    >
      <option v-if="resultDataFiltered.length === 0" class="p-1" value="">
        t
      </option>
      <option
        v-for="item in resultDataFiltered"
        class="p-4 hover:bg-green-kelly-ui cursor-pointer"
        :key="uuidv4()"
        @click="handleCLick(item)"
      >
        {{ item[label] }}
      </option>
    </select> -->

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
      dataField: { type: Array, required: true },
      keyLabelShowed: { type: String, required: true },
    },
    components: {
      XMarkIcon,
    },
    setup(props: any, context: any) {
      const { name: nameProps } = props;
      const autocompleteField = ref(null);
      const openListResultsSearch = ref(false);
      const resultDataFiltered = ref([]);
      const fieldValue = ref(null);

      const inputField = ($event: any) => {
        if ($event.target.value === "") removeValueField();

        fieldValue.value = $event.target.value;

        const dataFiltered = props.dataField.filter((item: any) => {
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

        resultDataFiltered.value = dataFiltered;
        context.emit("returnLiveObject", dataFiltered);

        openListResultsSearch.value = dataFiltered.length > 0;
      };

      const handleCLick = (objectItem: any) => {
        openListResultsSearch.value = false;
        fieldValue.value = objectItem[props.label];
        context.emit("returnObject", objectItem.id);
      };

      const removeValueField = () => {
        fieldValue.value = null;
        resultDataFiltered.value = [];
        openListResultsSearch.value = false;
        context.emit("returnObject", null);
      };

      const outsideClick = () => {
        openListResultsSearch.value = false;
      };

      return {
        props,
        nameProps,
        inputField,
        resultDataFiltered,
        uuidv4,
        handleCLick,
        openListResultsSearch,
        fieldValue,
        removeValueField,
        outsideClick,
        autocompleteField,
      };
    },
  });
</script>

<style scoped>
</style>