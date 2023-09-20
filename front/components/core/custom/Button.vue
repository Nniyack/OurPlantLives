<template>
  <button class="button">
    {{ label }}
  </button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      label: String,
    },
    setup(props: any) {
      return {};
    },
  });
</script>

<style lang=scss scoped>
$color: #0cf;
$green-design-1: theme("colors.green-design-1");
$red-salmon-design-1: theme("colors.red-salmon-design-1");
.button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $green-design-1;
    border-radius: 30rem;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: $red-salmon-design-1;
    transition: all 0.3s;
    border-radius: 30rem;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}
</style>