<template>
  <div
    :class="`flex mb-40 ${
      direction === 'left' ? 'flex-row' : 'flex-row-reverse'
    }`"
  >
    <div class="">
      <img
        v-if="imageSrc?.src !== undefined"
        :src="imageSrc.src"
        :alt="imageSrc.alt"
        :class="`object-cover h-72 w-[280px] rounded-tl-full ${
          direction === 'left' ? 'rounded-l-full' : 'rounded-r-full'
        }`"
      />
    </div>
    <div class="py-12 px-6 max-w-2xl">
      <div class="text-4xl text-green-lime-ui font-bold">
        <slot name="title"></slot>
      </div>
      <div class="text-2xl pt-4 pl-3 text-green-kelly-ui">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import type { PropType } from "vue";

  interface ImageSrc {
    src?: string;
    alt?: string;
  }

  export default defineComponent({
    props: {
      imageSrc: Object as PropType<ImageSrc>,
      direction: { type: String },
    },
    setup(props) {
      const { imageSrc, direction } = props;
      console.log(imageSrc);
      return { imageSrc, direction };
    },
  });
</script>

<style scoped>
</style>