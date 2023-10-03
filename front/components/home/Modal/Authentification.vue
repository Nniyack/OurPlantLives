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
      class="relative z-20"
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
                  <div class="flex justify-items-center justify-around my-5">
                    <div
                      @click="handleCLick('connexion')"
                      :class="`${
                        selectType.connexion
                          ? 'border-b-2 border-green-300'
                          : 'text-slate-700 hover:text-black'
                      } cursor-pointer m-4 select-none`"
                    >
                      Se connecter
                    </div>
                    <div
                      @click="handleCLick('subscribe')"
                      :class="`${
                        selectType.subscribe
                          ? 'border-b-2 border-green-300'
                          : 'text-slate-700 hover:text-black'
                      } cursor-pointer m-4 select-none`"
                    >
                      Créer un compte
                    </div>
                  </div>
                  <hr />
                  <div
                    v-if="color !== null"
                    :class="`flex bg-${newColor}-200 p-5 mt-4 rounded-md border-2 border border-${newColor}-400`"
                  >
                    <ExclamationTriangleIcon
                      v-if="color === 'red'"
                      class="h-6 w-6 text-red-800 mx-3"
                    />
                    <CheckCircleIcon
                      v-if="color === 'green'"
                      class="h-6 w-6 text-green-8 mx-3"
                    />
                    <span class="text-slate-700 text-sm pt-1">{{
                      message
                    }}</span>
                  </div>
                  <div class="mt-5 grid grid-cols-1 gap-4 text-sm">
                    <div>
                      <CoreDynamicForm
                        :schema="schemaType()"
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
                              {{ selectType.validBtnLabel }}
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
  import { userStore } from "../../../stores/authentification";
  import {
    UserCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
  } from "@heroicons/vue/24/outline";
  import {
    subscribeFormSchema,
    connexionFormSchema,
  } from "../../schema/form/authentification";
  import type { Ref } from "vue";

  interface TypeAuthFct {
    connexion: Boolean;
    subscribe: Boolean;
    validBtnLabel: String;
    type(name: String): void;
  }
  type Color = "green" | "red" | null;

  export default defineComponent({
    components: {
      UserCircleIcon,
      ExclamationTriangleIcon,
      CheckCircleIcon,
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
      const color: Ref<Color> = ref(null);
      const message: Ref<String | null> = ref(null);
      const newColor = computed(() => {
        return color.value;
      });

      let selectType: TypeAuthFct = reactive({
        connexion: false,
        subscribe: false,
        validBtnLabel: "",
        type: function (this: any, name: string): void {
          const isConnexion = name === "connexion";
          const isSubscribe = name === "subscribe";
          this.connexion = isConnexion;
          this.subscribe = isSubscribe;
          this.validBtnLabel =
            (isSubscribe && "S'inscrire") || (isConnexion && "Connexion");
        },
      });
      const store = userStore();

      watch(props, () => {
        selectType.type(props.typeAuth);
      });

      const schemaType = (): FieldsArrayForm | Object => {
        const { connexion, subscribe } = selectType;
        if (connexion) return connexionFormSchema;
        if (subscribe) return subscribeFormSchema;
        return {};
      };

      const handleCLick = (name: string) => {
        color.value = null;
        selectType.type(name);
      };

      const handleSubmit = () => {
        isSubmit.value = true;
      };

      const formValidate = async (values: any) => {
        try {
          if (selectType.subscribe)
            store.registerUser(values).then((res: [boolean, string]) => {
              color.value = res[0] ? "red" : "green";
              message.value = res[1];
            });
          if (selectType.connexion)
            await store
              .signInUser(values.email, values.password)
              .catch((res: [boolean, string]) => {
                color.value = res[0] ? "red" : "green";
                message.value = res[1];
              });
        } catch (error: any) {
          // alert.params(true, error.message);
        }
      };

      return {
        props,
        handleSubmit,
        isSubmit,
        subscribeFormSchema,
        connexionFormSchema,
        formValidate,
        handleCLick,
        selectType,
        schemaType,
        message,
        color,
        newColor,
      };
    },
  });
</script>

<style scoped>
</style>