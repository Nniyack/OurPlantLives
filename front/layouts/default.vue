<template>
  <div>
    <HeaderNavBar />
    <Alert type="error" :htmlText="testNode" />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
  import { defineComponent, h } from "vue";

  export default defineComponent({
    setup() {
      const testNode = h("div", [h("i", "hello")]);
      return { testNode };
    },
  });
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
</style>