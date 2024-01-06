<script setup lang="ts">
import { Form } from "vee-validate";
import { ref } from "vue";

defineProps({
  tag: {
    type: String,
    default: "div"
  }
});

const form = ref<typeof Form | null>(null);

const reset = () => form.value!.reset();

const validate = () => form.value!.validate();

defineExpose({
  reset,
  validate
});
</script>

<template>
  <Form v-slot="{ handleSubmit, meta }" ref="form" :as="tag">
    <slot :handleSubmit="handleSubmit" :valid="meta.valid" />
  </Form>
</template>
