<template>
  <div
    :class="`${color} border-t-4 rounded-b text-teal-900 px-4 py-3 shadow-md absolute mt-5`"
    role="alert"
  >
    <div class="flex">
      <div class="py-1 mr-4">
        <ExclamationTriangleIcon v-if="type === 'error'" class="h-6 w-6 mt-2" />
        <CheckCircleIcon v-if="type === 'validate'" class="h-6 w-6 mt-2" />
      </div>
      <component :is="text" class="py-3" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, VNodeRef } from "vue";
  import {
    ExclamationTriangleIcon,
    CheckCircleIcon,
  } from "@heroicons/vue/24/outline";
  export default defineComponent({
    components: {
      ExclamationTriangleIcon,
      CheckCircleIcon,
    },
    props: {
      type: String as PropType<TypeAlert>,
      text: Object,
    },
    setup(props: any) {
      const color = computed(() => {
        switch (props.type) {
          case "error":
            return "bg-red-100 border-red-500";
          case "validate":
            return "bg-teal-100 border-teal-500";
          case "message":
            return "bg-blue-100 border-blue-500";
          default:
            break;
        }
      });
      // const test100 = (min, max) => {
      //   var cal = 0;
      //   for (let i = min; i <= max; i++) {
      //     cal =
      //       cal +
      //       String(i)
      //         .split("")
      //         .map(Number)
      //         .filter((num) => num === 1).length;
      //   }
      //   return cal;
      // };
      // console.log(test100(1, 60) * 23 + test100(1, 23) + test100(1, 15));

      return { color };
    },
  });
</script>

<style scoped>
</style>