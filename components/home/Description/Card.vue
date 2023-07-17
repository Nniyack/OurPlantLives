<template>
  <div class="flex flex-row">
    <div>
      <img :src="imageSrc" alt="" class="src" />
    </div>
    <div>
      <slot name="title"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      imageSrc: { type: String },
    },
    setup() {
      return {};
    },
  });
</script>

<style scoped>
</style>