<template>
  <div>
    <label class="relative block text-slate-500">
      <span>{{ label }}</span>
      <input
        :type="type"
        :class="`pr-9 px-3 py-2 my-2 bg-white  placeholder-black-400 outline   ${
          error !== undefined
            ? 'outline-red-300'
            : 'outline-slate-300 active:outline-green-400 focus:outline-green-400 focus:outline-none focus:ring'
        } block rounded-md sm:text-sm w-full `"
        :value="modelValue"
        @input="inputField"
        @blur="onBlur"
      />
    </label>
    <span class="text-red-400">{{ error }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      error: String,
      modelValue: String,
      type: String,
      label: String,
    },
    setup(props: any, context: any) {
      const inputField = (e: any) =>
        context.emit("update:modelValue", e.target.value);
      const onBlur = (e: any) => {
        context.emit("blur", e.target.value);
      };
      return { inputField, onBlur };
    },
  });
</script>

<style scoped>
</style>