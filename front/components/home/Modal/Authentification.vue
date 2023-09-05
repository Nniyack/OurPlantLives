<template>
  <div v-if="props.show">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, watch } from "vue";

  export default defineComponent({
    props: {
      show: Boolean,
    },
    setup(props: any) {
      const { show } = props;
      console.log(props);
      watch(props, () => {
        console.log(show);
      });
      return { props };
    },
  });
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>