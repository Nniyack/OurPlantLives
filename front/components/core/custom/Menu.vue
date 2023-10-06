<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 translate-x-1"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-1"
  >
    <div v-if="showElem" :ref="name">
      <slot :onClick="onClick" name="button"></slot>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <slot v-if="isShowAvatarMenu" name="panel"></slot>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
  import { defineComponent, ref, Ref, PropType, computed } from "vue";

  import { onClickOutside } from "@vueuse/core";

  export default defineComponent({
    props: {
      name: { type: String, required: true },
      show: Boolean as PropType<Boolean | undefined>,
    },
    setup(props: any) {
      const isShowAvatarMenu: Ref<boolean> = ref(false);
      const refs = {
        [props.name]: ref(null),
      };
      const onClick = (): void => {
        console.log(isShowAvatarMenu.value);
        isShowAvatarMenu.value = !isShowAvatarMenu.value;
      };
      const showElem = computed((): any => {
        return props.show;
      });

      onClickOutside(refs[props.name], () => (isShowAvatarMenu.value = false));

      return { isShowAvatarMenu, onClick, showElem, ...refs };
    },
  });
</script>

<style scoped>
</style>