<template>
  <div class="content__btn text-white">
    <button class="button button--calypso">
      <span class="text">{{ label }}</span>
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from "vue";

  type Theme = "light" | "dark";
  export default defineComponent({
    props: {
      label: String,
      theme: String as PropType<Theme>,
    },
    setup(props: any) {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
$green-design-1: theme("colors.green-design-1");
$green-design-2: theme("colors.green-design-2");

.button {
  pointer-events: auto;
  cursor: pointer;
  background: $green-design-1;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--calypso {
  overflow: hidden;
  font-family: freight-display-pro, serif;
  font-size: 1.15rem;
}

.button--calypso span {
  display: block;
  position: relative;
  mix-blend-mode: difference;
  z-index: 10;
}

.button--calypso:hover span {
  animation: MoveScaleUpInitial 0.3s forwards, MoveScaleUpEnd 0.3s forwards 0.3s;
}

@keyframes MoveScaleUpInitial {
  to {
    transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
    opacity: 0;
  }
}

@keyframes MoveScaleUpEnd {
  from {
    transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.button--calypso::before {
  content: "";
  background: #000;
  width: 120%;
  height: 0;
  padding-bottom: 120%;
  top: -110%;
  left: -10%;
  border-radius: 50%;
  transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);
}

.button--calypso:hover::before {
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
}

.button--calypso::after {
  content: "";
  background: #000;
  transform: translate3d(0, -100%, 0);
  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
}

.button--calypso:hover::after {
  transform: translate3d(0, 0, 0);
  transition-duration: 0.05s;
  transition-delay: 0.4s;
  transition-timing-function: linear;
}
</style>