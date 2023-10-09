<template>
  <div class="index-container">
    <div class="index-content flex flex-row">
      <HomeHeadBand class="h-screen w-screen" />
      <HomeDescription class="h-screen w-screen" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from "vue";

  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<style scoped>
.index-container {
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-x: hidden;
  /* IE and Mozilla */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.index-content {
  width: 200vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
}
::-webkit-scrollbar {
  display: none;
}
</style>