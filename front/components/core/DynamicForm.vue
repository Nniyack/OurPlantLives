<template>
  <Form>
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <label class="relative block text-slate-500" :for="name">{{
        label
      }}</label>
      <Field
        class="pr-9 px-3 py-2 my-2 bg-white placeholder-black-400 outline outline-slate-300 active:outline-green-400 focus:outline-green-400 focus:outline-none focus:ring block rounded-md sm:text-sm w-full"
        :as="as"
        :id="name"
        :name="name"
        v-bind="attrs"
      >
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage class="text-red-400" :name="name" />
    </div>
    <button>Submit</button>
  </Form>
</template>

<script lang="ts">
  import { defineComponent, watch } from "vue";
  import { Form, Field, ErrorMessage } from "vee-validate";
  export default defineComponent({
    name: "DynamicForm",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    props: {
      schema: {
        type: Object,
        required: true,
      },
    },
    setup() {
      return {};
    },
  });
</script>

<style scoped>
</style>