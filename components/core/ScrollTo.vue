<template>
  <nuxt-link
    ref="anchorScroll"
    :to="{ hash: hashTag }"
    @click="getScrollPosition"
    class="text-white bg-spearmint cursor-pointer animate-bounce absolute bottom-8 left-[50%] rounded-full p-3 shadow-lg shadow-spearmint"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
      />
    </svg>
  </nuxt-link>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    props: {
      hashTag: { type: String },
    },
    setup() {
      const anchorScroll = ref(null);
      const getScrollPosition = () => {
        console.log(document.body.scrollHeight);
      };

      return { anchorScroll, getScrollPosition };
    },
  });
</script>

<style scoped>
</style>