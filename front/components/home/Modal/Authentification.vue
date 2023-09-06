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
          <Form
            @submit="onSubmit"
            :validation-schema="inscriptionSchema"
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
                  <div class="mt-5 grid grid-cols-1 gap-4 text-sm">
                    <div><CoreCustomInput v-bind="emailComponent" /></div>
                    <div>
                      <pre>values: {{ values }}</pre>
                    </div>
                    <div>
                      <label class="relative block text-slate-500">
                        <span>Prénom *</span>
                        <Field
                          type="text"
                          name="firstname"
                          class="pr-9 px-3 py-2 mt-2 bg-white placeholder-black-400 outline outline-slate-300 active:outline-green-300 focus:outline-none focus:ring focus:ring-green-300 block rounded-md sm:text-sm w-full"
                          tabindex="1"
                      /></label>
                      <div class="pt-2 text-xs text-red-400">
                        <ErrorMessage name="firstname" />
                      </div>
                    </div>
                    <div>
                      <label class="relative block text-slate-500">
                        <span>Nom *</span>
                        <Field
                          type="text"
                          name="lastname"
                          class="pr-9 px-3 py-2 mt-1 bg-white placeholder-black-400 outline outline-slate-300 block rounded-md sm:text-sm w-full"
                          tabindex="1"
                      /></label>
                      <div class="pt-2 text-xs text-red-400">
                        <ErrorMessage name="lastname" />
                      </div>
                    </div>

                    <div>
                      <label class="relative block text-slate-500">
                        <span>Email *</span>
                        <Field
                          type="email"
                          name="email"
                          class="pr-9 px-3 py-2 mt-1 bg-white placeholder-black-400 outline outline-slate-300 block rounded-md sm:text-sm w-full"
                          tabindex="1"
                      /></label>
                      <div class="pt-2 text-xs text-red-400">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div>
                      <label class="relative block text-slate-500">
                        <span>Password *</span>
                        <Field
                          type="password"
                          name="password"
                          class="pr-9 px-3 py-2 mt-1 bg-white placeholder-black-400 outline outline-slate-300 block rounded-md sm:text-sm w-full"
                          tabindex="1"
                      /></label>
                      <div class="pt-2 text-xs text-red-400">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
              >
                S'inscrire
              </button>
              <button
                @click="$emit('close')"
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Form, Field, ErrorMessage, useForm } from "vee-validate";
  import { UserCircleIcon } from "@heroicons/vue/24/outline";
  import * as yup from "yup";

  export default defineComponent({
    components: {
      UserCircleIcon,
      Form,
      Field,
      ErrorMessage,
    },
    props: {
      show: Boolean,
    },
    setup(props: any) {
      const { values, errors, defineInputBinds, defineComponentBinds } = useForm({
        validationSchema: yup.object({
          email: yup.string().email().required(),
          emailComponent: yup.string().email().required(),
        }),
      });
      const emailComponent = defineComponentBinds("emailComponent", (state) => {
        return {
          // validate aggressively as long as there are errors on the input
          validateOnModelUpdate: state.errors.length > 0,
          validateOnBlur: true,
          props: {
            error: state.errors[0],
          },
        };
      });

      // const inscriptionSchema = yup.object({
      //   email: yup.string().required("Champ requis").email("Email invalide"),
      //   firstname: yup.string().required("Champ requis"),
      //   lastname: yup.string().required("Champ requis"),
      //   password: yup
      //     .string()
      //     .required("Champ requis")
      //     .test({
      //       name: "is-psw",
      //       skipAbsent: true,
      //       test(value, ctx) {
      //         const format = /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      //         const specialCaractFormat =
      //           /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      //         const capitalLetterFormat = /[A-Z]/;
      //         if (value.length < 8) {
      //           return ctx.createError({
      //             message: "Doit contenir au minimum 8 caractères",
      //           });
      //         }
      //         if (!value.match(format)) {
      //           return ctx.createError({
      //             message:
      //               "Merci d'utiliser au minimum un caractère spécial et une majuscule.",
      //           });
      //         }
      //         if (!value.match(specialCaractFormat)) {
      //           return ctx.createError({
      //             message: "Merci d'utiliser au minimum un caractère spécial.",
      //           });
      //         }
      //         if (!value.match(capitalLetterFormat)) {
      //           return ctx.createError({
      //             message: "Merci d'utiliser au minimum une majuscule.",
      //           });
      //         }

      //         return true;
      //       },
      //     }),
      // });
      const onSubmit = () => {
        console.log("ok");
      };
      return {
        props,
        onSubmit /*inscriptionSchema, email */,
        emailComponent,
        values,
      };
    },
  });
</script>

<style scoped>
</style>