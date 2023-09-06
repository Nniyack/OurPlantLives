<template>
  <div>
    <input :value="modelValue" @input="inputField" @blur="$emit('blur')" />
    <span>{{ error }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      error: String,
      modelValue: String,
    },
    setup(props: any, context: any) {
      const inputField = (e: any) =>
        context.emit("update:modelValue", e.target.value);
      return { inputField };
    },
  });
</script>

<style scoped>
</style>