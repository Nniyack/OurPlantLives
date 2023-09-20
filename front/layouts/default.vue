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
      const route = useRoute();
      const testNode = h("div", [h("i", "hello")]);
      console.log(route.name);
      return { testNode, isIndex: route.name };
    },
  });
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
@keyframes slideInFromTop {
  0% {
    transform: translateY(-300%);
  }
  100% {
    transform: translateY(0);
  }
}
.header-animation {
  animation: 1s ease-out 0s 1 slideInFromTop;
}
</style>