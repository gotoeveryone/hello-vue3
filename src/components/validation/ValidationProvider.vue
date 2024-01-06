<script setup lang="ts">
import { Field, RuleExpression } from "vee-validate";
import { PropType } from "vue";

defineProps({
  rules: {
    type: [Object, String, Function] as PropType<RuleExpression<unknown>>,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  vid: {
    type: String,
    default: ""
  },
  as: {
    type: String,
    default: "div"
  }
});
</script>

<template>
  <Field
    v-slot="{ errors, value, handleChange }"
    :as="as"
    :name="vid || name"
    :rules="rules"
    :label="name"
  >
    <slot :errors="errors" :value="value" :handleChange="handleChange" />
  </Field>
</template>
