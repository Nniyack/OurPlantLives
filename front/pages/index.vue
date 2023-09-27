<template>
  <div class="w-full index-content">
    <div class="line-container">
      <svg
        v-show="showSvg"
        viewBox="0 0 2481 3508"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          ref="pathSvg"
          d="M1265.66,-10.253L1265.66,797C1265.66,797 1093.66,833.152 1094.91,967.756C1096.16,1102.36 1148.09,1133.62 1260.33,1133.17C1372.57,1132.73 1260.33,1777.24 1260.33,1777.24L1260.33,2464.43C1260.33,2464.43 1438.6,2489.23 1438.6,2642.71C1438.6,2796.19 1412.99,2829.79 1360.08,2833.72C1307.17,2837.65 1270.19,2836.06 1270.19,2836.06L1270.19,3372.65"
          style="fill: none; stroke: black; stroke-width: 8.33px"
        />
      </svg>
    </div>

    <HomeHeadBand />
    <HomeDescription />
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from "vue";

  export default defineComponent({
    setup() {
      const showSvg: Ref<Boolean> = ref(false);
      const pathSvg: Ref<any> = ref();
      onMounted(() => {
        console.log(pathSvg);
        showSvg.value = true;
        if (pathSvg !== null) {
          var pathLength = pathSvg.value.getTotalLength();
          console.log(typeof pathLength);
          pathSvg.value.style.strokeDasharray = pathLength + "  " + pathLength;
          pathSvg.value.style.strokeDashoffset = String(pathLength);
        }
        window.addEventListener("scroll", () => {
          var scrollPercentage =
            (document.documentElement.scrollTop +
              Number(document.body.scrollTop)) /
            (document.documentElement.scrollHeight +
              document.documentElement.clientHeight);

          var drawLength = pathLength * scrollPercentage;

          if (pathSvg !== null) {
            pathSvg.value.style.strokeDashoffset = String(
              pathLength - drawLength
            );
          }
        });
      });

      return { pathSvg, showSvg };
    },
  });
</script>

<style scoped>
.index-content {
  height: 500vh;
  margin: 0;
}
.line-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
}
svg {
  display: inline-block;
  height: 100%;
}
</style>