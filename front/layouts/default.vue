<template>
  <div>
    <HeaderNavBar />
    <slot />
    <Footer />
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

<style lang="scss">
@import "@/assets/scss/global.scss";
</style>