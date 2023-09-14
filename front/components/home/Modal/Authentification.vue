<template>
  <Transition
    name="modal"
    enter-active-class=" transition  ease-out duration-300 duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition  ease-in duration-200 duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="flex">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10 mb-2"
                >
                  <UserCircleIcon class="h-6 w-6 text-green-700" />
                </div>
                <div
                  class="my-3 mr-10 text-center sm:ml-4 sm:mt-0 sm:text-left grow"
                >
                  <h2
                    class="text-base font-semibold leading-6 text-gray-900 text-xl mt-2"
                    id="modal-title"
                  >
                    <b>Bienvenue !</b>
                  </h2>
                  <div class="flex justify-items-center justify-around my-10">
                    <div
                      @click="handleCLick('connexion')"
                      :class="`${
                        typeAuthChanged === 'connexion'
                          ? 'border-b-2 border-green-300'
                          : 'text-slate-700 hover:text-black'
                      } cursor-pointer m-4 select-none`"
                    >
                      {{ typeAuthChanged }}
                      Se connecter
                    </div>
                    <div
                      @click="handleCLick('subscribe')"
                      :class="`${
                        typeAuthChanged === 'subscribe'
                          ? 'border-b-2 border-green-300'
                          : 'text-slate-700 hover:text-black'
                      } cursor-pointer m-4 select-none`"
                    >
                      {{ typeAuthChanged }}
                      Créer un compte
                    </div>
                  </div>
                  <div class="mt-5 grid grid-cols-1 gap-4 text-sm">
                    <div>
                      <CoreDynamicForm
                        :schema="authFormSchema"
                        @validate="formValidate"
                      >
                        <template v-slot:buttons="errors">
                          <div
                            class="text-right text-xs text-red-400 py-2 pr-6"
                            v-if="
                              Object.keys(errors.buttons).length > 0 && isSubmit
                            "
                          >
                            Champs requis *
                          </div>
                          <div
                            class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                          >
                            <button
                              @click="handleSubmit"
                              class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto disabled:bg-grey-500"
                            >
                              {{ labelBtnTypeAuth }}
                            </button>
                            <button
                              @click="$emit('close')"
                              type="button"
                              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                              Cancel
                            </button>
                          </div>
                        </template>
                      </CoreDynamicForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
  import { defineComponent, ref, PropType, watch, computed, reactive } from "vue";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import { UserCircleIcon } from "@heroicons/vue/24/outline";
  import { authFormSchema } from "../../schema/form/authentification";
  import type { Ref } from "vue";

  export default defineComponent({
    components: {
      UserCircleIcon,
      Form,
      Field,
      ErrorMessage,
    },
    props: {
      show: Boolean as PropType<Boolean>,
      typeAuth: String as PropType<TypeAuth>,
    },
    setup(props: any, context: any) {
      const isSubmit: Ref<Boolean> = ref(false);
      const labelBtnTypeAuth: Ref<String | null> = ref(null);
      let typeAuthChanged = reactive(props.typeAuth || {});
      let classBtnSelectType = reactive({});
      const { registerUser }: any = useFirebaseAuth();

      const labelBtn = (name: string) => {
        if (name === "connexion") labelBtnTypeAuth.value = "Connexion";
        if (name === "subscribe") labelBtnTypeAuth.value = "S'inscrire";
      };
      const test = {
        type(name: string): any {
          return ["subscribe", "connexion"].includes(name)
            ? "border-b-2 border-green-300"
            : "text-slate-700 hover:text-black";
        },
      };
      watch(props, () => {
        console.log(typeAuthChanged);
        labelBtn(props.typeAuth);
      });

      const handleCLick = (name: string) => {
        typeAuthChanged = name;
        labelBtn(name);
        console.log(typeAuthChanged);
      };

      const handleSubmit = () => {
        isSubmit.value = true;
      };

      const formValidate = async (values: any) => {
        console.log(values);
        await registerUser(values.email, values.password);
      };

      return {
        props,
        handleSubmit,
        isSubmit,
        authFormSchema,
        formValidate,
        labelBtnTypeAuth,
        handleCLick,
        typeAuthChanged,
        classBtnSelectType,
      };
    },
  });
</script>

<style scoped>
</style>