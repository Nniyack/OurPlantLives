<template>
  <div
    :class="`flex flex-col lg-mb-40 ${
      direction === 'left'
        ? 'md:flex-row lg:flex-row'
        : 'md:flex-row-reverse lg:flex-row-reverse'
    }`"
  >
    <div class="">
      <img
        v-if="imageSrc?.src !== undefined"
        :src="imageSrc.src"
        :alt="imageSrc.alt"
        :class="`object-cover md:h-48 lg:h-72 lg:w-[280px] lg:rounded-tl-full ${
          direction === 'left' ? 'lg:rounded-l-full' : 'lg:rounded-r-full'
        }`"
      />
    </div>
    <div class="py-12 px-6 lg:max-w-2xl">
      <div class="text-2xl lg:text-4xl text-green-lime-ui font-bold">
        <slot name="title"></slot>
      </div>
      <div class="text-xl lg:text-2xl pt-4 pl-3 text-green-kelly-ui">
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
      direction: String,
    },
    setup(props) {
      const { imageSrc, direction } = props;
      return { imageSrc, direction };
    },
  });
</script>

<style scoped>
</style>